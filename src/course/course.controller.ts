import { CourseService } from './course.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import Course, { CreateCourseDto } from '../models/Course';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {
  }

  @Get()
  find(): Promise<Course[]> {
    return this.courseService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Course> {
    return this.courseService.findById(+id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string, @Res() res: Response): Promise<Course> {
    const course = await this.courseService.deleteById(+id);
    if (!course) {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Курс не найден' });
      return;
    }
    return course;
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto, @Res() res: Response): void {
    const course = this.courseService.createCourse(createCourseDto);
    res.status(HttpStatus.CREATED).json({ course });
  }
}
