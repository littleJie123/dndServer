/**
 * @file Admin decorator
 */

import SocketContext from "../biz/interceptor/SocketContext";

/**
 * Admin decorator.
 * This is a class decorator that creates a subclass of the target class
 * and overrides the `_checkParam` method.
 *
 * @param target The class to be decorated.
 * @returns A new class that extends the target class.
 */
export function Admin() {
  return function Clazz<T extends { new(...args: any[]): any }>(target: T) {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
      }

      async _checkParam(param:any): Promise<any> {
        await super._checkParam(param)
        let context = this.getContext();
        let socketContext: SocketContext = context.get('SocketContext');
        let user = socketContext.getUser();
        if (user == null || user.role != 'admin') {
          throw new Error('只有管理员才能做该操作');
        }
      }
    };
  }
}