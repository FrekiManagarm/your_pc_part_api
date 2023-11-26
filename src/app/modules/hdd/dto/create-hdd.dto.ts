import { Prisma } from "@prisma/client";

export class CreateHddDto implements Prisma.HDDCreateInput {
    cache?: number;
    capacity?: number;
    form_factor?: string;
    interface?: string;
    price_per_gb?: number;
    type?: string;
}
