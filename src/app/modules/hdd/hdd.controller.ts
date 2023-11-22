import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HddService } from './hdd.service';
import { CreateHddDto } from './dto/create-hdd.dto';
import { UpdateHddDto } from './dto/update-hdd.dto';

@Controller('hdd')
export class HddController {
  constructor(private readonly hddService: HddService) {}

  @Post()
  create(@Body() createHddDto: CreateHddDto) {
    return this.hddService.create(createHddDto);
  }

  @Get()
  findAll() {
    return this.hddService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hddService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHddDto: UpdateHddDto) {
    return this.hddService.update(+id, updateHddDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hddService.remove(+id);
  }
}
