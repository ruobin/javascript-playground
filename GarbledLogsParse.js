'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'parseLogs' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts STRING_ARRAY garbled_logs as parameter.
 */

function parseLogs(garbled_logs) {
    // Write your code here
    // console.log(`garbled_logs is ${JSON.stringify(garbled_logs)}`);
    // let output = [];

    let map = new Map();
    console.log(`garbled_logs is ${garbled_logs.length}`);
    for (let i = 0; i < garbled_logs.length; i++) {
        const record = garbled_logs[i];
        console.log(`record is ${record}, i is ${i}`);
        const idPostion = record.indexOf('Thread-') + 7;
        console.log(`idPostion is ${idPostion}`);
        const spacePostion = record.indexOf(' ');
        const id = record.substring(idPostion, spacePostion);
        const log = record.substring(spacePostion + 1);
        // console.log(`id is ${id}, log is ${log}`);
        map.set(id, [map.get(id), log]);
        console.log(`map.get(id) is ${map.get(id)}`);
    }
    // console.log(`map.values() is ${JSON.stringify(map.values())}`);
    return Array.from(map.values());
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const garbled_logsCount = parseInt(readLine().trim(), 10);

    let garbled_logs = [];

    for (let i = 0; i < garbled_logsCount; i++) {
        const garbled_logsItem = readLine();
        garbled_logs.push(garbled_logsItem);
    }

    const result = parseLogs(garbled_logs);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}