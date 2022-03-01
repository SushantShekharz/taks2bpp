import { addCourse } from '../entity/addCourse.entity';

export const addCourseProvider = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: addCourse,
  },
];