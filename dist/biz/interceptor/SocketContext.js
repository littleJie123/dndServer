"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastsaas_1 = require("fastsaas");
/**
 * token的检查和拦截
 */
let SocketContext = class SocketContext extends fastsaas_1.WebSocketInterceptor {
    getPaths() {
        return ['/free/', '/test/'];
    }
    async doOnBefore(param) {
        let socket = this.socketProcessor;
        let user = socket.getUser();
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
    levelRoom(roomId) {
        this.socketProcessor.levelRoom(roomId);
    }
    joinRoom(roomId) {
        this.socketProcessor.joinRoom(roomId);
    }
    sendEvent(event, data) {
        this.socketProcessor.send({
            eventType: event,
            msg: data,
        });
    }
    emitRoom(roomId, eventType, data) {
        fastsaas_1.SocketRoom.emitMsg(roomId, {
            eventType,
            msg: data
        }, {
            socketProcessor: this.socketProcessor
        });
    }
};
SocketContext = __decorate([
    (0, fastsaas_1.Server)()
], SocketContext);
exports.default = SocketContext;
