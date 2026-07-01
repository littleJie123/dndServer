import { WebSocketInterceptor } from "fastsaas";
import UsersDo from "../users/pojo/UsersDo";
/**
 * token的检查和拦截
 */
export default class SocketContext extends WebSocketInterceptor {
    private user;
    protected getPaths(): string[];
    protected doOnBefore(param: any): Promise<void>;
    protected isNot(): boolean;
    getUser(): UsersDo;
    levelRoom(roomId: string): void;
    joinRoom(roomId: string): void;
    sendEvent(event: string, data: any): void;
    emitRoom(roomId: string, eventType: string, data: any): void;
}
