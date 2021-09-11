import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn
} from 'typeorm';

import { User } from './user.entity';
import { Category } from './category.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  //@ManyToOne(() => User, (user) => user.courses)
  //@JoinColumn({ name: 'user_id' })
  //user: User;

  @ManyToOne(() => Category, (category) => category.courses)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
