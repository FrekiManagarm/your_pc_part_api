import { PartialType } from '@nestjs/swagger';
import { CreatePsuDto } from './create-psu.dto';

export class UpdatePsuDto extends PartialType(CreatePsuDto) {}
