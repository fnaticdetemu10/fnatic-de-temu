import Hero from './components/Hero'
import About from './components/About'
import TeamSection from './components/TeamSection'
import Creators from './components/Creators'
import Community from './components/Community'
import NextMatch from './components/NextMatch'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      
      <section id="hero"><Hero /></section>
      <section id="next-match"><NextMatch /></section>
      <section id="about"><About /></section>
      <section id="teams"><TeamSection /></section>
      <section id="creators"><Creators channel="xplosivo77" /></section>
      <section id="community"><Community /></section>
      <Footer />
    </>
  )
}
