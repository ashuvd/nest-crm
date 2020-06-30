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
  deleteById(id: number): Course {
    const idx = courses.findIndex(course => course.id === id);
    const course = courses[idx];
    if (idx > 0) {
      courses.splice(idx, 1);
    }
    return course;
  }
  createCourse(newCourse: CreateCourseDto): Course {
    return { id: courses.length + 1, name: newCourse.name, description: newCourse.description, price: newCourse.price };
  }
}
