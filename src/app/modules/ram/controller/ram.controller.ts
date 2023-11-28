import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { RamService } from '../service/ram.service';
import { CreateRamDto } from '../dto/create-ram.dto';
import { UpdateRamDto } from '../dto/update-ram.dto';
import { Prisma, UserRole } from '@prisma/client';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('ram')
export class RamController {
  constructor(private readonly ramService: RamService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createRamDto: CreateRamDto) {
    return this.ramService.create(createRamDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('cas_latency') cas_latency: string,
    @Query('modules') modules: Prisma.IntNullableListFilter,
    @Query('price_per_gb') price_per_gb: number,
    @Query('speed') speed: Prisma.IntNullableListFilter,
  ) {
    return this.ramService.findAll({
      skip,
      take,
      where: {
        cas_latency,
        modules,
        price_per_gb,
        speed,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ramService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRamDto: UpdateRamDto) {
    return this.ramService.update(+id, updateRamDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ramService.remove(+id);
  }
}
