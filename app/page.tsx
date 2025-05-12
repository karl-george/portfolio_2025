'use client';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <div className='min-h-screen w-full bg-[#111827] relative overflow-hidden'>
        <Navbar />
        <ParticlesBackground />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
