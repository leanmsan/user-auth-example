import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [DatabaseModule, RedisModule, AuthModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
