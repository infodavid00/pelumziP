import server from "chronos";
import { pod } from "./interface.js";

const options = {
  cors: {
    allowOrigin: "*",
  },
};

const application = new server(pod, options);

application.start();
