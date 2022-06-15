import { useModel } from 'umi';

export default () => {
  const { courses: courses, fetchCourses: fetchPosts } = useModel(
    'model',
    (model) => ({ courses: model.courses, fetchCourses: model.fetchCourses }),
  );
  return (
    <div>
      <p>{courses.title}</p>
      <p>{courses.outline}</p>
    </div>
  );
};
