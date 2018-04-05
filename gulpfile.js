var gulp = require('gulp');
var yaml = require('js-yaml');
var path = require('path');
var fs = require('fs');


gulp.task('swagger', function() {
    // Get document, or throw exception on error
    try {
        var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '/api/swagger/swagger.yaml')), 'utf8');
        fs.writeFileSync(
            path.join(__dirname, '/public/swagger.json'),
            JSON.stringify(doc, null, " ")
        );
    } catch (e) {
        console.log(e);
    }
});
