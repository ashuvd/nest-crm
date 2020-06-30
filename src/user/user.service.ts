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
  deleteById(id: number): User {
    const idx = users.findIndex(user => user.id === id);
    const user = users[idx];
    if (idx > 0) {
      users.splice(idx, 1);
    }
    return user;
  }
  createUser(newUser: CreateUserDto): User {
    const user = { id: users.length + 1, login: newUser.login, password: newUser.password };
    users.push(user);
    return user;
  }
}
