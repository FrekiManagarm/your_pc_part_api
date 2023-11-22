import { Injectable } from '@nestjs/common';
import { CreateThermalPasteDto } from './dto/create-thermal-paste.dto';
import { UpdateThermalPasteDto } from './dto/update-thermal-paste.dto';

@Injectable()
export class ThermalPasteService {
  create(createThermalPasteDto: CreateThermalPasteDto) {
    return 'This action adds a new thermalPaste';
  }

  findAll() {
    return `This action returns all thermalPaste`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thermalPaste`;
  }

  update(id: number, updateThermalPasteDto: UpdateThermalPasteDto) {
    return `This action updates a #${id} thermalPaste`;
  }

  remove(id: number) {
    return `This action removes a #${id} thermalPaste`;
  }
}
