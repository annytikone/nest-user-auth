import { Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    logger: Logger;
    constructor(authService: AuthService);
    login(req: any): Promise<any>;
    getUser(req: any): Promise<any>;
}
