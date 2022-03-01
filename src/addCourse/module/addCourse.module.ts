
import { Module } from '@nestjs/common';

import { addCourseService } from '../service/addCourse.service';
import { addCourseProvider } from '../provider/addCourse.providers';
import { DatabaseModule } from './Database.module';
import { AddCourseController } from '../add-course/add-course.controller';

@Module({
  imports: [DatabaseModule],
  controllers:[AddCourseController],
  providers: [
    addCourseService,
    ...addCourseProvider,
  ],
})
export class addCourseModule {}