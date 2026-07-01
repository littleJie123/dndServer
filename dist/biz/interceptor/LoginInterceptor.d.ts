import { WebSocketInterceptor } from "fastsaas";
import UsersDo from "../users/pojo/UsersDo";
/**
 * token的检查和拦截
 */
export default class LoginInterceptor extends WebSocketInterceptor {
    private user;
    protected getPaths(): string[];
    protected doOnBefore(param: any): Promise<void>;
    protected isNot(): boolean;
    getUser(): UsersDo;
}
