import { $Enums, Prisma } from "@prisma/client";

export class CreateMouseDto implements Prisma.MouseCreateInput {
    tracking_method?: $Enums.MouseTrackMethod;
    color?: string;
    connection_type?: $Enums.ConnectionType;
    hand_orientation?: $Enums.MouseOrientation;
    max_dpi?: number;
}
