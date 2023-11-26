import { PartialType } from '@nestjs/mapped-types';
import { CreateCpuDto } from './create-cpu.dto';
import { Prisma } from '@prisma/client';

export class UpdateCpuDto extends PartialType(CreateCpuDto) implements Prisma.CPUUpdateInput {
    boost_clock?: number;
    core_clock?: number;
    core_count?: number;
    graphics?: boolean;
    smt?: boolean;
    tdp?: number;
    threads_count?: number;
}
