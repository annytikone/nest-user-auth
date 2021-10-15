import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private UserService;
    private jwtService;
    constructor(UserService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    generateJwtToken(user: any): Promise<{
        access_token: string;
    }>;
    getHashedPassword(password: string): Promise<any>;
    comparePasswords(password: string, hashedPassword: string): Promise<any>;
}
