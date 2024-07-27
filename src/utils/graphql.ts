import { GraphQLClient } from 'graphql-request';

const endpoint = 'moonlaunch-indexer-production.up.railway.app/';

export const client = new GraphQLClient(endpoint);