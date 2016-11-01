var fs = require('fs');
var OpenCC = require('opencc');

var opencc = new OpenCC('t2s.json');

var trad = fs.readFileSync('README.md', 'utf8');

var simpl = opencc.convertSync(trad);

fs.writeFileSync('README.zh-hans.md', simpl);