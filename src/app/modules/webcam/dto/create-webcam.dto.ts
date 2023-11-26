import { $Enums, Prisma } from "@prisma/client";

export class CreateWebcamDto implements Prisma.WebcamCreateInput {
    connection?: $Enums.ConnectionType;
    focus_type?: $Enums.FocusType;
    fov?: number;
    os?: string[] | Prisma.WebcamCreateosInput;
    resolutions?: string[] | Prisma.WebcamCreateresolutionsInput;
}
