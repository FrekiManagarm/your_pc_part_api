import { $Enums, Prisma } from "@prisma/client";

export class CreatePsuDto implements Prisma.PSUCreateInput {
    color?: string;
    efficiency?: $Enums.PSUEff;
    modular?: $Enums.PSUModul;
    type?: $Enums.PSUType;
    wattage?: number;
}
