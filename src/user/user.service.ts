import users from 'src/mocks/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  find(): User[] {
    return users;
  }
  findById(id: number): User {
    return users.find(user => user.id === id);
  }
  createUser(newUser: CreateUserDto): User {
    const user = { id: users.length + 1, login: newUser.login, password: newUser.password };
    users.push(user);
    return user;
  }
}
