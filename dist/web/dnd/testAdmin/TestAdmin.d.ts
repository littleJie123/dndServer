import { Control } from "fastsaas";
export default class extends Control {
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
}
