import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('robo')
export class RoboEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  /** Cabeça */
  @Column('varchar', { length: 32 })
  head: string;

  /** Cotovelo Esquerdo */
  @Column('varchar', { length: 32 })
  leftElbow: string;

  /** Pulso Esquerdo */
  @Column('varchar', { length: 32 })
  leftWrist: string;

  /** Cotovelo Direito */
  @Column('varchar', { length: 32 })
  rightElbow: string;

  /** Pulso Direito */
  @Column('varchar', { length: 32 })
  rightWrist: string;
}
