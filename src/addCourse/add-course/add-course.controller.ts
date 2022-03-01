import { Controller, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { addCourseService } from '../service/addCourse.service';
@Controller('addCourseController')
export class AddCourseController {
  constructor(private addCourseService:addCourseService) {}

  // @UseGuards(JwtAuthGuard)
   @Post("addCourse")
   addCourse(@Body() b){
      return this.addCourseService.addCourse(b.courseName,b.courseDuration,b.courseFees,b.courseInformation,b.courseDescription);
      // return {"sucess":true}
   
}

}