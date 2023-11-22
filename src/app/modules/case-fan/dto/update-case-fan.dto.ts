import { PartialType } from '@nestjs/swagger';
import { CreateCaseFanDto } from './create-case-fan.dto';

export class UpdateCaseFanDto extends PartialType(CreateCaseFanDto) {}
