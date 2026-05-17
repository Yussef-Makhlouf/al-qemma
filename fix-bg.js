const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // fix the bg-ink/5 mistake (since bg-white was replaced with bg-ink globally)
  content = content.replace(/bg-ink\/5\b/g, 'bg-glass');
  
  // Also any other bg-ink opacity that might have been bg-white originally (like bg-white/20, bg-white/10).
  // Wait, originally it might have been bg-white/10 etc. Let's check for bg-ink/10
  content = content.replace(/bg-ink\/10\b/g, 'bg-glass');
  content = content.replace(/bg-ink\/20\b/g, 'bg-glass');
  
  // also check text-ink/80 -> text-gray (already handled by previous script probably, but let's make sure)
  content = content.replace(/text-ink\/\d+/g, 'text-gray');

  // Let's also check for text-black and replace with text-white
  content = content.replace(/text-black/g, 'text-white');
  
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
console.log('Done fix');
