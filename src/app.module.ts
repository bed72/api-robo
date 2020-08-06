import { Module } from '@nestjs/common';
import { RoboModule } from './robo/robo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    RoboModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
