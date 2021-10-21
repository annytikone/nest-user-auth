import { Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly UserService;
    logger: Logger;
    constructor(UserService: UserService);
    validate(payload: JwtStrategy): Promise<any>;
}
export {};
