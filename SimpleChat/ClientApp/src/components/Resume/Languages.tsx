import { FC } from 'react';
import ExperienceCard from './../Shared/ExperienceCard';
import Style from './../../styles/Languages.module.scss';
const Languages: FC = () => {
  return (
    <>
      <h2>LANGUAGES</h2>
      <ExperienceCard
        cssClasses={Style.cardCustom}
        title={'Vietnamese'}
        subtitle={'Native or Bilingual Proficiency'}
      />
      <ExperienceCard
        cssClasses={Style.cardCustom}
        title={'English'}
        subtitle={'Professional Working Proficiency'}
      />
    </>
  );
};

export default Languages;
