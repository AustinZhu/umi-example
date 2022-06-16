import CourseInfoForm from '@/components/CourseInfoForm';
import Example from '@/components/CourseInfoForm';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <CourseInfoForm></CourseInfoForm>
    </div>
  );
}
