const namesData = require("./names.js");
const introduceYourself = require("./introduceYourself.js");


introduceYourself(namesData.harry);
introduceYourself(namesData.jim);

introduceYourself(namesData.tom);

const os = require('os');

// information about current user
console.log(os.userInfo());

// How long the system is running in seconds
console.log(os.uptime());

// Practical example of os module
const myOS = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(myOS);

const path = require('path');

console.log(path.sep);

const filepath = path.join('\content', 'subContentFolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolutePath = path.resolve(__dirname, 'content', 'subContentFolder', 'text.txt');
console.log(absolutePath);

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

console.log(first);

const second = readFileSync('./content/second.txt', 'utf8');

console.log(second);

writeFileSync('./content/third.txt', 'Hello this file is created using writeFileSync');

const third = readFileSync('./content/third.txt', 'utf8');

console.log(third);

writeFileSync('./content/combineFile.txt', `Combined text looks like: ${first} and ${second}`)

const combineFile = readFileSync('./content/combineFile.txt', 'utf8');
console.log(combineFile);