import { Logger } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './model/user.model';
import { AuthService } from '../auth/auth.service';
export declare class UserService {
    private userModel;
    private AuthService;
    logger: Logger;
    constructor(userModel: Model<UserDocument>, AuthService: AuthService);
    findOne(query: any): Promise<any>;
    find(usersFilterQuery: FilterQuery<User>): Promise<User[]>;
    create(user: any): Promise<any>;
    findOneAndUpdate(query: any, payload: any): Promise<User>;
    findOneAndRemove(query: any): Promise<any>;
}
