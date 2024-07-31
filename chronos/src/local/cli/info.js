
"use strict";

import ANSI from "../../var/ansi.js";
import { arch, cpus, totalmem, freemem, type } from "node:os";
import hmr from "../../utils/hmr.js";
import logDetails from "../start/logDetails.js";

export function machine() {
    const ansi = ANSI();
    const cpu = cpus();
    const element = [
        { key: "Architecture", value: arch },
        { key: "Cpu", value: `${cpu[0]?.model}, ${cpu.length} cores` },
        { key: "Node version", value: process.version },
        { key: "Os type", value: type() },
        { key: "Total memory", value: hmr(totalmem()) },
        { key: "Free memory", value: hmr(freemem()) },
    ];
    process.stdout.write("\n");
    element.forEach(elem => { 
      console.log(
        `${ansi.dim} - ${elem.key}${ansi.reset}:  ${ansi.green}${elem.value}${ansi.reset}`
      );
    });
    process.stdout.write("\n");
    return void 0;
}

export function mem() {
    const ansi = ANSI();
    const { heapUsed, external, arrayBuffers } = process.memoryUsage();
    const free = freemem();
    const element = [
        { key: "Heap used", value: heapUsed },
        { key: "External", value: external },
        { key: "Buffers", value: arrayBuffers },
        { key: "Total", value: heapUsed + external + arrayBuffers },
    ];
    const percentage = (element[3].value / free) * 100;
    process.stdout.write("\n");
    element.forEach(elem => {
      console.log(
        `${ansi.dim} - ${elem.key}${ansi.reset}:  ${ansi.white}${hmr(elem.value)}${ansi.reset}`
      );
    });
    console.log(`\n Around ${percentage.toFixed(2)}% of ${hmr(free)}`);
    process.stdout.write("\n");
    return void 0;
}

export function uptime() {
    let seconds = Math.round(process.uptime());
    let minute = Math.floor(seconds / 60);
    let hour = Math.floor(minute / 60);
    seconds = minute > 0 ? seconds - (60 * minute) : seconds;
    minute = hour > 0 ? minute - (60 * hour) : minute;
    console.log(`\nup to ${hour} hour, ${minute} minute, ${seconds} second \n`);
    return void 0;
}

export function whoami() {
    process.stdout.write("\n"); logDetails(); process.stdout.write("\n");
    return void 0;
}