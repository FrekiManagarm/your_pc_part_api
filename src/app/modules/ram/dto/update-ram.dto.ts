import { PartialType } from '@nestjs/mapped-types';
import { CreateRamDto } from './create-ram.dto';
import { Prisma } from '@prisma/client';

export class UpdateRamDto extends PartialType(CreateRamDto) implements Prisma.RAMUpdateInput {
    cas_latency?: string;
    color?: string;
    first_word_latency?: string;
    modules?: number[] | Prisma.RAMCreatemodulesInput;
    price_per_gb?: number;
    speed?: number[] | Prisma.RAMCreatespeedInput;
}
