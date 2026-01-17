import React from "react";
import { FiArrowRight, FiArrowDown, FiCalendar } from "react-icons/fi";
import LogoBulle from "../assets/2_Logo_Bulle.png";
import UnPetit from "../assets/3_Un_Ptit_Click.png";

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col justify-center items-center px-4 overflow-hidden">
      
      {/* Background Glowing Blurs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top Badge */}
      <div className="z-10 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)] mb-8">
        <img
          src={LogoBulle}
          alt="Logo bulle"
          className="w-6 h-6 object-contain"
        />
        <span className="text-black font-bold text-xs tracking-wider">
          CRÉER UN SITE WEB <span className="underline decoration-2">VRAIMENT</span> UNIQUE
        </span>
      </div>

      {/* Headline */}
      <h1 className="z-10 text-4xl md:text-6xl font-extrabold text-center max-w-4xl leading-tight mb-6">
        Votre  <span className="text-emerald-500">site</span> doit  <span className="text-emerald-500">donner envie</span> de rester, pas de{" "}
        <span className="line-through decoration-black decoration-5 text-emerald-500">revenir</span>{" "}
        <span className="line-through decoration-black decoration-5 ">en</span>{" "}
        <span className="line-through decoration-black decoration-5 text-emerald-500">arrière</span>.
      </h1>

      {/* Subtext */}
      <p className="z-10 text-gray-400 text-center max-w-2xl text-lg mb-10">
        Design moderne, SEO solide, Suivi complet : <br className="hidden md:block" /> 
        on construit un site qui retient vos visiteurs et vous apporte des résultats.
      </p>

      {/* CTA Buttons */}
      <div className="z-10 flex flex-col md:flex-row items-center gap-6 relative">
        {/* RDV Button with Floating Image */}
        <div className="relative flex flex-col items-center">
          <button className="flex items-center justify-between gap-4 bg-emerald-500 hover:bg-emerald-400 transition-colors text-black font-bold py-4 px-8 rounded-full w-64 shadow-lg shadow-emerald-500/20 mt-0">
            <FiCalendar className="text-xl" />
            <span>Prendre RDV</span>
            <FiArrowRight className="text-xl" />
          </button>
          
          {/* UnPetit Image with Animation */}
          <div className="absolute top-full mt-4 left-1/70 animate-bounce-slow">
            <img src={UnPetit} alt="Un petit click?" className="w-24 h-auto" />
          </div>
        </div>

        {/* Project Button */}
        <button className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-emerald-500 transition-all py-4 px-8 rounded-full w-64 font-bold md:mt-2 mt-12">
          Découvrir nos projets
          <FiArrowDown className="text-xl" />
        </button>
      </div>
    </section>
  );
}

export default Hero;