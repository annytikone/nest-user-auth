import { Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    logger: Logger;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<any>;
}
export {};
