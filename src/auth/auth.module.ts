
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { loginmodule } from 'src/users/module/login.module';
import { loginservice } from 'src/users/service/login.service';
import { loginprovider } from 'src/users/provider/login.providers';

@Module({
  imports: [
    loginmodule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, loginservice, ...loginprovider],
  exports: [AuthService],
})
export class AuthModule { }