import { Control } from "fastsaas";
export default class extends Control {
    private usersDomain;
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
}
