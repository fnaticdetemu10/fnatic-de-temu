import './Hero.css';
import React from 'react';
import petalosCayendo from '../assets/images/petalos-cerezo-cayendo.gif';

const Hero = () => {
    return (
        <div className="hero">
            <img className="background-gif" src={petalosCayendo} alt="Pétalos de cerezo cayendo" />
            <div className="hero-content">
                <p className="hero-title">
                    改善<br />
                </p>
                <div className="hero-hashtags">
                    <span className="hashtag">Fnatic de Temu: Honor, disciplina y mejora constante (改善). Competimos con pasión y respeto. 💥 #Esports #FNT</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;