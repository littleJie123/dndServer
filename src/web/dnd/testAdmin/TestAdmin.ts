import { Control } from "fastsaas";
import { Admin } from "../../../decorator/Admin";
@Admin()
export default class extends Control{
  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    return {succ:1}
  }
}