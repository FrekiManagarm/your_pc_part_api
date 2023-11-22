import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeyboardService } from '../service/keyboard.service';
import { CreateKeyboardDto } from '../dto/create-keyboard.dto';
import { UpdateKeyboardDto } from '../dto/update-keyboard.dto';

@Controller('keyboard')
export class KeyboardController {
  constructor(private readonly keyboardService: KeyboardService) {}

  @Post()
  create(@Body() createKeyboardDto: CreateKeyboardDto) {
    return this.keyboardService.create(createKeyboardDto);
  }

  @Get()
  findAll() {
    return this.keyboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keyboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeyboardDto: UpdateKeyboardDto) {
    return this.keyboardService.update(+id, updateKeyboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keyboardService.remove(+id);
  }
}
