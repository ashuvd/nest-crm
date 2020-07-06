import { Module } from '@nestjs/common';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';
import { settingProviders } from './setting.providers';

@Module({
  controllers: [SettingController],
  providers: [SettingService, ...settingProviders],
  exports: [SettingService]
})
export class SettingModule {}
