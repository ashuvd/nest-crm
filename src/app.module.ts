import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { NavigationModule } from './navigation/navigation.module';
import { UserModule } from './user/user.module';
import { SettingModule } from './setting/setting.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [NavigationModule, UserModule, SettingModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
