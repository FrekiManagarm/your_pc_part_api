import { PartialType } from '@nestjs/swagger';
import { CreateKeyboardDto } from './create-keyboard.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateKeyboardDto extends PartialType(CreateKeyboardDto) implements Prisma.KeyboardUpdateInput {
    backlit?: string;
    color?: string;
    connection_type?: $Enums.ConnectionType;
    setups?: Prisma.SetupUpdateManyWithoutKeyboardNestedInput;
    style?: $Enums.KeyboardStyle;
    switches?: string;
    tenkeyless?: boolean;
}
