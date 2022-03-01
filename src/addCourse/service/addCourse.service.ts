
import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { addCourse } from '../entity/addCourse.entity';

@Injectable()
export class addCourseService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private addcourse: typeof addCourse
  ) {}

  async addCourse(  courseName,  courseDuration,courseFees,courseInformation,courseDescription): Promise<any> {
    return this.addcourse.create({courseName:courseName,courseDescription:courseDescription,courseFees:courseFees,courseInformation:courseInformation,courseDuration:courseDuration});
  }
}