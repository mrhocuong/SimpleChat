import { FC } from 'react';
import Style from '../../styles/Shared/Loading.module.scss';

interface TagProps {
  show?: boolean;
}
const Loading: FC<TagProps> = (props) => {
  if (!props.show) return <></>;
  return (
    <span className={Style.loadingContainer}>
      <div className={Style.loadingSpinner}></div>
    </span>
  );
};

export default Loading;
