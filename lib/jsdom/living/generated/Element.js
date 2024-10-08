"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const Node = require("./Node.js");
const impl = utils.implSymbol;
const mixin = utils.mixin;
const ChildNode = require("./ChildNode.js");
const NonDocumentTypeChildNode = require("./NonDocumentTypeChildNode.js");
const ParentNode = require("./ParentNode.js");
const convertAttr = require("./Attr").convert;

function Element() {
  throw new TypeError("Illegal constructor");
}
Object.setPrototypeOf(Element.prototype, Node.interface.prototype);
Object.setPrototypeOf(Element, Node.interface);

mixin(Element.prototype, ChildNode.interface.prototype);
ChildNode.mixedInto.push(Element);
mixin(Element.prototype, NonDocumentTypeChildNode.interface.prototype);
NonDocumentTypeChildNode.mixedInto.push(Element);
mixin(Element.prototype, ParentNode.interface.prototype);
ParentNode.mixedInto.push(Element);

Element.prototype.hasAttributes = function hasAttributes() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].hasAttributes();
};

Element.prototype.getAttributeNames = function getAttributeNames() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].getAttributeNames());
};

Element.prototype.getAttribute = function getAttribute(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getAttribute' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'getAttribute' on 'Element': parameter 1"
  });
  return this[impl].getAttribute(...args);
};

Element.prototype.getAttributeNS = function getAttributeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getAttributeNS' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = conversions["DOMString"](args[0], {
      context: "Failed to execute 'getAttributeNS' on 'Element': parameter 1"
    });
  }
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'getAttributeNS' on 'Element': parameter 2"
  });
  return this[impl].getAttributeNS(...args);
};

Element.prototype.setAttribute = function setAttribute(qualifiedName, value) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'setAttribute' on 'Element': parameter 1"
  });
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'setAttribute' on 'Element': parameter 2"
  });
  return this[impl].setAttribute(...args);
};

Element.prototype.setAttributeNS = function setAttributeNS(namespace, qualifiedName, value) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 3) {
    throw new TypeError(
      "Failed to execute 'setAttributeNS' on 'Element': 3 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 3; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = conversions["DOMString"](args[0], {
      context: "Failed to execute 'setAttributeNS' on 'Element': parameter 1"
    });
  }
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'setAttributeNS' on 'Element': parameter 2"
  });
  args[2] = conversions["DOMString"](args[2], {
    context: "Failed to execute 'setAttributeNS' on 'Element': parameter 3"
  });
  return this[impl].setAttributeNS(...args);
};

Element.prototype.removeAttribute = function removeAttribute(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeAttribute' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'removeAttribute' on 'Element': parameter 1"
  });
  return this[impl].removeAttribute(...args);
};

Element.prototype.removeAttributeNS = function removeAttributeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'removeAttributeNS' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = conversions["DOMString"](args[0], {
      context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 1"
    });
  }
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 2"
  });
  return this[impl].removeAttributeNS(...args);
};

Element.prototype.hasAttribute = function hasAttribute(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'hasAttribute' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'hasAttribute' on 'Element': parameter 1"
  });
  return this[impl].hasAttribute(...args);
};

Element.prototype.hasAttributeNS = function hasAttributeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'hasAttributeNS' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = conversions["DOMString"](args[0], {
      context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 1"
    });
  }
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 2"
  });
  return this[impl].hasAttributeNS(...args);
};

Element.prototype.getAttributeNode = function getAttributeNode(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getAttributeNode' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'getAttributeNode' on 'Element': parameter 1"
  });
  return utils.tryWrapperForImpl(this[impl].getAttributeNode(...args));
};

Element.prototype.getAttributeNodeNS = function getAttributeNodeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getAttributeNodeNS' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = conversions["DOMString"](args[0], {
      context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 1"
    });
  }
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 2"
  });
  return utils.tryWrapperForImpl(this[impl].getAttributeNodeNS(...args));
};

Element.prototype.setAttributeNode = function setAttributeNode(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setAttributeNode' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = convertAttr(args[0], { context: "Failed to execute 'setAttributeNode' on 'Element': parameter 1" });
  return utils.tryWrapperForImpl(this[impl].setAttributeNode(...args));
};

Element.prototype.setAttributeNodeNS = function setAttributeNodeNS(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setAttributeNodeNS' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = convertAttr(args[0], { context: "Failed to execute 'setAttributeNodeNS' on 'Element': parameter 1" });
  return utils.tryWrapperForImpl(this[impl].setAttributeNodeNS(...args));
};

