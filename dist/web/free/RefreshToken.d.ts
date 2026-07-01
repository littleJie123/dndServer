import { Control } from "fastsaas";
interface RefreshTokenOpt {
    refreshToken: string;
}
export default class extends Control<RefreshTokenOpt> {
    private usersDao;
    private usersDomain;
    protected doExecute(req?: Request, resp?: Response): Promise<any>;
}
export {};
