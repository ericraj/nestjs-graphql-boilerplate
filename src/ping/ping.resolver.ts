import { Query, Resolver } from '@nestjs/graphql';
import { Ping } from './models/ping.model';
import { PingService } from './ping.service';

@Resolver(() => Ping)
export class PingResolver {
  constructor(private readonly pingService: PingService) {}

  @Query(() => Ping)
  ping(): Ping {
    return this.pingService.ping();
  }
}
