import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { courseProviders } from './course.providers';

@Module({
  controllers: [CourseController],
  providers: [CourseService, ...courseProviders],
  exports: [CourseService]
})
export class CourseModule {}
