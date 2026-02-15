import { useEffect, useState } from 'react'
import './NextMatch.css'

type Match = {
  competition: string
  opponent: string
  format: 'BO1' | 'BO3' | 'BO5'
  start: string
  twitch?: string
}

type EnrichedMatch = Match & {
  startTime: number
  endTime: number
}

const FORMAT_DURATION_HOURS: Record<Match['format'], number> = {
  BO1: 1.5,
  BO3: 3,
  BO5: 5
}

const teamLogoUrl = new URL('../assets/logos/FNATIC DE TEMU.jpg', import.meta.url).href

function formatCountdown(ms: number) {
  const totalSeconds = Math.floor(ms / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days,
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  }
}

function formatMatchDate(startTime: number) {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(startTime))
}

export default function NextMatch() {
  const [match, setMatch] = useState<EnrichedMatch | null>(null)
  const [status, setStatus] = useState<'upcoming' | 'live' | 'empty' | null>(null)
  const [countdown, setCountdown] = useState<ReturnType<typeof formatCountdown> | null>(null)

  useEffect(() => {
    fetch('/data/matches.json')
      .then((res) => res.json())
      .then((matches: Match[]) => {
        const now = Date.now()

        const enriched: EnrichedMatch[] = matches.map((m) => {
          const start = new Date(m.start).getTime()
          const duration = FORMAT_DURATION_HOURS[m.format] * 60 * 60 * 1000

          return {
            ...m,
            startTime: start,
            endTime: start + duration
          }
        })

        const live = enriched.find(
          (m) => now >= m.startTime && now <= m.endTime
        )

        if (live) {
          setMatch(live)
          setStatus('live')
          return
        }

        const upcoming = enriched
          .filter((m) => m.startTime > now)
          .sort((a, b) => a.startTime - b.startTime)[0]

        if (upcoming) {
          setMatch(upcoming)
          setStatus('upcoming')
        } else {
          setStatus('empty')
        }
      })
      .catch(() => null)
  }, [])

  useEffect(() => {
    if (!match || status !== 'upcoming') return

    const tick = () => {
      const diff = match.startTime - Date.now()

      if (diff <= 0) {
        setStatus('live')
        return
      }

      setCountdown(formatCountdown(diff))
    }

    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [match, status])

  // If we're still loading data, we can return null or a loader.
  // Using null to avoid layout shift before we know the state.
  if (status === null && !match) return null

  // If status is 'upcoming' but no match found (or empty list), show fallback
  if (!match) {
    return (
      <section className="nextMatch" aria-label="Próximo partido">
        <div className="nextMatch__layout nextMatch__layout--fallback">
          <svg
            className="nextMatch__fallbackIcon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <p className="nextMatch__fallback">
            Sin partidos próximamente. <br />
            <a href="#footer" className="nextMatch__link">
              Síguenos en nuestras redes
            </a>{' '}
            y no te pierdas nada.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="nextMatch" aria-label="Próximo partido">
      <div className="nextMatch__layout">
        <div className="nextMatch__info">
          <p className="nextMatch__eyebrow">
            {status === 'live' ? 'En directo ahora' : 'Próximo partido'}
          </p>
          {/* ... existing content ... */}

          <h3 className="nextMatch__title">{match.competition}</h3>

          <div className="nextMatch__opponent">
            <img
              className="nextMatch__logo"
              src={teamLogoUrl}
              alt="Logo del equipo"
              width={40}
              height={40}
            />
            <span>
              vs {match.opponent} · {match.format}
            </span>
          </div>
        </div>

        <div className="nextMatch__timer">
          {status === 'upcoming' && countdown && (
            <>
              <div className="nextMatch__countdown">
                {countdown.days > 0 && (
                  <span className="nextMatch__days">
                    {String(countdown.days).padStart(2, '0')}d
                  </span>
                )}
                <span>{countdown.hours}</span>:
                <span>{countdown.minutes}</span>:
                <span>{countdown.seconds}</span>
              </div>

              <div className="nextMatch__countdownLabel">
                {formatMatchDate(match.startTime)}
              </div>
            </>
          )}

          {status === 'live' && match.twitch && (
            <a
              href={match.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="nextMatch__cta"
            >
              Ver ahora en Twitch
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
