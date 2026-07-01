
import { Searcher } from 'fastsaas'
import { Server } from 'fastsaas'
import UsersPojo from '../pojo/UsersPojo';
@Server()
export default class UsersSearcher extends Searcher<UsersPojo>{
  protected init() {
    
  }
  protected getIsDel(): boolean {
    return true;
  }
  protected getKey(): string {
    return 'users'
  }
} 
