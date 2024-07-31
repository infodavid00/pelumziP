
"use strict";

import { clean, clear } from "./clear.js";
import { machine, mem, uptime, whoami } from "./info.js";

export default function handleCommand(command) {
    const Command = command.split(" ")[0];
    switch (Command) {
        case "clean": clear(); break
        case "clear": clean(); break
        case "machine": machine(); break
        case "mem": mem(); break
        case "uptime": uptime(); break
        case "whoami": whoami(); break
        default: if (Command) console.log(`\n${Command}: command not found \n`); break;
    }
}
