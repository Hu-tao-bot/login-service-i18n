const yaml = require('js-yaml');
const fs = require('fs');

const { dotNotate } = require("./utils")

// Read dir
fs.readdir("./i18n", (err, data) => {
    if(err) throw err;
    for(const lang of data){
        // Filename
        const filename = lang.split(".")[0];
        try {
            const json_data = yaml.load(fs.readFileSync(`./i18n/${lang}`, 'utf8'));
            fs.writeFileSync(`./dist/${filename}.json`, JSON.stringify(dotNotate(json_data), null, 4), "utf-8")
        }catch(e){
            throw e;
        }
    }
})