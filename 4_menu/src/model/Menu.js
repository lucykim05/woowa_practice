import fs from 'fs';
import Parser from './Parser.js';

const filePath = '../constants/menu.md';

const data = fs.readFileSync(filePath, 'utf-8');

export const menu = Parser.organizeCategory(data);
