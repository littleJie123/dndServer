import { Searcher } from 'fastsaas';
import UsersPojo from '../pojo/UsersPojo';
export default class UsersSearcher extends Searcher<UsersPojo> {
    protected init(): void;
    protected getIsDel(): boolean;
    protected getKey(): string;
}
