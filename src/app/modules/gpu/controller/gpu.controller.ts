import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { GpuService } from '../service/gpu.service';
import { CreateGpuDto } from '../dto/create-gpu.dto';
import { UpdateGpuDto } from '../dto/update-gpu.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('gpu')
export class GpuController {
  constructor(private readonly gpuService: GpuService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createGpuDto: CreateGpuDto) {
    return this.gpuService.create(createGpuDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get()
  findAll(
    @Query('boost_clock') boost_clock: number,
    @Query('core_clock') core_clock: number,
    @Query('length') length: number,
    @Query('memory') memory: number,
  ) {
    return this.gpuService.findAll({
      where: {
        boost_clock: boost_clock,
        core_clock: core_clock,
        length: length,
        memory: memory,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gpuService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGpuDto: UpdateGpuDto) {
    return this.gpuService.update(+id, updateGpuDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gpuService.remove(+id);
  }
}
