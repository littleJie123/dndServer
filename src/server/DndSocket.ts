import { SocketProcessor, SocketRoom } from "fastsaas";
import UsersDo from "../biz/users/pojo/UsersDo";

export default class extends SocketProcessor {
  private user?:UsersDo;

  setUser(user:UsersDo){
    if(user != null){
      this.user = {
        usersId:user.usersId,
        role:user.role
      };
    }
  }

  getUser(){
    return this.user;
  }
}