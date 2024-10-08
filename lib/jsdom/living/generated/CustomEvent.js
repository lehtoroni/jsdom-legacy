"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const Event = require("./Event.js");
const impl = utils.implSymbol;
const convertCustomEventInit = require("./CustomEventInit").convert;

function CustomEvent(type) {
  if (!new.target) {
    throw new TypeError(
      "Failed to construct 'CustomEvent'. Please use the 'new' operator; this constructor cannot be called as a function."
    );
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'CustomEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], { context: "Failed to construct 'CustomEvent': parameter 1" });
  args[1] = convertCustomEventInit(args[1], { context: "Failed to construct 'CustomEvent': parameter 2" });

  iface.setup(this, args);
}
Object.setPrototypeOf(CustomEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(CustomEvent, Event.interface);

CustomEvent.prototype.initCustomEvent = function initCustomEvent(type) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initCustomEvent' on 'CustomEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 4; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'initCustomEvent' on 'CustomEvent': parameter 1"
  });
  if (args[1] !== undefined) {
    args[1] = conversions["boolean"](args[1], {
      context: "Failed to execute 'initCustomEvent' on 'CustomEvent': parameter 2"
    });
  } else {
    args[1] = false;
  }
  if (args[2] !== undefined) {
    args[2] = conversions["boolean"](args[2], {
      context: "Failed to execute 'initCustomEvent' on 'CustomEvent': parameter 3"
    });
  } else {
    args[2] = false;
  }
  if (args[3] !== undefined) {
    args[3] = conversions["any"](args[3], {
      context: "Failed to execute 'initCustomEvent' on 'CustomEvent': parameter 4"
    });
  } else {
    args[3] = null;
  }
  return this[impl].initCustomEvent(...args);
};
Object.defineProperty(CustomEvent.prototype, "detail", {
  get() {
    return this[impl].detail;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(CustomEvent.prototype, Symbol.toStringTag, {
  value: "CustomEvent",
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
    throw new TypeError(`${context} is not of type 'CustomEvent'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(CustomEvent.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(CustomEvent.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Event._internalSetup(obj);
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
  interface: CustomEvent,
  expose: {
    Window: { CustomEvent: CustomEvent },
    Worker: { CustomEvent: CustomEvent }
  }
};
module.exports = iface;

const Impl = require("../events/CustomEvent-impl.js");
