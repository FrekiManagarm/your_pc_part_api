import { PartialType } from '@nestjs/swagger';
import { CreatePsuDto } from './create-psu.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdatePsuDto extends PartialType(CreatePsuDto) implements Prisma.PSUUpdateInput {
    color?: string;
    efficiency?: $Enums.PSUEff;
    modular?: $Enums.PSUModul;
    type?: $Enums.PSUType;
    wattage?: number;
}
