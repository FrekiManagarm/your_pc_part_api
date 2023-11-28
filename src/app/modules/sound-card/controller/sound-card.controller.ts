import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SoundCardService } from '../service/sound-card.service';
import { CreateSoundCardDto } from '../dto/create-sound-card.dto';
import { UpdateSoundCardDto } from '../dto/update-sound-card.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('sound-card')
export class SoundCardController {
  constructor(private readonly soundCardService: SoundCardService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createSoundCardDto: CreateSoundCardDto) {
    return this.soundCardService.create(createSoundCardDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('sample_rate') sample_rate: number,
    @Query('chipset') chipset: string,
    @Query('digital_audio') digital_audio: string,
    @Query('snr') snr: number,
  ) {
    return this.soundCardService.findAll({
      skip,
      take,
      where: {
        sample_rate,
        chipset,
        digital_audio,
        snr,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soundCardService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoundCardDto: UpdateSoundCardDto) {
    return this.soundCardService.update(+id, updateSoundCardDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soundCardService.remove(+id);
  }
}
