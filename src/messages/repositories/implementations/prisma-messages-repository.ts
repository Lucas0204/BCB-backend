import { CreateMessageDto } from "src/messages/dto/create-message.dto";
import { MessagesRepository } from "../messages-repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "database/prisma/prisma-service";

@Injectable()
export class PrismaMessagesRepository implements MessagesRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async create(data: CreateMessageDto): Promise<void> {
        await this.prisma.messages.create({ data });
    }
}
