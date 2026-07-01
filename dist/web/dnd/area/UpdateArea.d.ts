import { Control } from "fastsaas";
export default class extends Control {
    private areaDao;
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
}
