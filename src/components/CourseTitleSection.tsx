import { useModel } from 'umi';

export default () => {
  const { courses } = useModel('model');

  return <p>{courses.title}</p>;
};
