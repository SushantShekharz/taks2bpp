
import { Module } from '@nestjs/common';

import { loginservice } from '../service/login.service';
import { loginprovider } from '../provider/login.providers';
import { DatabaseModule } from '../module/database.module';

@Module({
  imports: [DatabaseModule],
 
  providers: [
    loginservice,
    ...loginprovider,
  ],
})
export class loginmodule {}