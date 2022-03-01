import { Module } from '@nestjs/common';
import { addCourseModule } from './addCourse/module/addCourse.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoginController } from './users/controller/login.controller';
import { loginmodule } from './users/module/login.module';
import { loginprovider } from './users/provider/login.providers';
import { loginservice } from './users/service/login.service';


@Module({
  imports: [AuthModule,loginmodule,addCourseModule],
  controllers: [AppController,LoginController],
  providers: [AppService,loginservice,...loginprovider],
})
export class AppModule {}
