
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { logintable } from '../entity/login.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class loginservice {
  constructor(
    @Inject('CATS_REPOSITORY')
    private login: typeof logintable
  ) { }
  async validateUser(username: string, password): Promise<any> {
    const hashedpassword = await this.validationforlogin(username)
    try {
      const isMatch = await bcrypt.compare(password, hashedpassword[0].password);
  
      const user = await this.validationforlogin(username);
      if (user.length >= 1 && isMatch) {
        return true
      }
      else {
        return false
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  async validatejwt(username, password): Promise<any> {
    const user = await this.validationforlogin(username);
    const hashedpassword = await this.validationforlogin(username)

    try {
      var isMatch = false
if(password==hashedpassword[0].password)
{
  isMatch=true
}

      const user = await this.validationforlogin(username);
     
      if (user.length >= 1 && isMatch) {
       console.log("OKKKKKKKKK")
        return true
   
      }
      else {
        return false
      }
    } 
    catch (error) {
      throw new UnauthorizedException();
    }
  }
  async validationforlogin(username: string): Promise<logintable[]> {
    return this.login.findAll<logintable>({ where: { username: username } });
  }
  async countofusername(username: any): Promise<any> {
    return this.login.findAll<logintable>({ where: { username: username } })
  }
  async createOrInsert(username: any, password: any, fullname: any, experience: any, typeofuser: any): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds)
    return this.login.create({ username: username, password: hash, fullname: fullname, experience: experience, typeofuser: typeofuser });
  }
  async listOfUser(): Promise<any>{
    return this.login.findAll<logintable>({where:{typeofuser:"user"},attributes:["username","fullname","experience"]})
  }
}