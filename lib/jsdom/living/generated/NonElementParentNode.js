"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const impl = utils.implSymbol;

function NonElementParentNode() {
  throw new TypeError("Illegal constructor");
}

NonElementParentNode.prototype.getElementById = function getElementById(elementId) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementById' on 'NonElementParentNode': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'getElementById' on 'NonElementParentNode': parameter 1"
  });
  return utils.tryWrapperForImpl(this[impl].getElementById(...args));
};

Object.defineProperty(NonElementParentNode.prototype, Symbol.toStringTag, {
  value: "NonElementParentNode",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  mixedInto: [],
  is(obj) {
    if (obj) {
      if (obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (obj instanceof module.exports.mixedInto[i]) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (wrapper instanceof module.exports.mixedInto[i]) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'NonElementParentNode'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(NonElementParentNode.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(NonElementParentNode.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};
    privateData.wrapper = obj;

    this._internalSetup(obj);

    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true
    });
    obj[impl][utils.wrapperSymbol] = obj;
  },
  interface: NonElementParentNode,
  expose: {}
};
module.exports = iface;

const Impl = require("../nodes/NonElementParentNode-impl.js");
