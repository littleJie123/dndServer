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
const UsersPojo_1 = __importDefault(require("../pojo/UsersPojo"));
let UsersDao = class UsersDao extends fastsaas_1.MySqlDao {
    constructor() {
        super({
            ids: ['users_id'],
            tableName: 'users',
            Pojo: UsersPojo_1.default,
            poolName: 'mysql'
        });
    }
};
UsersDao = __decorate([
    (0, fastsaas_1.ContextId)(),
    (0, fastsaas_1.SysTime)(),
    (0, fastsaas_1.Server)()
], UsersDao);
exports.default = UsersDao;
