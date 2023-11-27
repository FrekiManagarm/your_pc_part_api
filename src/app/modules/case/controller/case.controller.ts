import { $Enums, UserRole } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CaseService } from '../service/case.service';
import { CreateCaseDto } from '../dto/create-case.dto';
import { UpdateCaseDto } from '../dto/update-case.dto';
import { Roles } from 'src/app/common/decorators/roles.decorators';
import { RoleType } from 'src/app/common/enums/role.enum';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';

@Controller('case')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Post()
  create(@Body() createCaseDto: CreateCaseDto) {
    return this.caseService.create(createCaseDto);
  }

  @UseGuards(AccessTokenGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.CLIENT, UserRole.MODERATOR)
  @Get()
  findAll(@Query('color') color: string, @Query('type') type: $Enums.CaseType) {
    return this.caseService.findAll({
      where: {
        color: color,
        type: type,
      },
    });
  }

  @UseGuards(AccessTokenGuard)
  @Roles(UserRole.CLIENT, UserRole.ADMINISTRATOR)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard)
  @Roles(UserRole.MODERATOR, UserRole.ADMINISTRATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseDto: UpdateCaseDto) {
    return this.caseService.update(+id, updateCaseDto);
  }

  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseService.remove(+id);
  }
}
