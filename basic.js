const operationSys = require('os');
const fs = require('fs');

console.log(operationSys.hostname());
console.log('memoire :', operationSys.totalmem());
console.log('Interface IP :', operationSys.networkInterfaces());

fs.writeFileSync('data.txt', 'Salam les developpeurs YouCode')