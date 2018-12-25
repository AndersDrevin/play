"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var router = new _express.Router();
router.all('*', function (req, res) {
  res.status(404).send('Not implemented!');
});
var _default = router;
exports.default = _default;