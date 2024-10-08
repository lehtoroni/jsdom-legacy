"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    EventInit.convertInherit(obj, ret, { context });
    let key, value;

    key = "data";
    value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["any"](value, { context: `${context} has member data that` });
      ret[key] = value;
    } else {
      ret[key] = null;
    }

    key = "lastEventId";
    value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["DOMString"](value, { context: `${context} has member lastEventId that` });
      ret[key] = value;
    } else {
      ret[key] = "";
    }

    key = "origin";
    value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["USVString"](value, { context: `${context} has member origin that` });
      ret[key] = value;
    } else {
      ret[key] = "";
    }

    key = "ports";
    value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (value === null || (typeof value !== "object" && typeof value !== "function")) {
        throw new TypeError(`${context} has member ports that` + " is not an iterable object.");
      } else {
        const V = [];
        const tmp = value;
        for (let nextItem of tmp) {
          nextItem = utils.tryImplForWrapper(nextItem);
          V.push(nextItem);
        }
        value = V;
      }
      ret[key] = value;
    } else {
      ret[key] = [];
    }

    key = "source";
    value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (value === null || value === undefined) {
        value = null;
      } else {
        value = utils.tryImplForWrapper(value);
      }
      ret[key] = value;
    } else {
      ret[key] = null;
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
