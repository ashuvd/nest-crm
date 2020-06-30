import navigations from 'src/mocks/navigation';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NavigationService {
  find(): Navigation[] {
    return navigations;
  }
  findById(id: number): Navigation {
    return navigations.find(navigation => navigation.id === id);
  }
}
