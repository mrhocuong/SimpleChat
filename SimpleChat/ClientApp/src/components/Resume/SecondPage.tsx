import { FC } from 'react';
import A4Page from './../Shared/A4Page';
import ExperienceCard from './../Shared/ExperienceCard';
import Style from '../../styles/SecondPage.module.scss';
import Educations from './Educations';
import Interests from './Interests';
interface ISecondPageProps {
  id?: string;
}
const SecondPage: FC<ISecondPageProps> = (props) => {
  return (
    <A4Page id={props.id}>
      <div className={Style.page}>
        <div className={`${Style.body} ${Style.secondPage}`}>
          <div className={`${Style.column} ${Style.left}`}>
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={'3'}
              title={'Full-stack Software Developer'}
              note={'05/2016 - 12/2017'}
              subtitle={'Saigon Technology Software - Vietnam'}
              achievements={[
                'Lead the backend team to build a Real Estate Management System using .Net Core 1.0 and ElasticSearch. Support the mobile team to develop the application using React Native',
                'Work in Malaysia with the team to enhance the performance of the Payroll Management System',
                'Work with Australia clients to support to build of an Apartment Agreement Management System using AngularJs 1, .Net Framework 4.5 and MSSQL',
                'Working as full stack developer in another projects',
              ]}
            />
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={'4'}
              title={'Full-stack Developer'}
              note={'10/2014 - 04/2015,'}
              subtitle={'FPT Software - Vietnam'}
              achievements={[
                'Transform a Material Management System built by Webform to Web Application',
                'Develop backend by C#, .Net Framework 4.5, MVC, Entity Framework, and Oracle database',
                'Develop frontend using Bootstraps and Jquery, ASP.NET Razor',
              ]}
            />
          </div>
          <div className={`${Style.column} ${Style.right}`}>
            <Educations />
            <Interests />
          </div>
        </div>
      </div>
    </A4Page>
  );
};

export default SecondPage;
