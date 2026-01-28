import fs from 'fs';
import path from 'path';

console.log(path.resolve(path.dirname(".")))
const projectsDir = path.resolve(path.dirname("."), './projects');
const indexFile = path.join(projectsDir, '../projects.ts');

const files = fs
  .readdirSync(projectsDir)
  .filter(f => f.endsWith('.ts'));
console.log('✅ projects/ parsed!');

const imports = files.map((f, _) => `import ${f.replace(".ts", "")} from '@/data/projects/${f.replace(".ts", "")}';`).join('\n');
const array = `export const projects = [${files.map((f, i) => `${f.replace(".ts", "")}`).join(', ')}];\n`;

fs.writeFileSync(indexFile, `${imports}\n\n${array}`);
console.log('✅ projects.ts generated!');
