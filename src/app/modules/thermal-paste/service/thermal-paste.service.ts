import { Injectable } from '@nestjs/common';
import { CreateThermalPasteDto } from '../dto/create-thermal-paste.dto';
import { UpdateThermalPasteDto } from '../dto/update-thermal-paste.dto';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class ThermalPasteService {
  constructor(private prisma : PrismaService) {}
  
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
