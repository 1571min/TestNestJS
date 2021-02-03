import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    name: 'NAME',
  })
  name: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
