import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { AppController } from './app.controller';
import { UsersController } from './users.controller';
import { StoresController } from './stores.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { UsersModule } from './users.module';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User],
    }),
    UsersModule
  ],
  controllers: [AppController, UsersController, StoresController],
  providers: [AppService, UserService],
})
export class AppModule {}
