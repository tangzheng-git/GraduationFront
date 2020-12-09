const { src, dest } = require('gulp');

function streamTask() {
  let ver = src('*.js').pipe(dest('output'));
  console.log(ver)
}

exports.default = streamTask;
exports.serve = streamTask;
