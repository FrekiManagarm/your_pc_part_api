import { PartialType } from '@nestjs/swagger';
import { CreateWebcamDto } from './create-webcam.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateWebcamDto extends PartialType(CreateWebcamDto) implements Prisma.WebcamUpdateInput {
    connection?: $Enums.ConnectionType;
    focus_type?: $Enums.FocusType;
    fov?: number;
    os?: string[] | Prisma.WebcamCreateosInput;
    resolutions?: string[] | Prisma.WebcamCreateresolutionsInput;
}
