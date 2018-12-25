"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var staticPath = _path.default.resolve(__dirname, '../dist/static');

var indexHtmlPath = _path.default.resolve(staticPath, 'index.html');

var app = (0, _express.default)();
app.get(['/static', '/static/index.html'], function (req, res) {
  res.redirect('/');
});
app.use('/static', _express.default.static(staticPath));
app.get('/', function (req, res) {
  res.sendFile(indexHtmlPath);
});
app.listen(1337);