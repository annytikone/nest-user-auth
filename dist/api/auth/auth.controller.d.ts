import { Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private readonly authService;
    private readonly UserService;
    logger: Logger;
    constructor(authService: AuthService, UserService: UserService);
    login(req: any): Promise<any>;
}
