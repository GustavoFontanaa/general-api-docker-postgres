import { IsNumber } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('films')
export class FilmsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  name: string;
  
  @Column()
  category: string;

  @Column()
  date: Date;

  @Column()
  poster: string;
}
