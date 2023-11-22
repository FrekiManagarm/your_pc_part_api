import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThermalPasteService } from './thermal-paste.service';
import { CreateThermalPasteDto } from './dto/create-thermal-paste.dto';
import { UpdateThermalPasteDto } from './dto/update-thermal-paste.dto';

@Controller('thermal-paste')
export class ThermalPasteController {
  constructor(private readonly thermalPasteService: ThermalPasteService) {}

  @Post()
  create(@Body() createThermalPasteDto: CreateThermalPasteDto) {
    return this.thermalPasteService.create(createThermalPasteDto);
  }

  @Get()
  findAll() {
    return this.thermalPasteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thermalPasteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThermalPasteDto: UpdateThermalPasteDto) {
    return this.thermalPasteService.update(+id, updateThermalPasteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thermalPasteService.remove(+id);
  }
}
