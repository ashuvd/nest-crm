import { CourseService } from './course.service';
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {
  }

  @Get()
  find(): Course[] {
    return this.courseService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Course {
    return this.courseService.findById(+id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto, @Res() res: Response): void {
    const course =  this.courseService.createCourse(createCourseDto);
    res.status(HttpStatus.CREATED).json({ course });
  }
}
