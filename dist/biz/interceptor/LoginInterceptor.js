"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
const JwtUtil_1 = __importDefault(require("../../util/JwtUtil"));
/**
 * token的检查和拦截
 */
let LoginInterceptor = class LoginInterceptor extends fastsaas_1.WebSocketInterceptor {
    getPaths() {
        return ['/free/', '/test/'];
    }
    async doOnBefore(param) {
        let user = await JwtUtil_1.default.decode(param === null || param === void 0 ? void 0 : param._headers.token);
        if (user == null) {
            throw new Error('用户没有登陆');
        }
        this.user = user;
    }
    isNot() {
        return true;
    }
    getUser() {
        return this.user;
    }
};
LoginInterceptor = __decorate([
    (0, fastsaas_1.Server)()
], LoginInterceptor);
exports.default = LoginInterceptor;
