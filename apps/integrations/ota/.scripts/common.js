const fs = require('fs');
const { paramCase } = require('change-case');

const commonSrc = fs.readdirSync('./src/interfaces/common').map((c) => c.replace('.ts', ''));
const commonFile = JSON.parse(
  fs.readFileSync(
    './.docs/OpenTravel_2019A_ObjectSuite_Resources/json/Common_5_0_0.schema.json',
    'utf-8',
  ),
);

const definitions = commonFile.definitions;
const keys = Object.keys(definitions);

const ignored = keys.filter(
  (k) => !commonSrc.includes(paramCase(k.replace('_Enum', '').replace('_Base', ''))),
);

fs.writeFileSync('./common-ignored.json', JSON.stringify(ignored), 'utf-8');
