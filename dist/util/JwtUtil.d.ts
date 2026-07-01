import UsersDo from '../biz/users/pojo/UsersDo';
import Token from './dto/Token';
export default class JwtUtil {
    private static privateKey;
    private static publicKey;
    /**
     * 构建token
     * @param payload
     */
    static buildRefreshTokens(user: UsersDo): Token;
    private static getPrivateKey;
    private static getPublicKey;
    /**
     * 解码
     * @param token
     */
    static decode(token: string): Promise<any>;
}
