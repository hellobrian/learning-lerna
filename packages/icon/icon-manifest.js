const fs = require('fs');
const path = require('path');

const svgFolder = path.join(__dirname, './src/svg');

function capitalize(str) {
    return str
        .split('')
        .map((char, index) => {
            if (index === 0) {
                return char.toUpperCase();
            }
            return char;
        })
        .join('');
}

fs.readdir(svgFolder, (err, files) => {
    if (err) throw err;
    const svgFiles = files.map((file) => {
        const name = file.split('.')[0];
        const component = capitalize(name);
        return { file, name, component };
    });

    fs.writeFile('icon-manifest.json', `{ "icons": ${JSON.stringify(svgFiles)} }`, (err) => {
        if (err) throw err;
        console.log('\n✅ icon-manifested written!\n');
    });
});
