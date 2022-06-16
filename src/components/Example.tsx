import { useEffect, useState } from 'react';
import { useModel } from 'umi';

export default () => {
  const { courses, fetchCourse } = useModel('model');

  const [id, setId] = useState('');
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCourse(id);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          Course Id:
          <input type="text" onChange={onChangeHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{courses.title}</p>
      <p>{courses.outline}</p>
    </div>
  );
};
