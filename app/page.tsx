'use client';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Hero from '@/components/ui/Hero';
import { skills } from '@/constants/data';
import { Linkedin, Mail } from 'lucide-react';

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
