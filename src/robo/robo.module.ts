import { Module } from '@nestjs/common';
import { RoboService } from './robo.service';
import { RoboResolver } from './robo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoboEntity } from './entity/robo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoboEntity])],
  providers: [RoboResolver, RoboService],
})
export class RoboModule {}
