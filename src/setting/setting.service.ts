import settings from 'src/mocks/setting';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingService {
  findOne(): Setting {
    return settings[0];
  }
  rpcCreateOrUpdateSetting(setting: CreateOrUpdateSettingDto): Setting {
    const createUpdateSetting = { id: 1, ip: setting.ip, port: setting.port };
    if (settings.length) {
      settings[0] = createUpdateSetting;
    } else {
      settings.push(createUpdateSetting);
    }
    return createUpdateSetting;
  }
}
