import { Cache } from '../../src';

describe('Cache', () => {
  beforeAll(() => {
    Cache.config({
      host: 'localhost',
      port: 6379,
    });
  });

  it('should do something', async () => {
    const cache = new Cache();
    await cache.set('key', 'value');
    const value = await cache.get('key');
    expect(value).toBe('value');
  });
});
