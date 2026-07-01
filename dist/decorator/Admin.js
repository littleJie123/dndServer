"use strict";
/**
 * @file Admin decorator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = Admin;
/**
 * Admin decorator.
 * This is a class decorator that creates a subclass of the target class
 * and overrides the `_checkParam` method.
 *
 * @param target The class to be decorated.
 * @returns A new class that extends the target class.
 */
function Admin() {
    return function Clazz(target) {
        return class extends target {
            constructor(...args) {
                super(...args);
            }
            async _checkParam(param) {
                await super._checkParam(param);
                let context = this.getContext();
                let socketContext = context.get('SocketContext');
                let user = socketContext.getUser();
                if (user == null || user.role != 'admin') {
                    throw new Error('只有管理员才能做该操作');
                }
            }
        };
    };
}
