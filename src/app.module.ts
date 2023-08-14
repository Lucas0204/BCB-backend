import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { PlansModule } from './plans/plans.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [CustomersModule, PlansModule, MessagesModule]
})
export class AppModule {}
