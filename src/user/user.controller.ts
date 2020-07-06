import { UserService } from './user.service';
import { Controller, Get, Param, Post, Body, Res, HttpStatus, Delete, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import User from '../models/User';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  find(): Promise<User[]> {
    return this.userService.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(+id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string, @Res() res: Response): Promise<User> {
    const user = await this.userService.deleteById(+id);
    if (!user) {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Пользователь не найден' });
      return;
    }
    return user;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<void> {
    if (createUserDto.password !== createUserDto.repeatPassword) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Пароли не совпадают' });
      return;
    }
    delete createUserDto.repeatPassword;
    const user = await this.userService.createUser(createUserDto);
    delete user.password;
    res.status(HttpStatus.CREATED).json({ user });
  }
}
