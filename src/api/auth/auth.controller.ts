import {
  Controller,
  Post,
  Logger,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.gaurd';
import { LocalAuthGuard } from './local-auth.gaurd';

@Controller('auth')
export class AuthController {
  logger: Logger;
  constructor(
    private readonly authService: AuthService,
  ) {
    this.logger = new Logger(AuthController.name);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<any> {
    try {
      //return req.user;
      return await this.authService.generateJwtToken(req.user);
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('viewProfile')
  async getUser(@Request() req): Promise<any> {
    return req.user;
  }
}
