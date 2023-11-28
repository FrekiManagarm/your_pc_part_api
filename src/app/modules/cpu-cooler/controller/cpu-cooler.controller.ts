import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CpuCoolerService } from '../service/cpu-cooler.service';
import { CreateCpuCoolerDto } from '../dto/create-cpu-cooler.dto';
import { UpdateCpuCoolerDto } from '../dto/update-cpu-cooler.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('cpu-cooler')
export class CpuCoolerController {
  constructor(private readonly cpuCoolerService: CpuCoolerService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createCpuCoolerDto: CreateCpuCoolerDto) {
    return this.cpuCoolerService.create(createCpuCoolerDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR  )
  @Get()
  findAll(
    @Query('noise_level') noise_level: number,
    @Query('rpm') rpm: number,
    @Query('size') size: number,
  ) {
    return this.cpuCoolerService.findAll({
      where: {
        noise_level: noise_level,
        rpm: rpm,
        size: size,
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpuCoolerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuCoolerDto: UpdateCpuCoolerDto) {
    return this.cpuCoolerService.update(+id, updateCpuCoolerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpuCoolerService.remove(+id);
  }
}
