import React from 'react';

const ProjectTech = ({ tech }: { tech: string }) => {
  return (
    <div className='bg-gray-900 p-2 rounded-md'>
      <p className='text-muted-foreground text-[12px]'>{tech}</p>
    </div>
  );
};

export default ProjectTech;
