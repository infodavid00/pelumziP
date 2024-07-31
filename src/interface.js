import HandleData from "./kernel/HandleData.js";

export const pod = {
  "/post": {
    method: "POST",
    workers: [HandleData],
  },
};
