"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const Element = require("./Element.js");
const impl = utils.implSymbol;
const mixin = utils.mixin;
const ElementCSSInlineStyle = require("./ElementCSSInlineStyle.js");
const GlobalEventHandlers = require("./GlobalEventHandlers.js");
const ElementContentEditable = require("./ElementContentEditable.js");

function HTMLElement() {
  throw new TypeError("Illegal constructor");
}
Object.setPrototypeOf(HTMLElement.prototype, Element.interface.prototype);
Object.setPrototypeOf(HTMLElement, Element.interface);

mixin(HTMLElement.prototype, ElementCSSInlineStyle.interface.prototype);
ElementCSSInlineStyle.mixedInto.push(HTMLElement);
mixin(HTMLElement.prototype, GlobalEventHandlers.interface.prototype);
GlobalEventHandlers.mixedInto.push(HTMLElement);
mixin(HTMLElement.prototype, ElementContentEditable.interface.prototype);
ElementContentEditable.mixedInto.push(HTMLElement);

HTMLElement.prototype.click = function click() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].click();
};

HTMLElement.prototype.focus = function focus() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].focus();
};

HTMLElement.prototype.blur = function blur() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].blur();
};
Object.defineProperty(HTMLElement.prototype, "title", {
  get() {
    const value = this.getAttribute("title");
    return value === null ? "" : value;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'title' property on 'HTMLElement': The provided value"
    });
    this.setAttribute("title", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "lang", {
  get() {
    const value = this.getAttribute("lang");
    return value === null ? "" : value;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'lang' property on 'HTMLElement': The provided value"
    });
    this.setAttribute("lang", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "dir", {
  get() {
    return this[impl].dir;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'dir' property on 'HTMLElement': The provided value"
    });
    this[impl].dir = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "hidden", {
  get() {
    return this.hasAttribute("hidden");
  },
  set(V) {
    V = conversions["boolean"](V, {
      context: "Failed to set the 'hidden' property on 'HTMLElement': The provided value"
    });
    if (V) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "tabIndex", {
  get() {
    return this[impl].tabIndex;
  },
  set(V) {
    V = conversions["long"](V, {
      context: "Failed to set the 'tabIndex' property on 'HTMLElement': The provided value"
    });
    this[impl].tabIndex = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "accessKey", {
  get() {
    const value = this.getAttribute("accessKey");
    return value === null ? "" : value;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'accessKey' property on 'HTMLElement': The provided value"
    });
    this.setAttribute("accessKey", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    return utils.tryWrapperForImpl(this[impl].offsetParent);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetTop", {
  get() {
    return this[impl].offsetTop;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetLeft", {
  get() {
    return this[impl].offsetLeft;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
  get() {
    return this[impl].offsetWidth;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
  get() {
    return this[impl].offsetHeight;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, Symbol.toStringTag, {
  value: "HTMLElement",
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
    throw new TypeError(`${context} is not of type 'HTMLElement'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLElement.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLElement.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Element._internalSetup(obj);
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
  interface: HTMLElement,
  expose: {
    Window: { HTMLElement: HTMLElement }
  }
};
module.exports = iface;

const Impl = require("../nodes/HTMLElement-impl.js");
