const fs = require('fs');
const { constantCase, paramCase } = require('change-case');

const fileStr = fs.readFileSync(
  './.docs/OpenTravel_2019A_ObjectSuite_Resources/json/Common_5_0_0.schema.json',
  'utf-8',
);

const obj = JSON.parse(fileStr);

const definitions = obj.definitions;
const keys = Object.keys(definitions);

const attributeKeys = keys.filter((k) => {
  const entity = definitions[k]['x-otm-entity'];
  if (entity?.EntityType && entity?.EntityType === 'ValueWithAttributes') {
    return k;
  }
});

for (const key of attributeKeys) {
  const valueKeys = Object.keys(definitions[key].properties);

  const builtInterface = `export interface ${key} {
  ${valueKeys
    .map((vk) => {
      let type = definitions[key].properties[vk].type;
      const ref = definitions[key].properties[vk]['$ref'];

      if (type) {
        if (type === 'integer') type = 'number';
        if (type === 'Array') type = 'Array<any>';

        return `${vk}: ${type}`;
      }

      if (ref) {
        const refParts = ref.split('/');
        return `${vk}: ${constantCase(refParts[refParts.length - 1].replace('_Enum', ''))}`;
      }
    })
    .join('\n\t')}
}`;

  const fileName = paramCase(key);

  fs.writeFileSync(`./interfaces/common/${fileName}.ts`, builtInterface, 'utf-8');
  fs.appendFileSync('./interfaces/common/index.ts', `export * from './${fileName}'\n`);
}

/*
// for write enums
for (const key of enumsKeys) {
  console.log('writing ', key);
  if (key.includes('_Base')) {
    const replaced = key.replace('_Enum', '').replace('_Base', '');
    fs.writeFileSync(
      `./build/common/${replaced}.json`,
      JSON.stringify(definitions[key].enum),
      'utf-8',
    );
  } else if (!keys.includes(`${key}_Base`)) {
    const replaced = key.replace('_Enum', '');
    fs.writeFileSync(
      `./build/common/${replaced}.json`,
      JSON.stringify(definitions[key].enum),
      'utf-8',
    );
  } else if (!key.includes('_Enum') && !key.includes('_Base')) {
    console.log(key);
    // fs.writeFileSync(`./build/common/${key}.json`, JSON.stringify(definitions[key].enum), 'utf-8');
  }
}
*/
