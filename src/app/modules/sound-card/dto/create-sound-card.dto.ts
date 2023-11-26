import { Prisma } from "@prisma/client";

export class CreateSoundCardDto implements Prisma.SoundCardCreateInput {
    channels?: string;
    chipset?: string;
    digital_audio?: string;
    interface?: string;
    sample_rate?: number;
    snr?: number;
}
