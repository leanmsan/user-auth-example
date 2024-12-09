import { AuthGuard } from './auth.guard';
import { RedisService } from '../redis/redis.service';

describe('AuthGuard', () => {
  const redisService = {} as RedisService;
  expect(new AuthGuard(redisService)).toBeDefined();
});
