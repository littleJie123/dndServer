import { Control } from "fastsaas";
export default class extends Control {
    private testDomain;
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
}
