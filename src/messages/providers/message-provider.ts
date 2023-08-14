import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageProvider {
    async send(): Promise<void> {};
}
