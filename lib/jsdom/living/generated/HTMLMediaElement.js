"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");
const HTMLElement = require("./HTMLElement.js");
const impl = utils.implSymbol;

function HTMLMediaElement() {
  throw new TypeError("Illegal constructor");
}
Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLMediaElement, HTMLElement.interface);

HTMLMediaElement.prototype.load = function load() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].load();
};

HTMLMediaElement.prototype.canPlayType = function canPlayType(type) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'canPlayType' on 'HTMLMediaElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }
  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'canPlayType' on 'HTMLMediaElement': parameter 1"
  });
  return utils.tryWrapperForImpl(this[impl].canPlayType(...args));
};

HTMLMediaElement.prototype.play = function play() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].play();
};

HTMLMediaElement.prototype.pause = function pause() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl].pause();
};

HTMLMediaElement.prototype.addTextTrack = function addTextTrack(kind) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'addTextTrack' on 'HTMLMediaElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 3; ++i) {
    args[i] = arguments[i];
  }
  args[0] = utils.tryImplForWrapper(args[0]);
  if (args[1] !== undefined) {
    args[1] = conversions["DOMString"](args[1], {
      context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 2"
    });
  } else {
    args[1] = "";
  }
  if (args[2] !== undefined) {
    args[2] = conversions["DOMString"](args[2], {
      context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 3"
    });
  } else {
    args[2] = "";
  }
  return utils.tryWrapperForImpl(this[impl].addTextTrack(...args));
};
Object.defineProperty(HTMLMediaElement.prototype, "src", {
  get() {
    return this[impl].src;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'src' property on 'HTMLMediaElement': The provided value"
    });
    this[impl].src = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "currentSrc", {
  get() {
    return this[impl].currentSrc;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "crossOrigin", {
  get() {
    const value = this.getAttribute("crossOrigin");
    return value === null ? "" : value;
  },
  set(V) {
    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'crossOrigin' property on 'HTMLMediaElement': The provided value"
      });
    }
    this.setAttribute("crossOrigin", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement, "NETWORK_EMPTY", {
  value: 0,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "NETWORK_EMPTY", {
  value: 0,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "NETWORK_IDLE", {
  value: 1,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "NETWORK_IDLE", {
  value: 1,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "NETWORK_LOADING", {
  value: 2,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "NETWORK_LOADING", {
  value: 2,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "NETWORK_NO_SOURCE", {
  value: 3,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "NETWORK_NO_SOURCE", {
  value: 3,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "networkState", {
  get() {
    return this[impl].networkState;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "preload", {
  get() {
    const value = this.getAttribute("preload");
    return value === null ? "" : value;
  },
  set(V) {
    V = conversions["DOMString"](V, {
      context: "Failed to set the 'preload' property on 'HTMLMediaElement': The provided value"
    });
    this.setAttribute("preload", V);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "buffered", {
  get() {
    return utils.tryWrapperForImpl(this[impl].buffered);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement, "HAVE_NOTHING", {
  value: 0,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "HAVE_NOTHING", {
  value: 0,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "HAVE_METADATA", {
  value: 1,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "HAVE_METADATA", {
  value: 1,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "HAVE_CURRENT_DATA", {
  value: 2,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "HAVE_CURRENT_DATA", {
  value: 2,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "HAVE_FUTURE_DATA", {
  value: 3,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "HAVE_FUTURE_DATA", {
  value: 3,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement, "HAVE_ENOUGH_DATA", {
  value: 4,
  enumerable: true
});
Object.defineProperty(HTMLMediaElement.prototype, "HAVE_ENOUGH_DATA", {
  value: 4,
  enumerable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "readyState", {
  get() {
    return this[impl].readyState;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "seeking", {
  get() {
    return this[impl].seeking;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "currentTime", {
  get() {
    return this[impl].currentTime;
  },
  set(V) {
    V = conversions["double"](V, {
      context: "Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided value"
    });
    this[impl].currentTime = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "duration", {
  get() {
    return this[impl].duration;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "paused", {
  get() {
    return this[impl].paused;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "defaultPlaybackRate", {
  get() {
    return this[impl].defaultPlaybackRate;
  },
  set(V) {
    V = conversions["double"](V, {
      context: "Failed to set the 'defaultPlaybackRate' property on 'HTMLMediaElement': The provided value"
    });
    this[impl].defaultPlaybackRate = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "playbackRate", {
  get() {
    return this[impl].playbackRate;
  },
  set(V) {
    V = conversions["double"](V, {
      context: "Failed to set the 'playbackRate' property on 'HTMLMediaElement': The provided value"
    });
    this[impl].playbackRate = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "played", {
  get() {
    return utils.tryWrapperForImpl(this[impl].played);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "seekable", {
  get() {
    return utils.tryWrapperForImpl(this[impl].seekable);
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "ended", {
  get() {
    return this[impl].ended;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "autoplay", {
  get() {
    return this.hasAttribute("autoplay");
  },
  set(V) {
    V = conversions["boolean"](V, {
      context: "Failed to set the 'autoplay' property on 'HTMLMediaElement': The provided value"
    });
    if (V) {
      this.setAttribute("autoplay", "");
    } else {
      this.removeAttribute("autoplay");
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "loop", {
  get() {
    return this.hasAttribute("loop");
  },
  set(V) {
    V = conversions["boolean"](V, {
      context: "Failed to set the 'loop' property on 'HTMLMediaElement': The provided value"
    });
    if (V) {
      this.setAttribute("loop", "");
    } else {
      this.removeAttribute("loop");
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "controls", {
  get() {
    return this.hasAttribute("controls");
  },
  set(V) {
    V = conversions["boolean"](V, {
      context: "Failed to set the 'controls' property on 'HTMLMediaElement': The provided value"
    });
    if (V) {
      this.setAttribute("controls", "");
    } else {
      this.removeAttribute("controls");
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "volume", {
  get() {
    return this[impl].volume;
  },
  set(V) {
    V = conversions["double"](V, {
      context: "Failed to set the 'volume' property on 'HTMLMediaElement': The provided value"
    });
    this[impl].volume = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "muted", {
  get() {
    return this[impl].muted;
  },
  set(V) {
    V = conversions["boolean"](V, {
      context: "Failed to set the 'muted' property on 'HTMLMediaElement': The provided value"
    });
    this[impl].muted = V;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "defaultMuted", {
  get() {
    return this.hasAttribute("muted");
  },
  set(V) {
    V = conversions["boolean"](V, {
      context: "Failed to set the 'defaultMuted' property on 'HTMLMediaElement': The provided value"
    });
    if (V) {
      this.setAttribute("muted", "");
    } else {
      this.removeAttribute("muted");
    }
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "audioTracks", {
  get() {
    return utils.getSameObject(this, "audioTracks", () => {
      return utils.tryWrapperForImpl(this[impl].audioTracks);
    });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "videoTracks", {
  get() {
    return utils.getSameObject(this, "videoTracks", () => {
      return utils.tryWrapperForImpl(this[impl].videoTracks);
    });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, "textTracks", {
  get() {
    return utils.getSameObject(this, "textTracks", () => {
      return utils.tryWrapperForImpl(this[impl].textTracks);
    });
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMediaElement.prototype, Symbol.toStringTag, {
  value: "HTMLMediaElement",
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
    throw new TypeError(`${context} is not of type 'HTMLMediaElement'.`);
  },
  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLMediaElement.prototype);
    this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLMediaElement.prototype);
    this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    HTMLElement._internalSetup(obj);
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
  interface: HTMLMediaElement,
  expose: {
    Window: { HTMLMediaElement: HTMLMediaElement }
  }
};
module.exports = iface;

const Impl = require("../nodes/HTMLMediaElement-impl.js");
