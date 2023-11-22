import { PartialType } from '@nestjs/swagger';
import { CreateWebcamDto } from './create-webcam.dto';

export class UpdateWebcamDto extends PartialType(CreateWebcamDto) {}
