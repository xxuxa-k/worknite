import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id)
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id)
  }

  getUsers(): string {
    const dummyUsers: User[] = [
    ]
    return JSON.stringify(dummyUsers)
  }
}
