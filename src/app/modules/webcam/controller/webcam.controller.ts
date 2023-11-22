import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebcamService } from '../service/webcam.service';
import { CreateWebcamDto } from '../dto/create-webcam.dto';
import { UpdateWebcamDto } from '../dto/update-webcam.dto';

@Controller('webcam')
export class WebcamController {
  constructor(private readonly webcamService: WebcamService) {}

  @Post()
  create(@Body() createWebcamDto: CreateWebcamDto) {
    return this.webcamService.create(createWebcamDto);
  }

  @Get()
  findAll() {
    return this.webcamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webcamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebcamDto: UpdateWebcamDto) {
    return this.webcamService.update(+id, updateWebcamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webcamService.remove(+id);
  }
}
