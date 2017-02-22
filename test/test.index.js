const should = require('should');
const githubReadmeGetter = require('../index.js');

describe('github-readme-getter', () =>{
    describe('#get readme', () => {
        it('should get readme success', (done) => {
            githubReadmeGetter('feiin', 'github-readme-getter', (error, body) => {
                  should.not.exist(error);
                  should.exists(body);
                  console.log(body);
                  done();
            });
        })

        it('should get readme error', (done) => {
            githubReadmeGetter('feiin', 'test', (error, body) => {
                  should.exist(error);
                  should.not.exists(body);
                  done();
            });
        })
    })
});
