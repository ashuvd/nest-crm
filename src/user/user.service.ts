import { Inject, Injectable } from '@nestjs/common';
import User, { CreateUserDto } from '../models/User';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) {
  }
  find(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  findByLogin(login: string): Promise<User> {
    return this.userRepository.findOne({ where: { login } });
  }
  async deleteById(id: number): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      return user;
    }
    user.destroy();
    return user;
  }
  findById(id: number): Promise<User> {
    return this.userRepository.findByPk(id);
  }
  createUser(newUser: CreateUserDto): Promise<User> {
    return this.userRepository.create(newUser);
  }
}
