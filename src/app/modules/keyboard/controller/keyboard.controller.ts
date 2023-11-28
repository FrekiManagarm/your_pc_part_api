import { $Enums, Prisma, UserRole } from '@prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { KeyboardService } from '../service/keyboard.service';
import { CreateKeyboardDto } from '../dto/create-keyboard.dto';
import { UpdateKeyboardDto } from '../dto/update-keyboard.dto';
import { AccessTokenGuard } from 'src/app/common/guards/accessToken.guard';
import { RolesGuard } from 'src/app/common/guards/roles.guard';
import { Roles } from 'src/app/common/decorators/roles.decorators';

@Controller('keyboard')
export class KeyboardController {
  constructor(private readonly keyboardService: KeyboardService) {}

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Post()
  create(@Body() createKeyboardDto: CreateKeyboardDto) {
    return this.keyboardService.create(createKeyboardDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get()
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number,
    @Query('connection_type') connection_type: $Enums.ConnectionType,
    @Query('tenkeyless') tenkeyless: boolean,
    @Query('switches') switches: Prisma.StringNullableFilter,
  ) {
    return this.keyboardService.findAll({
      skip: skip,
      take: take,
      where: {
        connection_type: connection_type,
        tenkeyless: tenkeyless,
        switches: switches,
      }
    });
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR, UserRole.CLIENT)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keyboardService.findOne(+id);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeyboardDto: UpdateKeyboardDto) {
    return this.keyboardService.update(+id, updateKeyboardDto);
  }

  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.ADMINISTRATOR, UserRole.MODERATOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keyboardService.remove(+id);
  }
}
