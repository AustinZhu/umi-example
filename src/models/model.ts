import { useEffect, useMemo, useState } from 'react';

export default () => {
  const [courses, setCourses] = useState([]);
  const fetchCourse = async () => {
    const response = await fetch(
      'https://api.wasedatime.com/staging/syllabus?id=5101GC1012012022510103101951',
    ).then((res) => res.json());
    setCourses(response.data);
  };

  console.log(courses);
  useMemo(() => {
    fetchCourse();
  }, []);
  return {
    courses: courses,
    fetchCourses: fetchCourse,
  };
};
