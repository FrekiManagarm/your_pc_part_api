import { $Enums, Prisma } from "@prisma/client";

export class CreateHeadphoneDto implements Prisma.HeadphonesCreateInput {
    color?: string;
    enclosure_type?: $Enums.EnclosureType;
    frequency_response?: number[] | Prisma.HeadphonesCreatefrequency_responseInput;
    microphone?: boolean;
    noise_cancellation?: boolean;
    type?: $Enums.HeadphoneTypes;
    wireless?: boolean;
}
