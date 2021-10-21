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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(UserService, jwtService) {
        this.UserService = UserService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const query = { email: email };
        const user = await this.UserService.findOne(query);
        if (!user)
            throw new common_1.NotFoundException('Email Does not exist');
        const isMatched = await this.comparePasswords(pass, user.password);
        if (!isMatched)
            throw new common_1.UnauthorizedException('Invalid Password');
        return user;
    }
    async generateJwtToken(user) {
        const payload = {
            email: user.email
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async getHashedPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    }
    async comparePasswords(password, hashedPassword) {
        return bcrypt
            .compare(password, hashedPassword)
            .then((isMatch) => {
            if (isMatch)
                return true;
            return false;
        })
            .catch((err) => err);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map