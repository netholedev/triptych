const fs = require('fs');

const dir = fs.readdirSync('./build');

for (const file of dir) {
  fs.renameSync(`./build/${file}`, `./build/${file.replace('_Enum', '')}`);
}
