import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

import { CacheClientType, cacheClient } from '../src/config/cache-client';

jest.mock('../src/config/cache-client', () => ({
  cacheClient: mockDeep<CacheClientType>(),
}));

export const cacheMockClient = cacheClient as unknown as DeepMockProxy<CacheClientType>;
