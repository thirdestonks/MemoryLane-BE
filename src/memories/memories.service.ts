/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateMemoryDto } from './dto/create-memory.dto';
import { UpdateMemoryDto } from './dto/update-memory.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleDB } from '../drizzle/types/drizzle';

@Injectable()
export class MemoriesService {
  create(createMemoryDto: CreateMemoryDto) {
    return 'This action adds a new memory';
  }

  findAll() {
    return `This action returns all memories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memory`;
  }

  update(id: number, updateMemoryDto: UpdateMemoryDto) {
    return `This action updates a #${id} memory`;
  }

  remove(id: number) {
    return `This action removes a #${id} memory`;
  }
}
