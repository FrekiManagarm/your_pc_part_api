import { Prisma } from "@prisma/client";

export class CreateRamDto implements Prisma.RAMCreateInput {
    cas_latency?: string;
    color?: string;
    first_word_latency?: string;
    modules?: number[] | Prisma.RAMCreatemodulesInput;
    price_per_gb?: number;
    speed?: number[] | Prisma.RAMCreatespeedInput;
}
