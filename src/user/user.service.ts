import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: Repository<User>) {}
  async getOne(id: number) {
    return await this.userRepository.findOne(id);
  }
}
