import { SettingService } from './setting.service';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {
  }

  @Get()
  findOne(): Setting {
    return this.settingService.findOne();
  }

  @Post()
  rpcCreateOrUpdate(@Body() createSettingDto: CreateOrUpdateSettingDto, @Res() res: Response): void {
    const setting = this.settingService.rpcCreateOrUpdateSetting(createSettingDto);
    res.status(HttpStatus.OK).json({ setting });
  }
}
