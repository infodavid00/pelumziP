import server from "../chronos/src/chronos.js";
import { pod } from "./interface.js";

const options = {
  cors: {
    allowOrigin: "*",
  },
};

const application = new server(pod, options);

application.start();
