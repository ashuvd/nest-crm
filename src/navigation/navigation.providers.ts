import { Provider } from '@nestjs/common';
import Navigation from '../models/Navigation';

export const navigationProviders: Provider[] = [
  {
    provide: 'NAVIGATION_REPOSITORY',
    useValue: Navigation
  }
]
