export type Plans = 'PREPAID' | 'POSTPAID';

export class CustomerPlan {
    id: number;
    customer_id: number;
    plan: Plans;
    balance: number;
    limit: number;
    debit: number;
    createdAt: Date;
    updatedAt: Date;
}
