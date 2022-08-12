System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ULog, UString, HttpMgr, _crd;

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../util/ULog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUString(extras) {
    _reporterNs.report("UString", "../util/UString", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ULog = _unresolved_2.default;
    }, function (_unresolved_3) {
      UString = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a050bQlRtGl5/Zh47SbgZj", "HttpRequest", undefined);

      /**
       * Http管理类
       */
      _export("default", HttpMgr = class HttpMgr {
        static get ins() {
          if (!this._ins) {
            this._ins = new HttpMgr();
          }

          return this._ins;
        }
        /**
         * http get请求
         * @param url 请求地址
         * @param callback 回调
         * @param isEncript 是否加密
         */


        sendGet(url, callback, isEncript) {
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).debug('http get请求 url => ', encodeURI(url));
          var xhr = new XMLHttpRequest();
          xhr.timeout = 20000;
          xhr.open("GET", encodeURI(url), true);
          var intervalId = setTimeout(() => {
            xhr.abort();
          }, 20000);

          xhr.ontimeout = event => {
            clearInterval(intervalId);
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).debug('http get请求 超时！！！url => ', url);
          };

          xhr.onerror = event => {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).debug('http get请求 错误！！！url => ', url);
          };

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 400) {
                var response = xhr.responseText;

                if ((_crd && UString === void 0 ? (_reportPossibleCrUseOfUString({
                  error: Error()
                }), UString) : UString).isJsonStr(response)) {
                  var responseJson = JSON.parse(response);
                  callback && callback(responseJson);
                } else {
                  (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                    error: Error()
                  }), ULog) : ULog).debug('返回的数据不是JSON的字符串，解析出错！！！');
                }
              } else {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).debug('http get请求 error ', xhr.statusText);
              }
            }
          };

          xhr.send();
        }
        /**
         * http post请求
         * @param url 请求地址
         * @param params 参数
         * @param callback 回调
         * @param isEncript 是否加密
         */


        sendPost(url, params, callback, isEncript) {
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).debug('http post请求 url => ', encodeURI(url));
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).debug('http post请求 params => ', params);
          var xhr = new XMLHttpRequest();
          xhr.timeout = 20000;
          var paramsStr = JSON.stringify(params);
          xhr.open("POST", encodeURI(url), true);
          var intervalId = setTimeout(() => {
            xhr.abort();
          }, 20000);

          xhr.ontimeout = event => {
            clearInterval(intervalId);
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).debug('http post请求 超时！！！url => ', url);
          };

          xhr.onerror = event => {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).debug('http post请求 错误！！！url => ', url);
          };

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 400) {
                var response = xhr.responseText;

                if ((_crd && UString === void 0 ? (_reportPossibleCrUseOfUString({
                  error: Error()
                }), UString) : UString).isJsonStr(response)) {
                  var responseJson = JSON.parse(response);
                  callback && callback(responseJson);
                } else {
                  (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                    error: Error()
                  }), ULog) : ULog).debug('http post请求 返回的数据不是JSON的字符串，解析出错！！！');
                }
              } else {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).debug('http post请求 status error, url => ', url);
              }
            }
          };

          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          xhr.send(paramsStr);
        }

      });

      HttpMgr._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f21cfdb814c8539441f64f60961bc6d1e7182781.js.map