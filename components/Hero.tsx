import { Github, Linkedin, Mail } from 'lucide-react';
import { TextFlip } from './TextFlip';
import { HoverButton } from './ui/HoverButton';

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
          <p className='w-[98%] md:w-[50%] mx-auto text-base md:text-lg text-muted-foreground mb-8'>
            Passionate about creating innovative and user-friendly mobile
            experiences. Focused on building cross-platform applications that
            combine elegance with functionality.
          </p>
          <div className='flex flex-col md:flex-row justify-center items-center md:gap-4 gap-6'>
            <div className='flex items-center justify-center'>
              <a href={'https://github.com/karl-george'} target='_blank'>
                <HoverButton
                  startColor='#4ade80'
                  endColor='#22d3ee'
                  animationIntensity='medium'
                  className='inline-flex items-center gap-2'
                >
                  <span className='relative z-10 drop-shadow-md inline-flex items-center gap-2'>
                    <Github className='h-5 w-5 shrink-0' />
                    <p className='text-sm md:text-base'>Github</p>
                  </span>
                </HoverButton>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href={'https://www.linkedin.com/in/karlgeorge87'}
                target='_blank'
              >
                <HoverButton
                  startColor='#4ade80'
                  endColor='#22d3ee'
                  animationIntensity='medium'
                  className='inline-flex items-center gap-2'
                >
                  <span className='relative z-10 drop-shadow-md inline-flex items-center gap-2'>
                    <Linkedin className='h-5 w-5 shrink-0' />
                    <p className='text-sm md:text-base'>Linkedin</p>
                  </span>
                </HoverButton>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a href={'mailto:karlgeorge87@gmail.com'} target='_blank'>
                <HoverButton
                  startColor='#4ade80'
                  endColor='#22d3ee'
                  animationIntensity='medium'
                  className='inline-flex items-center gap-2'
                >
                  <span className='relative z-10 drop-shadow-md inline-flex items-center gap-2'>
                    <Mail className='h-5 w-5 shrink-0' />
                    <p className='text-sm md:text-base'>Email</p>
                  </span>
                </HoverButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
