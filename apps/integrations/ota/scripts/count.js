const fs = require('fs');

let codelist = fs.readFileSync('./codelist.json', 'utf-8');
let builtlist = fs.readdirSync('./codelist');

codelist = JSON.parse(codelist).map((b) => b.replace('_Enum', '').replace('_Base', ''));
codelist = [...new Set(codelist)];

builtlist = builtlist.map((b) => b.replace('.json', ''));

console.log(builtlist.length);
console.log(codelist.length);
console.log(codelist.filter((c) => !builtlist.includes(c)));
