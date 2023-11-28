import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SpeakersService } from '../service/speakers.service';
import { CreateSpeakerDto } from '../dto/create-speaker.dto';
import { UpdateSpeakerDto } from '../dto/update-speaker.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('speakers')
export class SpeakersController {
  constructor(private readonly speakersService: SpeakersService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createSpeakerDto: CreateSpeakerDto) {
    return this.speakersService.create(createSpeakerDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('frequency_response') frequency_response: number,
    @Query('wattage') wattage: number,
  ) {
    return this.speakersService.findAll({
      skip,
      take,
      where: {
        frequency_response,
        wattage,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakersService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakerDto: UpdateSpeakerDto) {
    return this.speakersService.update(+id, updateSpeakerDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakersService.remove(+id);
  }
}
