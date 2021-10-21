import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  logger: Logger;
  constructor(@Inject(forwardRef(() => UserService))
  private readonly UserService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'JWT_SECRET',
    });
    this.logger = new Logger(JwtStrategy.name);
  }

  async validate(payload: JwtStrategy) {
    this.logger.log('Validate passport:', payload);
    return await this.UserService.findOne({ email: payload.email });
  }
}
