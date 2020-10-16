import { Injectable } from '@nestjs/common';
import { User } from './user.interface'

@Injectable()
export class UserService {
  getUsers(): string {
    const dummyUsers: User[] = [
      {
        storeId: 1,
        name: 'cast_1',
        castName: 'cast_1',
        email: 'cast_1@example.com',
        deleted: false,
        type: 'cast',
        paymentSystem: 'hourly'
      }
    ]
    return JSON.stringify(dummyUsers)
  }
}
