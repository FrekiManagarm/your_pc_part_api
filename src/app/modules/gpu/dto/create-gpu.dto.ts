import { Prisma } from "@prisma/client";

export class CreateGpuDto implements Prisma.GPUCreateInput {
    boost_clock?: number;
    chipset?: string;
    color?: string;
    core_clock?: number;
    length?: number;
    memory?: number;
}
