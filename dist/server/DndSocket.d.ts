import { SocketProcessor } from "fastsaas";
import UsersDo from "../biz/users/pojo/UsersDo";
export default class extends SocketProcessor {
    private user?;
    setUser(user: UsersDo): void;
    getUser(): UsersDo;
}
