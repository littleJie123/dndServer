
import { Sch, Searcher } from 'fastsaas'
import { Server } from 'fastsaas'
import AreaPojo from '../pojo/AreaPojo';
import AreaDo from '../pojo/AreaDo';
@Server()
export default class AreaSearcher extends Searcher<AreaDo> {
  @Sch({
    cols: ['x', 'y', 'z']
  })
  findCoor(arg0: { x: number; y: number; z: number; }): Promise<AreaDo[]> {
    return null
  }
  protected init() {

  }
  protected getIsDel(): boolean {
    return true;
  }
  protected getKey(): string {
    return 'area'
  }
} 
