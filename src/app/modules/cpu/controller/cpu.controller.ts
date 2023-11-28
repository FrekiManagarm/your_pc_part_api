import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CpuService } from '../service/cpu.service';
import { CreateCpuDto } from '../dto/create-cpu.dto';
import { UpdateCpuDto } from '../dto/update-cpu.dto';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';

@Controller('cpu')
export class CpuController {
  constructor(private readonly cpuService: CpuService) { }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createCpuDto: CreateCpuDto) {
    return this.cpuService.create(createCpuDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get()
  findAll(
    @Query('boost_clock') boost_clock?: number, 
    @Query('graphics') graphics?: boolean, 
    @Query('core_count') core_count?: number,
    @Query('tdp') tdp?: number,
    @Query('threads_count') threads_count?: number,
    ) {
    return this.cpuService.findAll({
      where: {
        boost_clock: boost_clock,
        graphics: graphics,
        core_count: core_count,
        tdp: tdp,
        threads_count: threads_count,
      },
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpuService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuDto: UpdateCpuDto) {
    return this.cpuService.update(+id, updateCpuDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpuService.remove(+id);
  }
}
