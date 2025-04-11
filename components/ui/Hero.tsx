import React from 'react';
import { TextFlip } from '../TextFlip';
import { Button } from './button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center px-4'
    >
      <div className='container mx-auto z-10'>
        <div className='text-center'>
          <TextFlip
            word='Karl George'
            className='text-4xl font-bold -tracking-widest text-white md:text-6xl lg:text-7xl md:leading-[5rem] mb-8'
          />
          <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8'>
            React Native Developer
          </p>
          <p className='w-[80%] md:w-[50%] mx-auto text-base md:text-lg text-muted-foreground mb-8'>
            Passionate about creating innovative and user-friendly mobile
            experiences. Focused on building cross-platform applications that
            combine elegance with functionality.
          </p>
          <div className='flex justify-center gap-4'>
            <Button variant='outline' className='gap-3 items-center'>
              <Github className='h-5 w-5' />
              Github
            </Button>
            <Button variant='outline' className='gap-3 items-center'>
              <Linkedin className='h-5 w-5' />
              Linkedin
            </Button>
            <Button variant='outline' className='gap-3 items-center'>
              <Mail className='h-5 w-5' />
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
