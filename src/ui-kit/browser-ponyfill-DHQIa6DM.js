var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { cc as getDefaultExportFromCjs, cd as commonjsGlobal } from "./Transfer-Dix-D4xZ.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const k in e)
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          d && Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: /* @__PURE__ */ __name(() => e[k], "get")
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
__name(_mergeNamespaces, "_mergeNamespaces");
var browserPonyfill$2 = { exports: {} };
(function(module, exports) {
  var __global__ = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof commonjsGlobal < "u" && commonjsGlobal, __globalThis__ = function() {
    function F() {
      this.fetch = !1, this.DOMException = __global__.DOMException;
    }
    return __name(F, "F"), F.prototype = __global__, new F();
  }();
  (function(globalThis2) {
    (function(exports2) {
      var global = typeof globalThis2 < "u" && globalThis2 || typeof self < "u" && self || typeof global < "u" && global, support = {
        searchParams: "URLSearchParams" in global,
        iterable: "Symbol" in global && "iterator" in Symbol,
        blob: "FileReader" in global && "Blob" in global && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in global,
        arrayBuffer: "ArrayBuffer" in global
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (__name(isDataView, "isDataView"), support.arrayBuffer)
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      function normalizeName(name) {
        if (typeof name != "string" && (name = String(name)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "")
          throw new TypeError('Invalid character in header field name: "' + name + '"');
        return name.toLowerCase();
      }
      __name(normalizeName, "normalizeName");
      function normalizeValue(value) {
        return typeof value != "string" && (value = String(value)), value;
      }
      __name(normalizeValue, "normalizeValue");
      function iteratorFor(items) {
        var iterator = {
          next: /* @__PURE__ */ __name(function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }, "next")
        };
        return support.iterable && (iterator[Symbol.iterator] = function() {
          return iterator;
        }), iterator;
      }
      __name(iteratorFor, "iteratorFor");
      function Headers(headers) {
        this.map = {}, headers instanceof Headers ? headers.forEach(function(value, name) {
          this.append(name, value);
        }, this) : Array.isArray(headers) ? headers.forEach(function(header) {
          this.append(header[0], header[1]);
        }, this) : headers && Object.getOwnPropertyNames(headers).forEach(function(name) {
          this.append(name, headers[name]);
        }, this);
      }
      __name(Headers, "Headers"), Headers.prototype.append = function(name, value) {
        name = normalizeName(name), value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      }, Headers.prototype.delete = function(name) {
        delete this.map[normalizeName(name)];
      }, Headers.prototype.get = function(name) {
        return name = normalizeName(name), this.has(name) ? this.map[name] : null;
      }, Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      }, Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      }, Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map)
          this.map.hasOwnProperty(name) && callback.call(thisArg, this.map[name], name, this);
      }, Headers.prototype.keys = function() {
        var items = [];
        return this.forEach(function(value, name) {
          items.push(name);
        }), iteratorFor(items);
      }, Headers.prototype.values = function() {
        var items = [];
        return this.forEach(function(value) {
          items.push(value);
        }), iteratorFor(items);
      }, Headers.prototype.entries = function() {
        var items = [];
        return this.forEach(function(value, name) {
          items.push([name, value]);
        }), iteratorFor(items);
      }, support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
      function consumed(body) {
        if (body.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        body.bodyUsed = !0;
      }
      __name(consumed, "consumed");
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          }, reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      __name(fileReaderReady, "fileReaderReady");
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader(), promise = fileReaderReady(reader);
        return reader.readAsArrayBuffer(blob), promise;
      }
      __name(readBlobAsArrayBuffer, "readBlobAsArrayBuffer");
      function readBlobAsText(blob) {
        var reader = new FileReader(), promise = fileReaderReady(reader);
        return reader.readAsText(blob), promise;
      }
      __name(readBlobAsText, "readBlobAsText");
      function readArrayBufferAsText(buf) {
        for (var view = new Uint8Array(buf), chars = new Array(view.length), i = 0; i < view.length; i++)
          chars[i] = String.fromCharCode(view[i]);
        return chars.join("");
      }
      __name(readArrayBufferAsText, "readArrayBufferAsText");
      function bufferClone(buf) {
        if (buf.slice)
          return buf.slice(0);
        var view = new Uint8Array(buf.byteLength);
        return view.set(new Uint8Array(buf)), view.buffer;
      }
      __name(bufferClone, "bufferClone");
      function Body() {
        return this.bodyUsed = !1, this._initBody = function(body) {
          this.bodyUsed = this.bodyUsed, this._bodyInit = body, body ? typeof body == "string" ? this._bodyText = body : support.blob && Blob.prototype.isPrototypeOf(body) ? this._bodyBlob = body : support.formData && FormData.prototype.isPrototypeOf(body) ? this._bodyFormData = body : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) ? this._bodyText = body.toString() : support.arrayBuffer && support.blob && isDataView(body) ? (this._bodyArrayBuffer = bufferClone(body.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body)) ? this._bodyArrayBuffer = bufferClone(body) : this._bodyText = body = Object.prototype.toString.call(body) : this._bodyText = "", this.headers.get("content-type") || (typeof body == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, support.blob && (this.blob = function() {
          var rejected = consumed(this);
          if (rejected)
            return rejected;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var isConsumed = consumed(this);
            return isConsumed || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            ) : Promise.resolve(this._bodyArrayBuffer));
          } else
            return this.blob().then(readBlobAsArrayBuffer);
        }), this.text = function() {
          var rejected = consumed(this);
          if (rejected)
            return rejected;
          if (this._bodyBlob)
            return readBlobAsText(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, support.formData && (this.formData = function() {
          return this.text().then(decode);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      __name(Body, "Body");
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      __name(normalizeMethod, "normalizeMethod");
      function Request(input, options) {
        if (!(this instanceof Request))
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed)
            throw new TypeError("Already read");
          this.url = input.url, this.credentials = input.credentials, options.headers || (this.headers = new Headers(input.headers)), this.method = input.method, this.mode = input.mode, this.signal = input.signal, !body && input._bodyInit != null && (body = input._bodyInit, input.bodyUsed = !0);
        } else
          this.url = String(input);
        if (this.credentials = options.credentials || this.credentials || "same-origin", (options.headers || !this.headers) && (this.headers = new Headers(options.headers)), this.method = normalizeMethod(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, this.signal = options.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && body)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(body), (this.method === "GET" || this.method === "HEAD") && (options.cache === "no-store" || options.cache === "no-cache")) {
          var reParamSearch = /([?&])_=[^&]*/;
          if (reParamSearch.test(this.url))
            this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
          else {
            var reQueryString = /\?/;
            this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
          }
        }
      }
      __name(Request, "Request"), Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode(body) {
        var form = new FormData();
        return body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("="), name = split.shift().replace(/\+/g, " "), value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        }), form;
      }
      __name(decode, "decode");
      function parseHeaders(rawHeaders) {
        var headers = new Headers(), preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        return preProcessedHeaders.split("\r").map(function(header) {
          return header.indexOf(`
`) === 0 ? header.substr(1, header.length) : header;
        }).forEach(function(line) {
          var parts = line.split(":"), key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        }), headers;
      }
      __name(parseHeaders, "parseHeaders"), Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!(this instanceof Response))
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        options || (options = {}), this.type = "default", this.status = options.status === void 0 ? 200 : options.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = options.statusText === void 0 ? "" : "" + options.statusText, this.headers = new Headers(options.headers), this.url = options.url || "", this._initBody(bodyInit);
      }
      __name(Response, "Response"), Body.call(Response.prototype), Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      }, Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        return response.type = "error", response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1)
          throw new RangeError("Invalid status code");
        return new Response(null, { status, headers: { location: url } });
      }, exports2.DOMException = global.DOMException;
      try {
        new exports2.DOMException();
      } catch {
        exports2.DOMException = function(message, name) {
          this.message = message, this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        }, exports2.DOMException.prototype = Object.create(Error.prototype), exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted)
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          __name(abortXhr, "abortXhr"), xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
              resolve(new Response(body, options));
            }, 0);
          }, xhr.onerror = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          }, xhr.ontimeout = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          }, xhr.onabort = function() {
            setTimeout(function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function fixUrl(url) {
            try {
              return url === "" && global.location.href ? global.location.href : url;
            } catch {
              return url;
            }
          }
          __name(fixUrl, "fixUrl"), xhr.open(request.method, fixUrl(request.url), !0), request.credentials === "include" ? xhr.withCredentials = !0 : request.credentials === "omit" && (xhr.withCredentials = !1), "responseType" in xhr && (support.blob ? xhr.responseType = "blob" : support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (xhr.responseType = "arraybuffer")), init && typeof init.headers == "object" && !(init.headers instanceof Headers) ? Object.getOwnPropertyNames(init.headers).forEach(function(name) {
            xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
          }) : request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          }), request.signal && (request.signal.addEventListener("abort", abortXhr), xhr.onreadystatechange = function() {
            xhr.readyState === 4 && request.signal.removeEventListener("abort", abortXhr);
          }), xhr.send(typeof request._bodyInit > "u" ? null : request._bodyInit);
        });
      }
      return __name(fetch, "fetch"), fetch.polyfill = !0, global.fetch || (global.fetch = fetch, global.Headers = Headers, global.Request = Request, global.Response = Response), exports2.Headers = Headers, exports2.Request = Request, exports2.Response = Response, exports2.fetch = fetch, exports2;
    })({});
  })(__globalThis__), __globalThis__.fetch.ponyfill = !0, delete __globalThis__.fetch.polyfill;
  var ctx = __global__.fetch ? __global__ : __globalThis__;
  exports = ctx.fetch, exports.default = ctx.fetch, exports.fetch = ctx.fetch, exports.Headers = ctx.Headers, exports.Request = ctx.Request, exports.Response = ctx.Response, module.exports = exports;
})(browserPonyfill$2, browserPonyfill$2.exports);
var browserPonyfillExports = browserPonyfill$2.exports;
const browserPonyfill = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfillExports), browserPonyfill$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: browserPonyfill
}, [browserPonyfillExports]);
export {
  browserPonyfill$1 as b
};
