import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { MotherboardService } from '../service/motherboard.service';
import { CreateMotherboardDto } from '../dto/create-motherboard.dto';
import { UpdateMotherboardDto } from '../dto/update-motherboard.dto';
import { Prisma, UserRole } from '@prisma/client';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('motherboard')
export class MotherboardController {
  constructor(private readonly motherboardService: MotherboardService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createMotherboardDto: CreateMotherboardDto) {
    return this.motherboardService.create(createMotherboardDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('max_memory') max_memory: number,
    @Query('memory_slots') memory_slots: number,
    @Query('socket') socket: Prisma.StringNullableListFilter,
  ) {
    return this.motherboardService.findAll({
      skip,
      take,
      where: {
        max_memory,
        memory_slots,
        socket,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motherboardService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotherboardDto: UpdateMotherboardDto) {
    return this.motherboardService.update(+id, updateMotherboardDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motherboardService.remove(+id);
  }
}
