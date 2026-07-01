
import { Searcher } from 'fastsaas'
import { Server } from 'fastsaas'
import RoadPojo from '../pojo/RoadPojo';
@Server()
export default class RoadSearcher extends Searcher<RoadPojo>{
  protected init() {
    
  }
  protected getIsDel(): boolean {
    return true;
  }
  protected getKey(): string {
    return 'road'
  }
} 
