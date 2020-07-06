import { Inject, Injectable } from '@nestjs/common';
import Setting, { CreateSettingDto } from '../models/Setting';

@Injectable()
export class SettingService {
  constructor(@Inject('SETTING_REPOSITORY') private readonly settingRepository: typeof Setting) {
  }
  findOne(): Promise<Setting> {
    return this.settingRepository.findOne();
  }
  async rpcCreateOrUpdateSetting(data: CreateSettingDto): Promise<Setting> {
    let setting = await this.settingRepository.findOne();
    if (setting) {
      setting = await setting.update(data);
    } else {
      setting = await this.settingRepository.create(data);
    }
    return setting;
  }
}
