import { Prisma } from './../../../../../node_modules/.prisma/client/index.d';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CaseFanService } from '../service/case-fan.service';
import { CreateCaseFanDto } from '../dto/create-case-fan.dto';
import { UpdateCaseFanDto } from '../dto/update-case-fan.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { UserRole } from '@prisma/client';

@Controller('case-fan')
export class CaseFanController {
  constructor(private readonly caseFanService: CaseFanService) {}

  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Post()
  create(@Body() createCaseFanDto: CreateCaseFanDto) {
    return this.caseFanService.create(createCaseFanDto);
  }

  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Get()
  findAll(@Query('rpm') rpm: Prisma.IntNullableListFilter, @Query('color') color: string, @Query('size') size: Prisma.IntNullableFilter) {
    return this.caseFanService.findAll({
      where: {
        rpm: rpm,
        color: color,
        size: size
      },
    });
  }

  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseFanService.findOne(+id);
  }

  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseFanDto: UpdateCaseFanDto) {
    return this.caseFanService.update(+id, updateCaseFanDto);
  }

  @Roles(UserRole.ADMINISTRATOR)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseFanService.remove(+id);
  }
}
