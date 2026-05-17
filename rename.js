const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/text-ink\/\d+/g, 'text-gray');
  content = content.replace(/text-ink/g, 'text-white');
  content = content.replace(/bg-white/g, 'bg-ink');
  content = content.replace(/bg-surface/g, 'bg-ink');
  content = content.replace(/border-black\/[0-9]+/g, 'border-accent/10');
  content = content.replace(/border-white\/[0-9]+/g, 'border-accent/10');
  content = content.replace(/group-hover:bg-surface\/\d+/g, 'group-hover:bg-accent/20');
  content = content.replace(/text-primary-mid/g, 'text-gray');

  // specific for service cards
  content = content.replace(/bg-primary\/5/g, 'bg-primary/20');
  fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory('./app');
processDirectory('./components');
console.log('Done replacement');
