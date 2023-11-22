import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseFanService } from '../service/case-fan.service';
import { CreateCaseFanDto } from '../dto/create-case-fan.dto';
import { UpdateCaseFanDto } from '../dto/update-case-fan.dto';

@Controller('case-fan')
export class CaseFanController {
  constructor(private readonly caseFanService: CaseFanService) {}

  @Post()
  create(@Body() createCaseFanDto: CreateCaseFanDto) {
    return this.caseFanService.create(createCaseFanDto);
  }

  @Get()
  findAll() {
    return this.caseFanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseFanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseFanDto: UpdateCaseFanDto) {
    return this.caseFanService.update(+id, updateCaseFanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseFanService.remove(+id);
  }
}
