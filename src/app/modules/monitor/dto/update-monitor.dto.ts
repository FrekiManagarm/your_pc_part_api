import { PartialType } from '@nestjs/swagger';
import { CreateMonitorDto } from './create-monitor.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateMonitorDto extends PartialType(CreateMonitorDto) implements Prisma.MonitorUpdateInput {
    aspect_ratio?: string;
    panel_type?: $Enums.MonitorPanelType;
    refresh_rate?: number;
    resolution?: number[] | Prisma.MonitorCreateresolutionInput;
    response_time?: number;
    screen_size?: number;
}
