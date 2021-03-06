import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'
import { Store } from './store.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  castName: string

  @Column()
  email: string

  @Column({ default: false })
  deleted: boolean

  @Column()
  type: string

  @Column({ default: 'hourly' })
  paymentSystem: string

  @ManyToOne(type => Store, store => store.users)
  store: Store

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
