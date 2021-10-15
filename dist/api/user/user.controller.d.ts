import { Logger } from '@nestjs/common';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    logger: Logger;
    constructor(userService: UserService);
    create(req: any): Promise<any>;
}
