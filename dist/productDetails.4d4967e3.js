// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jJ19f":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1fda396d4d4967e3";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9Fena":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _globalScss = require("../styles/global.scss");
var _productDetailsSearchJs = require("../js/search/productDetailsSearch.js");
var _productDetailsSearchJsDefault = parcelHelpers.interopDefault(_productDetailsSearchJs);
var _navJs = require("../components/nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
var _cartIconJs = require("../components/cartIcon.js");
var _cartIconJsDefault = parcelHelpers.interopDefault(_cartIconJs);
var _navScss = require("../components/nav.scss");
var _footerJs = require("../components/footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
var _footerScss = require("../components/footer.scss");
var _detailsJs = require("../components/details.js");
var _detailsJsDefault = parcelHelpers.interopDefault(_detailsJs);
var _detailsScss = require("../components/details.scss");
var _leftArrowJs = require("../components/leftArrow.js");
var _leftArrowJsDefault = parcelHelpers.interopDefault(_leftArrowJs);
const productDetails = ()=>{
    document.getElementById("nav").innerHTML = _navJsDefault.default(), _productDetailsSearchJsDefault.default(), (()=>{
        document.querySelector(".arrow-left").innerHTML = _leftArrowJsDefault.default();
    })(), (()=>{
        document.getElementById("cart").innerHTML = _cartIconJsDefault.default();
    })();
    document.getElementById("details").innerHTML = _detailsJsDefault.default();
    document.getElementById("footer").innerHTML = _footerJsDefault.default();
};
// init productDetails
productDetails();

},{"../styles/global.scss":"2L5oL","../js/search/productDetailsSearch.js":"30U01","../components/nav.js":"kuKN0","../components/cartIcon.js":"23I5l","../components/nav.scss":"kNTMn","../components/footer.js":"4psvf","../components/footer.scss":"jlP4C","../components/details.js":"eeV3O","../components/details.scss":"kSWzc","../components/leftArrow.js":"iUqjY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2L5oL":[function() {},{}],"30U01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiJs = require("../api/api.js");
var _detailsJs = require("../../components/details.js");
var _detailsJsDefault = parcelHelpers.interopDefault(_detailsJs);
function Search() {
    const products1 = document.getElementById("details");
    const search = document.querySelector(".search");
    const productsUrl = _apiJs.baseUrl + "/shoes?populate=*";
    const fullScreenMessage = document.querySelector(".full-screen-message");
    const productsList = document.querySelector(".products-container");
    const xBtn = document.getElementById("xBtn");
    const searchInput = document.getElementById("searchInput");
    search.addEventListener("keyup", async (e)=>{
        const searchString = e.target.value;
        // // Load default layout when string is empty //
        if (!searchString) {
            xBtn.style.display = "none";
            _detailsJsDefault.default();
            productsList.innerHTML = "";
        } else {
            xBtn.style.display = "inline";
            xBtn.addEventListener("click", ()=>{
                searchInput.value = "";
                xBtn.style.display = "none";
                _detailsJsDefault.default();
                productsList.innerHTML = "";
            });
        }
        // Filter //
        if (searchString.length > 1) {
            products1.innerHTML = "";
            const response = await fetch(productsUrl);
            const json = await response.json();
            const filteredProducts = json.data.filter((product)=>{
                return product.attributes.title.trim().toLowerCase().includes(searchString) || product.attributes.textContent.trim().toLowerCase().includes(searchString);
            });
            // Empty message
            if (filteredProducts == 0) (function nothingThere() {
                productsList.innerHTML = "";
                fullScreenMessage.style.display = "flex";
            })();
            else {
                fullScreenMessage.style.display = "none";
                displayProducts(filteredProducts);
            }
        }
        function displayProducts(products) {
            productsList.innerHTML = "";
            products.forEach((product)=>{
                productsList.innerHTML += `
          <a href="./productDetails.html?id=${product.id}">
            <div class="products-content">
              <div class="products-img" style="background-image: url(${product.attributes.image.data.attributes.formats.medium.url});"></div>
              <p>${product.attributes.title} <span class="price-tag">$${product.attributes.price}</span></p>
            </div>
          </a>
          `;
            });
        }
    });
}
exports.default = Search;

},{"../api/api.js":"OFlXG","../../components/details.js":"eeV3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"OFlXG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baseUrl", ()=>baseUrl
);
const baseUrl = "https://calm-hollows-27909.herokuapp.com/api";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eeV3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiJs = require("../js/api/api.js");
var _countJs = require("../js/count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _localstorageJs = require("../js/localstorage/localstorage.js");
const products = document.getElementById("details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const Details = async ()=>{
    // const productsUrl = baseUrl + "/shoes/" + id;
    try {
        const response = await fetch(`${_apiJs.baseUrl}/shoes/${id}?populate=image`);
        const json = await response.json();
        products.innerHTML = `
    <div class="single-product-content">
      <div class="single-product-img"><div style="background-image: url(${json.data.attributes.image.data.attributes.formats.medium.url});"></div></div>
      <div class="single-product-text-container">
        <div class="single-product-text">
            <h2>${json.data.attributes.title}</h2>
            <p>${json.data.attributes.textContent}</p>
        </div>
        <div class="single-product-buttons">
            <p>$${json.data.attributes.price}</p>
            <div>
              <button id="dec" class="incDec">-</button>
              <span id="totalClicks" class="totalClicks">1</span>
              <button id="inc" class="incDec">+</button>
            </div>
            <button id="buyBtn" class="button-1">Buy now</button>
        </div>
      </div>
    </div>
    `;
        storeLocally(json.data.attributes.image.data.attributes.formats.medium.url, json.data.attributes.title, json.data.attributes.textContent, json.data.attributes.price, id);
        _countJsDefault.default();
        return;
    } catch (error) {
        console.log(error);
        return error;
    }
};
function storeLocally(imageUrl, title, textContent, price, id1) {
    const cartList = _localstorageJs.getFromStorage("inCart");
    document.getElementById("buyBtn").addEventListener("click", ()=>{
        const currentProduct = {
            currentUrl: imageUrl,
            currentTitle: title,
            currentTextContent: textContent,
            currentPrice: price,
            currentId: id1
        };
        cartList.push(currentProduct);
        _localstorageJs.saveToStorage("inCart", cartList);
    });
}
exports.default = Details;

},{"../js/api/api.js":"OFlXG","../js/count.js":"ji1Sz","../js/localstorage/localstorage.js":"3gWpG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji1Sz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Count() {
    const inc = document.getElementById("inc");
    const dec = document.getElementById("dec");
    const display = document.getElementById("totalClicks");
    let count = 1;
    inc.addEventListener("click", increase);
    dec.addEventListener("click", decrease);
    function increase() {
        count++;
        display.innerText = count;
    }
    function decrease() {
        if (count > 0) {
            count--;
            display.innerText = count;
        }
    }
}
exports.default = Count;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gWpG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveToken", ()=>saveToken
);
parcelHelpers.export(exports, "getToken", ()=>getToken
);
parcelHelpers.export(exports, "saveUser", ()=>saveUser
);
parcelHelpers.export(exports, "getUsername", ()=>getUsername
);
parcelHelpers.export(exports, "saveToStorage", ()=>saveToStorage
);
parcelHelpers.export(exports, "getFromStorage", ()=>getFromStorage
);
const tokenKey = "token";
const userKey = "user";
function saveToken(token) {
    saveToStorage(token, tokenKey);
}
function getToken() {
    return getFromStorage(tokenKey);
}
function saveUser(user) {
    saveToStorage(userKey, user);
}
function getUsername() {
    const user = getFromStorage(userKey);
    if (user) return user.username;
    return null;
}
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (!value) return [];
    return JSON.parse(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuKN0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Nav = ()=>{
    const nav = `
    <div class="logo">
      <div class="arrow-left"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="175.983"
        height="30.908"
        viewBox="0 0 175.983 30.908"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_159"
              data-name="Rectangle 159"
              width="170.304"
              height="15.133"
              transform="translate(0 2.775)"
              fill="#f0f7f9"
              stroke="#f0f7f9"
              stroke-width="1"
            />
          </clipPath>
        </defs>
        <g
          id="Group_491"
          data-name="Group 491"
          transform="translate(-3.703 -2.58)"
        >
          <g
            id="Group_478"
            data-name="Group 478"
            transform="translate(0 0)"
          >
            <path
              id="Path_253"
              data-name="Path 253"
              d="M6.179,41.092,8.185,42.3a29.131,29.131,0,0,0,4.143-3.748,9.353,9.353,0,0,0,3.207,3.32l1.489.612a2.386,2.386,0,0,0,1.623-.872c1.031-1.147,2.042-1.763,2.806-3.1a23.544,23.544,0,0,0,2.978,3.269l.994.612a2.048,2.048,0,0,0,1.988-.051l.706-.5a42.621,42.621,0,0,1,3.342-3.2s1.89,2.069,2.982,3.557l.966.782c.9.393,2.158-.428,2.158-.428,1.393-1.452,2.786-2.669,4.2-4.107,0,0,1.947,3.354,4.047,4.723l1.606.342a2.3,2.3,0,0,0,1.662-.873c1.813-1.3,2.941-1.932,4.067-3.78,0,0,2.114,1.959,4.081,3.567a5.308,5.308,0,0,0,1.418.641V39.139a42.31,42.31,0,0,0-4.314-3.9l-1.3-.479a3.366,3.366,0,0,0-1.988.907l-.78,1.177a23.517,23.517,0,0,1-2.921,2.772,42.71,42.71,0,0,1-3.571-4.206l-1.529-.77a2.054,2.054,0,0,0-1.279.2l-1.088.719c-1.772,1.8-3.684,3.37-3.684,3.37s-1.434-1.71-2.753-3.216L32.3,34.9c-.363.068-.841-.41-1.759.205l-1.165.841c-1.2,1.026-3.036,2.856-3.036,2.856a38.887,38.887,0,0,0-2.914-3.3l-1.97-.789a1.982,1.982,0,0,0-1.2.359l-1.071.907c-1.184,1.368-2.387,2.549-2.387,2.549-1.353-.961-1.468-1.879-2.518-3.045l-.63-.669a1.973,1.973,0,0,0-2.424-.22l-.859.7a23.61,23.61,0,0,1-3.685,3.849Z"
              transform="translate(-1.9 -10.535)"
              fill="#f0f7f9"
              stroke="#f0f7f9"
              stroke-width="1"
            />
            <path
              id="Path_254"
              data-name="Path 254"
              d="M81.937,43.057a9.109,9.109,0,0,0,1.509-.754,29.2,29.2,0,0,0,4.142-3.747,9.357,9.357,0,0,0,3.207,3.32l1.489.612a2.385,2.385,0,0,0,1.623-.871c1.031-1.148,2.042-1.764,2.806-3.1a23.577,23.577,0,0,0,2.978,3.268l.995.612a2.046,2.046,0,0,0,1.988-.051l.706-.5a42.5,42.5,0,0,1,3.342-3.2s1.891,2.069,2.982,3.558l.974.771c.9.393,2.158-.428,2.158-.428,1.393-1.453,2.787-2.669,4.2-4.107,0,0,1.948,3.354,4.047,4.723l1.605.342a2.3,2.3,0,0,0,1.661-.873c1.813-1.3,2.941-1.932,4.067-3.78,0,0,2.114,1.959,4.081,3.567a5.309,5.309,0,0,0,1.418.641V39.139a42.311,42.311,0,0,0-4.314-3.9l-1.3-.478a3.365,3.365,0,0,0-1.988.907l-.784,1.179a23.565,23.565,0,0,1-2.92,2.772,42.791,42.791,0,0,1-3.571-4.206l-1.529-.77a2.052,2.052,0,0,0-1.281.2l-1.088.719c-1.776,1.8-3.685,3.37-3.685,3.37s-1.432-1.71-2.753-3.216l-1.148-.821c-.362.068-.841-.41-1.758.205l-1.165.841c-1.2,1.026-3.037,2.857-3.037,2.857a38.669,38.669,0,0,0-2.914-3.3l-1.966-.789a1.986,1.986,0,0,0-1.2.359l-1.07.907c-1.182,1.368-2.385,2.549-2.385,2.549-1.356-.961-1.471-1.879-2.521-3.045l-.63-.669a1.973,1.973,0,0,0-2.424-.22l-.859.7a23.633,23.633,0,0,1-3.685,3.849Z"
              transform="translate(-25.189 -10.535)"
              fill="#f0f7f9"
              stroke="#f0f7f9"
              stroke-width="1"
            />
            <path
              id="Path_255"
              data-name="Path 255"
              d="M156.977,43.057a9.11,9.11,0,0,0,1.509-.754,29.2,29.2,0,0,0,4.142-3.747,9.345,9.345,0,0,0,3.207,3.32l1.489.612a2.385,2.385,0,0,0,1.623-.871c1.031-1.148,2.042-1.764,2.806-3.1a23.538,23.538,0,0,0,2.978,3.268l.994.612a2.048,2.048,0,0,0,1.988-.051l.706-.5a42.5,42.5,0,0,1,3.342-3.2s1.89,2.069,2.982,3.558l.974.771c.9.393,2.158-.428,2.158-.428,1.393-1.453,2.787-2.669,4.2-4.107,0,0,1.947,3.354,4.047,4.723l1.605.342a2.3,2.3,0,0,0,1.662-.873c1.813-1.3,2.941-1.932,4.067-3.78a23.523,23.523,0,0,0,3.738,4.2l1.76-1.445V39.138a42.313,42.313,0,0,0-4.314-3.9l-1.3-.478a3.365,3.365,0,0,0-1.988.907l-.784,1.179a23.458,23.458,0,0,1-2.921,2.77,42.8,42.8,0,0,1-3.57-4.206l-1.53-.77a2.054,2.054,0,0,0-1.279.205l-1.088.719c-1.776,1.8-3.685,3.37-3.685,3.37s-1.432-1.71-2.753-3.216L182.6,34.9c-.362.069-.841-.41-1.758.205l-1.165.841c-1.2,1.026-3.037,2.856-3.037,2.856a38.7,38.7,0,0,0-2.914-3.3l-1.966-.789a1.986,1.986,0,0,0-1.2.359l-1.07.907c-1.184,1.368-2.387,2.549-2.387,2.549-1.355-.958-1.47-1.882-2.523-3.045l-.625-.669a1.973,1.973,0,0,0-2.424-.222l-.859.7a23.61,23.61,0,0,1-3.685,3.849Z"
              transform="translate(-48.257 -10.535)"
              fill="#f0f7f9"
              stroke="#f0f7f9"
              stroke-width="1"
            />
            <path
              id="Path_256"
              data-name="Path 256"
              d="M229.842,43.138a45.88,45.88,0,0,0,5.3-4.582,9.345,9.345,0,0,0,3.207,3.32l1.489.612a2.385,2.385,0,0,0,1.623-.871c1.031-1.148,2.042-1.764,2.806-3.1a23.539,23.539,0,0,0,2.978,3.268l.994.612c.627.328.663-.41,1.33-1.255a2.136,2.136,0,0,0-.421-2.344,38.7,38.7,0,0,0-2.914-3.3l-1.966-.789a1.986,1.986,0,0,0-1.2.359l-1.07.907c-1.184,1.368-2.387,2.549-2.387,2.549-1.355-.958-1.47-1.882-2.523-3.045l-.625-.669a1.973,1.973,0,0,0-2.424-.222l-.86.7a23.61,23.61,0,0,1-3.685,3.849S229.364,43.436,229.842,43.138Z"
              transform="translate(-70.548 -10.535)"
              fill="#f0f7f9"
              stroke="#f0f7f9"
              stroke-width="1"
            />
            <g
              id="Group_480"
              data-name="Group 480"
              transform="translate(4.279 -0.195)"
            >
              <g
                id="Group_479"
                data-name="Group 479"
                transform="translate(0 0)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_257"
                  data-name="Path 257"
                  d="M5.084,1.079c0,.05-.031.087-.1.113a1.49,1.49,0,0,1-.172.059,1.123,1.123,0,0,1-.225.031l-.353.025-.368.025c-.12.008-.216.013-.286.014-.13.027-.194.053-.194.077a.2.2,0,0,0,.016.074A8.861,8.861,0,0,0,3.7,2.529q.238.737.579,1.731T5.025,6.4l.806,2.255q.395,1.105.743,2.08t.569,1.621c0,.025.011.03.03.018s.064-.076.1-.224q0-.019.17-.614t.425-1.526q.255-.931.566-2.085T9.05,5.65q.3-1.126.558-2.1T10,1.975q.087-.186.238-.18a.62.62,0,0,1,.226.042,1.413,1.413,0,0,1,.32.634q.089.378.2.747c.01.037.056.194.136.47s.186.63.318,1.059.279.915.439,1.456.324,1.09.495,1.649.337,1.108.5,1.649.313,1.029.446,1.465.242.8.327,1.077a4.456,4.456,0,0,0,.159.479c.021.062.047.126.078.193s.062.1.092.1.082-.063.125-.151a1.5,1.5,0,0,0,.094-.224,4.947,4.947,0,0,0,.15-.5l.3-1.135q.184-.689.409-1.554t.459-1.776q.232-.911.449-1.814t.393-1.636q.175-.735.28-1.255a4.217,4.217,0,0,0,.1-.687q.027-.148-.147-.2a1.107,1.107,0,0,0-.339-.05,1.929,1.929,0,0,0-.534.01,1.109,1.109,0,0,1-.535-.047.147.147,0,0,1-.121-.051.163.163,0,0,1-.047-.106.18.18,0,0,1,.014-.072c.01-.036.044-.06.1-.073q.991-.107,2-.132t2.043-.134c.1,0,.151.051.153.156a.219.219,0,0,1-.117.179A.929.929,0,0,1,19,1.617q-.03,0-.142.012c-.075.007-.16.012-.255.014s-.188.006-.278.014-.16.012-.21.013a1.8,1.8,0,0,0-.488.073.5.5,0,0,0-.316.4q-.462,1.935-.949,3.813T15.4,9.792q-.253,1-.53,2t-.635,1.946a.241.241,0,0,1-.179.124.207.207,0,0,1-.228-.117q-.125-.294-.331-.893t-.468-1.4q-.262-.8-.556-1.731T11.893,7.87q-.286-.921-.549-1.778t-.462-1.521q-.2-.663-.326-1.059T10.427,3.1c-.021-.061-.046-.089-.076-.082a.109.109,0,0,0-.06.029q-.1.28-.314.978T9.5,5.66q-.262.94-.559,2.01T8.369,9.764q-.276,1.023-.516,1.9t-.382,1.415q-.058.186-.192.189a.592.592,0,0,1-.226-.033l-.046-.055-.046-.055a.213.213,0,0,1-.031-.055q-.9-2.374-1.721-4.75T3.5,3.551c-.074-.2-.145-.4-.214-.617a4.9,4.9,0,0,0-.244-.617A2.282,2.282,0,0,0,2.713,1.8a.989.989,0,0,0-.479-.3,3.8,3.8,0,0,0-.406-.012l-.444.008L1.008,1.5a.347.347,0,0,1-.2-.035.177.177,0,0,1,0-.252c0-.013.01-.026.029-.04a.361.361,0,0,1,.164-.061q.946-.09,1.893-.088A16.335,16.335,0,0,0,4.66.938c.07,0,.152-.006.248-.014s.154.043.176.154"
                  transform="translate(-0.326 2.373)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_258"
                  data-name="Path 258"
                  d="M5.084,1.079c0,.05-.031.087-.1.113a1.49,1.49,0,0,1-.172.059,1.123,1.123,0,0,1-.225.031l-.353.025-.368.025c-.12.008-.216.013-.286.014-.13.027-.194.053-.194.077a.2.2,0,0,0,.016.074A8.861,8.861,0,0,0,3.7,2.529q.238.737.579,1.731T5.025,6.4l.806,2.255q.395,1.105.743,2.08t.569,1.621c0,.025.011.03.03.018s.064-.076.1-.224q0-.019.17-.614t.425-1.526q.255-.931.566-2.085T9.05,5.65q.3-1.126.558-2.1T10,1.975q.087-.186.238-.18a.62.62,0,0,1,.226.042,1.413,1.413,0,0,1,.32.634q.089.378.2.747c.01.037.056.194.136.47s.186.63.318,1.059.279.915.439,1.456.324,1.09.495,1.649.337,1.108.5,1.649.313,1.029.446,1.465.242.8.327,1.077a4.456,4.456,0,0,0,.159.479c.021.062.047.126.078.193s.062.1.092.1.082-.063.125-.151a1.5,1.5,0,0,0,.094-.224,4.947,4.947,0,0,0,.15-.5l.3-1.135q.184-.689.409-1.554t.459-1.776q.232-.911.449-1.814t.393-1.636q.175-.735.28-1.255a4.217,4.217,0,0,0,.1-.687q.027-.148-.147-.2a1.107,1.107,0,0,0-.339-.05,1.929,1.929,0,0,0-.534.01,1.109,1.109,0,0,1-.535-.047.147.147,0,0,1-.121-.051.163.163,0,0,1-.047-.106.18.18,0,0,1,.014-.072c.01-.036.044-.06.1-.073q.991-.107,2-.132t2.043-.134c.1,0,.151.051.153.156a.219.219,0,0,1-.117.179A.929.929,0,0,1,19,1.617q-.03,0-.142.012c-.075.007-.16.012-.255.014s-.188.006-.278.014-.16.012-.21.013a1.8,1.8,0,0,0-.488.073.5.5,0,0,0-.316.4q-.462,1.935-.949,3.813T15.4,9.792q-.253,1-.53,2t-.635,1.946a.241.241,0,0,1-.179.124.207.207,0,0,1-.228-.117q-.125-.294-.331-.893t-.468-1.4q-.262-.8-.556-1.731T11.893,7.87q-.286-.921-.549-1.778t-.462-1.521q-.2-.663-.326-1.059T10.427,3.1c-.021-.061-.046-.089-.076-.082a.109.109,0,0,0-.06.029q-.1.28-.314.978T9.5,5.66q-.262.94-.559,2.01T8.369,9.764q-.276,1.023-.516,1.9t-.382,1.415q-.058.186-.192.189a.592.592,0,0,1-.226-.033l-.046-.055-.046-.055a.213.213,0,0,1-.031-.055q-.9-2.374-1.721-4.75T3.5,3.551c-.074-.2-.145-.4-.214-.617a4.9,4.9,0,0,0-.244-.617A2.282,2.282,0,0,0,2.713,1.8a.989.989,0,0,0-.479-.3,3.8,3.8,0,0,0-.406-.012l-.444.008L1.008,1.5a.347.347,0,0,1-.2-.035.177.177,0,0,1,0-.252c0-.013.01-.026.029-.04a.361.361,0,0,1,.164-.061q.946-.09,1.893-.088A16.335,16.335,0,0,0,4.66.938c.07,0,.152-.006.248-.014S5.062.968,5.084,1.079Z"
                  transform="translate(-0.326 2.373)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_259"
                  data-name="Path 259"
                  d="M38.1,9.912q-.03,1.505-.1,2.963t.007,2.962a.4.4,0,0,0,.083.186.359.359,0,0,0,.217.074,5.27,5.27,0,0,0,.745.056,2.112,2.112,0,0,1,.714.129q.105.056.03.185a.208.208,0,0,1-.12.111A12.3,12.3,0,0,0,37.8,16.5a14.348,14.348,0,0,1-1.894-.055c-.05,0-.07-.044-.06-.13s.045-.151.135-.158.171-.009.241-.009a1.749,1.749,0,0,0,.948-.2.637.637,0,0,0,.27-.352q.075-1.222.068-2.565t-.1-2.547a.3.3,0,0,0-.143-.268.752.752,0,0,0-.383-.046l-1.278.037c-.081,0-.13-.051-.151-.154-.02-.129.005-.2.076-.224s.135-.036.2-.049Q36.3,9.745,36.8,9.7a4.448,4.448,0,0,1,1.029.028.292.292,0,0,1,.241.093.21.21,0,0,1,.03.093m.241-1.686a.433.433,0,0,1-.053.232.449.449,0,0,1-.121.13.317.317,0,0,1-.128.055.56.56,0,0,1-.09.009,1.075,1.075,0,0,1-.128-.009.38.38,0,0,1-.158-.055.4.4,0,0,1-.128-.13.433.433,0,0,1-.053-.232,1.081,1.081,0,0,1,.06-.241q.06-.185.361-.185a.549.549,0,0,1,.285.093.359.359,0,0,1,.151.333"
                  transform="translate(-15.431 -0.62)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_260"
                  data-name="Path 260"
                  d="M38.1,9.912q-.03,1.505-.1,2.963t.007,2.962a.4.4,0,0,0,.083.186.359.359,0,0,0,.217.074,5.27,5.27,0,0,0,.745.056,2.112,2.112,0,0,1,.714.129q.105.056.03.185a.208.208,0,0,1-.12.111A12.3,12.3,0,0,0,37.8,16.5a14.348,14.348,0,0,1-1.894-.055c-.05,0-.07-.044-.06-.13s.045-.151.135-.158.171-.009.241-.009a1.749,1.749,0,0,0,.948-.2.637.637,0,0,0,.27-.352q.075-1.222.068-2.565t-.1-2.547a.3.3,0,0,0-.143-.268.752.752,0,0,0-.383-.046l-1.278.037c-.081,0-.13-.051-.151-.154-.02-.129.005-.2.076-.224s.135-.036.2-.049Q36.3,9.745,36.8,9.7a4.448,4.448,0,0,1,1.029.028.292.292,0,0,1,.241.093A.21.21,0,0,1,38.1,9.912Zm.241-1.686a.433.433,0,0,1-.053.232.449.449,0,0,1-.121.13.317.317,0,0,1-.128.055.56.56,0,0,1-.09.009,1.075,1.075,0,0,1-.128-.009.38.38,0,0,1-.158-.055.4.4,0,0,1-.128-.13.433.433,0,0,1-.053-.232,1.081,1.081,0,0,1,.06-.241q.06-.185.361-.185a.549.549,0,0,1,.285.093A.359.359,0,0,1,38.341,8.227Z"
                  transform="translate(-15.431 -0.62)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_261"
                  data-name="Path 261"
                  d="M47.968,8.97c0,.346-.005.676-.015.991s-.015.632-.015.954a.228.228,0,0,0,.105.167.4.4,0,0,0,.181.037q.12,0,.436-.01l.676-.019.676-.018a2.838,2.838,0,0,1,.436.009l.18.046a.12.12,0,0,1,.105.12.235.235,0,0,1-.045.139.25.25,0,0,1-.18.084H49.216q-.632,0-1.308.037a.132.132,0,0,0-.128.129c-.005.075-.007.117-.007.129q.014.7-.03,1.357t-.09,1.293q-.045.637-.06,1.265a9.087,9.087,0,0,0,.06,1.274,1.256,1.256,0,0,0,.406.776,1.384,1.384,0,0,0,.962.369,1.491,1.491,0,0,0,.872-.231,1.989,1.989,0,0,0,.526-.528,2.374,2.374,0,0,0,.286-.574,3.581,3.581,0,0,1,.136-.37.808.808,0,0,1,.082-.12.131.131,0,0,1,.158-.028.227.227,0,0,1,.135.2,2.128,2.128,0,0,1-.188.685,2.424,2.424,0,0,1-.428.648,2.371,2.371,0,0,1-.662.5,1.928,1.928,0,0,1-.9.2,2,2,0,0,1-1.15-.278,1.632,1.632,0,0,1-.571-.648,2.016,2.016,0,0,1-.2-.74q-.023-.37-.023-.574V15.84c0-.136-.006-.271-.015-.407a13.18,13.18,0,0,1,.06-1.805,9.285,9.285,0,0,0,.015-1.751.443.443,0,0,0-.015-.111c-.02-.074-.055-.117-.106-.129q-.391-.019-.759,0a4.975,4.975,0,0,1-.744-.019A.432.432,0,0,0,45.4,11.6c-.045,0-.068-.03-.068-.093-.01-.123.055-.185.2-.185s.305,0,.466-.009a2.3,2.3,0,0,0,.466-.065,1.472,1.472,0,0,0,.421-.176.968.968,0,0,0,.33-.361,1.581,1.581,0,0,0,.165-.444,2.739,2.739,0,0,0,.053-.454c0-.154.012-.312.023-.472a2.642,2.642,0,0,1,.075-.482.151.151,0,0,1,.075-.138.242.242,0,0,1,.158-.037.246.246,0,0,1,.218.268Z"
                  transform="translate(-19.735 -1.004)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_262"
                  data-name="Path 262"
                  d="M47.968,8.97c0,.346-.005.676-.015.991s-.015.632-.015.954a.228.228,0,0,0,.105.167.4.4,0,0,0,.181.037q.12,0,.436-.01l.676-.019.676-.018a2.838,2.838,0,0,1,.436.009l.18.046a.12.12,0,0,1,.105.12.235.235,0,0,1-.045.139.25.25,0,0,1-.18.084H49.216q-.632,0-1.308.037a.132.132,0,0,0-.128.129c-.005.075-.007.117-.007.129q.014.7-.03,1.357t-.09,1.293q-.045.637-.06,1.265a9.087,9.087,0,0,0,.06,1.274,1.256,1.256,0,0,0,.406.776,1.384,1.384,0,0,0,.962.369,1.491,1.491,0,0,0,.872-.231,1.989,1.989,0,0,0,.526-.528,2.374,2.374,0,0,0,.286-.574,3.581,3.581,0,0,1,.136-.37.808.808,0,0,1,.082-.12.131.131,0,0,1,.158-.028.227.227,0,0,1,.135.2,2.128,2.128,0,0,1-.188.685,2.424,2.424,0,0,1-.428.648,2.371,2.371,0,0,1-.662.5,1.928,1.928,0,0,1-.9.2,2,2,0,0,1-1.15-.278,1.632,1.632,0,0,1-.571-.648,2.016,2.016,0,0,1-.2-.74q-.023-.37-.023-.574V15.84c0-.136-.006-.271-.015-.407a13.18,13.18,0,0,1,.06-1.805,9.285,9.285,0,0,0,.015-1.751.443.443,0,0,0-.015-.111c-.02-.074-.055-.117-.106-.129q-.391-.019-.759,0a4.975,4.975,0,0,1-.744-.019A.432.432,0,0,0,45.4,11.6c-.045,0-.068-.03-.068-.093-.01-.123.055-.185.2-.185s.305,0,.466-.009a2.3,2.3,0,0,0,.466-.065,1.472,1.472,0,0,0,.421-.176.968.968,0,0,0,.33-.361,1.581,1.581,0,0,0,.165-.444,2.739,2.739,0,0,0,.053-.454c0-.154.012-.312.023-.472a2.642,2.642,0,0,1,.075-.482.151.151,0,0,1,.075-.138.242.242,0,0,1,.158-.037.246.246,0,0,1,.218.268Z"
                  transform="translate(-19.735 -1.004)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_263"
                  data-name="Path 263"
                  d="M67.73,10.184a9.376,9.376,0,0,1,.158,1.268q.037.657.037,1.315t-.015,1.324q-.014.667,0,1.3a.183.183,0,0,0,.083.176.327.327,0,0,0,.158.046l1.308.019c.07,0,.11.049.12.148a.2.2,0,0,1-.015.074c-.02.05-.046.075-.076.075q-.9-.019-1.774.028t-1.744.028c-.051,0-.083-.031-.1-.093a.266.266,0,0,1,.008-.167.233.233,0,0,1,.225-.093,1.972,1.972,0,0,0,.256.018,1.565,1.565,0,0,0,.286-.028.95.95,0,0,0,.286-.1.842.842,0,0,0,.233-.185.577.577,0,0,0,.128-.3q.014-.592.06-1.185c.03-.395.047-.787.053-1.176s0-.778-.023-1.167a6.937,6.937,0,0,0-.165-1.176,1.471,1.471,0,0,0-.564-.843,1.955,1.955,0,0,0-1.241-.361,3.184,3.184,0,0,0-1.36.305,2.394,2.394,0,0,0-1.075,1.084,3.418,3.418,0,0,0-.361.991,7.562,7.562,0,0,0-.136,1.093q-.03.565-.015,1.138t0,1.093a.2.2,0,0,0,.112.176.843.843,0,0,0,.263.065q.225,0,.5-.019a3.245,3.245,0,0,1,.481,0,.791.791,0,0,1,.12.01c.04.006.065.059.075.157a.14.14,0,0,1-.06.13.1.1,0,0,1-.045.019q-.888.037-1.684.037t-1.729.019c-.06,0-.1-.049-.12-.148,0-.124.04-.191.12-.2.12,0,.256,0,.406.009a1.988,1.988,0,0,0,.436-.028.784.784,0,0,0,.353-.148.5.5,0,0,0,.158-.389q.03-.833.053-1.472t.045-1.194q.023-.556.03-1.093t.007-1.186a.619.619,0,0,0-.053-.25.178.178,0,0,0-.173-.12q-.436-.037-.9-.046t-.872.009a.1.1,0,0,1-.068-.037.091.091,0,0,1-.03-.083c.005-.03.035-.065.09-.1a.838.838,0,0,1,.294-.092,3.783,3.783,0,0,1,.7-.084q.353-.009.7.009.346,0,.542-.009a1.305,1.305,0,0,1,.286.009.136.136,0,0,1,.113.1,1.169,1.169,0,0,1,.022.269v.491c0,.167.005.343.015.528q.015.075.037.037c.015-.025.023-.031.023-.019A2.983,2.983,0,0,1,63.9,9.027a3.2,3.2,0,0,1,1.473-.361,4.014,4.014,0,0,1,.82.083,2.233,2.233,0,0,1,.714.278,1.956,1.956,0,0,1,.534.482,1.607,1.607,0,0,1,.293.676"
                  transform="translate(-26.07 -0.997)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_264"
                  data-name="Path 264"
                  d="M67.73,10.184a9.376,9.376,0,0,1,.158,1.268q.037.657.037,1.315t-.015,1.324q-.014.667,0,1.3a.183.183,0,0,0,.083.176.327.327,0,0,0,.158.046l1.308.019c.07,0,.11.049.12.148a.2.2,0,0,1-.015.074c-.02.05-.046.075-.076.075q-.9-.019-1.774.028t-1.744.028c-.051,0-.083-.031-.1-.093a.266.266,0,0,1,.008-.167.233.233,0,0,1,.225-.093,1.972,1.972,0,0,0,.256.018,1.565,1.565,0,0,0,.286-.028.95.95,0,0,0,.286-.1.842.842,0,0,0,.233-.185.577.577,0,0,0,.128-.3q.014-.592.06-1.185c.03-.395.047-.787.053-1.176s0-.778-.023-1.167a6.937,6.937,0,0,0-.165-1.176,1.471,1.471,0,0,0-.564-.843,1.955,1.955,0,0,0-1.241-.361,3.184,3.184,0,0,0-1.36.305,2.394,2.394,0,0,0-1.075,1.084,3.418,3.418,0,0,0-.361.991,7.562,7.562,0,0,0-.136,1.093q-.03.565-.015,1.138t0,1.093a.2.2,0,0,0,.112.176.843.843,0,0,0,.263.065q.225,0,.5-.019a3.245,3.245,0,0,1,.481,0,.791.791,0,0,1,.12.01c.04.006.065.059.075.157a.14.14,0,0,1-.06.13.1.1,0,0,1-.045.019q-.888.037-1.684.037t-1.729.019c-.06,0-.1-.049-.12-.148,0-.124.04-.191.12-.2.12,0,.256,0,.406.009a1.988,1.988,0,0,0,.436-.028.784.784,0,0,0,.353-.148.5.5,0,0,0,.158-.389q.03-.833.053-1.472t.045-1.194q.023-.556.03-1.093t.007-1.186a.619.619,0,0,0-.053-.25.178.178,0,0,0-.173-.12q-.436-.037-.9-.046t-.872.009a.1.1,0,0,1-.068-.037.091.091,0,0,1-.03-.083c.005-.03.035-.065.09-.1a.838.838,0,0,1,.294-.092,3.783,3.783,0,0,1,.7-.084q.353-.009.7.009.346,0,.542-.009a1.305,1.305,0,0,1,.286.009.136.136,0,0,1,.113.1,1.169,1.169,0,0,1,.022.269v.491c0,.167.005.343.015.528q.015.075.037.037c.015-.025.023-.031.023-.019A2.983,2.983,0,0,1,63.9,9.027a3.2,3.2,0,0,1,1.473-.361,4.014,4.014,0,0,1,.82.083,2.233,2.233,0,0,1,.714.278,1.956,1.956,0,0,1,.534.482A1.607,1.607,0,0,1,67.73,10.184Z"
                  transform="translate(-26.07 -0.997)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_265"
                  data-name="Path 265"
                  d="M86.529,10.4a.724.724,0,0,1-.045.343.34.34,0,0,1-.285.176q-.3.037-.722.055t-.9.028q-.482.009-.97.009T82.695,11q-.421-.009-.744-.009h-.459a2.989,2.989,0,0,0-.391.018c-.08.012-.136.021-.165.028s-.048.016-.053.028a.083.083,0,0,1-.037.037,3.447,3.447,0,0,0-.09.778,4.773,4.773,0,0,0,.09.8,2.692,2.692,0,0,0,.391.972,2.66,2.66,0,0,0,.872.824,2.867,2.867,0,0,0,1.518.352,2.476,2.476,0,0,0,1.293-.315,3.016,3.016,0,0,0,.865-.759,3.542,3.542,0,0,0,.511-.907,4.213,4.213,0,0,0,.219-.741c.02-.074.062-.108.128-.1a.493.493,0,0,1,.173.046.662.662,0,0,1,.083.556,3.312,3.312,0,0,1-.188.518,3.579,3.579,0,0,1-1.3,1.6,3.255,3.255,0,0,1-1.8.528,3.726,3.726,0,0,1-1.451-.269,3.135,3.135,0,0,1-1.084-.741,3.363,3.363,0,0,1-.692-1.111,3.8,3.8,0,0,1-.246-1.38,4.6,4.6,0,0,1,.285-1.676,3.677,3.677,0,0,1,.767-1.232,3.286,3.286,0,0,1,1.143-.769,3.721,3.721,0,0,1,1.413-.268,2.613,2.613,0,0,1,1.481.37A2.854,2.854,0,0,1,86.063,9a2.741,2.741,0,0,1,.376.87,3.473,3.473,0,0,1,.09.528M83.552,8.2a2.14,2.14,0,0,0-1.023.241,3,3,0,0,0-.774.583,3.271,3.271,0,0,0-.519.713,2.232,2.232,0,0,0-.241.63.483.483,0,0,0-.015.195c.01.03.065.053.165.064q.375.037,1.06.037t1.391-.028q.706-.028,1.285-.065a6.875,6.875,0,0,0,.759-.074c.1-.025.16-.059.181-.1a.553.553,0,0,0,.03-.213,1.667,1.667,0,0,0-.12-.463,2.307,2.307,0,0,0-.391-.666,2.622,2.622,0,0,0-.706-.593A2.088,2.088,0,0,0,83.552,8.2"
                  transform="translate(-34.886 -0.623)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_266"
                  data-name="Path 266"
                  d="M86.529,10.4a.724.724,0,0,1-.045.343.34.34,0,0,1-.285.176q-.3.037-.722.055t-.9.028q-.482.009-.97.009T82.695,11q-.421-.009-.744-.009h-.459a2.989,2.989,0,0,0-.391.018c-.08.012-.136.021-.165.028s-.048.016-.053.028a.083.083,0,0,1-.037.037,3.447,3.447,0,0,0-.09.778,4.773,4.773,0,0,0,.09.8,2.692,2.692,0,0,0,.391.972,2.66,2.66,0,0,0,.872.824,2.867,2.867,0,0,0,1.518.352,2.476,2.476,0,0,0,1.293-.315,3.016,3.016,0,0,0,.865-.759,3.542,3.542,0,0,0,.511-.907,4.213,4.213,0,0,0,.219-.741c.02-.074.062-.108.128-.1a.493.493,0,0,1,.173.046.662.662,0,0,1,.083.556,3.312,3.312,0,0,1-.188.518,3.579,3.579,0,0,1-1.3,1.6,3.255,3.255,0,0,1-1.8.528,3.726,3.726,0,0,1-1.451-.269,3.135,3.135,0,0,1-1.084-.741,3.363,3.363,0,0,1-.692-1.111,3.8,3.8,0,0,1-.246-1.38,4.6,4.6,0,0,1,.285-1.676,3.677,3.677,0,0,1,.767-1.232,3.286,3.286,0,0,1,1.143-.769,3.721,3.721,0,0,1,1.413-.268,2.613,2.613,0,0,1,1.481.37A2.854,2.854,0,0,1,86.063,9a2.741,2.741,0,0,1,.376.87A3.473,3.473,0,0,1,86.529,10.4ZM83.552,8.2a2.14,2.14,0,0,0-1.023.241,3,3,0,0,0-.774.583,3.271,3.271,0,0,0-.519.713,2.232,2.232,0,0,0-.241.63.483.483,0,0,0-.015.195c.01.03.065.053.165.064q.375.037,1.06.037t1.391-.028q.706-.028,1.285-.065a6.875,6.875,0,0,0,.759-.074c.1-.025.16-.059.181-.1a.553.553,0,0,0,.03-.213,1.667,1.667,0,0,0-.12-.463,2.307,2.307,0,0,0-.391-.666,2.622,2.622,0,0,0-.706-.593A2.088,2.088,0,0,0,83.552,8.2Z"
                  transform="translate(-34.886 -0.623)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_267"
                  data-name="Path 267"
                  d="M102.026,11.439c.01,0,.03-.025.06-.074a2.387,2.387,0,0,0,.068-.278q.022-.129.053-.241.045-.222.2-.222c.12,0,.185.021.2.064s.01.065,0,.065a12.018,12.018,0,0,0-.105,1.352q-.015.685-.076,1.333a.409.409,0,0,1-.038.129.152.152,0,0,1-.158.093c-.13,0-.211-.034-.241-.1a.423.423,0,0,1-.046-.158v-.7a1.872,1.872,0,0,0-.2-.667,2.142,2.142,0,0,0-.438-.592,2.3,2.3,0,0,0-.634-.426,1.819,1.819,0,0,0-.77-.167,2.63,2.63,0,0,0-1.169.222,1.968,1.968,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.337,2.337,0,0,0-.068.453,1.939,1.939,0,0,0,.241,1.046,1.78,1.78,0,0,0,.6.593,2.313,2.313,0,0,0,.776.287q.415.075.747.13.257.037.656.074a3.542,3.542,0,0,1,.769.158,1.646,1.646,0,0,1,.634.37.934.934,0,0,1,.264.713,1.175,1.175,0,0,1-.25.768,1.941,1.941,0,0,1-.626.5,2.989,2.989,0,0,1-.814.278,4.324,4.324,0,0,1-.8.083,3.807,3.807,0,0,1-.452-.037q-.287-.037-.612-.111a5.075,5.075,0,0,1-.626-.185,1.624,1.624,0,0,1-.5-.278.2.2,0,0,0-.162.149q-.044.13-.1.259c-.049.136-.128.179-.235.13a1.07,1.07,0,0,1-.088-.065.278.278,0,0,1-.073-.194c0-.283.012-.562.038-.833a3.624,3.624,0,0,0-.038-.889c-.03-.173-.058-.333-.082-.482s.052-.253.233-.315a.482.482,0,0,1,.226.037c.02.012.025.025.015.037.04.161.073.324.1.491s.053.333.083.5a2.147,2.147,0,0,0,.136.463.929.929,0,0,0,.27.361,2.507,2.507,0,0,0,.842.453,3.582,3.582,0,0,0,.932.158c.07,0,.21-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.861,1.861,0,0,0,.617-.379.9.9,0,0,0,.27-.694.639.639,0,0,0-.368-.6,3.241,3.241,0,0,0-.872-.3q-.5-.1-1.03-.158a2.664,2.664,0,0,1-.842-.2c-.141-.062-.3-.138-.481-.232a2.147,2.147,0,0,1-.512-.37,1.98,1.98,0,0,1-.413-.6,2.132,2.132,0,0,1-.173-.908,1.708,1.708,0,0,1,.3-1.027,2.505,2.505,0,0,1,.722-.676,3.027,3.027,0,0,1,.887-.37,3.568,3.568,0,0,1,.812-.111,3.319,3.319,0,0,1,.887.1,2.544,2.544,0,0,1,.609.25,1.9,1.9,0,0,1,.406.315,3.271,3.271,0,0,0,.293.278c.02.037.035.05.045.037"
                  transform="translate(-42.203 -1.777)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_268"
                  data-name="Path 268"
                  d="M102.026,11.439c.01,0,.03-.025.06-.074a2.387,2.387,0,0,0,.068-.278q.022-.129.053-.241.045-.222.2-.222c.12,0,.185.021.2.064s.01.065,0,.065a12.018,12.018,0,0,0-.105,1.352q-.015.685-.076,1.333a.409.409,0,0,1-.038.129.152.152,0,0,1-.158.093c-.13,0-.211-.034-.241-.1a.423.423,0,0,1-.046-.158v-.7a1.872,1.872,0,0,0-.2-.667,2.142,2.142,0,0,0-.438-.592,2.3,2.3,0,0,0-.634-.426,1.819,1.819,0,0,0-.77-.167,2.63,2.63,0,0,0-1.169.222,1.968,1.968,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.337,2.337,0,0,0-.068.453,1.939,1.939,0,0,0,.241,1.046,1.78,1.78,0,0,0,.6.593,2.313,2.313,0,0,0,.776.287q.415.075.747.13.257.037.656.074a3.542,3.542,0,0,1,.769.158,1.646,1.646,0,0,1,.634.37.934.934,0,0,1,.264.713,1.175,1.175,0,0,1-.25.768,1.941,1.941,0,0,1-.626.5,2.989,2.989,0,0,1-.814.278,4.324,4.324,0,0,1-.8.083,3.807,3.807,0,0,1-.452-.037q-.287-.037-.612-.111a5.075,5.075,0,0,1-.626-.185,1.624,1.624,0,0,1-.5-.278.2.2,0,0,0-.162.149q-.044.13-.1.259c-.049.136-.128.179-.235.13a1.07,1.07,0,0,1-.088-.065.278.278,0,0,1-.073-.194c0-.283.012-.562.038-.833a3.624,3.624,0,0,0-.038-.889c-.03-.173-.058-.333-.082-.482s.052-.253.233-.315a.482.482,0,0,1,.226.037c.02.012.025.025.015.037.04.161.073.324.1.491s.053.333.083.5a2.147,2.147,0,0,0,.136.463.929.929,0,0,0,.27.361,2.507,2.507,0,0,0,.842.453,3.582,3.582,0,0,0,.932.158c.07,0,.21-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.861,1.861,0,0,0,.617-.379.9.9,0,0,0,.27-.694.639.639,0,0,0-.368-.6,3.241,3.241,0,0,0-.872-.3q-.5-.1-1.03-.158a2.664,2.664,0,0,1-.842-.2c-.141-.062-.3-.138-.481-.232a2.147,2.147,0,0,1-.512-.37,1.98,1.98,0,0,1-.413-.6,2.132,2.132,0,0,1-.173-.908,1.708,1.708,0,0,1,.3-1.027,2.505,2.505,0,0,1,.722-.676,3.027,3.027,0,0,1,.887-.37,3.568,3.568,0,0,1,.812-.111,3.319,3.319,0,0,1,.887.1,2.544,2.544,0,0,1,.609.25,1.9,1.9,0,0,1,.406.315,3.271,3.271,0,0,0,.293.278C102,11.439,102.015,11.452,102.026,11.439Z"
                  transform="translate(-42.203 -1.777)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_269"
                  data-name="Path 269"
                  d="M117.184,9.019c.01,0,.03-.025.06-.074a2.384,2.384,0,0,0,.068-.278q.022-.129.053-.241.045-.222.2-.222c.12,0,.185.021.2.064s.01.065,0,.065a12.022,12.022,0,0,0-.105,1.352q-.015.685-.076,1.333a.409.409,0,0,1-.038.129.152.152,0,0,1-.158.093c-.13,0-.211-.034-.241-.1a.423.423,0,0,1-.046-.158v-.7a1.871,1.871,0,0,0-.2-.667,2.141,2.141,0,0,0-.438-.592,2.3,2.3,0,0,0-.634-.426,1.819,1.819,0,0,0-.77-.167,2.63,2.63,0,0,0-1.169.222,1.968,1.968,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.336,2.336,0,0,0-.068.453,1.939,1.939,0,0,0,.241,1.046,1.78,1.78,0,0,0,.6.593,2.313,2.313,0,0,0,.776.287q.415.075.747.13.257.037.656.074a3.542,3.542,0,0,1,.769.158,1.646,1.646,0,0,1,.634.37.934.934,0,0,1,.264.713,1.175,1.175,0,0,1-.25.768,1.941,1.941,0,0,1-.626.5,2.989,2.989,0,0,1-.814.278,4.323,4.323,0,0,1-.8.083,3.807,3.807,0,0,1-.452-.037q-.287-.037-.612-.111a5.075,5.075,0,0,1-.626-.185,1.624,1.624,0,0,1-.5-.278.2.2,0,0,0-.162.149q-.044.13-.1.259c-.049.136-.128.179-.235.13a1.071,1.071,0,0,1-.088-.065.278.278,0,0,1-.073-.194c0-.283.012-.562.038-.833a3.625,3.625,0,0,0-.038-.889c-.031-.173-.058-.333-.082-.482s.052-.253.233-.315a.482.482,0,0,1,.226.037c.02.012.025.025.015.037.04.161.073.324.1.491s.053.333.083.5a2.147,2.147,0,0,0,.136.463.929.929,0,0,0,.27.361,2.507,2.507,0,0,0,.842.453,3.582,3.582,0,0,0,.932.158c.07,0,.21-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.861,1.861,0,0,0,.617-.379.9.9,0,0,0,.27-.694.639.639,0,0,0-.368-.6,3.241,3.241,0,0,0-.872-.3q-.5-.1-1.03-.158a2.664,2.664,0,0,1-.842-.2c-.141-.062-.3-.138-.481-.232a2.148,2.148,0,0,1-.512-.37,1.98,1.98,0,0,1-.413-.6,2.131,2.131,0,0,1-.173-.908,1.708,1.708,0,0,1,.3-1.027,2.505,2.505,0,0,1,.722-.676,3.027,3.027,0,0,1,.887-.37,3.568,3.568,0,0,1,.812-.111,3.319,3.319,0,0,1,.887.1,2.544,2.544,0,0,1,.609.25,1.9,1.9,0,0,1,.406.315,3.272,3.272,0,0,0,.293.278c.02.037.035.05.045.037"
                  transform="translate(-48.801 -0.724)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_270"
                  data-name="Path 270"
                  d="M117.184,9.019c.01,0,.03-.025.06-.074a2.384,2.384,0,0,0,.068-.278q.022-.129.053-.241.045-.222.2-.222c.12,0,.185.021.2.064s.01.065,0,.065a12.022,12.022,0,0,0-.105,1.352q-.015.685-.076,1.333a.409.409,0,0,1-.038.129.152.152,0,0,1-.158.093c-.13,0-.211-.034-.241-.1a.423.423,0,0,1-.046-.158v-.7a1.871,1.871,0,0,0-.2-.667,2.141,2.141,0,0,0-.438-.592,2.3,2.3,0,0,0-.634-.426,1.819,1.819,0,0,0-.77-.167,2.63,2.63,0,0,0-1.169.222,1.968,1.968,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.336,2.336,0,0,0-.068.453,1.939,1.939,0,0,0,.241,1.046,1.78,1.78,0,0,0,.6.593,2.313,2.313,0,0,0,.776.287q.415.075.747.13.257.037.656.074a3.542,3.542,0,0,1,.769.158,1.646,1.646,0,0,1,.634.37.934.934,0,0,1,.264.713,1.175,1.175,0,0,1-.25.768,1.941,1.941,0,0,1-.626.5,2.989,2.989,0,0,1-.814.278,4.323,4.323,0,0,1-.8.083,3.807,3.807,0,0,1-.452-.037q-.287-.037-.612-.111a5.075,5.075,0,0,1-.626-.185,1.624,1.624,0,0,1-.5-.278.2.2,0,0,0-.162.149q-.044.13-.1.259c-.049.136-.128.179-.235.13a1.071,1.071,0,0,1-.088-.065.278.278,0,0,1-.073-.194c0-.283.012-.562.038-.833a3.625,3.625,0,0,0-.038-.889c-.031-.173-.058-.333-.082-.482s.052-.253.233-.315a.482.482,0,0,1,.226.037c.02.012.025.025.015.037.04.161.073.324.1.491s.053.333.083.5a2.147,2.147,0,0,0,.136.463.929.929,0,0,0,.27.361,2.507,2.507,0,0,0,.842.453,3.582,3.582,0,0,0,.932.158c.07,0,.21-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.861,1.861,0,0,0,.617-.379.9.9,0,0,0,.27-.694.639.639,0,0,0-.368-.6,3.241,3.241,0,0,0-.872-.3q-.5-.1-1.03-.158a2.664,2.664,0,0,1-.842-.2c-.141-.062-.3-.138-.481-.232a2.148,2.148,0,0,1-.512-.37,1.98,1.98,0,0,1-.413-.6,2.131,2.131,0,0,1-.173-.908,1.708,1.708,0,0,1,.3-1.027,2.505,2.505,0,0,1,.722-.676,3.027,3.027,0,0,1,.887-.37,3.568,3.568,0,0,1,.812-.111,3.319,3.319,0,0,1,.887.1,2.544,2.544,0,0,1,.609.25,1.9,1.9,0,0,1,.406.315,3.272,3.272,0,0,0,.293.278C117.159,9.019,117.173,9.032,117.184,9.019Z"
                  transform="translate(-48.801 -0.724)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_271"
                  data-name="Path 271"
                  d="M140.84,5.989q-.077.513-.163.977t-.157.941a.227.227,0,0,0,.079.181.4.4,0,0,0,.173.064q.119.018.433.055l.672.083.671.082a2.933,2.933,0,0,1,.43.074l.171.073a.12.12,0,0,1,.086.135.236.236,0,0,1-.066.13.249.249,0,0,1-.191.055L141.7,8.647q-.624-.094-1.3-.159a.132.132,0,0,0-.146.109c-.016.072-.024.114-.027.126q-.09.7-.232,1.338t-.282,1.265q-.14.623-.248,1.242a9.118,9.118,0,0,0-.13,1.268,1.26,1.26,0,0,0,.286.828,1.389,1.389,0,0,0,.9.509,1.494,1.494,0,0,0,.9-.1,1.985,1.985,0,0,0,.6-.444,2.385,2.385,0,0,0,.368-.525,3.482,3.482,0,0,1,.189-.346.761.761,0,0,1,.1-.107.13.13,0,0,1,.16,0,.225.225,0,0,1,.1.221,2.153,2.153,0,0,1-.288.65,2.408,2.408,0,0,1-.521.577,2.345,2.345,0,0,1-.728.4,1.926,1.926,0,0,1-.923.067,2,2,0,0,1-1.1-.447,1.638,1.638,0,0,1-.468-.726,2.027,2.027,0,0,1-.083-.761c.022-.246.043-.436.063-.571l.061-.4c.02-.134.036-.269.046-.405a13.163,13.163,0,0,1,.329-1.776,9.282,9.282,0,0,0,.276-1.728.439.439,0,0,0,0-.112.16.16,0,0,0-.085-.143c-.256-.051-.507-.089-.75-.114a4.97,4.97,0,0,1-.734-.129.438.438,0,0,0-.124-.037c-.045-.007-.062-.04-.053-.1q.013-.185.221-.154t.462.06a2.308,2.308,0,0,0,.471.006,1.467,1.467,0,0,0,.442-.111.973.973,0,0,0,.381-.308,1.611,1.611,0,0,0,.23-.415,2.782,2.782,0,0,0,.12-.44q.042-.228.093-.464a2.671,2.671,0,0,1,.146-.465.153.153,0,0,1,.095-.126.243.243,0,0,1,.162-.013.255.255,0,0,1,.138.1.257.257,0,0,1,.038.2Z"
                  transform="translate(-60.012 0.309)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_272"
                  data-name="Path 272"
                  d="M140.84,5.989q-.077.513-.163.977t-.157.941a.227.227,0,0,0,.079.181.4.4,0,0,0,.173.064q.119.018.433.055l.672.083.671.082a2.933,2.933,0,0,1,.43.074l.171.073a.12.12,0,0,1,.086.135.236.236,0,0,1-.066.13.249.249,0,0,1-.191.055L141.7,8.647q-.624-.094-1.3-.159a.132.132,0,0,0-.146.109c-.016.072-.024.114-.027.126q-.09.7-.232,1.338t-.282,1.265q-.14.623-.248,1.242a9.118,9.118,0,0,0-.13,1.268,1.26,1.26,0,0,0,.286.828,1.389,1.389,0,0,0,.9.509,1.494,1.494,0,0,0,.9-.1,1.985,1.985,0,0,0,.6-.444,2.385,2.385,0,0,0,.368-.525,3.482,3.482,0,0,1,.189-.346.761.761,0,0,1,.1-.107.13.13,0,0,1,.16,0,.225.225,0,0,1,.1.221,2.153,2.153,0,0,1-.288.65,2.408,2.408,0,0,1-.521.577,2.345,2.345,0,0,1-.728.4,1.926,1.926,0,0,1-.923.067,2,2,0,0,1-1.1-.447,1.638,1.638,0,0,1-.468-.726,2.027,2.027,0,0,1-.083-.761c.022-.246.043-.436.063-.571l.061-.4c.02-.134.036-.269.046-.405a13.163,13.163,0,0,1,.329-1.776,9.282,9.282,0,0,0,.276-1.728.439.439,0,0,0,0-.112.16.16,0,0,0-.085-.143c-.256-.051-.507-.089-.75-.114a4.97,4.97,0,0,1-.734-.129.438.438,0,0,0-.124-.037c-.045-.007-.062-.04-.053-.1q.013-.185.221-.154t.462.06a2.308,2.308,0,0,0,.471.006,1.467,1.467,0,0,0,.442-.111.973.973,0,0,0,.381-.308,1.611,1.611,0,0,0,.23-.415,2.782,2.782,0,0,0,.12-.44q.042-.228.093-.464a2.671,2.671,0,0,1,.146-.465.153.153,0,0,1,.095-.126.243.243,0,0,1,.162-.013.255.255,0,0,1,.138.1.257.257,0,0,1,.038.2Z"
                  transform="translate(-60.012 0.309)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_273"
                  data-name="Path 273"
                  d="M155.15,1.122q.045,1.778-.023,3.509t-.007,3.584c0,.111.015.154.045.129a.145.145,0,0,1,.06-.037,3.634,3.634,0,0,1,1.132-1,2.6,2.6,0,0,1,1.342-.334,2.464,2.464,0,0,1,1.3.3,2.244,2.244,0,0,1,.719.668,1.971,1.971,0,0,1,.3.7q.061.325.075.362a9.458,9.458,0,0,1,.06,1.022q.014.706.015,1.467t.008,1.42q.008.658.023.882.014.148.211.2a2.239,2.239,0,0,0,.435.074,5.335,5.335,0,0,0,.632,0,.483.483,0,0,1,.136.018c.1.023.15.07.15.14,0,.093-.025.143-.075.149a1.521,1.521,0,0,1-.181.008H158.4a1.379,1.379,0,0,1-.2-.017c-.075-.012-.113-.047-.113-.106,0-.141.04-.211.121-.211a1.521,1.521,0,0,1,.383-.037,3.519,3.519,0,0,0,.4-.019,1.046,1.046,0,0,0,.444-.1.417.417,0,0,0,.158-.363q0-1.114.015-2.219a17.478,17.478,0,0,0-.105-2.182c0-.012-.017-.111-.053-.3a1.922,1.922,0,0,0-.233-.594,1.855,1.855,0,0,0-.541-.576,1.7,1.7,0,0,0-1.007-.26,2.294,2.294,0,0,0-.985.222,2.919,2.919,0,0,0-.865.63,2.618,2.618,0,0,0-.639,1.093,5.062,5.062,0,0,0-.2,1.352q-.015.538-.008,1.056a9.09,9.09,0,0,0,.082,1.074.119.119,0,0,0,.06.12c.04.019.06.034.06.046a5.057,5.057,0,0,0,.811.009,3.271,3.271,0,0,1,.812.046c.05.012.073.037.068.074a.705.705,0,0,0-.007.093.163.163,0,0,1-.075.111.114.114,0,0,1-.06.019q-1.007-.036-1.97-.01t-1.985-.009a.11.11,0,0,1-.06-.018c-.03-.012-.045-.068-.045-.167a.1.1,0,0,1,.053-.1c.035-.019.053-.021.053-.01a1.523,1.523,0,0,1,.459-.046,3.213,3.213,0,0,0,.5-.018.951.951,0,0,0,.406-.139.478.478,0,0,0,.2-.37q.03-.37.06-1.158t.053-1.805q.023-1.019.038-2.158t.023-2.2q.008-1.065.007-1.963V1.752a.309.309,0,0,0-.241-.305,1.124,1.124,0,0,0-.466-.065h-.233c-.1,0-.193,0-.294.009s-.193.01-.278.01h-.158a.937.937,0,0,1-.173-.019.116.116,0,0,1-.1-.13c0-.1.015-.16.045-.185a.185.185,0,0,1,.12-.037l.6-.046q.346-.028.662-.046c.21-.012.461-.03.752-.056a1.631,1.631,0,0,1,.233.019c.085.012.138.086.158.222Z"
                  transform="translate(-66.414 2.392)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_274"
                  data-name="Path 274"
                  d="M155.15,1.122q.045,1.778-.023,3.509t-.007,3.584c0,.111.015.154.045.129a.145.145,0,0,1,.06-.037,3.634,3.634,0,0,1,1.132-1,2.6,2.6,0,0,1,1.342-.334,2.464,2.464,0,0,1,1.3.3,2.244,2.244,0,0,1,.719.668,1.971,1.971,0,0,1,.3.7q.061.325.075.362a9.458,9.458,0,0,1,.06,1.022q.014.706.015,1.467t.008,1.42q.008.658.023.882.014.148.211.2a2.239,2.239,0,0,0,.435.074,5.335,5.335,0,0,0,.632,0,.483.483,0,0,1,.136.018c.1.023.15.07.15.14,0,.093-.025.143-.075.149a1.521,1.521,0,0,1-.181.008H158.4a1.379,1.379,0,0,1-.2-.017c-.075-.012-.113-.047-.113-.106,0-.141.04-.211.121-.211a1.521,1.521,0,0,1,.383-.037,3.519,3.519,0,0,0,.4-.019,1.046,1.046,0,0,0,.444-.1.417.417,0,0,0,.158-.363q0-1.114.015-2.219a17.478,17.478,0,0,0-.105-2.182c0-.012-.017-.111-.053-.3a1.922,1.922,0,0,0-.233-.594,1.855,1.855,0,0,0-.541-.576,1.7,1.7,0,0,0-1.007-.26,2.294,2.294,0,0,0-.985.222,2.919,2.919,0,0,0-.865.63,2.618,2.618,0,0,0-.639,1.093,5.062,5.062,0,0,0-.2,1.352q-.015.538-.008,1.056a9.09,9.09,0,0,0,.082,1.074.119.119,0,0,0,.06.12c.04.019.06.034.06.046a5.057,5.057,0,0,0,.811.009,3.271,3.271,0,0,1,.812.046c.05.012.073.037.068.074a.705.705,0,0,0-.007.093.163.163,0,0,1-.075.111.114.114,0,0,1-.06.019q-1.007-.036-1.97-.01t-1.985-.009a.11.11,0,0,1-.06-.018c-.03-.012-.045-.068-.045-.167a.1.1,0,0,1,.053-.1c.035-.019.053-.021.053-.01a1.523,1.523,0,0,1,.459-.046,3.213,3.213,0,0,0,.5-.018.951.951,0,0,0,.406-.139.478.478,0,0,0,.2-.37q.03-.37.06-1.158t.053-1.805q.023-1.019.038-2.158t.023-2.2q.008-1.065.007-1.963V1.752a.309.309,0,0,0-.241-.305,1.124,1.124,0,0,0-.466-.065h-.233c-.1,0-.193,0-.294.009s-.193.01-.278.01h-.158a.937.937,0,0,1-.173-.019.116.116,0,0,1-.1-.13c0-.1.015-.16.045-.185a.185.185,0,0,1,.12-.037l.6-.046q.346-.028.662-.046c.21-.012.461-.03.752-.056a1.631,1.631,0,0,1,.233.019c.085.012.138.086.158.222Z"
                  transform="translate(-66.414 2.392)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_275"
                  data-name="Path 275"
                  d="M178.126,10.4a.724.724,0,0,1-.045.343.34.34,0,0,1-.285.176c-.2.025-.441.043-.722.055s-.58.022-.9.028-.644.009-.97.009-.629,0-.91-.009-.529-.009-.744-.009h-.458a2.993,2.993,0,0,0-.391.018c-.08.012-.135.021-.165.028s-.047.016-.053.028a.083.083,0,0,1-.037.037,3.48,3.48,0,0,0-.09.778,4.835,4.835,0,0,0,.09.8,2.624,2.624,0,0,0,1.263,1.8,2.872,2.872,0,0,0,1.519.352,2.477,2.477,0,0,0,1.293-.315,3.016,3.016,0,0,0,.865-.759,3.524,3.524,0,0,0,.511-.907,4.155,4.155,0,0,0,.218-.741c.02-.074.063-.108.129-.1a.5.5,0,0,1,.173.046.662.662,0,0,1,.082.556,3.313,3.313,0,0,1-.188.518,3.577,3.577,0,0,1-1.3,1.6,3.253,3.253,0,0,1-1.8.528,3.722,3.722,0,0,1-1.451-.269,3.141,3.141,0,0,1-1.084-.741,3.371,3.371,0,0,1-.691-1.111,3.8,3.8,0,0,1-.247-1.38,4.6,4.6,0,0,1,.285-1.676,3.686,3.686,0,0,1,.767-1.232,3.286,3.286,0,0,1,1.143-.769,3.721,3.721,0,0,1,1.413-.268,2.614,2.614,0,0,1,1.481.37A2.854,2.854,0,0,1,177.66,9a2.756,2.756,0,0,1,.376.87,3.521,3.521,0,0,1,.09.528m-2.976-2.2a2.14,2.14,0,0,0-1.023.241,3,3,0,0,0-.774.583,3.288,3.288,0,0,0-.519.713,2.207,2.207,0,0,0-.239.63.469.469,0,0,0-.016.195c.01.03.065.053.165.064q.376.037,1.06.037t1.391-.028q.706-.028,1.285-.065a6.875,6.875,0,0,0,.759-.074c.1-.025.16-.059.181-.1a.542.542,0,0,0,.03-.213,1.667,1.667,0,0,0-.12-.463,2.318,2.318,0,0,0-.391-.666,2.625,2.625,0,0,0-.707-.593,2.087,2.087,0,0,0-1.082-.259"
                  transform="translate(-74.76 -0.623)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_276"
                  data-name="Path 276"
                  d="M178.126,10.4a.724.724,0,0,1-.045.343.34.34,0,0,1-.285.176c-.2.025-.441.043-.722.055s-.58.022-.9.028-.644.009-.97.009-.629,0-.91-.009-.529-.009-.744-.009h-.458a2.993,2.993,0,0,0-.391.018c-.08.012-.135.021-.165.028s-.047.016-.053.028a.083.083,0,0,1-.037.037,3.48,3.48,0,0,0-.09.778,4.835,4.835,0,0,0,.09.8,2.624,2.624,0,0,0,1.263,1.8,2.872,2.872,0,0,0,1.519.352,2.477,2.477,0,0,0,1.293-.315,3.016,3.016,0,0,0,.865-.759,3.524,3.524,0,0,0,.511-.907,4.155,4.155,0,0,0,.218-.741c.02-.074.063-.108.129-.1a.5.5,0,0,1,.173.046.662.662,0,0,1,.082.556,3.313,3.313,0,0,1-.188.518,3.577,3.577,0,0,1-1.3,1.6,3.253,3.253,0,0,1-1.8.528,3.722,3.722,0,0,1-1.451-.269,3.141,3.141,0,0,1-1.084-.741,3.371,3.371,0,0,1-.691-1.111,3.8,3.8,0,0,1-.247-1.38,4.6,4.6,0,0,1,.285-1.676,3.686,3.686,0,0,1,.767-1.232,3.286,3.286,0,0,1,1.143-.769,3.721,3.721,0,0,1,1.413-.268,2.614,2.614,0,0,1,1.481.37A2.854,2.854,0,0,1,177.66,9a2.756,2.756,0,0,1,.376.87A3.521,3.521,0,0,1,178.126,10.4Zm-2.976-2.2a2.14,2.14,0,0,0-1.023.241,3,3,0,0,0-.774.583,3.288,3.288,0,0,0-.519.713,2.207,2.207,0,0,0-.239.63.469.469,0,0,0-.016.195c.01.03.065.053.165.064q.376.037,1.06.037t1.391-.028q.706-.028,1.285-.065a6.875,6.875,0,0,0,.759-.074c.1-.025.16-.059.181-.1a.542.542,0,0,0,.03-.213,1.667,1.667,0,0,0-.12-.463,2.318,2.318,0,0,0-.391-.666,2.625,2.625,0,0,0-.707-.593A2.087,2.087,0,0,0,175.149,8.2Z"
                  transform="translate(-74.76 -0.623)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_277"
                  data-name="Path 277"
                  d="M207.506,1.879a1.131,1.131,0,0,1,.143.491.657.657,0,0,1-.068.417.822.822,0,0,1-.331.3.551.551,0,0,1-.421.019.414.414,0,0,1-.241-.3.386.386,0,0,1-.015-.315,1.784,1.784,0,0,1,.15-.259,1.434,1.434,0,0,0,.143-.25.323.323,0,0,0-.037-.287.935.935,0,0,0-.617-.509,2.67,2.67,0,0,0-.782-.083,1.805,1.805,0,0,0-1.075.305,2.361,2.361,0,0,0-.7.8,3.931,3.931,0,0,0-.4,1.083,8.792,8.792,0,0,0-.173,1.158q-.045.565-.038,1.037t.023.713a.107.107,0,0,0,.06.093.112.112,0,0,0,.06.019l1.429.092a.208.208,0,0,1,.1.12.176.176,0,0,1-.045.176,1.352,1.352,0,0,1-.407.046q-.195-.009-.391-.037c-.13-.019-.26-.03-.39-.037a1.221,1.221,0,0,0-.391.046.234.234,0,0,0-.06.055l-.053.064a.1.1,0,0,0-.023.064q0,.3-.007.795t-.015,1.09q-.008.59,0,1.228t.023,1.191q.015.554.045.97a2.438,2.438,0,0,0,.09.582q.075.166.136.166a7.714,7.714,0,0,0,1.135.028,5.063,5.063,0,0,1,1.105.065.227.227,0,0,1,.045.168c0,.086-.015.128-.045.128a15.988,15.988,0,0,0-2.36-.084q-1.173.047-2.346.065a.137.137,0,0,1-.09-.139.149.149,0,0,1,.06-.139,1.568,1.568,0,0,1,.541-.055,1.686,1.686,0,0,0,.556-.055,1.361,1.361,0,0,0,.421-.158.364.364,0,0,0,.106-.195q.044-1.426.045-2.74t-.03-2.741a.43.43,0,0,0-.12-.334.94.94,0,0,0-.466-.074c-.08,0-.156,0-.226.01s-.14.009-.21.009c-.05,0-.113,0-.188.009s-.158.01-.248.01h-.436a.129.129,0,0,1-.105-.065.225.225,0,0,1-.045-.129.207.207,0,0,1,.053-.13.229.229,0,0,1,.188-.065,2.538,2.538,0,0,1,.338-.019q.2,0,.421.01c.145.006.286.009.421.009a2.551,2.551,0,0,0,.339-.019c.12-.012.19-.043.21-.093a.612.612,0,0,0,.03-.222,17.825,17.825,0,0,1,.158-1.852,5.783,5.783,0,0,1,.482-1.676,3.2,3.2,0,0,1,.985-1.223A2.719,2.719,0,0,1,205.626.75a2.135,2.135,0,0,1,1.045.268,2.224,2.224,0,0,1,.835.861"
                  transform="translate(-87.21 2.449)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_278"
                  data-name="Path 278"
                  d="M207.506,1.879a1.131,1.131,0,0,1,.143.491.657.657,0,0,1-.068.417.822.822,0,0,1-.331.3.551.551,0,0,1-.421.019.414.414,0,0,1-.241-.3.386.386,0,0,1-.015-.315,1.784,1.784,0,0,1,.15-.259,1.434,1.434,0,0,0,.143-.25.323.323,0,0,0-.037-.287.935.935,0,0,0-.617-.509,2.67,2.67,0,0,0-.782-.083,1.805,1.805,0,0,0-1.075.305,2.361,2.361,0,0,0-.7.8,3.931,3.931,0,0,0-.4,1.083,8.792,8.792,0,0,0-.173,1.158q-.045.565-.038,1.037t.023.713a.107.107,0,0,0,.06.093.112.112,0,0,0,.06.019l1.429.092a.208.208,0,0,1,.1.12.176.176,0,0,1-.045.176,1.352,1.352,0,0,1-.407.046q-.195-.009-.391-.037c-.13-.019-.26-.03-.39-.037a1.221,1.221,0,0,0-.391.046.234.234,0,0,0-.06.055l-.053.064a.1.1,0,0,0-.023.064q0,.3-.007.795t-.015,1.09q-.008.59,0,1.228t.023,1.191q.015.554.045.97a2.438,2.438,0,0,0,.09.582q.075.166.136.166a7.714,7.714,0,0,0,1.135.028,5.063,5.063,0,0,1,1.105.065.227.227,0,0,1,.045.168c0,.086-.015.128-.045.128a15.988,15.988,0,0,0-2.36-.084q-1.173.047-2.346.065a.137.137,0,0,1-.09-.139.149.149,0,0,1,.06-.139,1.568,1.568,0,0,1,.541-.055,1.686,1.686,0,0,0,.556-.055,1.361,1.361,0,0,0,.421-.158.364.364,0,0,0,.106-.195q.044-1.426.045-2.74t-.03-2.741a.43.43,0,0,0-.12-.334.94.94,0,0,0-.466-.074c-.08,0-.156,0-.226.01s-.14.009-.21.009c-.05,0-.113,0-.188.009s-.158.01-.248.01h-.436a.129.129,0,0,1-.105-.065.225.225,0,0,1-.045-.129.207.207,0,0,1,.053-.13.229.229,0,0,1,.188-.065,2.538,2.538,0,0,1,.338-.019q.2,0,.421.01c.145.006.286.009.421.009a2.551,2.551,0,0,0,.339-.019c.12-.012.19-.043.21-.093a.612.612,0,0,0,.03-.222,17.825,17.825,0,0,1,.158-1.852,5.783,5.783,0,0,1,.482-1.676,3.2,3.2,0,0,1,.985-1.223A2.719,2.719,0,0,1,205.626.75a2.135,2.135,0,0,1,1.045.268A2.224,2.224,0,0,1,207.506,1.879Z"
                  transform="translate(-87.21 2.449)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_279"
                  data-name="Path 279"
                  d="M216.82,9.912q-.031,1.505-.1,2.963t.007,2.962a.4.4,0,0,0,.083.186.361.361,0,0,0,.218.074,5.262,5.262,0,0,0,.744.056,2.117,2.117,0,0,1,.714.129q.105.056.03.185a.206.206,0,0,1-.12.111,12.293,12.293,0,0,0-1.879-.074,14.346,14.346,0,0,1-1.894-.055c-.05,0-.07-.044-.06-.13s.045-.151.135-.158.171-.009.241-.009a1.746,1.746,0,0,0,.947-.2.634.634,0,0,0,.27-.352q.075-1.222.068-2.565t-.1-2.547a.3.3,0,0,0-.143-.268.755.755,0,0,0-.384-.046l-1.278.037c-.08,0-.13-.051-.15-.154q-.03-.194.075-.224c.07-.019.135-.036.2-.049q.572-.037,1.075-.084a4.452,4.452,0,0,1,1.03.028.291.291,0,0,1,.241.093.2.2,0,0,1,.03.093m.241-1.686a.433.433,0,0,1-.053.232.44.44,0,0,1-.12.13.324.324,0,0,1-.128.055.566.566,0,0,1-.09.009,1.067,1.067,0,0,1-.128-.009.382.382,0,0,1-.158-.055.4.4,0,0,1-.128-.13.432.432,0,0,1-.053-.232,1.061,1.061,0,0,1,.06-.241q.06-.185.361-.185a.549.549,0,0,1,.285.093.36.36,0,0,1,.15.333"
                  transform="translate(-93.231 -0.62)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_280"
                  data-name="Path 280"
                  d="M216.82,9.912q-.031,1.505-.1,2.963t.007,2.962a.4.4,0,0,0,.083.186.361.361,0,0,0,.218.074,5.262,5.262,0,0,0,.744.056,2.117,2.117,0,0,1,.714.129q.105.056.03.185a.206.206,0,0,1-.12.111,12.293,12.293,0,0,0-1.879-.074,14.346,14.346,0,0,1-1.894-.055c-.05,0-.07-.044-.06-.13s.045-.151.135-.158.171-.009.241-.009a1.746,1.746,0,0,0,.947-.2.634.634,0,0,0,.27-.352q.075-1.222.068-2.565t-.1-2.547a.3.3,0,0,0-.143-.268.755.755,0,0,0-.384-.046l-1.278.037c-.08,0-.13-.051-.15-.154q-.03-.194.075-.224c.07-.019.135-.036.2-.049q.572-.037,1.075-.084a4.452,4.452,0,0,1,1.03.028.291.291,0,0,1,.241.093A.2.2,0,0,1,216.82,9.912Zm.241-1.686a.433.433,0,0,1-.053.232.44.44,0,0,1-.12.13.324.324,0,0,1-.128.055.566.566,0,0,1-.09.009,1.067,1.067,0,0,1-.128-.009.382.382,0,0,1-.158-.055.4.4,0,0,1-.128-.13.432.432,0,0,1-.053-.232,1.061,1.061,0,0,1,.06-.241q.06-.185.361-.185a.549.549,0,0,1,.285.093A.36.36,0,0,1,217.06,8.227Z"
                  transform="translate(-93.231 -0.62)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_281"
                  data-name="Path 281"
                  d="M226.689,8.97c0,.346-.006.676-.015.991s-.015.632-.015.954a.228.228,0,0,0,.106.167.4.4,0,0,0,.18.037q.12,0,.436-.01l.676-.019.676-.018a2.83,2.83,0,0,1,.436.009l.181.046a.12.12,0,0,1,.105.12.238.238,0,0,1-.045.139.251.251,0,0,1-.18.084h-1.293q-.632,0-1.308.037a.132.132,0,0,0-.128.129c-.006.075-.008.117-.008.129q.015.7-.029,1.357t-.091,1.293q-.045.637-.06,1.265a9.171,9.171,0,0,0,.06,1.274,1.256,1.256,0,0,0,.406.776,1.384,1.384,0,0,0,.962.369,1.492,1.492,0,0,0,.872-.231,2,2,0,0,0,.526-.528,2.415,2.415,0,0,0,.286-.574,3.492,3.492,0,0,1,.135-.37.856.856,0,0,1,.082-.12.131.131,0,0,1,.159-.028.227.227,0,0,1,.135.2,2.157,2.157,0,0,1-.188.685,2.426,2.426,0,0,1-.429.648,2.363,2.363,0,0,1-.662.5,1.928,1.928,0,0,1-.9.2,2,2,0,0,1-1.15-.278,1.638,1.638,0,0,1-.572-.648,2.027,2.027,0,0,1-.2-.74c-.015-.247-.023-.438-.023-.574V15.84q0-.2-.015-.407a13.27,13.27,0,0,1,.06-1.805,9.286,9.286,0,0,0,.015-1.751.42.42,0,0,0-.015-.111c-.02-.074-.055-.117-.105-.129q-.391-.019-.759,0a4.982,4.982,0,0,1-.744-.019.431.431,0,0,0-.128-.019c-.045,0-.068-.03-.068-.093-.01-.123.055-.185.2-.185s.306,0,.466-.009a2.3,2.3,0,0,0,.466-.065,1.463,1.463,0,0,0,.421-.176.965.965,0,0,0,.331-.361,1.6,1.6,0,0,0,.165-.444,2.742,2.742,0,0,0,.053-.454q.007-.231.022-.472a2.6,2.6,0,0,1,.076-.482.151.151,0,0,1,.075-.138.242.242,0,0,1,.158-.037.246.246,0,0,1,.218.268Z"
                  transform="translate(-97.536 -1.004)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_282"
                  data-name="Path 282"
                  d="M226.689,8.97c0,.346-.006.676-.015.991s-.015.632-.015.954a.228.228,0,0,0,.106.167.4.4,0,0,0,.18.037q.12,0,.436-.01l.676-.019.676-.018a2.83,2.83,0,0,1,.436.009l.181.046a.12.12,0,0,1,.105.12.238.238,0,0,1-.045.139.251.251,0,0,1-.18.084h-1.293q-.632,0-1.308.037a.132.132,0,0,0-.128.129c-.006.075-.008.117-.008.129q.015.7-.029,1.357t-.091,1.293q-.045.637-.06,1.265a9.171,9.171,0,0,0,.06,1.274,1.256,1.256,0,0,0,.406.776,1.384,1.384,0,0,0,.962.369,1.492,1.492,0,0,0,.872-.231,2,2,0,0,0,.526-.528,2.415,2.415,0,0,0,.286-.574,3.492,3.492,0,0,1,.135-.37.856.856,0,0,1,.082-.12.131.131,0,0,1,.159-.028.227.227,0,0,1,.135.2,2.157,2.157,0,0,1-.188.685,2.426,2.426,0,0,1-.429.648,2.363,2.363,0,0,1-.662.5,1.928,1.928,0,0,1-.9.2,2,2,0,0,1-1.15-.278,1.638,1.638,0,0,1-.572-.648,2.027,2.027,0,0,1-.2-.74c-.015-.247-.023-.438-.023-.574V15.84q0-.2-.015-.407a13.27,13.27,0,0,1,.06-1.805,9.286,9.286,0,0,0,.015-1.751.42.42,0,0,0-.015-.111c-.02-.074-.055-.117-.105-.129q-.391-.019-.759,0a4.982,4.982,0,0,1-.744-.019.431.431,0,0,0-.128-.019c-.045,0-.068-.03-.068-.093-.01-.123.055-.185.2-.185s.306,0,.466-.009a2.3,2.3,0,0,0,.466-.065,1.463,1.463,0,0,0,.421-.176.965.965,0,0,0,.331-.361,1.6,1.6,0,0,0,.165-.444,2.742,2.742,0,0,0,.053-.454q.007-.231.022-.472a2.6,2.6,0,0,1,.076-.482.151.151,0,0,1,.075-.138.242.242,0,0,1,.158-.037.246.246,0,0,1,.218.268Z"
                  transform="translate(-97.536 -1.004)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_283"
                  data-name="Path 283"
                  d="M246.449,10.184a9.29,9.29,0,0,1,.158,1.268q.037.657.038,1.315t-.015,1.324q-.014.667,0,1.3a.183.183,0,0,0,.083.176.325.325,0,0,0,.158.046l1.309.019c.07,0,.11.049.12.148a.193.193,0,0,1-.015.074c-.02.05-.045.075-.075.075q-.9-.019-1.774.028t-1.744.028c-.05,0-.083-.031-.1-.093a.263.263,0,0,1,.007-.167.233.233,0,0,1,.225-.093,1.973,1.973,0,0,0,.256.018,1.57,1.57,0,0,0,.286-.028.95.95,0,0,0,.286-.1.862.862,0,0,0,.233-.185.582.582,0,0,0,.128-.3q.014-.592.06-1.185c.031-.395.047-.787.053-1.176s0-.778-.023-1.167a6.879,6.879,0,0,0-.165-1.176,1.465,1.465,0,0,0-.564-.843,1.953,1.953,0,0,0-1.241-.361,3.186,3.186,0,0,0-1.361.305,2.4,2.4,0,0,0-1.075,1.084,3.42,3.42,0,0,0-.361.991A7.644,7.644,0,0,0,241.2,12.6q-.03.565-.015,1.138t0,1.093a.2.2,0,0,0,.112.176.838.838,0,0,0,.263.065q.225,0,.5-.019a3.245,3.245,0,0,1,.481,0,.79.79,0,0,1,.12.01c.04.006.065.059.075.157a.139.139,0,0,1-.06.13.1.1,0,0,1-.045.019q-.887.037-1.684.037t-1.729.019c-.06,0-.1-.049-.12-.148,0-.124.04-.191.12-.2.12,0,.256,0,.406.009a1.986,1.986,0,0,0,.436-.028.786.786,0,0,0,.353-.148.5.5,0,0,0,.158-.389q.03-.833.053-1.472t.045-1.194q.022-.556.03-1.093t.007-1.186a.619.619,0,0,0-.053-.25.178.178,0,0,0-.173-.12q-.436-.037-.9-.046t-.872.009a.106.106,0,0,1-.068-.037.091.091,0,0,1-.03-.083c.005-.03.035-.065.09-.1a.838.838,0,0,1,.294-.092,3.777,3.777,0,0,1,.7-.084c.235-.006.468,0,.7.009s.411,0,.541-.009a1.3,1.3,0,0,1,.285.009.136.136,0,0,1,.113.1,1.159,1.159,0,0,1,.023.269v.491c0,.167,0,.343.015.528q.015.075.037.037c.015-.025.023-.031.023-.019a2.987,2.987,0,0,1,1.188-1.158,3.2,3.2,0,0,1,1.473-.361,4.014,4.014,0,0,1,.82.083,2.225,2.225,0,0,1,.714.278,1.931,1.931,0,0,1,.534.482,1.6,1.6,0,0,1,.294.676"
                  transform="translate(-103.87 -0.997)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_284"
                  data-name="Path 284"
                  d="M246.449,10.184a9.29,9.29,0,0,1,.158,1.268q.037.657.038,1.315t-.015,1.324q-.014.667,0,1.3a.183.183,0,0,0,.083.176.325.325,0,0,0,.158.046l1.309.019c.07,0,.11.049.12.148a.193.193,0,0,1-.015.074c-.02.05-.045.075-.075.075q-.9-.019-1.774.028t-1.744.028c-.05,0-.083-.031-.1-.093a.263.263,0,0,1,.007-.167.233.233,0,0,1,.225-.093,1.973,1.973,0,0,0,.256.018,1.57,1.57,0,0,0,.286-.028.95.95,0,0,0,.286-.1.862.862,0,0,0,.233-.185.582.582,0,0,0,.128-.3q.014-.592.06-1.185c.031-.395.047-.787.053-1.176s0-.778-.023-1.167a6.879,6.879,0,0,0-.165-1.176,1.465,1.465,0,0,0-.564-.843,1.953,1.953,0,0,0-1.241-.361,3.186,3.186,0,0,0-1.361.305,2.4,2.4,0,0,0-1.075,1.084,3.42,3.42,0,0,0-.361.991A7.644,7.644,0,0,0,241.2,12.6q-.03.565-.015,1.138t0,1.093a.2.2,0,0,0,.112.176.838.838,0,0,0,.263.065q.225,0,.5-.019a3.245,3.245,0,0,1,.481,0,.79.79,0,0,1,.12.01c.04.006.065.059.075.157a.139.139,0,0,1-.06.13.1.1,0,0,1-.045.019q-.887.037-1.684.037t-1.729.019c-.06,0-.1-.049-.12-.148,0-.124.04-.191.12-.2.12,0,.256,0,.406.009a1.986,1.986,0,0,0,.436-.028.786.786,0,0,0,.353-.148.5.5,0,0,0,.158-.389q.03-.833.053-1.472t.045-1.194q.022-.556.03-1.093t.007-1.186a.619.619,0,0,0-.053-.25.178.178,0,0,0-.173-.12q-.436-.037-.9-.046t-.872.009a.106.106,0,0,1-.068-.037.091.091,0,0,1-.03-.083c.005-.03.035-.065.09-.1a.838.838,0,0,1,.294-.092,3.777,3.777,0,0,1,.7-.084c.235-.006.468,0,.7.009s.411,0,.541-.009a1.3,1.3,0,0,1,.285.009.136.136,0,0,1,.113.1,1.159,1.159,0,0,1,.023.269v.491c0,.167,0,.343.015.528q.015.075.037.037c.015-.025.023-.031.023-.019a2.987,2.987,0,0,1,1.188-1.158,3.2,3.2,0,0,1,1.473-.361,4.014,4.014,0,0,1,.82.083,2.225,2.225,0,0,1,.714.278,1.931,1.931,0,0,1,.534.482A1.6,1.6,0,0,1,246.449,10.184Z"
                  transform="translate(-103.87 -0.997)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_285"
                  data-name="Path 285"
                  d="M265.25,10.4a.724.724,0,0,1-.045.343.34.34,0,0,1-.285.176q-.3.037-.722.055t-.9.028q-.482.009-.97.009c-.325,0-.629,0-.91-.009s-.529-.009-.744-.009h-.458a2.987,2.987,0,0,0-.391.018c-.08.012-.135.021-.165.028s-.048.016-.053.028a.086.086,0,0,1-.037.037,3.445,3.445,0,0,0-.09.778,4.77,4.77,0,0,0,.09.8,2.693,2.693,0,0,0,.391.972,2.664,2.664,0,0,0,.872.824,2.871,2.871,0,0,0,1.519.352,2.476,2.476,0,0,0,1.293-.315,3.016,3.016,0,0,0,.865-.759,3.543,3.543,0,0,0,.511-.907,4.153,4.153,0,0,0,.218-.741c.02-.074.063-.108.128-.1a.493.493,0,0,1,.173.046.662.662,0,0,1,.083.556,3.313,3.313,0,0,1-.188.518,3.577,3.577,0,0,1-1.3,1.6,3.253,3.253,0,0,1-1.8.528,3.722,3.722,0,0,1-1.451-.269,3.135,3.135,0,0,1-1.084-.741,3.382,3.382,0,0,1-.692-1.111,3.8,3.8,0,0,1-.246-1.38,4.6,4.6,0,0,1,.285-1.676,3.677,3.677,0,0,1,.767-1.232,3.286,3.286,0,0,1,1.143-.769,3.721,3.721,0,0,1,1.413-.268,2.615,2.615,0,0,1,1.481.37,2.845,2.845,0,0,1,.834.824,2.73,2.73,0,0,1,.376.87,3.472,3.472,0,0,1,.09.528m-2.977-2.2a2.14,2.14,0,0,0-1.023.241,2.988,2.988,0,0,0-.774.583,3.291,3.291,0,0,0-.519.713,2.229,2.229,0,0,0-.24.63.491.491,0,0,0-.016.195c.01.03.065.053.165.064q.377.037,1.06.037t1.391-.028q.706-.028,1.285-.065a6.875,6.875,0,0,0,.759-.074c.1-.025.16-.059.181-.1a.553.553,0,0,0,.03-.213,1.667,1.667,0,0,0-.12-.463,2.317,2.317,0,0,0-.391-.666,2.626,2.626,0,0,0-.707-.593,2.088,2.088,0,0,0-1.083-.259"
                  transform="translate(-112.687 -0.623)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_286"
                  data-name="Path 286"
                  d="M265.25,10.4a.724.724,0,0,1-.045.343.34.34,0,0,1-.285.176q-.3.037-.722.055t-.9.028q-.482.009-.97.009c-.325,0-.629,0-.91-.009s-.529-.009-.744-.009h-.458a2.987,2.987,0,0,0-.391.018c-.08.012-.135.021-.165.028s-.048.016-.053.028a.086.086,0,0,1-.037.037,3.445,3.445,0,0,0-.09.778,4.77,4.77,0,0,0,.09.8,2.693,2.693,0,0,0,.391.972,2.664,2.664,0,0,0,.872.824,2.871,2.871,0,0,0,1.519.352,2.476,2.476,0,0,0,1.293-.315,3.016,3.016,0,0,0,.865-.759,3.543,3.543,0,0,0,.511-.907,4.153,4.153,0,0,0,.218-.741c.02-.074.063-.108.128-.1a.493.493,0,0,1,.173.046.662.662,0,0,1,.083.556,3.313,3.313,0,0,1-.188.518,3.577,3.577,0,0,1-1.3,1.6,3.253,3.253,0,0,1-1.8.528,3.722,3.722,0,0,1-1.451-.269,3.135,3.135,0,0,1-1.084-.741,3.382,3.382,0,0,1-.692-1.111,3.8,3.8,0,0,1-.246-1.38,4.6,4.6,0,0,1,.285-1.676,3.677,3.677,0,0,1,.767-1.232,3.286,3.286,0,0,1,1.143-.769,3.721,3.721,0,0,1,1.413-.268,2.615,2.615,0,0,1,1.481.37,2.845,2.845,0,0,1,.834.824,2.73,2.73,0,0,1,.376.87A3.472,3.472,0,0,1,265.25,10.4Zm-2.977-2.2a2.14,2.14,0,0,0-1.023.241,2.988,2.988,0,0,0-.774.583,3.291,3.291,0,0,0-.519.713,2.229,2.229,0,0,0-.24.63.491.491,0,0,0-.016.195c.01.03.065.053.165.064q.377.037,1.06.037t1.391-.028q.706-.028,1.285-.065a6.875,6.875,0,0,0,.759-.074c.1-.025.16-.059.181-.1a.553.553,0,0,0,.03-.213,1.667,1.667,0,0,0-.12-.463,2.317,2.317,0,0,0-.391-.666,2.626,2.626,0,0,0-.707-.593A2.088,2.088,0,0,0,262.273,8.2Z"
                  transform="translate(-112.687 -0.623)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_287"
                  data-name="Path 287"
                  d="M280.745,11.439c.01,0,.03-.025.06-.074a2.387,2.387,0,0,0,.068-.278c.015-.086.032-.166.053-.241q.045-.222.2-.222c.12,0,.186.021.2.064s.01.065,0,.065a12.025,12.025,0,0,0-.106,1.352q-.014.685-.075,1.333a.408.408,0,0,1-.038.129.153.153,0,0,1-.158.093c-.131,0-.211-.034-.242-.1a.42.42,0,0,1-.045-.158v-.7a1.872,1.872,0,0,0-.2-.667,2.129,2.129,0,0,0-.437-.592,2.3,2.3,0,0,0-.634-.426,1.819,1.819,0,0,0-.77-.167,2.629,2.629,0,0,0-1.169.222,1.963,1.963,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.337,2.337,0,0,0-.068.453,1.939,1.939,0,0,0,.241,1.046,1.785,1.785,0,0,0,.6.593,2.316,2.316,0,0,0,.777.287q.415.075.746.13.257.037.656.074a3.535,3.535,0,0,1,.769.158,1.645,1.645,0,0,1,.634.37.936.936,0,0,1,.264.713,1.175,1.175,0,0,1-.249.768,1.947,1.947,0,0,1-.626.5,2.993,2.993,0,0,1-.815.278,4.314,4.314,0,0,1-.8.083,3.816,3.816,0,0,1-.452-.037q-.287-.037-.611-.111a5.016,5.016,0,0,1-.626-.185,1.627,1.627,0,0,1-.5-.278.2.2,0,0,0-.162.149,2.676,2.676,0,0,1-.1.259c-.049.136-.127.179-.236.13-.019-.012-.049-.034-.088-.065a.279.279,0,0,1-.074-.194c0-.283.013-.562.038-.833a3.6,3.6,0,0,0-.038-.889c-.03-.173-.057-.333-.082-.482s.052-.253.233-.315a.478.478,0,0,1,.225.037q.03.019.015.037c.04.161.072.324.1.491s.053.333.083.5a2.214,2.214,0,0,0,.135.463.931.931,0,0,0,.271.361,2.51,2.51,0,0,0,.841.453,3.586,3.586,0,0,0,.932.158c.07,0,.211-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.855,1.855,0,0,0,.617-.379.9.9,0,0,0,.271-.694.639.639,0,0,0-.369-.6,3.228,3.228,0,0,0-.872-.3q-.5-.1-1.029-.158a2.66,2.66,0,0,1-.842-.2q-.211-.092-.482-.232a2.156,2.156,0,0,1-.511-.37,1.991,1.991,0,0,1-.413-.6,2.132,2.132,0,0,1-.173-.908,1.707,1.707,0,0,1,.3-1.027,2.513,2.513,0,0,1,.722-.676,3.037,3.037,0,0,1,.888-.37,3.567,3.567,0,0,1,.811-.111,3.327,3.327,0,0,1,.888.1,2.553,2.553,0,0,1,.609.25,1.893,1.893,0,0,1,.405.315,3.268,3.268,0,0,0,.294.278c.02.037.034.05.045.037"
                  transform="translate(-120.003 -1.777)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_288"
                  data-name="Path 288"
                  d="M280.745,11.439c.01,0,.03-.025.06-.074a2.387,2.387,0,0,0,.068-.278c.015-.086.032-.166.053-.241q.045-.222.2-.222c.12,0,.186.021.2.064s.01.065,0,.065a12.025,12.025,0,0,0-.106,1.352q-.014.685-.075,1.333a.408.408,0,0,1-.038.129.153.153,0,0,1-.158.093c-.131,0-.211-.034-.242-.1a.42.42,0,0,1-.045-.158v-.7a1.872,1.872,0,0,0-.2-.667,2.129,2.129,0,0,0-.437-.592,2.3,2.3,0,0,0-.634-.426,1.819,1.819,0,0,0-.77-.167,2.629,2.629,0,0,0-1.169.222,1.963,1.963,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.337,2.337,0,0,0-.068.453,1.939,1.939,0,0,0,.241,1.046,1.785,1.785,0,0,0,.6.593,2.316,2.316,0,0,0,.777.287q.415.075.746.13.257.037.656.074a3.535,3.535,0,0,1,.769.158,1.645,1.645,0,0,1,.634.37.936.936,0,0,1,.264.713,1.175,1.175,0,0,1-.249.768,1.947,1.947,0,0,1-.626.5,2.993,2.993,0,0,1-.815.278,4.314,4.314,0,0,1-.8.083,3.816,3.816,0,0,1-.452-.037q-.287-.037-.611-.111a5.016,5.016,0,0,1-.626-.185,1.627,1.627,0,0,1-.5-.278.2.2,0,0,0-.162.149,2.676,2.676,0,0,1-.1.259c-.049.136-.127.179-.236.13-.019-.012-.049-.034-.088-.065a.279.279,0,0,1-.074-.194c0-.283.013-.562.038-.833a3.6,3.6,0,0,0-.038-.889c-.03-.173-.057-.333-.082-.482s.052-.253.233-.315a.478.478,0,0,1,.225.037q.03.019.015.037c.04.161.072.324.1.491s.053.333.083.5a2.214,2.214,0,0,0,.135.463.931.931,0,0,0,.271.361,2.51,2.51,0,0,0,.841.453,3.586,3.586,0,0,0,.932.158c.07,0,.211-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.855,1.855,0,0,0,.617-.379.9.9,0,0,0,.271-.694.639.639,0,0,0-.369-.6,3.228,3.228,0,0,0-.872-.3q-.5-.1-1.029-.158a2.66,2.66,0,0,1-.842-.2q-.211-.092-.482-.232a2.156,2.156,0,0,1-.511-.37,1.991,1.991,0,0,1-.413-.6,2.132,2.132,0,0,1-.173-.908,1.707,1.707,0,0,1,.3-1.027,2.513,2.513,0,0,1,.722-.676,3.037,3.037,0,0,1,.888-.37,3.567,3.567,0,0,1,.811-.111,3.327,3.327,0,0,1,.888.1,2.553,2.553,0,0,1,.609.25,1.893,1.893,0,0,1,.405.315,3.268,3.268,0,0,0,.294.278C280.72,11.439,280.735,11.452,280.745,11.439Z"
                  transform="translate(-120.003 -1.777)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
                <path
                  id="Path_289"
                  data-name="Path 289"
                  d="M295.9,9.019c.01,0,.03-.025.06-.074a2.388,2.388,0,0,0,.068-.278c.015-.086.032-.166.052-.241q.045-.222.2-.222c.12,0,.186.021.2.064s.01.065,0,.065a12,12,0,0,0-.106,1.352q-.014.685-.075,1.333a.409.409,0,0,1-.038.129.153.153,0,0,1-.158.093c-.131,0-.211-.034-.242-.1a.42.42,0,0,1-.045-.158v-.7a1.872,1.872,0,0,0-.2-.667,2.128,2.128,0,0,0-.437-.592,2.3,2.3,0,0,0-.634-.426,1.818,1.818,0,0,0-.77-.167,2.629,2.629,0,0,0-1.169.222,1.962,1.962,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.337,2.337,0,0,0-.068.453,1.94,1.94,0,0,0,.241,1.046,1.786,1.786,0,0,0,.6.593,2.316,2.316,0,0,0,.777.287q.415.075.747.13.257.037.656.074a3.535,3.535,0,0,1,.769.158,1.645,1.645,0,0,1,.634.37.936.936,0,0,1,.264.713,1.175,1.175,0,0,1-.249.768,1.947,1.947,0,0,1-.626.5,2.994,2.994,0,0,1-.815.278,4.314,4.314,0,0,1-.8.083,3.817,3.817,0,0,1-.452-.037q-.287-.037-.611-.111a5.018,5.018,0,0,1-.626-.185,1.627,1.627,0,0,1-.5-.278.2.2,0,0,0-.162.149,2.676,2.676,0,0,1-.1.259c-.049.136-.127.179-.235.13a1.07,1.07,0,0,1-.088-.065.278.278,0,0,1-.074-.194c0-.283.013-.562.038-.833a3.6,3.6,0,0,0-.038-.889c-.03-.173-.057-.333-.082-.482s.052-.253.233-.315a.478.478,0,0,1,.225.037q.03.019.015.037c.04.161.072.324.1.491s.053.333.083.5a2.214,2.214,0,0,0,.136.463.93.93,0,0,0,.271.361,2.509,2.509,0,0,0,.841.453,3.585,3.585,0,0,0,.932.158c.07,0,.211-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.855,1.855,0,0,0,.617-.379.9.9,0,0,0,.271-.694.639.639,0,0,0-.369-.6,3.228,3.228,0,0,0-.872-.3q-.5-.1-1.029-.158a2.661,2.661,0,0,1-.842-.2q-.211-.092-.482-.232a2.155,2.155,0,0,1-.511-.37,1.991,1.991,0,0,1-.413-.6,2.131,2.131,0,0,1-.173-.908,1.707,1.707,0,0,1,.3-1.027,2.513,2.513,0,0,1,.722-.676,3.037,3.037,0,0,1,.888-.37,3.567,3.567,0,0,1,.811-.111,3.326,3.326,0,0,1,.888.1,2.553,2.553,0,0,1,.609.25,1.893,1.893,0,0,1,.405.315,3.28,3.28,0,0,0,.294.278c.02.037.034.05.045.037"
                  transform="translate(-126.602 -0.724)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-width="1"
                />
                <path
                  id="Path_290"
                  data-name="Path 290"
                  d="M295.9,9.019c.01,0,.03-.025.06-.074a2.388,2.388,0,0,0,.068-.278c.015-.086.032-.166.052-.241q.045-.222.2-.222c.12,0,.186.021.2.064s.01.065,0,.065a12,12,0,0,0-.106,1.352q-.014.685-.075,1.333a.409.409,0,0,1-.038.129.153.153,0,0,1-.158.093c-.131,0-.211-.034-.242-.1a.42.42,0,0,1-.045-.158v-.7a1.872,1.872,0,0,0-.2-.667,2.128,2.128,0,0,0-.437-.592,2.3,2.3,0,0,0-.634-.426,1.818,1.818,0,0,0-.77-.167,2.629,2.629,0,0,0-1.169.222,1.962,1.962,0,0,0-.679.518,1.5,1.5,0,0,0-.3.6,2.337,2.337,0,0,0-.068.453,1.94,1.94,0,0,0,.241,1.046,1.786,1.786,0,0,0,.6.593,2.316,2.316,0,0,0,.777.287q.415.075.747.13.257.037.656.074a3.535,3.535,0,0,1,.769.158,1.645,1.645,0,0,1,.634.37.936.936,0,0,1,.264.713,1.175,1.175,0,0,1-.249.768,1.947,1.947,0,0,1-.626.5,2.994,2.994,0,0,1-.815.278,4.314,4.314,0,0,1-.8.083,3.817,3.817,0,0,1-.452-.037q-.287-.037-.611-.111a5.018,5.018,0,0,1-.626-.185,1.627,1.627,0,0,1-.5-.278.2.2,0,0,0-.162.149,2.676,2.676,0,0,1-.1.259c-.049.136-.127.179-.235.13a1.07,1.07,0,0,1-.088-.065.278.278,0,0,1-.074-.194c0-.283.013-.562.038-.833a3.6,3.6,0,0,0-.038-.889c-.03-.173-.057-.333-.082-.482s.052-.253.233-.315a.478.478,0,0,1,.225.037q.03.019.015.037c.04.161.072.324.1.491s.053.333.083.5a2.214,2.214,0,0,0,.136.463.93.93,0,0,0,.271.361,2.509,2.509,0,0,0,.841.453,3.585,3.585,0,0,0,.932.158c.07,0,.211-.012.421-.037a2.811,2.811,0,0,0,.662-.167,1.855,1.855,0,0,0,.617-.379.9.9,0,0,0,.271-.694.639.639,0,0,0-.369-.6,3.228,3.228,0,0,0-.872-.3q-.5-.1-1.029-.158a2.661,2.661,0,0,1-.842-.2q-.211-.092-.482-.232a2.155,2.155,0,0,1-.511-.37,1.991,1.991,0,0,1-.413-.6,2.131,2.131,0,0,1-.173-.908,1.707,1.707,0,0,1,.3-1.027,2.513,2.513,0,0,1,.722-.676,3.037,3.037,0,0,1,.888-.37,3.567,3.567,0,0,1,.811-.111,3.326,3.326,0,0,1,.888.1,2.553,2.553,0,0,1,.609.25,1.893,1.893,0,0,1,.405.315,3.28,3.28,0,0,0,.294.278C295.878,9.019,295.893,9.032,295.9,9.019Z"
                  transform="translate(-126.602 -0.724)"
                  fill="#f0f7f9"
                  stroke="#f0f7f9"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="nav-icons">
        <label class="search-field">
        <div class="dynamicXBtn">
          <input
            class="search"
            type="search"
            placeholder="What are you looking for?"
            id="searchInput"
          />
          <span id="xBtn"><i class="fa-solid fa-xmark"></i></span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="163.97"
          height="12.09"
          viewBox="0 0 163.97 12.09"
        >
          <g
            id="Group_486"
            data-name="Group 486"
            transform="translate(-1134 -823)"
          >
            <path
              id="Path_234"
              data-name="Path 234"
              d="M0,8.615A8.062,8.062,0,0,0,1.938,10.5,37.75,37.75,0,0,0,7.262,5.6a12.152,12.152,0,0,0,4.121,4.341l1.913.8a3.053,3.053,0,0,0,2.086-1.14c1.324-1.5,2.624-2.305,3.606-4.05a30.549,30.549,0,0,0,3.827,4.274l1.276.8a2.592,2.592,0,0,0,2.551-.067l.907-.648a55.142,55.142,0,0,1,4.294-4.184s2.428,2.706,3.827,4.652L36.921,11.4c1.154.514,2.772-.559,2.772-.559,1.791-1.9,3.582-3.491,5.4-5.371,0,0,2.5,4.386,5.2,6.176l2.061.447a2.939,2.939,0,0,0,2.134-1.141c2.33-1.7,3.779-2.527,5.225-4.943,0,0,2.717,2.561,5.244,4.664a21.925,21.925,0,0,1,1.82-2.055V6.363a54.62,54.62,0,0,0-5.542-5.1L59.564.636a4.29,4.29,0,0,0-2.551,1.186L56.007,3.364a30.415,30.415,0,0,1-3.753,3.625,55.654,55.654,0,0,1-4.588-5.5L45.7.479A2.6,2.6,0,0,0,44.06.747l-1.4.94c-2.282,2.349-4.735,4.407-4.735,4.407s-1.84-2.236-3.533-4.206L32.923.814c-.466.089-1.08-.536-2.258.268l-1.5,1.1c-1.545,1.342-3.9,3.735-3.9,3.735A50.594,50.594,0,0,0,21.515,1.6L18.988.569a2.509,2.509,0,0,0-1.546.469L16.069,2.224C14.547,4.013,13,5.557,13,5.557,11.26,4.3,11.113,3.1,9.763,1.575L8.954.7A2.5,2.5,0,0,0,5.838.412l-1.1.917A30.618,30.618,0,0,1,0,6.362Z"
              transform="translate(1134 823)"
              fill="#f0f7f9"
            />
            <path
              id="Path_234-2"
              data-name="Path 234"
              d="M0,8.615A8.062,8.062,0,0,0,1.938,10.5,37.75,37.75,0,0,0,7.262,5.6a12.152,12.152,0,0,0,4.121,4.341l1.913.8a3.053,3.053,0,0,0,2.086-1.14c1.324-1.5,2.624-2.305,3.606-4.05a30.549,30.549,0,0,0,3.827,4.274l1.276.8a2.592,2.592,0,0,0,2.551-.067l.907-.648a55.142,55.142,0,0,1,4.294-4.184s2.428,2.706,3.827,4.652L36.921,11.4c1.154.514,2.772-.559,2.772-.559,1.791-1.9,3.582-3.491,5.4-5.371,0,0,2.5,4.386,5.2,6.176l2.061.447a2.939,2.939,0,0,0,2.134-1.141c2.33-1.7,3.779-2.527,5.225-4.943,0,0,2.717,2.561,5.244,4.664a21.925,21.925,0,0,1,1.82-2.055V6.363a54.62,54.62,0,0,0-5.542-5.1L59.564.636a4.29,4.29,0,0,0-2.551,1.186L56.007,3.364a30.415,30.415,0,0,1-3.753,3.625,55.654,55.654,0,0,1-4.588-5.5L45.7.479A2.6,2.6,0,0,0,44.06.747l-1.4.94c-2.282,2.349-4.735,4.407-4.735,4.407s-1.84-2.236-3.533-4.206L32.923.814c-.466.089-1.08-.536-2.258.268l-1.5,1.1c-1.545,1.342-3.9,3.735-3.9,3.735A50.594,50.594,0,0,0,21.515,1.6L18.988.569a2.509,2.509,0,0,0-1.546.469L16.069,2.224C14.547,4.013,13,5.557,13,5.557,11.26,4.3,11.113,3.1,9.763,1.575L8.954.7A2.5,2.5,0,0,0,5.838.412l-1.1.917A30.618,30.618,0,0,1,0,6.362Z"
              transform="translate(1197 823)"
              fill="#f0f7f9"
            />
            <path
              id="Path_234-3"
              data-name="Path 234"
              d="M0,8.615A8.062,8.062,0,0,0,1.938,10.5,37.75,37.75,0,0,0,7.262,5.6a12.152,12.152,0,0,0,4.121,4.341l1.913.8a3.053,3.053,0,0,0,2.086-1.14c1.324-1.5,2.624-2.305,3.606-4.05a30.549,30.549,0,0,0,3.827,4.274l1.276.8a2.592,2.592,0,0,0,2.551-.067l.907-.648a55.142,55.142,0,0,1,4.294-4.184s2.428,2.706,3.827,4.652L36.9,9.607c1.39-.78,1.026-3.513,1.026-3.513s-1.84-2.236-3.533-4.206L32.923.814c-.466.089-1.08-.536-2.258.268l-1.5,1.1c-1.545,1.342-3.9,3.735-3.9,3.735A50.594,50.594,0,0,0,21.515,1.6L18.988.569a2.509,2.509,0,0,0-1.546.469L16.069,2.224C14.547,4.013,13,5.557,13,5.557,11.26,4.3,11.113,3.1,9.763,1.575L8.954.7A2.5,2.5,0,0,0,5.838.412l-1.1.917A30.618,30.618,0,0,1,0,6.362Z"
              transform="translate(1260 823)"
              fill="#f0f7f9"
            />
          </g>
        </svg>
      </label>
      <a id="cart" class="cart" href="./cart.html">
        <div class="cart-icon">
          <i class="fa-solid fa-cart-shopping"></i><span>0</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38.25"
          height="10.939"
          viewBox="0 0 38.25 10.939"
        >
          <path
            id="Path_341"
            data-name="Path 341"
            d="M0,8.615A8.062,8.062,0,0,0,1.938,10.5,37.75,37.75,0,0,0,7.262,5.6a12.152,12.152,0,0,0,4.121,4.341l1.913.8a3.053,3.053,0,0,0,2.086-1.14c1.324-1.5,2.624-2.305,3.606-4.05a30.549,30.549,0,0,0,3.827,4.274l1.276.8a2.592,2.592,0,0,0,2.551-.067l.907-.648a55.142,55.142,0,0,1,4.294-4.184s2.428,2.706,3.827,4.652l1.3-.558c2.132-1.05.957-3.737.957-3.737s-1.84-2.236-3.533-4.206L32.923.814c-.466.089-1.08-.536-2.258.268l-1.5,1.1c-1.545,1.342-3.9,3.735-3.9,3.735A50.594,50.594,0,0,0,21.515,1.6L18.988.569a2.509,2.509,0,0,0-1.546.469L16.069,2.224C14.547,4.013,13,5.557,13,5.557,11.26,4.3,11.113,3.1,9.763,1.575L8.954.7A2.5,2.5,0,0,0,5.838.412l-1.1.917A30.618,30.618,0,0,1,0,6.362Z"
            transform="translate(0 0)"
            fill="#f0f7f9"
          />
        </svg>
      </a>
    </div>
    `;
    return nav;
};
exports.default = Nav;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23I5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function UpdateCart() {
    const update = `
        <div class="cart-icon">
          <i class="fa-solid fa-cart-shopping"></i>
          <span id="cartNum">1</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38.25"
          height="10.939"
          viewBox="0 0 38.25 10.939"
        >
          <path
            id="Path_341"
            data-name="Path 341"
            d="M0,8.615A8.062,8.062,0,0,0,1.938,10.5,37.75,37.75,0,0,0,7.262,5.6a12.152,12.152,0,0,0,4.121,4.341l1.913.8a3.053,3.053,0,0,0,2.086-1.14c1.324-1.5,2.624-2.305,3.606-4.05a30.549,30.549,0,0,0,3.827,4.274l1.276.8a2.592,2.592,0,0,0,2.551-.067l.907-.648a55.142,55.142,0,0,1,4.294-4.184s2.428,2.706,3.827,4.652l1.3-.558c2.132-1.05.957-3.737.957-3.737s-1.84-2.236-3.533-4.206L32.923.814c-.466.089-1.08-.536-2.258.268l-1.5,1.1c-1.545,1.342-3.9,3.735-3.9,3.735A50.594,50.594,0,0,0,21.515,1.6L18.988.569a2.509,2.509,0,0,0-1.546.469L16.069,2.224C14.547,4.013,13,5.557,13,5.557,11.26,4.3,11.113,3.1,9.763,1.575L8.954.7A2.5,2.5,0,0,0,5.838.412l-1.1.917A30.618,30.618,0,0,1,0,6.362Z"
            transform="translate(0 0)"
            fill="#f0f7f9"
          />
        </svg>`;
    return update;
}
exports.default = UpdateCart;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNTMn":[function() {},{}],"4psvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Footer = ()=>{
    const footer = `
    <footer class="footer">
    <span> 2022 © Witness the fitness, all rights reserved.</span>
    </footer>
    `;
    return footer;
};
exports.default = Footer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jlP4C":[function() {},{}],"kSWzc":[function() {},{}],"iUqjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function LeftArrow() {
    const leftArrow = `
    <a onclick="window.history.go(-1)"
    ><i class="fa-solid fa-arrow-left"></i
    ></a>
      `;
    return leftArrow;
}
exports.default = LeftArrow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jJ19f","9Fena"], "9Fena", "parcelRequire2efc")

//# sourceMappingURL=productDetails.4d4967e3.js.map
