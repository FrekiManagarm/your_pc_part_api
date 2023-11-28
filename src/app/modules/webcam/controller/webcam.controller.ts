import { $Enums, Prisma, UserRole } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { WebcamService } from '../service/webcam.service';
import { CreateWebcamDto } from '../dto/create-webcam.dto';
import { UpdateWebcamDto } from '../dto/update-webcam.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('webcam')
export class WebcamController {
  constructor(private readonly webcamService: WebcamService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createWebcamDto: CreateWebcamDto) {
    return this.webcamService.create(createWebcamDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('connection') connection: $Enums.ConnectionType,
    @Query('focus_type') focus_type: $Enums.FocusType,
    @Query('fov') fov: number,
    @Query('resolutions') resolutions: Prisma.StringNullableListFilter,
  ) {
    return this.webcamService.findAll({
      skip,
      take,
      where: {
        connection,
        focus_type,
        fov,
        resolutions,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webcamService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebcamDto: UpdateWebcamDto) {
    return this.webcamService.update(+id, updateWebcamDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webcamService.remove(+id);
  }
}
