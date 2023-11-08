import { Injectable } from '@nestjs/common';
import { Ping } from './models/ping.model';

@Injectable()
export class PingService {
  ping(): Ping {
    return { ok: true, date: new Date() };
  }
}
