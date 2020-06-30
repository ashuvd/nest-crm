import courses from 'src/mocks/course';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  find(): Course[] {
    return courses;
  }
  findById(id: number): Course {
    return courses.find(course => course.id === id);
  }
  createCourse(newCourse: CreateCourseDto): Course {
    return { id: courses.length + 1, name: newCourse.name, description: newCourse.description, price: newCourse.price };
  }
}
