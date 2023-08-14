import { CreateMessageDto } from "../dto/create-message.dto";

export interface MessagesRepository {
    create(data: CreateMessageDto): Promise<void>;
}
