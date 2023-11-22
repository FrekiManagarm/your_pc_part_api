import { PartialType } from '@nestjs/mapped-types';
import { CreateHddDto } from './create-hdd.dto';

export class UpdateHddDto extends PartialType(CreateHddDto) {}
