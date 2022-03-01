
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { loginservice } from 'src/users/service/login.service';
@Injectable()
export class AuthService {
  constructor(
  
    private jwtService: JwtService,
    private loginservice: loginservice
  ) {}

  async login(username: any,password: any) {
   
    const user = await this.loginservice.validationforlogin(username)
  
 if(!user){
   return UnauthorizedException
 }
    const payload = { username:user[0].username,password:user[0].password};
    
    return {
      access_token: this.jwtService.sign(payload),
      typeofuser: user[0].typeofuser,
      sucess:true
      
    };
  }
}