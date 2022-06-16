import { useEffect, useMemo, useState } from 'react';
import request from 'umi-request';

export default () => {
  const [courses, setCourses] = useState({});

  const fetchCourse = async (courseId: string) => {
    await request
      .get('https://api.wasedatime.com/staging/syllabus', {
        params: { id: courseId },
        useCache: true,
        ttl: 60 * 60 * 24,
        validateCache: (_, opts) => {
          return opts.method === 'GET';
        },
        responseType: 'json',
        parseResponse: true,
      })
      .then((res) => setCourses(res.data));
  };

  return {
    courses,
    fetchCourse,
  };
};
