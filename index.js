var PluginError = require('plugin-error'),
    through = require('through2');

const PLUGIN_NAME = 'gulp-style-semicolon';

function gulpStyleSemicolon() {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            // return empty file
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        if (file.isBuffer()) {
            var html = file.contents.toString();

            html = html.replace(/style="((.*)[^;])"/gm, 'style="$1;"');

            file.contents = new Buffer(html);
        }

        cb(null, file)
    });

}

module.exports = gulpStyleSemicolon;