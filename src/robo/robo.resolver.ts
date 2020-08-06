import { RoboDto } from './dto/robo.dto';
import { RoboService } from './robo.service';
import { InputRobo } from './inputs/robo.input';
import { RoboEntity } from './entity/robo.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => RoboEntity)
export class RoboResolver {
  constructor(private readonly roboService: RoboService) {}

  @Query(() => [RoboDto])
  async robo(): Promise<RoboEntity[]> {
    return this.roboService.getRobo();
  }

  @Mutation(() => RoboDto)
  async createRobo(@Args('robo') robo: InputRobo): Promise<RoboEntity> {
    return this.roboService.createRobo(robo);
  }

  @Mutation(() => RoboDto)
  async updateRobo(
    @Args('id') id: string,
    @Args('robo') robo: InputRobo,
  ): Promise<RoboEntity> {
    return this.roboService.updateRobo(id, robo);
  }
}
