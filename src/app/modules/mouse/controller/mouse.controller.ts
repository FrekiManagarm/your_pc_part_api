import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MouseService } from '../service/mouse.service';
import { CreateMouseDto } from '../dto/create-mouse.dto';
import { UpdateMouseDto } from '../dto/update-mouse.dto';

@Controller('mouse')
export class MouseController {
  constructor(private readonly mouseService: MouseService) {}

  @Post()
  create(@Body() createMouseDto: CreateMouseDto) {
    return this.mouseService.create(createMouseDto);
  }

  @Get()
  findAll() {
    return this.mouseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mouseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMouseDto: UpdateMouseDto) {
    return this.mouseService.update(+id, updateMouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mouseService.remove(+id);
  }
}
