import { NavigationService } from './navigation.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('navigations')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {
  }

  @Get()
  find(): Navigation[] {
    return this.navigationService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Navigation {
    return this.navigationService.findById(+id);
  }
}
