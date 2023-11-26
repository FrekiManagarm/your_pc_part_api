import { PartialType } from '@nestjs/mapped-types';
import { CreateGpuDto } from './create-gpu.dto';
import { Prisma } from '@prisma/client';

export class UpdateGpuDto extends PartialType(CreateGpuDto) implements Prisma.GPUUpdateInput {
    boost_clock?: number;
    chipset?: string;
    color?: string;
    core_clock?: number;
    length?: number;
    memory?: number;
}
