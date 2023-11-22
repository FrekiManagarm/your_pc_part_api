import { PartialType } from '@nestjs/swagger';
import { CreateCpuCoolerDto } from './create-cpu-cooler.dto';

export class UpdateCpuCoolerDto extends PartialType(CreateCpuCoolerDto) {}
