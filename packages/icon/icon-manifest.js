const fs = require('fs');
const path = require('path');

const svgFolder = path.join(__dirname, './src/svg');

fs.readdir(svgFolder, (err, files) => {
    if (err) throw err;
    const svgFiles = files
        .map((file) => {
            return file.split('.')[0];
        })
        .filter((name) => name !== '');

    const iconManifestJson = `{ "icons": ${JSON.stringify(svgFiles)} }`;

    fs.writeFile('icon-manifest.json', iconManifestJson, (err) => {
        if (err) throw err;
        console.log('\n✅ icon-manifest written!\n');
        console.log(JSON.parse(iconManifestJson, null, 2));
    });
});
