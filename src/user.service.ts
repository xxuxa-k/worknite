import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    const dummyUsers = [
    ]
    return JSON.stringify(dummyUsers)
  }
}