import { PartialType } from '@nestjs/swagger';
import { CreateHeadphoneDto } from './create-headphone.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateHeadphoneDto extends PartialType(CreateHeadphoneDto) implements Prisma.HeadphonesUpdateInput {
    color?: string;
    enclosure_type?: $Enums.EnclosureType;
    frequency_response?: number[] | Prisma.HeadphonesCreatefrequency_responseInput;
    microphone?: boolean;
    noise_cancellation?: boolean;
    type?: $Enums.HeadphoneTypes;
    wireless?: boolean;
}
