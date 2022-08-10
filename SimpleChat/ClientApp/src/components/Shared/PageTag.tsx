import { FC } from 'react';
import Style from '../../styles/Shared/PageTag.module.scss';

interface PageTagProps {
  isSecondary?: boolean;
}
const PageTag: FC<PageTagProps> = (props) => {
  return (
    <div
      className={`${Style.tag} 
      ${props.isSecondary ? Style.secondary : ''}`}
    ></div>
  );
};

export default PageTag;
