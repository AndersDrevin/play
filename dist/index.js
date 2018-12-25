"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var staticPath = _path.default.resolve(__dirname, '../dist/static');

var indexHtmlPath = _path.default.resolve(staticPath, 'index.html');

var app = (0, _express.default)();
app.use('/api', _api.default);
app.get('/index.html', function (req, res) {
  res.redirect('/');
});
app.use('/', _express.default.static(staticPath));
app.get('/', function (req, res) {
  res.sendFile(indexHtmlPath);
});
app.listen(31337);