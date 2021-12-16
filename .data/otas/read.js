const fs = require("fs")

const file = fs.readFileSync('.data/otas/otas-list-json.json', 'utf8');

const parsed = JSON.parse(file).otas.map(ota => {
  return ota.vendor.website;
})

fs.writeFileSync('.data/otas/otas-websites.json', JSON.stringify(parsed, null, 2));