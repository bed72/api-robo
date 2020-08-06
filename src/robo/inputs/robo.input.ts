import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputRobo {
  /** Cabeça */
  @Field(() => String)
  readonly id: string;
  /** Cabeça */
  @Field(() => String)
  readonly head: string;
  /** Cotovelo Esquerdo */
  @Field(() => String)
  readonly leftElbow: string;
  /** Pulso Esquerdo */
  @Field(() => String)
  readonly leftWrist: string;
  /** Cotovelo Direito */
  @Field(() => String)
  readonly rightElbow: string;
  /** Pulso Direito */
  @Field(() => String)
  readonly rightWrist: string;
}
