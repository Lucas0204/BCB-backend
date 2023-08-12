import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { PlansModule } from './plans/plans.module';

@Module({
  imports: [CustomersModule, PlansModule]
})
export class AppModule {}
