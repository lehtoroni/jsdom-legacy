"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    let key, value;

    key = "behavior";
    value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = utils.tryImplForWrapper(value);
      ret[key] = value;
    } else {
      ret[key] = "auto";
    }
  },

  convert(obj, { context = "The provided value" } = {}) {
    if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
      throw new TypeError(`${context} is not an object.`);
    }

    const ret = Object.create(null);
    module.exports.convertInherit(obj, ret, { context });
    return ret;
  }
};
