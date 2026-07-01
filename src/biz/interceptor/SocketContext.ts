import { WebSocketInterceptor, Bean, ConfigFac, JwtToken, Server, SocketRoom } from "fastsaas";
import JwtUtil from "../../util/JwtUtil";
import UsersDo from "../users/pojo/UsersDo";
import DndSocket from "../../server/DndSocket";

/**
 * token的检查和拦截
 */
@Server()
export default class SocketContext extends WebSocketInterceptor {
  private user: UsersDo;

  protected getPaths(): string[] {
    return ['/free/', '/test/'];
  }




  protected async doOnBefore(param: any): Promise<void> {
    
    let socket = this.socketProcessor as DndSocket
    let user = socket.getUser()
    if (user == null) {
      throw new Error('用户没有登陆');
    }
    this.user = user;


  }
  protected isNot(): boolean {
    return true;
  }

  getUser() {
    return this.user;
  }


  levelRoom(roomId: string) {
    this.socketProcessor.levelRoom(roomId)
  }

  joinRoom(roomId: string) {
    this.socketProcessor.joinRoom(roomId)
  }

  sendEvent(event: string, data: any) {
    this.socketProcessor.send({
      eventType: event,
      msg: data,

    })
  }

  emitRoom(roomId: string, eventType: string, data: any) {
    SocketRoom.emitMsg(roomId, {
      eventType,
      msg: data
    }, {
      socketProcessor: this.socketProcessor
    })
  }




}