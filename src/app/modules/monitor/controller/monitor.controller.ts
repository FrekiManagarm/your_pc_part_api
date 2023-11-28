import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { MonitorService } from '../service/monitor.service';
import { CreateMonitorDto } from '../dto/create-monitor.dto';
import { UpdateMonitorDto } from '../dto/update-monitor.dto';
import { Prisma, UserRole } from '@prisma/client';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createMonitorDto: CreateMonitorDto) {
    return this.monitorService.create(createMonitorDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('refresh_rate') refresh_rate: number,
    @Query('resolution') resolution: Prisma.IntNullableListFilter,
    @Query('response_time') response_time: number,
    @Query('screen_size') screen_size: number,
  ) {
    return this.monitorService.findAll({
      skip: skip,
      take: take,
      where: {
        refresh_rate: refresh_rate,
        resolution: resolution,
        response_time: response_time,
        screen_size: screen_size,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monitorService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonitorDto: UpdateMonitorDto) {
    return this.monitorService.update(+id, updateMonitorDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monitorService.remove(+id);
  }
}
