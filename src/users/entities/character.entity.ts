import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity({ name: 'characters' })
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 30 })
  status: string;

  @Column({ type: 'varchar', length: 30 })
  species: string;

  @Column({ type: 'varchar', length: 30 })
  type: string;

  @Column({ type: 'varchar', length: 30 })
  gender: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

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

}
