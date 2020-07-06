import { Controller, Post, Get, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Body() authUserDto: AuthUserDto): Promise<{ access_token: string } | UnauthorizedException> {
    const user = await this.authService.validateUser(authUserDto.login, authUserDto.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
