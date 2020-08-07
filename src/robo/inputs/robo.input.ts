import { Elbow, Pulse } from '../enums/arm.enum';
import { HeadComposed } from '../enums/head.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputRobo {
  /** Cabeça */
  @Field(() => String)
  readonly id: string;
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
