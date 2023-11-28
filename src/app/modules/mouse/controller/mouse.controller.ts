import { $Enums, UserRole } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { MouseService } from '../service/mouse.service';
import { CreateMouseDto } from '../dto/create-mouse.dto';
import { UpdateMouseDto } from '../dto/update-mouse.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('mouse')
export class MouseController {
  constructor(private readonly mouseService: MouseService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createMouseDto: CreateMouseDto) {
    return this.mouseService.create(createMouseDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('max_dpi') max_dpi: number,
    @Query('tracking_method') tracking_method: $Enums.MouseTrackMethod,
    @Query('connection_type') connection_type: $Enums.ConnectionType,
  ) {
    return this.mouseService.findAll({
      skip,
      take,
      where: {
        max_dpi,
        tracking_method,
        connection_type,
      } 
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mouseService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMouseDto: UpdateMouseDto) {
    return this.mouseService.update(+id, updateMouseDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mouseService.remove(+id);
  }
}
