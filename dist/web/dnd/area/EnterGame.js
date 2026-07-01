"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
class default_1 extends fastsaas_1.Control {
    async doExecute(req, resp) {
        let users = this.socketContext.getUser();
        users = await this.usersSearcher.getById(users.usersId, ['usersId', 'areaId', 'name']);
        await this.areaDomain.enter(users, await this.getArea(users));
    }
    async getArea(user) {
        if (user.areaId != 0) {
            return this.areaSearcher.getById(user.areaId);
        }
        else {
            let list = await this.areaSearcher.findCoor({
                x: 0,
                y: 0,
                z: 0
            });
            return list[0];
        }
    }
}
exports.default = default_1;
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "areaDomain", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "areaSearcher", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "usersSearcher", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "socketContext", void 0);
