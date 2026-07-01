import { webServer, SocketProcessor } from "fastsaas";
import DndContext from "./DndContext";
import path from "path";

import DndSocket from "./DndSocket";

webServer({

  context: DndContext,
  webPath: path.join(__dirname, '../web'),

  interceptorBeans: [
    'SocketContext'
  ],
  webSocketClazz: DndSocket,
  port: 3000,
  needWebSocketAction: true
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err.stack);
});