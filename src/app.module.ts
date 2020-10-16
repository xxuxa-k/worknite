import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users.controller';
import { StoresController } from './stores.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, StoresController],
  providers: [AppService, UserService],
})
export class AppModule {}
