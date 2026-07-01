import { ConfigFac, FileContext } from "fastsaas";
import path from "path";

ConfigFac.init(path.join(__dirname, '../../config'));
let fileContext = new FileContext();
fileContext.loadFromPath(path.join(__dirname, "../biz"))
export default fileContext;