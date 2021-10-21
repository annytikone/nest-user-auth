declare const LocalAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalAuthGuard extends LocalAuthGuard_base {
    handleRequest(err: any, user: any, info: any, context: any, status: any): any;
}
export {};
