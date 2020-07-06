import { Provider } from '@nestjs/common';
import Setting from '../models/Setting';

export const settingProviders: Provider[] = [
  {
    provide: 'SETTING_REPOSITORY',
    useValue: Setting
  }
]
