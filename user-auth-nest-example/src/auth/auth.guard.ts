/* eslint-disable no-unused-vars */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import * as cookie from 'cookie';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly redisService: RedisService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookies = request.headers.cookie;

    if (!cookies) {
      throw new UnauthorizedException('Cookies are missing');
    }

    const { sessionid } = cookie.parse(cookies);

    if (!sessionid) {
      throw new UnauthorizedException('Session ID is missing');
    }

    // Construir la clave completa de la sesión en Redis
    const redisSessionKey = `:1:django.contrib.sessions.cache${sessionid}`;

    const sessionData = await this.redisService
      .getClient()
      .get(redisSessionKey);

    if (!sessionData) {
      throw new UnauthorizedException('Invalid session ID');
    }

    return true;
  }
}
