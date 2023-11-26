import { PartialType } from '@nestjs/swagger';
import { CreateSoundCardDto } from './create-sound-card.dto';
import { Prisma } from '@prisma/client';

export class UpdateSoundCardDto extends PartialType(CreateSoundCardDto) implements Prisma.SoundCardUpdateInput {
    channels?: string;
    chipset?: string;
    digital_audio?: string;
    interface?: string;
    sample_rate?: number;
    snr?: number;
}
