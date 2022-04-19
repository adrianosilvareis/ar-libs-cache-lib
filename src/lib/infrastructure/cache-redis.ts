import { cacheClient, CacheClientType } from '../../config/cache-client';
import { Cache } from '../domain/cache';

export class CacheRedis extends Cache<CacheClientType> {
  constructor() {
    super();
    this.client = cacheClient;
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
