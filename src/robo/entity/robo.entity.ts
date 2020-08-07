import { Elbow, Pulse } from '../enums/arm.enum';
import { Rotation, Slope } from '../enums/head.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('robo')
export class RoboEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Cabeça */
  @Column({
    type: 'enum',
    enum: Rotation,
    default: Rotation.initial,
  })
  rotation: Rotation;

  @Column({
    type: 'enum',
    enum: Slope,
    default: Slope.initial,
  })
  slope: Slope;

  /** Cotovelo Esquerdo */
  @Column({
    type: 'enum',
    enum: Elbow,
    default: Elbow.initial,
  })
  leftElbow: Elbow;

  /** Pulso Esquerdo */
  @Column({
    type: 'enum',
    enum: Pulse,
    default: Pulse.initial,
  })
  leftWrist: Pulse;

  /** Cotovelo Direito */
  @Column({
    type: 'enum',
    enum: Elbow,
    default: Elbow.initial,
  })
  rightElbow: Elbow;

  /** Pulso Direito */
  @Column({
    type: 'enum',
    enum: Pulse,
    default: Pulse.initial,
  })
  rightWrist: Pulse;
}
