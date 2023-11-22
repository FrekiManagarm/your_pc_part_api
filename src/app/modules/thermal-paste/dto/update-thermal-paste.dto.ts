import { PartialType } from '@nestjs/swagger';
import { CreateThermalPasteDto } from './create-thermal-paste.dto';

export class UpdateThermalPasteDto extends PartialType(CreateThermalPasteDto) {}
