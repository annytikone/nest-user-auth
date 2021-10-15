import { Logger } from '@nestjs/common';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    logger: Logger;
    constructor();
    validate(payload: JwtStrategy): Promise<JwtStrategy>;
}
export {};
