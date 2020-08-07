import { Elbow, Pulse } from '../enums/arm.enum';
import { HeadComposed } from '../enums/head.enum';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
export class RoboDto {
  @Field(() => String)
  readonly id?: string;
  /** Cabeça */
  @Field(() => HeadComposed)
  readonly head: HeadComposed;
  /** Cotovelo Esquerdo */
  @Field(() => Elbow)
  readonly leftElbow: Elbow;
  /** Pulso Esquerdo */
  @Field(() => Pulse)
  readonly leftWrist: Pulse;
  /** Cotovelo Direito */
  @Field(() => Elbow)
  readonly rightElbow: Elbow;
  /** Pulso Direito */
  @Field(() => Pulse)
  readonly rightWrist: Pulse;
}
