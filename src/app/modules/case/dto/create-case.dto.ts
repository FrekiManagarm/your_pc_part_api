import { $Enums, Prisma } from "@prisma/client";

export class CreateCaseDto implements Prisma.CaseCreateInput {
    color?: string;
    external_volume?: string;
    included_PSU_W?: number;
    internal_35_bays?: number;
    side_panel?: string;
    type?: $Enums.CaseType;
}
