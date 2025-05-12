import { skills } from '@/constants/data';

const Skills = () => {
  return (
    <section id='skills' className='relative py-16 md:py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-6 text-center text-white'>
          Skills
        </h2>
        <p className='w-[95%] md:w-1/3 mx-auto text-base md:text-lg text-muted-foreground mb-12 md:mb-12 text-center'>
          A small list of the skills and technologies I work with.
        </p>
        <div className='flex flex-row flex-wrap gap-3 justify-center items-center w-[95%] md:w-3/5 mx-auto'>
          {skills.map((skill, index) => (
            <div
              className='py-2 px-4 text-muted-foreground md:py-3 md:px-6 rounded-lg bg-gray-800 hover:bg-blue-700 hover:text-white cursor-default'
              key={index}
            >
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
