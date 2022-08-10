import { FC } from 'react';
import Tag from './../Shared/Tag';
const Skills: FC = () => {
  const skills = [
    'Asp.Net Core',
    'Entity Framework',
    'Azure App Service',
    'Azure DevOps',
    'Reactjs',
    'VueJs',
    'Micro-services',
    'SignalR',
    'RESTful API',
    'Git',
    'Redis',
    'Kubernetes',
    'Docker',
    'Ubuntu',
  ];
  return (
    <>
      <h2>SKILLS</h2>
      {skills.map((skill, i) => (
        <Tag key={i} name={skill} type={'primary'} />
      ))}
    </>
  );
};

export default Skills;
