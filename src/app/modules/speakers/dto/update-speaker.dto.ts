import { PartialType } from '@nestjs/swagger';
import { CreateSpeakerDto } from './create-speaker.dto';
import { Prisma } from '@prisma/client';

export class UpdateSpeakerDto extends PartialType(CreateSpeakerDto) implements Prisma.SpeakersUpdateInput {
    color?: string;
    configuration?: string;
    frequency_response?: number;
    wattage?: number;
}
