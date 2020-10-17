import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

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

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
