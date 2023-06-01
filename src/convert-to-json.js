const fs = require('fs');
const recipes = require('./fake-data');

const FILE_NAME = 'fake-data.json';

fs.writeFileSync(
    FILE_NAME,
    JSON.stringify(recipes),
    'utf-8',
);

console.log('Done!');