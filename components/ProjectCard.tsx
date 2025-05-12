import { Github } from 'lucide-react';
import Image from 'next/image';
import ProjectTech from './ProjectTech';
import { HoverButton } from './ui/HoverButton';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  tech,
  link,
}: ProjectCardProps) => {
  return (
    <div className='flex mb-8 lg:mb-0:'>
      <div className='flex gap-6 items-center mx-auto flex-col'>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className='object-cover'
        />

        <div className='p-4 md:p-6 rounded-lg bg-gray-800 w-11/12 h-full'>
          <div className='flex flex-row flex-wrap gap-2 justify-center items-center mb-6'>
            {tech?.map((item, index) => (
              <ProjectTech tech={item} key={index} />
            ))}
          </div>
          <h3 className='text-lg md:text-xl font-semibold mb-2 text-white'>
            {title}
          </h3>
          <p className='text-sm md:text-base text-muted-foreground mb-6 max-w-2xl'>
            {description}
          </p>
          <div className='flex items-center justify-center'>
            <a href={link} target='_blank'>
              <HoverButton
                startColor='#4ade80'
                endColor='#22d3ee'
                animationIntensity='medium'
                className='inline-flex items-center gap-2'
              >
                <span className='relative z-10 drop-shadow-md inline-flex items-center gap-2'>
                  <Github className='h-5 w-5 shrink-0' />
                  <p className='text-sm md:text-base'>View Project</p>
                </span>
              </HoverButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
