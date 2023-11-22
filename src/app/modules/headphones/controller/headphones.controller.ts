import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeadphonesService } from '../service/headphones.service';
import { CreateHeadphoneDto } from '../dto/create-headphone.dto';
import { UpdateHeadphoneDto } from '../dto/update-headphone.dto';

@Controller('headphones')
export class HeadphonesController {
  constructor(private readonly headphonesService: HeadphonesService) {}

  @Post()
  create(@Body() createHeadphoneDto: CreateHeadphoneDto) {
    return this.headphonesService.create(createHeadphoneDto);
  }

  @Get()
  findAll() {
    return this.headphonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headphonesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeadphoneDto: UpdateHeadphoneDto) {
    return this.headphonesService.update(+id, updateHeadphoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headphonesService.remove(+id);
  }
}
