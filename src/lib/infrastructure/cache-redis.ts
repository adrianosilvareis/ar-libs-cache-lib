import { createClient, RedisClientType } from 'redis';

import { Cache } from '../domain/cache';

type CacheEnv = {
  host: string;
  port: number;
}

export class CacheRedis extends Cache<RedisClientType> {
  private static environments: CacheEnv;

  public static config(env: CacheEnv) {
    this.environments = env;
  }

  constructor() {
    super();
    if (!CacheRedis.environments) {
      throw new Error('Cache.config() must be called before creating a Cache instance');
    }
    this.client = createClient({
      url: `redis://${CacheRedis.environments.host}:${CacheRedis.environments.port}`,
    });
  }

  public async set(key: string, value: string): Promise<void> {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
    await this.client.set(key, value);
    await this.client.quit();
  }

  public async get(key: string): Promise<string | null> {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
    const value = this.client.get(key);
    await this.client.quit();
    return value;
  }

  public async del(key: string): Promise<void> {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
    await this.client.del(key);
  }
}
