import fs from 'fs'

export function saveObjectAsJson(exportObj, exportName) {
    const jsonString = JSON.stringify(exportObj, null, 2); // 2 spaces indentation for formatting
    fs.writeFileSync(`./src/db/${exportName}.json`, jsonString, 'utf-8');
}
