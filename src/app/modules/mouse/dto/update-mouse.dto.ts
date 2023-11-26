import { PartialType } from '@nestjs/swagger';
import { CreateMouseDto } from './create-mouse.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateMouseDto extends PartialType(CreateMouseDto) implements Prisma.MouseUpdateInput {
    color?: string;
    connection_type?: $Enums.ConnectionType;
    hand_orientation?: $Enums.MouseOrientation;
    max_dpi?: number;
    tracking_method?: $Enums.MouseTrackMethod;
}
