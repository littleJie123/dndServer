import CryptoJS from 'crypto-js';

export default class Md5Util {
  public static md5(str: string): string {
    return CryptoJS.MD5(str).toString();
  }
}
