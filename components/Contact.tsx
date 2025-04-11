import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id='contact' className='relative py-16 md:py-20 px-4 mt-[400px]'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-6 text-center text-white'>
          Let's Chat!
        </h2>
        <div className='max-w-md mx-auto text-center'>
          <p className='w-2/3 md:w-full mx-auto text-base md:text-lg text-muted-foreground mb-12 md:mb-12 text-center'>
            If you're interested in working together, feel free to reach out.
          </p>
        </div>

        <div className='flex justify-center gap-4'>
          {/* Email */}
          <a href={'mailto:karlgeorge87@gmail.com'} target='_blank'>
            <div className='p-4  bg-gray-800 hover:bg-blue-700 text-muted-foreground hover:text-white rounded-full w-fit'>
              <Mail className='h-10 w-10' />
            </div>
          </a>
          {/* Linkedin */}
          <a href={'https://www.linkedin.com/in/karlgeorge87'} target='_blank'>
            <div className='p-4  bg-gray-800 hover:bg-blue-700 text-muted-foreground hover:text-white rounded-full w-fit'>
              <Linkedin className='h-10 w-10' />
            </div>
          </a>
          {/* Github */}
          <a href={'https://github.com/karl-george'} target='_blank'>
            <div className='p-4  bg-gray-800 hover:bg-blue-700 text-muted-foreground hover:text-white rounded-full w-fit'>
              <Github className='h-10 w-10' />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
