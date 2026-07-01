import { Server } from "fastsaas";

@Server()
export default class {
  test(param:any) {
    return `test:${JSON.stringify(param)}`
  }
}