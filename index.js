const request = require('request');
const baseUrl = 'https://raw.githubusercontent.com/';
const path = require('path');

function githubReadmeGetter(user, repo, cb) {
    var url = baseUrl + path.join(user, repo, 'master', 'README.md');
    request(url, function(error, response, body) {
        if (response.statusCode != 200) {
            return cb(new Error('not exits'));
        }
        if(error) {
            return cb(error);
        }
        cb(null, body);
    });
}

module.exports = githubReadmeGetter;