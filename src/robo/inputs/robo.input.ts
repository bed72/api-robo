import { Elbow, Pulse } from '../enums/arm.enum';
import { Field, InputType } from '@nestjs/graphql';
import { Rotation, Slope } from '../enums/head.enum';

@InputType()
export class InputRobo {
  /** Cabeça */
  @Field(() => String)
  readonly id: string;
  /** Cabeça */
  @Field(() => Rotation)
  readonly rotation: Rotation;
  @Field(() => Slope)
  readonly slope: Slope;
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
