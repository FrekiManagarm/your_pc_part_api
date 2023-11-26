import { PartialType } from '@nestjs/swagger';
import { CreateCaseDto } from './create-case.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateCaseDto extends PartialType(CreateCaseDto) implements Prisma.CaseUpdateInput {
    color?: string;
    external_volume?: string;
    included_PSU_W?: number;
    internal_35_bays?: number;
    side_panel?: string;
    type?: $Enums.CaseType;
}
