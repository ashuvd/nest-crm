import { Provider } from '@nestjs/common';
import Course from '../models/Course';

export const courseProviders: Provider[] = [
  {
    provide: 'COURSE_REPOSITORY',
    useValue: Course
  }
]
