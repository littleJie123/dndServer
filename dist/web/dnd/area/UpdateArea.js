"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
const Admin_1 = require("../../../decorator/Admin");
let default_1 = class extends fastsaas_1.Control {
    async doExecute(req, resp) {
        let param = this._param;
        this.areaDao.update({
            areaId: param.areaId,
            name: param.name,
            remark: param.remark
        });
    }
};
__decorate([
    (0, fastsaas_1.Bean)()
], default_1.prototype, "areaDao", void 0);
default_1 = __decorate([
    (0, Admin_1.Admin)()
], default_1);
exports.default = default_1;
