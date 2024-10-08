"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const UIEvent = require("./UIEvent.js");
const impl = utils.implSymbol;

function TouchEvent() {
  throw new TypeError("Illegal constructor");
}
Object.setPrototypeOf(TouchEvent.prototype, UIEvent.interface.prototype);
Object.setPrototypeOf(TouchEvent, UIEvent.interface);

Object.defineProperty(TouchEvent.prototype, "touches", {
  get() {
    return utils.tryWrapperForImpl(this[impl].touches);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "targetTouches", {
  get() {
    return utils.tryWrapperForImpl(this[impl].targetTouches);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "changedTouches", {
  get() {
    return utils.tryWrapperForImpl(this[impl].changedTouches);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "altKey", {
  get() {
    return this[impl].altKey;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "metaKey", {
  get() {
    return this[impl].metaKey;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "ctrlKey", {
  get() {
    return this[impl].ctrlKey;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "shiftKey", {
  get() {
    return this[impl].shiftKey;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, Symbol.toStringTag, {
  value: "TouchEvent",
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
    throw new TypeError(`${context} is not of type 'TouchEvent'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(TouchEvent.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(TouchEvent.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    UIEvent._internalSetup(obj);
  },
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
  interface: TouchEvent,
  expose: {
    Window: { TouchEvent: TouchEvent }
  }
};
module.exports = iface;

const Impl = require("../events/TouchEvent-impl.js");
