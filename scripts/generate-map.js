const fs = require('fs');
const path = require('path');

// Directorios y archivos basura que la IA NO necesita leer
const IGNORE = ['.git', 'node_modules', '.next', 'dist', 'build', '.husky', '.env', 'package-lock.json', 'pnpm-lock.yaml'];

function buildTree(dir, prefix = '') {
  let result = '';
  const items = fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => !IGNORE.includes(dirent.name))
    // Ordenar: carpetas primero, luego archivos, ambos alfabéticamente
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    result += `${prefix}${isLast ? '└── ' : '├── '}${item.name}\n`;

    if (item.isDirectory()) {
      result += buildTree(path.join(dir, item.name), prefix + (isLast ? '    ' : '│   '));
    }
  });
  return result;
}

const mapContent = `# Mapa de Arquitectura\n\n\`\`\`text\n/\n${buildTree('.')}\`\`\`\n`;
fs.writeFileSync('.project-map.md', mapContent);

