import { FC } from 'react';
import Tag from './../Shared/Tag';
const Interests: FC = () => {
  const INTERESTS = [
    'Music',
    'Reading',
    'Swimming',
    'Football',
    'Football Games',
  ];
  return (
    <>
      <h2>INTERESTS</h2>
      {INTERESTS.map((interesting, i) => (
        <Tag key={i} name={interesting} type={'default'} />
      ))}
    </>
  );
};

export default Interests;
