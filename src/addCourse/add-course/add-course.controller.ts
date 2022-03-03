import { Controller, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { addCourseService } from '../service/addCourse.service';
@Controller('addCourseController')
export class AddCourseController {
  constructor(private addCourseService: addCourseService) { }
  @UseGuards(JwtAuthGuard)
  @Post("addCourse")
  addCourse(@Body() b) {
    return this.addCourseService.addCourse(b.courseName, b.courseDuration, b.courseFees, b.courseInformation, b.courseDescription);
    //  return {"sucess":true}
  }
  @UseGuards(JwtAuthGuard)
  @Post("listingOfCourse")
  listingOfCourse() {
    return this.addCourseService.listingoFCourse();
  }
  @UseGuards(JwtAuthGuard)
  @Post("updatingOfCourse")
  updatingOfCourse(@Body() b) {
    this.addCourseService.updatingOfCourse(b.courseName, b.courseDuration, b.courseFees, b.courseInformation, b.courseDescription, b.id);
  }
  @UseGuards(JwtAuthGuard)
  @Post("deletingOfCourse")
  deletingOfCourse(@Body() b) {
    this.addCourseService.deletingOfCourse(b.id)
  }




  //from here just experiment
  @Post("listingexperiment")
  listingExperiment(@Body () b){
  return this.addCourseService.listingExperiment(b.noofcontent,b.pageno);




  }
  @Post("listingexperimentnewone")
listingexperimentnewone(@Body()b)
{
  return this.addCourseService.listingexperimentnewone(b.perpage,b.page,b.orderByColumn,b.orderBy)
}

@Post("search")
search(@Body() b){

  return this.addCourseService.search(b.searched,b.columnName)

}

}