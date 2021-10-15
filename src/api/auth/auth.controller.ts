import {
  Controller,
  Post,
  Inject,
  forwardRef,
  Body,
  Logger,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  logger: Logger;
  constructor(
    private readonly authService: AuthService,
    @Inject(forwardRef(() => UserService))
    private readonly UserService: UserService
  ) {
    this.logger = new Logger(AuthController.name);
  }

  @Post('login')
  async login(@Request() req): Promise<any> {
    try {
      return await this.authService.generateJwtToken(req.user);
    } catch (error) {
      // throw error;
      throw error;
    }
  }
}
