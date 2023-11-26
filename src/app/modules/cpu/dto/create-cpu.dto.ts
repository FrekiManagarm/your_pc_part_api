import { Prisma } from "@prisma/client";

export class CreateCpuDto implements Prisma.CPUCreateInput {
    boost_clock?: number;
    core_clock?: number;
    core_count?: number;
    graphics?: boolean;
    smt?: boolean;
    tdp?: number;
    threads_count?: number;
}
