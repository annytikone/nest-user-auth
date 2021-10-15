import { Strategy } from 'passport-local';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  HttpException,
  Logger
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  logger: Logger;
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
    this.logger = new Logger(LocalStrategy.name)
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    /* if (!user) {
      throw new UnauthorizedException(new Error('Invalid Password'));
    }*/
    this.logger.log('Logged In USer ,checking at local auth:', user);
    return user;
  }
}
