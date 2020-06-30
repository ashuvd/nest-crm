import { UserService } from './user.service';
import { Controller, Get, Param, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  find(): User[] {
    return this.userService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): User {
    return this.userService.findById(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response): void {
    if (createUserDto.password !== createUserDto.repeatPassword) {
      res.status(400).json({ message: 'Пароли не совпадают' });
      return;
    }
    const user =  this.userService.createUser(createUserDto);
    delete user.password;
    res.status(HttpStatus.CREATED).json({ user });
  }
}
