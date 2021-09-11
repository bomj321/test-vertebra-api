import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';

import { User } from './user.entity';
import { Course } from './course.entity';

@Entity()
export class Category {
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

  //@ManyToOne(() => User, (user) => user.categories)
  //@JoinColumn({ name: 'user_id' })
  //user: User;

  @OneToMany(() => Course, (course) => course.category)
  courses: Course[];
}
