"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const EventTarget = require("./EventTarget.js");
const impl = utils.implSymbol;

function Node() {
  throw new TypeError("Illegal constructor");
}
Object.setPrototypeOf(Node.prototype, EventTarget.interface.prototype);
Object.setPrototypeOf(Node, EventTarget.interface);

Node.prototype.hasChildNodes = function hasChildNodes() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].hasChildNodes();
};

Node.prototype.normalize = function normalize() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].normalize();
};

Node.prototype.cloneNode = function cloneNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] !== undefined) {
    args[0] = conversions["boolean"](args[0], { context: "Failed to execute 'cloneNode' on 'Node': parameter 1" });
  } else {
    args[0] = false;
  }
  return utils.tryWrapperForImpl(this[impl].cloneNode(...args));
};

Node.prototype.isEqualNode = function isEqualNode(otherNode) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'isEqualNode' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = module.exports.convert(args[0], { context: "Failed to execute 'isEqualNode' on 'Node': parameter 1" });
  }
  return this[impl].isEqualNode(...args);
};

Node.prototype.compareDocumentPosition = function compareDocumentPosition(other) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'compareDocumentPosition' on 'Node': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = module.exports.convert(args[0], {
    context: "Failed to execute 'compareDocumentPosition' on 'Node': parameter 1"
  });
  return this[impl].compareDocumentPosition(...args);
};

Node.prototype.contains = function contains(other) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'contains' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  if (args[0] === null || args[0] === undefined) {
    args[0] = null;
  } else {
    args[0] = module.exports.convert(args[0], { context: "Failed to execute 'contains' on 'Node': parameter 1" });
  }
  return this[impl].contains(...args);
};

Node.prototype.insertBefore = function insertBefore(node, child) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  args[0] = module.exports.convert(args[0], { context: "Failed to execute 'insertBefore' on 'Node': parameter 1" });
  if (args[1] === null || args[1] === undefined) {
    args[1] = null;
  } else {
    args[1] = module.exports.convert(args[1], { context: "Failed to execute 'insertBefore' on 'Node': parameter 2" });
  }
  return utils.tryWrapperForImpl(this[impl].insertBefore(...args));
};

Node.prototype.appendChild = function appendChild(node) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'appendChild' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = module.exports.convert(args[0], { context: "Failed to execute 'appendChild' on 'Node': parameter 1" });
  return utils.tryWrapperForImpl(this[impl].appendChild(...args));
};

Node.prototype.replaceChild = function replaceChild(node, child) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'replaceChild' on 'Node': 2 arguments required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }
  args[0] = module.exports.convert(args[0], { context: "Failed to execute 'replaceChild' on 'Node': parameter 1" });
  args[1] = module.exports.convert(args[1], { context: "Failed to execute 'replaceChild' on 'Node': parameter 2" });
  return utils.tryWrapperForImpl(this[impl].replaceChild(...args));
};

Node.prototype.removeChild = function removeChild(child) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeChild' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = module.exports.convert(args[0], { context: "Failed to execute 'removeChild' on 'Node': parameter 1" });
  return utils.tryWrapperForImpl(this[impl].removeChild(...args));
};
Object.defineProperty(Node, "ELEMENT_NODE", {
  value: 1,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ELEMENT_NODE", {
  value: 1,
  enumerable: true
});

Object.defineProperty(Node, "ATTRIBUTE_NODE", {
  value: 2,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
  value: 2,
  enumerable: true
});

Object.defineProperty(Node, "TEXT_NODE", {
  value: 3,
  enumerable: true
});
Object.defineProperty(Node.prototype, "TEXT_NODE", {
  value: 3,
  enumerable: true
});

Object.defineProperty(Node, "CDATA_SECTION_NODE", {
  value: 4,
  enumerable: true
});
Object.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
  value: 4,
  enumerable: true
});

Object.defineProperty(Node, "ENTITY_REFERENCE_NODE", {
  value: 5,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
  value: 5,
  enumerable: true
});

Object.defineProperty(Node, "ENTITY_NODE", {
  value: 6,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ENTITY_NODE", {
  value: 6,
  enumerable: true
});

Object.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {
  value: 7,
  enumerable: true
});
Object.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
  value: 7,
  enumerable: true
});

Object.defineProperty(Node, "COMMENT_NODE", {
  value: 8,
  enumerable: true
});
Object.defineProperty(Node.prototype, "COMMENT_NODE", {
  value: 8,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_NODE", {
  value: 9,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_NODE", {
  value: 9,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_TYPE_NODE", {
  value: 10,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
  value: 10,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {
  value: 11,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
  value: 11,
  enumerable: true
});

Object.defineProperty(Node, "NOTATION_NODE", {
  value: 12,
  enumerable: true
});
Object.defineProperty(Node.prototype, "NOTATION_NODE", {
  value: 12,
  enumerable: true
});

Object.defineProperty(Node.prototype, "nodeType", {
  get() {
    return this[impl].nodeType;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "nodeName", {
  get() {
    return this[impl].nodeName;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "baseURI", {
  get() {
    return this[impl].baseURI;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "ownerDocument", {
  get() {
    return utils.tryWrapperForImpl(this[impl].ownerDocument);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "parentNode", {
  get() {
    return utils.tryWrapperForImpl(this[impl].parentNode);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "parentElement", {
  get() {
    return utils.tryWrapperForImpl(this[impl].parentElement);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "childNodes", {
  get() {
    return utils.getSameObject(this, "childNodes", () => {
      return utils.tryWrapperForImpl(this[impl].childNodes);
    });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "firstChild", {
  get() {
    return utils.tryWrapperForImpl(this[impl].firstChild);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "lastChild", {
  get() {
    return utils.tryWrapperForImpl(this[impl].lastChild);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "previousSibling", {
  get() {
    return utils.tryWrapperForImpl(this[impl].previousSibling);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "nextSibling", {
  get() {
    return utils.tryWrapperForImpl(this[impl].nextSibling);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "nodeValue", {
  get() {
    return this[impl].nodeValue;
  },
  set(V) {
    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'nodeValue' property on 'Node': The provided value"
      });
    }
    this[impl].nodeValue = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "textContent", {
  get() {
    return this[impl].textContent;
  },
  set(V) {
    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'textContent' property on 'Node': The provided value"
      });
    }
    this[impl].textContent = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {
  value: 1,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
  value: 1,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {
  value: 2,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
  value: 2,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {
  value: 4,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
  value: 4,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {
  value: 8,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
  value: 8,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {
  value: 16,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
  value: 16,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  value: 32,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  value: 32,
  enumerable: true
});

Object.defineProperty(Node.prototype, Symbol.toStringTag, {
  value: "Node",
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
    throw new TypeError(`${context} is not of type 'Node'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(Node.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Node.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    EventTarget._internalSetup(obj);
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
  interface: Node,
  expose: {
    Window: { Node: Node }
  }
};
module.exports = iface;

const Impl = require("../nodes/Node-impl.js");
