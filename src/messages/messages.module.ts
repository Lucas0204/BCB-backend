import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { PrismaMessagesRepository } from './repositories/implementations/prisma-messages-repository';
import { PrismaService } from 'database/prisma/prisma-service';
import { PrismaPlansRepository } from 'src/plans/repositories/implementations/prisma-plans-repository';
import { MessageProvider } from './providers/message-provider';

@Module({
    controllers: [MessagesController],
    providers: [
        MessagesService,
        MessageProvider,
        PrismaService,
        PrismaMessagesRepository,
        PrismaPlansRepository
    ]
})
export class MessagesModule {}
