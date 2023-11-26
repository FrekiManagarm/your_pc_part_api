import { PartialType } from '@nestjs/mapped-types';
import { CreateSsdDto } from './create-ssd.dto';
import { Prisma } from '@prisma/client';

export class UpdateSsdDto extends PartialType(CreateSsdDto) implements Prisma.SSDUpdateInput {
    cache?: number;
    capacity?: number;
    form_factor?: string;
    interface?: string;
    price_per_gb?: number;
    type?: string;
}
