type JSONValue = string | number | boolean | JSONObject;

interface JSONObject {
  [x: string]: JSONValue;
}

const Config = {
  namespace: 'arcady',
  path: 'src/global/global-tokens.scss',
};

const createGlobalVariables = async (tokens: JSONObject) => {
  const namespace = Config.namespace;
  const prefix = '--' + namespace + '-g-';

  let globalVariables = '';
  const loop = (tokens: JSONObject, prefix: string) => {
    for (const key in tokens) {
      const value = tokens[key];
      if (typeof value === 'object') {
        loop(value, prefix + key + '-');
      } else {
        globalVariables += prefix + key + ':' + value + ';';
      }
    }
  };
  loop(tokens, prefix);

  const filePath = Config.path;
  const directory = filePath.substring(0, filePath.lastIndexOf('/'));
  const fs = require('fs');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  fs.writeFile(filePath, ':root{' + globalVariables + '}', function (err: any) {
    if (err) throw err;
    console.log('Created global variables file');
  });
};

const tokens = require('../global-design-tokens.json');
createGlobalVariables(tokens);
