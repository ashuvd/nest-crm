import { SettingService } from './setting.service';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import Setting, { CreateSettingDto } from '../models/Setting';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {
  }

  @Get()
  findOne(): Promise<Setting> {
    return this.settingService.findOne();
  }

  @Post()
  rpcCreateOrUpdate(@Body() createSettingDto: CreateSettingDto, @Res() res: Response): void {
    const setting = this.settingService.rpcCreateOrUpdateSetting(createSettingDto);
    res.status(HttpStatus.OK).json({ setting });
  }
}
