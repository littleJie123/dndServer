import { Control } from "fastsaas";
import AreaDo from "../../../biz/area/pojo/AreaDo";
export default class extends Control {
    private areaDomain;
    private areaSearcher;
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
    getArea(): Promise<AreaDo>;
}
