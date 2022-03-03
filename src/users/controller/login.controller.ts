// import { Controller } from '@nestjs/common';
import { Controller, Get, Request, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { AuthService } from '../../auth/auth.service';
import { loginservice } from '../service/login.service';
import { Body } from '@nestjs/common';
@Controller('logincontroller')
export class LoginController {

  constructor(private authService: AuthService, private loginservice: loginservice) { }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() b) {
    return this.authService.login(b.username, b.password);
  }
  @Post('registration')
  async registration(@Body() b) {
    const checkingofusername = await this.loginservice.countofusername(b.username)

    //for creating hashed password out of normal password coming out from body
    if (checkingofusername.length == 0) {
      this.loginservice.createOrInsert(b.username, b.password, b.fullname, b.experience,b.typeofuser)
    
      return { "sucess": true }

    }

    return { "sucess": false }
  }
  // @UseGuards(JwtAuthGuard)
  @Post('listOfUser')
  async listOfUser(){
    return this.loginservice.listOfUser()

  }
}
