import { PartialType } from '@nestjs/swagger';
import { CreateHeadphoneDto } from './create-headphone.dto';

export class UpdateHeadphoneDto extends PartialType(CreateHeadphoneDto) {}
