import { Module } from '@nestjs/common';
import { DateScalar } from '~src/common/scalars /date.scalar';
import { PingResolver } from './ping.resolver';
import { PingService } from './ping.service';

@Module({
  providers: [PingResolver, PingService, DateScalar],
})
export class PingModule {}
