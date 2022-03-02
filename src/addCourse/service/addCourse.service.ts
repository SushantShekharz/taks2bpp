import { Injectable, Inject } from '@nestjs/common';
import { addCourse } from '../entity/addCourse.entity';

@Injectable()
export class addCourseService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private addcourse: typeof addCourse
  ) {}

  async addCourse(  courseName,  courseDuration,courseFees,courseInformation,courseDescription): Promise<any> {
    return this.addcourse.create({courseName:courseName,courseDuration:courseDuration,courseFees:courseFees,courseInformation:courseInformation,courseDescription:courseDescription});
  }
  async listingoFCourse():Promise<any>{
    return this.addcourse.findAll()
  }
  async updatingOfCourse(courseName,courseDuration,courseFees,courseInformation,courseDescription,id):Promise<any>{
    return this.addcourse.update({courseName:courseName,courseDuration:courseDuration,courseFees:courseFees,courseInformation:courseInformation,courseDescription:courseDescription},{where:{id:id}})
  }
  async deletingOfCourse(id){
    return this.addcourse.destroy({where:{id:id}})
  }
}