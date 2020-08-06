import { join } from 'path';
import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      context: ({ req, res }) => ({ req, res }),
      typePaths: ['./src/*/*.graphql'], // Path for gql schema files
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        // Will generate .ts types from gql schema files
        path: join(process.cwd(), 'src/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
      cors: false,
      debug: true,
      playground: true,
      introspection: true,
    };
  }
}
