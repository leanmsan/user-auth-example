import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly client: Redis.Redis;

  constructor() {
    this.client = new Redis.default({
      host: 'localhost', // Cambia esto según la configuración de tu servidor Redis
      port: 6379,
      db: 1,
    });
  }

  getClient(): Redis.Redis {
    return this.client;
  }
}
