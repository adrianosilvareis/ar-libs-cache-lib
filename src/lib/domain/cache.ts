import { injectable } from 'inversify';

@injectable()
export abstract class Cache<T> {
  protected client!: T;

  public abstract set(key: string, value: string): Promise<void>

  public abstract get(key: string): Promise<string | null>

  public abstract del(key: string): Promise<void>
}
