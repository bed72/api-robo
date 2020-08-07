import { Elbow, Pulse } from '../enums/arm.enum';
import { HeadComposed } from '../enums/head.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('robo')
export class RoboEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  /** Cabeça */
  @Column({
    type: "enum",
    enum: HeadComposed,
  })
  head: HeadComposed;

  /** Cotovelo Esquerdo */
  @Column({
    type: "enum",
    enum: Elbow,
  })
  leftElbow: Elbow;

  /** Pulso Esquerdo */
  @Column({
    type: "enum",
    enum: Pulse,
  })
  leftWrist: Pulse;

  /** Cotovelo Direito */
  @Column({
    type: "enum",
    enum: Elbow,
  })
  rightElbow: Elbow;

  /** Pulso Direito */
  @Column({
    type: "enum",
    enum: Pulse,
  })
  rightWrist: Pulse;
}
