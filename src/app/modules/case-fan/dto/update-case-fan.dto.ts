import { PartialType } from '@nestjs/swagger';
import { CreateCaseFanDto } from './create-case-fan.dto';
import { Prisma } from '@prisma/client';

export class UpdateCaseFanDto extends PartialType(CreateCaseFanDto) implements Prisma.CaseFanUpdateInput {
    airflow?: number[] | Prisma.CaseFanCreateairflowInput;
    color?: string;
    rpm?: number[] | Prisma.CaseFanCreaterpmInput;
    size?: number;
}
