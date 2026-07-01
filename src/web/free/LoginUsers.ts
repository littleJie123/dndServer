import { Bean, Control } from "fastsaas";
import UsersDomain from "../../biz/users/domain/UsersDomain";
import DndSocket from "../../server/DndSocket";

export default class extends Control {
  @Bean()
  private usersDomain: UsersDomain;

  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
   
    
    let user = await this.usersDomain.login(this._param)
    delete user.pswd;
    let socket = this.socketProcessor as DndSocket;
    socket.setUser(user);
    return user;
  }
}