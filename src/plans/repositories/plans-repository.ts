import { CreatePlanDto } from "../dto/create-plan.dto";

export interface PlansRepository {
    create(data: CreatePlanDto): Promise<void>;
}
