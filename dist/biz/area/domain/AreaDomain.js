"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
let AreaDomain = class AreaDomain extends fastsaas_1.BaseDomain {
    constructor() {
        super(...arguments);
        this.events = {
            /**
             * 告诉其他人user来了
             */
            enter: 'Area.Room.enter',
            /**
             * 告诉其他人user走了
             */
            leave: 'Area.Room.leave',
            /**
             * 告诉user区域变了
             */
            change: 'Area.User.change'
        };
    }
    async enter(user, area) {
        await this.usersDomain.onEnterArea(user, area);
        this.socketContext.emitRoom(this.buildRoomId(area.areaId), this.events.enter, user);
        this.socketContext.joinRoom(this.buildRoomId(area.areaId));
        this.socketContext.sendEvent(this.events.change, area);
    }
    async leave(user) {
        let login = this.socketContext;
        login.emitRoom(this.buildRoomId(user.areaId), this.events.leave, user);
    }
    buildRoomId(areaId) {
        return 'Area.' + areaId;
    }
    async couldEnter(user, area) {
        if (user.areaId == 0 || user.areaId == area.areaId) {
            return true;
        }
        return this.roadDomain.hasRoad(user.areaId, area.areaId);
    }
    getDao() {
        return this.areaDao;
    }
};
__decorate([
    (0, fastsaas_1.Bean)()
], AreaDomain.prototype, "areaDao", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], AreaDomain.prototype, "roadDomain", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], AreaDomain.prototype, "usersDomain", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], AreaDomain.prototype, "socketContext", void 0);
__decorate([
    (0, fastsaas_1.Bean)()
], AreaDomain.prototype, "usersSearcher", void 0);
AreaDomain = __decorate([
    (0, fastsaas_1.Server)()
], AreaDomain);
exports.default = AreaDomain;
