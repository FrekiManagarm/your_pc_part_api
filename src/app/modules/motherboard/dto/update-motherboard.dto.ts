import { PartialType } from '@nestjs/swagger';
import { CreateMotherboardDto } from './create-motherboard.dto';
import { Prisma } from '@prisma/client';

export class UpdateMotherboardDto extends PartialType(CreateMotherboardDto) implements Prisma.MotherboardUpdateInput {
    color?: string;
    form_factor: string;
    max_memory?: number;
    memory_slots?: number;
    socket?: Prisma.MotherboardCreatesocketInput | string[];
}
