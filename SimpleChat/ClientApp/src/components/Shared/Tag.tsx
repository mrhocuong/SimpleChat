import { FC } from 'react';
import Style from '../../styles/Shared/Tag.module.scss';

interface TagProps {
  name: string;
  type: 'default' | 'primary' | 'secondary';
}
const Tag: FC<TagProps> = (props) => {
  const typeClass =
    props.type === 'primary'
      ? Style.primary
      : props.type === 'secondary'
      ? Style.secondary
      : Style.default;

  return <span className={`${Style.skillTag} ${typeClass}`}>{props.name}</span>;
};

export default Tag;
