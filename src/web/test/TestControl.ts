import { Bean, Control } from "fastsaas";
import TestDomain from "../../biz/TestDomain";

export default class extends Control {
  @Bean()
  private testDomain: TestDomain;
  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    return this.testDomain.test(this._param)
  }
}