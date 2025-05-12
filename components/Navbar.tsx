'use client';

import { BookOpen, FolderKanban, House, Mail } from 'lucide-react';
import { ExpandableTabs } from './ExpandableTabs';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];

      // Check if we're at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (
            scrollPosition >= absoluteTop &&
            scrollPosition <= absoluteBottom
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { title: 'Home', icon: House, label: 'home' },
    { title: 'Projects', icon: FolderKanban, label: 'projects' },
    { title: 'Skills', icon: BookOpen, label: 'skills' },
    { title: 'Contact', icon: Mail, label: 'contact' },
  ];

  const handleTabChange = (index: number | null) => {
    if (index !== null) {
      const sectionId = navItems[index].label;
      scrollToSection(sectionId);
    }
  };

  const activeIndexValue = navItems.findIndex(
    (item) => item.label === activeSection
  );

  return (
    <div className='flex justify-center items-center'>
      <nav className='fixed bottom-8 z-50'>
        <ExpandableTabs
          tabs={navItems}
          activeColor='text-blue-400'
          className='border-blue-400 rounded-3xl py-2 px-4'
          onChange={handleTabChange}
          activeIndex={activeIndexValue}
        />
      </nav>
    </div>
  );
}
