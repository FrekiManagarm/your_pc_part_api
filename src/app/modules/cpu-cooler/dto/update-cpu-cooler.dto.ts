import { PartialType } from '@nestjs/swagger';
import { CreateCpuCoolerDto } from './create-cpu-cooler.dto';
import { Prisma } from '@prisma/client';

export class UpdateCpuCoolerDto extends PartialType(CreateCpuCoolerDto) implements Prisma.CPUCoolerUpdateInput {
    color?: string;
    noise_level?: number;
    rpm?: number;
    size?: number;
}
