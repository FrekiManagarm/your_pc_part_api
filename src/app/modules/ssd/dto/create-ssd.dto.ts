import { Prisma } from "@prisma/client";

export class CreateSsdDto implements Prisma.SSDCreateInput {
    cache?: number;
    capacity?: number;
    form_factor?: string;
    interface?: string;
    price_per_gb?: number;
    type?: string;
}
