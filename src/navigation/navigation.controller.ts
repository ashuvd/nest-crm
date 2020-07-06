import { NavigationService } from './navigation.service';
import { Controller, Get, Param } from '@nestjs/common';
import Navigation from '../models/Navigation';

@Controller('navigations')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {
  }

  @Get()
  find(): Promise<Navigation[]> {
    return this.navigationService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Navigation> {
    return this.navigationService.findById(+id);
  }
}
