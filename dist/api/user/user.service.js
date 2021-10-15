"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_model_1 = require("./model/user.model");
const auth_service_1 = require("../auth/auth.service");
let UserService = UserService_1 = class UserService {
    constructor(userModel, AuthService) {
        this.userModel = userModel;
        this.AuthService = AuthService;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async findOne(query) {
        return await this.userModel.findOne(query).select('+password');
    }
    async find(usersFilterQuery) {
        return this.userModel.find({ usersFilterQuery });
    }
    async create(user) {
        this.logger.log('Creating user.');
        if (user.facebookId || user.googleId)
            return this.userModel.create(user);
        const hashedPassword = await this.AuthService.getHashedPassword(user.password);
        user.password = hashedPassword;
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async findOneAndUpdate(query, payload) {
        this.logger.log('Updating User.');
        return this.userModel.findOneAndUpdate(query, payload, {
            new: true,
            upsert: true,
        });
    }
    async findOneAndRemove(query) {
        return this.userModel.findOneAndRemove(query);
    }
};
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map