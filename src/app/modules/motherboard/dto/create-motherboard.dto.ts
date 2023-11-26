import { Prisma } from "@prisma/client";

export class CreateMotherboardDto implements Prisma.MotherboardCreateInput {
    socket?: string[] | Prisma.MotherboardCreatesocketInput;
    form_factor: string;
    max_memory?: number;
    memory_slots?: number;
    color?: string;
}
