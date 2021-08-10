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
})({"index.js":[function(require,module,exports) {
var CHAT_HISTORY = [{
  type: "image",
  url: "https://i.ibb.co/cys3cBZ/Image-from-i-OS-10.jpg",
  username: "김찬중",
  color: "#b17fc1",
  createdAt: "2021-07-10T11:48:10.000Z"
}, {
  type: "text",
  content: "부적은 잘 있습니다.",
  username: "김찬중",
  color: "#b17fc1",
  createdAt: "2021-07-10T11:48:13.000Z"
}, {
  type: "text",
  content: "진품명품 나가요?",
  username: "김도희",
  color: "#0b218b",
  createdAt: "2021-07-10T11:48:20.000Z"
}, {
  type: "text",
  content: "네네 도희님이 사시나요?",
  username: "김찬중",
  color: "#b17fc1",
  createdAt: "2021-07-10T11:49:33.000Z"
}, {
  type: "text",
  content: "네?",
  username: "김도희",
  color: "#0b218b",
  createdAt: "2021-07-10T11:50:32.000Z"
}, {
  type: "text",
  content: "도희 사시 아니예요",
  username: "Soin Na",
  color: "#d1c17b",
  createdAt: "2021-07-10T11:50:28.000Z"
}, {
  type: "text",
  content: "저희 할머니네 도자기랑 교환하실래요?",
  username: "김도희",
  color: "#0b218b",
  createdAt: "2021-07-10T11:51:43.000Z"
}, {
  type: "image",
  url: "https://i.ibb.co/KsrBkYw/Image-from-i-OS-11.jpg",
  username: "김도희",
  color: "#0b218b",
  createdAt: "2021-07-10T11:51:55.000Z"
}, {
  type: "text",
  content: "할머니가 진품명품에 내달라고 부탁했는데",
  username: "김도희",
  color: "#0b218b",
  createdAt: "2021-07-10T11:51:57.000Z"
}, {
  type: "text",
  content: "오오 진짜 이쁘네요 도자기",
  username: "김찬중",
  color: "#b17fc1",
  createdAt: "2021-07-10T11:52:21.000Z"
}, {
  type: "text",
  content: "그럼 안녕히계십시오",
  username: "김찬중",
  color: "#b17fc1",
  createdAt: "2021-07-10T11:52:22.000Z"
}, {
  type: "text",
  content: "원장님은 아이스크림 심부름중,,, 터벅터벅,,",
  username: "최한나",
  color: "#dc2edb",
  createdAt: "2021-07-10T11:58:09.000Z"
}, {
  type: "image",
  url: "https://i.ibb.co/Mnz4ysz/i-OS.jpg",
  username: "최한나",
  color: "#dc2edb",
  createdAt: "2021-07-10T11:58:12.000Z"
}, {
  type: "text",
  content: "여기서 보셔도 돼요 https://i.ibb.co/Mnz4ysz/i-OS.jpg",
  username: "최한나",
  color: "#dc2edb",
  createdAt: "2021-07-10T11:59:51.000Z"
}];

function createTextMessage(data) {
  return "\n    <div class=\"meta\">\n      <span class=\"time\">".concat(prettifyISOString(data.createdAt), "</span>\n      <span\n        class=\"username\"\n        style=\"color: ").concat(data.color, ";\"\n      >").concat(data.username, "</span>\n    </div>\n    <p class=\"content\">").concat(convertToLink(data.content), "</p>\n  ");
}

function createImageMessage(data) {
  return "\n    <div class=\"meta\">\n      <span class=\"time\">".concat(prettifyISOString(data.createdAt), "</span>\n      <span\n        class=\"username\"\n        style=\"color: ").concat(data.color, ";\"\n      >").concat(data.username, "</span>\n    </div>\n    <image class=\"content\" src=\"").concat(data.url, "\">\n  ");
}

function convertToLink(content) {
  // TODO: 인자로 전달되는 텍스트 내용 중에 http:// 혹은 https:// 로 시작하는 텍스트는 a 태그를 이용하여 링크로 변환해주세요.
  // 정규표현식을 사용하지 마세요.
  // content: "여기서 보셔도 돼요 https://i.ibb.co/Mnz4ysz/i-OS.jpg"
  var t = 0;
  var p;
  var q;
  var result = '';

  while (1) {
    p = content.indexOf('http', t);
    if (p == -1) break; // t ~ p-1까지는 text

    var text = content.substring(t, p);
    q = content.indexOf(' ', p + 1); // p ~ q까지는 link

    var link = content.substring(p, q);
    var hyperLink = '<a href=' + link + '>' + link + '</a>';
    var fraction = text + hyperLink;
    result += fraction;
    t = q;
  }

  return result;
}

function prettifyISOString(iso) {
  // TODO: 인자로 전달되는 ISO String을 "시간:분" 형태로 변환하여 반환하세요. 예) "20:13"
  // 정규표현식을 사용하지 마세요.
  // createdAt: "2021-07-10T11:58:09.000Z"
  var dotIndex = iso.indexOf(':');
  return "20:13";
}

var messageListElement = document.querySelector(".message-list");

for (var i = 0; i < CHAT_HISTORY.length; i++) {
  var chat = CHAT_HISTORY[i];
  var messageElement = document.createElement("li");

  if (chat.type === "text") {
    messageElement.innerHTML = createTextMessage(chat);
  } else if (chat.type === "image") {
    messageElement.innerHTML = createImageMessage(chat);
  }

  messageElement.classList.add("message");
  messageListElement.appendChild(messageElement);
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52545" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/slack-messenger.e31bb0bc.js.map