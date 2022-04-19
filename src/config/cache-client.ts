import { createClient, RedisClientType } from 'redis';

export type CacheClientType = RedisClientType;

export const cacheClient = createClient({
  url: `redis://${process.env.CACHE_HOST || 'localhost'}:${process.env.CACHE_PORT || 6379}`,
}) as CacheClientType;
