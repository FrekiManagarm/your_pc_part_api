import { $Enums, UserRole } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { PsuService } from '../service/psu.service';
import { CreatePsuDto } from '../dto/create-psu.dto';
import { UpdatePsuDto } from '../dto/update-psu.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { RolesGuard } from 'src/app/common/guards/roles.guard';

@Controller('psu')
export class PsuController {
  constructor(private readonly psuService: PsuService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createPsuDto: CreatePsuDto) {
    return this.psuService.create(createPsuDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('efficiency') efficiency: $Enums.PSUEff,
    @Query('modular') modular: $Enums.PSUModul,
    @Query('wattage') wattage: number,
    @Query('type') type: $Enums.PSUType,
  ) {
    return this.psuService.findAll({
      skip,
      take,
      where: {
        efficiency,
        modular,
        wattage,
        type,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psuService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsuDto: UpdatePsuDto) {
    return this.psuService.update(+id, updatePsuDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psuService.remove(+id);
  }
}
