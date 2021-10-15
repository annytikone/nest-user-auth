import {
  Controller,
  Post,
  Request,
  Body,
  UseGuards,
  Get,
  Logger,
  Res,
  UploadedFile,
  UseInterceptors,
  Delete,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  logger: Logger;
  constructor(private readonly userService: UserService) {
    this.logger = new Logger(UserController.name);
  }

  @Post('create')
  async create(@Request() req): Promise<any> {
    const newUser = req.body;
    try {
      const query = { email: newUser.email };
      const isUser = await this.userService.findOne(query);
      if (isUser) throw new BadRequestException();
      const user = await this.userService.create(newUser);
      return user;
    } catch (err) {
      this.logger.error('Something went wrong in signup:', err);
      throw err;
    }
  }
}
