import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoundCardService } from './sound-card.service';
import { CreateSoundCardDto } from './dto/create-sound-card.dto';
import { UpdateSoundCardDto } from './dto/update-sound-card.dto';

@Controller('sound-card')
export class SoundCardController {
  constructor(private readonly soundCardService: SoundCardService) {}

  @Post()
  create(@Body() createSoundCardDto: CreateSoundCardDto) {
    return this.soundCardService.create(createSoundCardDto);
  }

  @Get()
  findAll() {
    return this.soundCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soundCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoundCardDto: UpdateSoundCardDto) {
    return this.soundCardService.update(+id, updateSoundCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soundCardService.remove(+id);
  }
}
