import { Bean, Control } from "fastsaas";
import AreaDao from "../../../biz/area/dao/AreaDao";
import { Admin } from "../../../decorator/Admin";

@Admin()
export default class extends Control {
  @Bean()
  private areaDao: AreaDao;
  protected async doExecute(req?: Request, resp?: Response): Promise<any> {
    let param = this._param;
    this.areaDao.update({
      areaId: param.areaId,
      name: param.name,
      remark: param.remark
    })
  }
}