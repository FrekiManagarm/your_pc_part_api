import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SsdService } from '../service/ssd.service';
import { CreateSsdDto } from '../dto/create-ssd.dto';
import { UpdateSsdDto } from '../dto/update-ssd.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('ssd')
export class SsdController {
  constructor(private readonly ssdService: SsdService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createSsdDto: CreateSsdDto) {
    return this.ssdService.create(createSsdDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('cache') cache: number,
    @Query('capacity') capacity: number,
    @Query('price_per_rgb') price_per_gb: number,
    @Query('type') type: string,
  ) {
    return this.ssdService.findAll({
      skip,
      take,
      where: {
        cache,
        capacity,
        price_per_gb,
        type,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ssdService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSsdDto: UpdateSsdDto) {
    return this.ssdService.update(+id, updateSsdDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ssdService.remove(+id);
  }
}
