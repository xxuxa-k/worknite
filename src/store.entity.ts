import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  address: string

  @Column({ default: false })
  deleted: boolean

  @Column({ default: 'hourly' })
  paymentSystem: string

  @OneToMany(type => User, user => user.store)
  users: User[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
