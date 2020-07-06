import { Inject, Injectable } from '@nestjs/common';
import Navigation from '../models/Navigation';

@Injectable()
export class NavigationService {
  constructor(@Inject('NAVIGATION_REPOSITORY') private readonly navigationRepository: typeof Navigation) {
  }
  find(): Promise<Navigation[]> {
    return this.navigationRepository.findAll();
  }
  findById(id: number): Promise<Navigation> {
    return this.navigationRepository.findByPk(id);
  }
}
