import { Prisma } from "@prisma/client";

export class CreateSpeakerDto implements Prisma.SpeakersCreateInput {
    color?: string;
    configuration?: string;
    frequency_response?: number;
    wattage?: number;
}
