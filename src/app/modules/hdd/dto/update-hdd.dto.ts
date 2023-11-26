import { PartialType } from '@nestjs/mapped-types';
import { CreateHddDto } from './create-hdd.dto';
import { Prisma } from '@prisma/client';

export class UpdateHddDto extends PartialType(CreateHddDto) implements Prisma.HDDUpdateInput {
    cache?: number;
    capacity?: number;
    form_factor?: string;
    interface?: string;
    price_per_gb?: number;
    type?: string;
}
