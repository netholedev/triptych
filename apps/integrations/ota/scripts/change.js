const fs = require('fs');
const { constantCase, paramCase } = require('change-case');

const dir = fs.readdirSync('./build/common');

for (const d of dir) {
  const name = constantCase(d.replace('.json', ''));
  const file = JSON.parse(fs.readFileSync(`./build/common/${d}`));

  const enumStr = `export enum ${name} {
  ${file.map((f) => `${constantCase(f)} = '${f}'`).join(',\n\t')}
}`;

  const fileName = paramCase(name);

  fs.writeFileSync(`./interfaces/common/${fileName}.ts`, enumStr, 'utf-8');
  fs.appendFileSync('./interfaces/common/index.ts', `export * from './${fileName}'\n`);
}
