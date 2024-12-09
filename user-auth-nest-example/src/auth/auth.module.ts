import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
