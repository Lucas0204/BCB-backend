import { Controller, Post, Body, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Post()
    async sendMessage(@Body() createMessageDto: CreateMessageDto) {
        try {
            return await this.messagesService.sendMessage(createMessageDto);
        } catch (err) {
            if (err instanceof BadRequestException) throw err;

            throw new InternalServerErrorException('Something went wrong!');
        }
    }
}
