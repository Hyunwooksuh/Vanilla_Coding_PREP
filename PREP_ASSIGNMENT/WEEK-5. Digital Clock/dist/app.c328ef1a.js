// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Canola/CanolaError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 *
 * ⛔️CanolaError에 입장하셨군요.
 *
 * Canola에서는 오류가 발생할 경우 Canola만의 고유한 에러를 발생시킵니다.
 *
 * 여러 가지 이유가 있지만,
 *
 * 우선적으로 Canola를 사용하는 사용자(개발자)의 경험을 위해서입니다.
 * 어떤 이유로 어디에서 발생한 오류인지 더욱 빠르게 알 수 있도록 하기 위함입니다.
 * "이것은 Canola에서 발생한 오류입니다"라고 빠르게 알려주는 것이죠.
 *
 * 둘째로는 앞으로 Canola가 성장하며 많은 로직들을 품게 될텐데,
 * Canola 만의 확장성을 확보해놓기 위함입니다.
 *
 * CanolaError 클래스는 자바스크립트의 기본적으로 주어지는 Error 클래스와 밀접한 관계가 있습니다.
 * 조금 더 직접적으로 말씀드리자면, CanolaError는 Error의 자식같은 존재입니다.
 * (똑똑한 말로 하자면, '상속'이라고 하죠?)
 *
 * CanolaError는 결국 근본적으로 Error입니다.
 * 기본적인 Error의 기능과 함께 우리가 Canola에서 원하는 오류 관련 기능들을 포함할 수 있는 조금 더 확장된 Error입니다.
 * 그렇기에 기본 Error 클래스의 기능들을 상속받도록 설계한 것입니다.
 *
 * 아래 코드 내용은 여러분께서 알고 있는 Prototype에 대한 내용으로는 조금 부족할 수 있습니다.
 * 자바스크립트의 "상속"이 어떻게 이루어지는지 꼼꼼하게 조사해보시고 이해해보도록 하세요.
 *
 * [자바스크립트 상속 MDN]
 * https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance
 *
 * (Ken: 상속이라는 단어.. 저는 사실 자바스크립트의 프로토타입 기반 설계에 적합하지 않은 단어라고 생각합니다.)
 *
 */
function CanolaError(message) {
  Error.call(this, message);
  this.message = message;
}

CanolaError.prototype = Object.create(Error.prototype);
CanolaError.prototype.constructor = CanolaError;
var _default = CanolaError;
exports.default = _default;
},{}],"Canola/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guidGenerator = guidGenerator;
exports.extend = extend;

/*
 *
 * 🛠이 곳은 유틸리티 함수들이 모여사는 곳입니다.
 * 관심있으시면 구경해보시되, 지금 크게 중요한 부분은 아닙니다.
 *
 */
// 고유한 ID를 생성해주는 함수입니다.
function guidGenerator() {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
} // options 객체의 속성들을 target 객체의 속성으로 확장해주는 함수입니다.


function extend(target, options) {
  for (var prop in options) {
    target[prop] = options[prop];
  }
}
},{}],"Canola/Component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = componentFactory;

