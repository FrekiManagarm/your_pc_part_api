import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ThermalPasteService } from '../service/thermal-paste.service';
import { CreateThermalPasteDto } from '../dto/create-thermal-paste.dto';
import { UpdateThermalPasteDto } from '../dto/update-thermal-paste.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('thermal-paste')
export class ThermalPasteController {
  constructor(private readonly thermalPasteService: ThermalPasteService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createThermalPasteDto: CreateThermalPasteDto) {
    return this.thermalPasteService.create(createThermalPasteDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('amount') amount: number,
  ) {
    return this.thermalPasteService.findAll({
      skip,
      take,
      where: {
        amount,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thermalPasteService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThermalPasteDto: UpdateThermalPasteDto) {
    return this.thermalPasteService.update(+id, updateThermalPasteDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thermalPasteService.remove(+id);
  }
}
