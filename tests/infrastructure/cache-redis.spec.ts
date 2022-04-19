import { Cache } from '../../src';
import { cacheMockClient } from '../setup-after';

describe('Cache', () => {
  const cache = new Cache();

  it('should be able to return a value cached', async () => {
    cacheMockClient.get.mockResolvedValueOnce('value');
    const value = await cache.get('key');
    expect(value).toBe('value');
  });
});
