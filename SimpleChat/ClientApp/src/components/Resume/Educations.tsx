import { FC } from 'react';
import ExperienceCard from '../Shared/ExperienceCard';
const Educations: FC = () => {
  return (
    <>
      <h2>EDUCATION</h2>
      <ExperienceCard
        title={'FPT University'}
        subtitle={'Software Engineering'}
        note={'Oct 2011 - Oct 2016'}
        achievements={[]}
      />
    </>
  );
};

export default Educations;
