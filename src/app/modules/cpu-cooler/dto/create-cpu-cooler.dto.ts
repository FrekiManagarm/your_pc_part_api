import { Prisma } from "@prisma/client";

export class CreateCpuCoolerDto implements Prisma.CPUCoolerCreateInput {
    color?: string;
    noise_level?: number;
    rpm?: number;
    size?: number;
}
