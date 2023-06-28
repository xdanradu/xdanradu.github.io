const replace = require('replace-in-file');
// const buildVersion = process.argv[2];
let currentdate = new Date();
let datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
const options = {
    files: 'build/index.html',
    from: /{LAST_UPDATE}/g,
    to: datetime,
    allowEmptyPaths: false,
};

try {
    let changedFiles = replace.sync(options);
    console.log('Build version set: ' + datetime);
}
catch (error) {
    console.error('Error occurred:', error);
}
