import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from 'src/service/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma : PrismaService) {}
  
  async create(createUserDto: CreateUserDto) {
    try {
      const response = await this.prisma.user

      return response;
    } catch (error) {
      return error
    }
  }

  async login() {

  }

  async register() {

  }

  async logOut() {

  }

  async findAll(params: {
    skip: number,
    take: number,
    where: Prisma.UserWhereInput,
    orderBy: Prisma.UserOrderByWithAggregationInput,
  }) {
    try {
      const response = await this.prisma.user

      return response;
    } catch (error) {
      return error
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.user

      return response;
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const response = await this.prisma.user

      return response;
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      const response = await this.prisma.user

      return response;
    } catch (error) {
      return error
    }
  }
}
