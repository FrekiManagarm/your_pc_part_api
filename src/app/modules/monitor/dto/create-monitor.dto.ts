import { $Enums, Prisma } from "@prisma/client";

export class CreateMonitorDto implements Prisma.MonitorCreateInput {
    aspect_ratio?: string;
    panel_type?: $Enums.MonitorPanelType;
    refresh_rate?: number;
    resolution?: number[] | Prisma.MonitorCreateresolutionInput;
    response_time?: number;
    screen_size?: number;
}
