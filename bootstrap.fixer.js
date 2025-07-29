// Bootstrap Fixer
// Add custom Bootstrap fixes and changes over the default provided
// Bootstrap 5.3.3 package.

// Using UMD in Vartheme BS5
// The UMD format in Bootstrap is using ESM format.
// `dropdown.js` and `tooltip.js` are allocating the library by `@popperjs/core`

// Popper global namespace fixer for the `dropdown.js` file in Bootstrap.
const fs = require('fs');
fs.readFile('./js/bootstrap/dropdown.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('global["@popperjs/core"]', "global.Popper");

  fs.writeFile('./js/bootstrap/dropdown.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

// Popper global namespace fixer for the `tooltip.js` file in Bootstrap.
fs.readFile('./js/bootstrap/tooltip.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('global["@popperjs/core"]', "global.Popper");

  fs.writeFile('./js/bootstrap/tooltip.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
