import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectTech from './ProjectTech';

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

        <div className='p-4 md:p-6 rounded-lg bg-gray-800 w-11/12'>
          <div className='flex flex-row flex-wrap gap-2 justify-center items-center mb-6'>
            {tech?.map((item, index) => (
              <ProjectTech tech={item} key={index} />
            ))}
          </div>
          <h3 className='text-lg md:text-xl font-semibold mb-2 text-white'>
            {title}
          </h3>
          <p className='text-sm md:text-base text-muted-foreground mb-6'>
            {description}
          </p>
          <div className='py-2 px-4 bg-gray-300 rounded-md flex mx-auto w-fit'>
            <Link href={link}>
              <p className='flex flex-row items-center gap-2'>
                View Project <Github size={16} />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
