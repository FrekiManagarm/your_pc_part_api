import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { HddService } from '../service/hdd.service';
import { CreateHddDto } from '../dto/create-hdd.dto';
import { UpdateHddDto } from '../dto/update-hdd.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('hdd')
export class HddController {
  constructor(private readonly hddService: HddService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createHddDto: CreateHddDto) {
    return this.hddService.create(createHddDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get()
  findAll(
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('cache') cache: number,
    @Query('capacity') capacity: number,
    @Query('price_per_gb') price: number,
    @Query('type') type: string,
  ) {
    return this.hddService.findAll({
      take: take,
      skip: skip,
      where: {
        cache: cache,
        capacity: capacity,
        price_per_gb: price,
        type: type,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hddService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHddDto: UpdateHddDto) {
    return this.hddService.update(+id, updateHddDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hddService.remove(+id);
  }
}
