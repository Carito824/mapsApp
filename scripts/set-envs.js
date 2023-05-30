const {whiteFileSync, mkdirSync} = require('fs');


required('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = { 
    mapbox_key: "${process.env['MAXBOX_KEY'] }",
    otra: "PROPIEDAD",
};
`;
mkdirSync('./src/environments', {recursive: true});

whiteFileSync(targetPath, envFileContent);

