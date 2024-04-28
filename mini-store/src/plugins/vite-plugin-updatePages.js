// rollup-plugin-move.js
import fs from 'fs-extra';
import * as path from 'node:path'
import pages from '../pages.js';
const pagesConfig = pages()
export default function updatePagesPlugin() {
  const pagesPath = path.join(__dirname,'../pages.json');
  fs.writeFileSync(pagesPath,JSON.stringify(pagesConfig))
}
