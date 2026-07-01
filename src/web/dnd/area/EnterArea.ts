import { Bean, Control } from "fastsaas";
import AreaDomain from "../../../biz/area/domain/AreaDomain";
import AreaDo from "../../../biz/area/pojo/AreaDo";
import AreaSearcher from "../../../biz/area/searcher/AreaSearcher";

export default class extends Control {
  @Bean()
  private areaDomain: AreaDomain;
  @Bean()
  private areaSearcher: AreaSearcher
  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    //await this.areaDomain.enter(await this.getArea());
  }
  async getArea(): Promise<AreaDo> {
    let param = this._param;
    if (param.areaId != null) {
      return this.areaSearcher.getById(param.areaId);
    } else {
      let list = await this.areaSearcher.findCoor({
        x: 0,
        y: 0,
        z: 0
      })
      return list[0]
    }
  }
}