import { $Enums, Prisma } from "@prisma/client";

export class CreateKeyboardDto implements Prisma.KeyboardCreateInput {
    backlit?: string;
    color?: string;
    connection_type?: $Enums.ConnectionType;
    style?: $Enums.KeyboardStyle;
    switches?: string;
    tenkeyless?: boolean;
}
