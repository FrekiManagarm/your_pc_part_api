import { PartialType } from '@nestjs/swagger';
import { CreateSoundCardDto } from './create-sound-card.dto';

export class UpdateSoundCardDto extends PartialType(CreateSoundCardDto) {}
