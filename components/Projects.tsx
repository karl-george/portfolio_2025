import { projects } from '@/constants/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='relative py-16 md:py-20 px-4 z-10'>
      <div className='container mx-auto z-10'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-6 text-center text-white'>
          Projects
        </h2>
        <p className='w-[95%] md:w-1/3 mx-auto text-base md:text-lg text-muted-foreground mb-16 md:mb-16 text-center'>
          A small collection of my most recent projects to showcase my skills
          and experience.
        </p>

        <div className='flex flex-col lg:flex-row'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech as string[]}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
