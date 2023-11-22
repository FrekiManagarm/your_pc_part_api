import { PartialType } from '@nestjs/swagger';
import { CreateMotherboardDto } from './create-motherboard.dto';

export class UpdateMotherboardDto extends PartialType(CreateMotherboardDto) {}
