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
        return name;
    });

    const iconManifestJson = `{ "icons": ${JSON.stringify(svgFiles)} }`;

    fs.writeFile('icon-manifest.json', iconManifestJson, (err) => {
        if (err) throw err;
        console.log('\n✅ icon-manifest written!\n');
        console.log(JSON.parse(iconManifestJson, null, 2));
    });
});
