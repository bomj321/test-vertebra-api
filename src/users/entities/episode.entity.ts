import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinColumn,
  JoinTable,
  ManyToOne
} from "typeorm";

import { Character } from './character.entity';
import { Location } from './location.entity';


@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
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

  @ManyToOne(() => Location, (location) => location.episodes)
  @JoinColumn({ name: 'location_id' })
  location: Location;


  @ManyToMany(() => Character, (character) => character.episodes)
  @JoinTable({
    name: 'episodes_characters',
    joinColumn: {
      name: 'episode_id'
    },
    inverseJoinColumn: {
      name: 'character_id'
    }
  })
  characters: Character[];



}
