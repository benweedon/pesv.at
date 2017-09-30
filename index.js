var Metalsmith    = require('metalsmith');
var writemetadata = require('metalsmith-writemetadata');

var permalinks    = require('metalsmith-permalinks');
var pandoc        = require('metalsmith-pandoc');

var ms = Metalsmith(__dirname)
    .metadata({
        title: 'langsite',
        description: 'Site for all of Ben\'s conlangs',
        generator: 'Metalsmith',
        url: 'http://www.metalsmith.io/'
    })
    .use(pandoc({
        from: 'markdown',
        to: 'html5',
        pattern: '**/*.md',
        ext: '.html',
        args: ['-s']
    }))
    .use(permalinks());

// Run this module directly to build, or export the metalsmith object to
// another script.
if (module.parent) {
    module.exports = ms;
} else {
    ms.build(function (err) { if (err) throw err; });
}
