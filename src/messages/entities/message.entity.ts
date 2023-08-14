export class Message {
    id: number;
    from_customer_id: number;
    to_phone_number: string;
    is_whatsapp: boolean;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}
