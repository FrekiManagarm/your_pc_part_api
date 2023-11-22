import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CpuCoolerService } from '../service/cpu-cooler.service';
import { CreateCpuCoolerDto } from '../dto/create-cpu-cooler.dto';
import { UpdateCpuCoolerDto } from '../dto/update-cpu-cooler.dto';

@Controller('cpu-cooler')
export class CpuCoolerController {
  constructor(private readonly cpuCoolerService: CpuCoolerService) {}

  @Post()
  create(@Body() createCpuCoolerDto: CreateCpuCoolerDto) {
    return this.cpuCoolerService.create(createCpuCoolerDto);
  }

  @Get()
  findAll() {
    return this.cpuCoolerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpuCoolerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuCoolerDto: UpdateCpuCoolerDto) {
    return this.cpuCoolerService.update(+id, updateCpuCoolerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpuCoolerService.remove(+id);
  }
}
