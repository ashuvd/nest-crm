import { Provider } from '@nestjs/common';
import User from '../models/User';

export const userProviders: Provider[] = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User
  }
]
