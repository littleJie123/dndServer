import { Control } from "fastsaas";
import AreaDo from "../../../biz/area/pojo/AreaDo";
import UsersDo from "../../../biz/users/pojo/UsersDo";
export default class extends Control {
    private areaDomain;
    private areaSearcher;
    private usersSearcher;
    private socketContext;
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
    getArea(user: UsersDo): Promise<AreaDo>;
}
