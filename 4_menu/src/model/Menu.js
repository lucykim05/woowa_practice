import fs from 'fs';
import Parser from './Parser.js';

const filePath = './src/constants/menu.md';

const data = fs.readFileSync(filePath, 'utf-8');

const Menu = Parser.organizeCategory(data);

export default Menu;
