import { randomUUID } from 'crypto';

export default class {
  /**
   * u4版本
   */
  static getUuid(): string {
    return randomUUID();
  }
}