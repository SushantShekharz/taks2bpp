
import { logintable } from '../entity/login.entity';

export const loginprovider = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: logintable,
  },
];