var _CanolaError = _interopRequireDefault(require("./CanolaError"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *
 * ⭐️Canola의 핵심인 컴포넌트 공장입니다.
 *
 * 코드 내용이 많겠지만, 당황하지 마세요. 모두 다 이해해야 하는 것은 절대 아닙니다.
 *
 * 우선 이름부터 한번 다시 생각해볼까요?
 *
 * componentFactory.. Factory... 공장?
 * 왜 Factory라는 단어가 post-fix로 붙어있을까요?
 *
 * 자바스크립트에서 Factory란,
 *
 * > In JavaScript, any function can return a new object.
 * > When it’s not a constructor function or class, it’s called a factory function.
 * (출처: https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
 *
 * Factory에 대해 간단한 소개를 보셨다면, 이제 아래로 이동해보실까요?
 *
 */
// 지금은 크게 개의치 않아도 될 함수입니다.
function createNode(html) {
  var tempNode = document.createElement("template");
  tempNode.innerHTML = html;
  return tempNode.content.firstChild;
}
/*
 *
 * ✨바로 그 컴포넌트 공장입니다.
 *
 * 헛, 아직 컴포넌트가 무엇인지 모르시나요..?
 * (아직 컴포넌트에 대해 구글링 해보지 않았다면, 호기심이 조금 부족하신것 같군요..)
 *
 * 프론트엔드에서 말하는 컴포넌트란,
 * 재사용이 용이하도록 만들어진 UI의 일부를 일컫습니다.
 *
 * 예를 들어, 우리가 A라는 웹 어플리케이션을 작업할때 여러 곳에서 반복적으로 쓰이는 버튼이 있습니다.
 * 이 버튼들은 모두 마우스를 올렸을때 같은 동작을 하고, 클릭되었을때 또한 같은 동작을 합니다.
 * 버튼을 만들어 사용할때마다 매번 같은 로직을 추가하기보다는,,
 * 버튼의 공통된 로직을 포함한 버튼 컴포넌트를 만들어 놓고, 필요할때마다 쉽게 재사용하도록 할 수 있습니다.
 *
 * 아래는 컴포넌트가 생성자 함수 방식으로 만들어져 있지만,
 * 함수로 만드는지 객체로 만드는지 등에 대한 규칙은 없습니다.
 * 상황에 따라 합리적인 설계 방식을 선택하는 것 뿐입니다.
 *
 */
// componentFactory 함수는 Component라는 생성자 함수를 반환합니다.


function componentFactory(generateTemplate) {
  function Component(options) {
    if (typeof options.root !== "string") {
      throw new _CanolaError.default("'root' 옵션은 필수이며, 해당 컴포넌트가 추가될 부모 요소의 CSS 선택자를 나타내는 문자열이어야 합니다.");
    }

    (0, _utils.extend)(this, options); // Clock options -> myClock options

    delete this.root; // underscore means this property is private use only.

    this._id = (0, _utils.guidGenerator)();
    this.$parent = document.querySelector(options.root);
    this.$el = null;

    if (this.$parent === null) {
      throw new _CanolaError.default("'".concat(options.root, "' \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC5D8\uB808\uBA3C\uD2B8\uC785\uB2C8\uB2E4."));
    }
  } //digitalClock


  Component.prototype.clickEvent = function () {
    var eventKeys = Object.keys(generateTemplate.events);
    var eventFunctions = Object.values(generateTemplate.events);
    var $title = this.$el.querySelector(eventKeys[0]);
    var $time = this.$el.querySelector(eventKeys[1]);
    $title.addEventListener("click", eventFunctions[0]);
    $time.addEventListener("click", eventFunctions[1]);
  };

  Component.prototype.render = function () {
    var html = generateTemplate.template.call(this).trim();
    var node = createNode(html);

    if (!this.$el) {
      this.$el = node;
      this.$el.dataset.id = this._id;
      this.$parent.appendChild(this.$el);
    } else {
      this.$el.innerHTML = node.innerHTML;
    }

    return this;
  };

  Component.prototype.destroy = function () {
    if (!this.$el) {
      throw new _CanolaError.default("\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC5D8\uB808\uBA3C\uD2B8\uC785\uB2C8\uB2E4. ID: '".concat(this._id, "'"));
    }

    this.$el.remove();
  };

  return Component;
}
},{"./CanolaError":"Canola/CanolaError.js","./utils":"Canola/utils.js"}],"Canola/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component = _interopRequireDefault(require("./Component"));

var _CanolaError = _interopRequireDefault(require("./CanolaError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *
 * 🌼Canola의 세계에 오신 것을 환영합니다.
 * 이 곳은 Canola의 Root Module으로서 Canola의 create 메소드를 노출시키고 있습니다.
 *
 * > Canola는 왜 이름이 Canola일까요?
 * Ken: 단지 예쁜 이름을 원했을 뿐입니다.. 이름 예쁘지 않나요?
 *
 * > 어느 곳을 먼저 보면 좋을까요?
 * Ken: 아래의 create 메소드를 살펴보세요.
 *
 */
function validateOptions(_ref) {
  var template = _ref.template;

  if (!template) {
    throw new _CanolaError.default("'template'은 필수 옵션입니다.");
  }

  if (typeof template !== "function") {
    throw new _CanolaError.default("'template' 옵션은 해당 컴포넌트의 HTML 마크업을 문자열로 반환하는 함수여야 합니다.");
  }
}

var CanolaUI = {
  /*
   * 👉🏻 create 메소드입니다.
   * CanolaError에 대해서 살펴보신 후, componentFactory로 이동하세요.
   */
  create: function create(options) {
    validateOptions(options);
    return (0, _Component.default)(options);
  }
};
var _default = CanolaUI;
exports.default = _default;
},{"./Component":"Canola/Component.js","./CanolaError":"Canola/CanolaError.js"}],"utils/times.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeStamp = getTimeStamp;

function getTimeStamp() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours.toString().length < 2) {
    hours = "0".concat(hours);
  }

  if (minutes.toString().length < 2) {
    minutes = "0".concat(minutes);
  }

  if (seconds.toString().length < 2) {
    seconds = "0".concat(seconds);
  }

  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
},{}],"app.js":[function(require,module,exports) {
/*
 *
 * 주어진 샘플 코드는 수정/삭제하지 마세요.
 *
 * [🥇첫 번째 퀘스트]
 *
 * 아래 샘플 코드와 함께 `./Canola/index.js` 부터 살펴보시고 첫 번째 퀘스트를 찾아주세요!
 *
 * [🥇두 번째 퀘스트]
 *
 * 아래에 주어진 `Clock`(대문자 이름!)을 재사용하여 시,분,초를 표기하는 Digital Clock을 구현하세요.
 * (매초마다 시간이 없데이트 되어야 합니다.)
 *
 */
"use strict"; // import 구문에 디렉토리명을 사용할 경우, 'index.js'를 가장 우선적으로 찾습니다.
// 즉, 현재는 `./Canola/index.js`를 가져오게 됩니다.

var _Canola = _interopRequireDefault(require("./Canola"));

var _times = require("./utils/times");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *
 * Clock 형태의 UI를 만들 수 있는 Component입니다.
 *
 * 사용 방법은 아래 샘플 코드를 참고하시고,
 * 자세한 구동 원리는 `./Canola/index.js`부터 참고하세요.
 *
 */
var Clock = _Canola.default.create({
  events: {
    ".clock h3": function onTitleClick() {
      // ".clock h3" 선택자에 해당하는 요소를 클릭했을 경우, 실행됩니다.
      console.log("Click H3!");
    },
    ".clock p": function onTimeClick() {
      // ".clock p" 선택자에 해당하는 요소를 클릭했을 경우, 실행됩니다.
      console.log("Click P!");
    }
  },
  template: function template() {
    return "\n      <div class=\"clock\" style=\"background-color: ".concat(this.backgroundColor, ";\">\n        <h3>").concat(this.title, "</h3>\n        <p>").concat(this.time, "</p>\n      </div>\n    ");
  }
});
/* Sample Start */


var initialTime = (0, _times.getTimeStamp)();
var myClock = new Clock({
  root: "#root",
  title: "최초 실행 시간",
  backgroundColor: "#E0F7FA",
  time: initialTime
});
myClock.render();
myClock.clickEvent();
/*  Sample End */

var timer = setInterval(function () {
  digitalClock.time = (0, _times.getTimeStamp)();
  digitalClock.render();
  digitalClock.clickEvent();
}, 1000);
var digitalClock = new Clock({
  root: "#root",
  title: "현재 시간",
  backgroundColor: "#E0F7FA",
  time: initialTime
});
digitalClock.render();
digitalClock.clickEvent();
},{"./Canola":"Canola/index.js","./utils/times":"utils/times.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56690" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map