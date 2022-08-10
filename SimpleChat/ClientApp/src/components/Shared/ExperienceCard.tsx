import { FC } from 'react';
import Style from '../../styles/Shared/ExperienceCard.module.scss';
import PageTag from './PageTag';
interface IExperienceCardProps {
  hasTag?: boolean;
  title: string;
  note?: string;
  subtitle?: string;
  achievements?: string[];
  cssClasses?: string;
}
const ExperienceCard: FC<IExperienceCardProps> = (props) => {
  const { hasTag, title, subtitle, note, achievements, cssClasses } = props;
  return (
    <div className={`${Style.workExperience} ${cssClasses ?? ''}`}>
      <div className={Style.headerWrapper}>
        {hasTag && <PageTag isSecondary />}
        <div className={Style.header}>
          <div className={Style.title}>{title}</div>
          {subtitle && <div className={Style.subtitle}>{subtitle}</div>}
          {note && <div className={Style.note}>{note}</div>}
        </div>
      </div>
      {achievements && (
        <div className={Style.content}>
          <ul>
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
