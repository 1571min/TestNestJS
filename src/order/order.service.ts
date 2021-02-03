import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class OrderService {
  constructor(private userRepository: Repository<User>) {}
  async getOne(id: number) {
    this.userRepository.findOne(id);
  }
}
