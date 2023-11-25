import { Injectable } from '@nestjs/common';
import { CreateCaseDto } from '../dto/create-case.dto';
import { UpdateCaseDto } from '../dto/update-case.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Case, CaseType, Prisma } from '@prisma/client';

@Injectable()
export class CaseService {
  constructor(private prisma: PrismaService) {}

  async create(createCaseDto: CreateCaseDto) : Promise<Case> {
    const response : Case = await this.prisma.case.create(createCaseDto);

    return response
  }

  async findAll(params: {
    where?: Prisma.CaseWhereInput,
  }) : Promise<Case[]> {
    const { where } = params;
    const response = await this.prisma.case.findMany({
      where,
    })

    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} case`;
  }

  update(id: number, updateCaseDto: UpdateCaseDto) {
    return `This action updates a #${id} case`;
  }

  remove(id: number) {
    return `This action removes a #${id} case`;
  }
}