Element.prototype.removeAttributeNode = function removeAttributeNode(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeAttributeNode' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = convertAttr(args[0], { context: "Failed to execute 'removeAttributeNode' on 'Element': parameter 1" });
  return utils.tryWrapperForImpl(this[impl].removeAttributeNode(...args));
};

Element.prototype.matches = function matches(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'matches' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], { context: "Failed to execute 'matches' on 'Element': parameter 1" });
  return this[impl].matches(...args);
};

Element.prototype.webkitMatchesSelector = function webkitMatchesSelector(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'webkitMatchesSelector' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'webkitMatchesSelector' on 'Element': parameter 1"
  });
  return this[impl].webkitMatchesSelector(...args);
};

Element.prototype.getElementsByTagName = function getElementsByTagName(localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByTagName' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'getElementsByTagName' on 'Element': parameter 1"
  });
  return utils.tryWrapperForImpl(this[impl].getElementsByTagName(...args));
};

Element.prototype.getElementsByTagNameNS = function getElementsByTagNameNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getElementsByTagNameNS' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = conversions["DOMString"](args[0], {
      context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 1"
    });
  }
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 2"
  });
  return utils.tryWrapperForImpl(this[impl].getElementsByTagNameNS(...args));
};

Element.prototype.getElementsByClassName = function getElementsByClassName(classNames) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByClassName' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'getElementsByClassName' on 'Element': parameter 1"
  });
  return utils.tryWrapperForImpl(this[impl].getElementsByClassName(...args));
};

Element.prototype.insertAdjacentHTML = function insertAdjacentHTML(position, text) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'insertAdjacentHTML' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 1"
  });
  args[1] = conversions["DOMString"](args[1], {
    context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 2"
  });
  return this[impl].insertAdjacentHTML(...args);
};

Element.prototype.getClientRects = function getClientRects() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].getClientRects());
};

Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return utils.tryWrapperForImpl(this[impl].getBoundingClientRect());
};
Object.defineProperty(Element.prototype, "namespaceURI", {
  get() {
    return this[impl].namespaceURI;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "prefix", {
  get() {
    return this[impl].prefix;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "localName", {
  get() {
    return this[impl].localName;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "tagName", {
  get() {
    return this[impl].tagName;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "id", {
  get() {
    const value = this.getAttribute("id");
    return value === null ? "" : value;
  },
  set(V) {
    V = conversions["DOMString"](V, { context: "Failed to set the 'id' property on 'Element': The provided value" });
    this.setAttribute("id", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "className", {
  get() {
    const value = this.getAttribute("class");
    return value === null ? "" : value;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'className' property on 'Element': The provided value"
    });
    this.setAttribute("class", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "classList", {
  get() {
    return utils.getSameObject(this, "classList", () => {
      return utils.tryWrapperForImpl(this[impl].classList);
    });
  },
  set(V) {
    this.classList.value = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "attributes", {
  get() {
    return utils.getSameObject(this, "attributes", () => {
      return utils.tryWrapperForImpl(this[impl].attributes);
    });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "innerHTML", {
  get() {
    return this[impl].innerHTML;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'innerHTML' property on 'Element': The provided value",
      treatNullAsEmptyString: true
    });
    this[impl].innerHTML = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "outerHTML", {
  get() {
    return this[impl].outerHTML;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'outerHTML' property on 'Element': The provided value",
      treatNullAsEmptyString: true
    });
    this[impl].outerHTML = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollTop", {
  get() {
    return this[impl].scrollTop;
  },
  set(V) {
    V = conversions["unrestricted double"](V, {
      context: "Failed to set the 'scrollTop' property on 'Element': The provided value"
    });
    this[impl].scrollTop = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollLeft", {
  get() {
    return this[impl].scrollLeft;
  },
  set(V) {
    V = conversions["unrestricted double"](V, {
      context: "Failed to set the 'scrollLeft' property on 'Element': The provided value"
    });
    this[impl].scrollLeft = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollWidth", {
  get() {
    return this[impl].scrollWidth;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollHeight", {
  get() {
    return this[impl].scrollHeight;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientTop", {
  get() {
    return this[impl].clientTop;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientLeft", {
  get() {
    return this[impl].clientLeft;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientWidth", {
  get() {
    return this[impl].clientWidth;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientHeight", {
  get() {
    return this[impl].clientHeight;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, Symbol.toStringTag, {
  value: "Element",
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
    throw new TypeError(`${context} is not of type 'Element'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(Element.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Element.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Node._internalSetup(obj);
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
  interface: Element,
  expose: {
    Window: { Element: Element }
  }
};
module.exports = iface;

const Impl = require("../nodes/Element-impl.js");
