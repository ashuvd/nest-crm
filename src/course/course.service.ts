import { Inject, Injectable } from '@nestjs/common';
import Course, { CreateCourseDto } from '../models/Course';

@Injectable()
export class CourseService {
  constructor(@Inject('COURSE_REPOSITORY') private readonly courseRepository: typeof Course) {
  }
  find(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }
  findById(id: number): Promise<Course> {
    return this.courseRepository.findByPk(id);
  }
  async deleteById(id: number): Promise<Course> {
    const course = await this.courseRepository.findByPk(id);
    if (!course) {
      return course;
    }
    course.destroy();
    return course;
  }
  createCourse(newCourse: CreateCourseDto): Promise<Course> {
    return this.courseRepository.create(newCourse);
  }
}
