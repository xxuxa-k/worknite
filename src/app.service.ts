import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEndpoints(): string {
    const endpoints = {
      '/': 'list of endpoints',
      '/storegroups': 'list of store groups',
      '/stores': 'list of stores',
      '/users': 'list of users',
    }
    return JSON.stringify(endpoints)
  }
}
