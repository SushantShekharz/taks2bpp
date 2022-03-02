
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';
import { loginservice } from 'src/users/service/login.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private loginservice: loginservice) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  async validate(payload: any) {
    const user = await this.loginservice.validatejwt(payload.username, payload.password);


    if (!user) {
      return UnauthorizedException
    }
    return "hu"
  }
}