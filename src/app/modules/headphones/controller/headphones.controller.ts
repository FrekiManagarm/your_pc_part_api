import { $Enums, Prisma, UserRole } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { HeadphonesService } from '../service/headphones.service';
import { CreateHeadphoneDto } from '../dto/create-headphone.dto';
import { UpdateHeadphoneDto } from '../dto/update-headphone.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('headphones')
export class HeadphonesController {
  constructor(private readonly headphonesService: HeadphonesService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createHeadphoneDto: CreateHeadphoneDto) {
    return this.headphonesService.create(createHeadphoneDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('enclosure_type') enclosure_type: $Enums.EnclosureType,
    @Query('frequency_response') frequency_response: Prisma.IntNullableListFilter,
    @Query('microphone') microphone: boolean,
    @Query('noise_cancellation') noise_cancellation: boolean,
    @Query('type') type: $Enums.HeadphoneTypes,
    @Query('wireless') wireless: boolean,
  ) {
    return this.headphonesService.findAll({
      take: take,
      skip: skip,
      where: {
        enclosure_type: enclosure_type,
        frequency_response: frequency_response,
        microphone: microphone,
        noise_cancellation: noise_cancellation,
        wireless: wireless,
        type: type,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headphonesService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeadphoneDto: UpdateHeadphoneDto) {
    return this.headphonesService.update(+id, updateHeadphoneDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headphonesService.remove(+id);
  }
}
