System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, cfg_global, UTime, ULog, _crd;

  function _reportPossibleCrUseOfcfg_global(extras) {
    _reporterNs.report("cfg_global", "../../config/cfg_global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUTime(extras) {
    _reporterNs.report("UTime", "./UTime", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      cfg_global = _unresolved_2.default;
    }, function (_unresolved_3) {
      UTime = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05806b8bl9HJLuRz2sjbZWi", "ULog", undefined);

      /**
       * 日志输出
       */
      _export("default", ULog = class ULog {
        /**初始化 */
        static init() {
          ULog.log('enableLog:', (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).enableLog);

          if (!(_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).enableLog) {
            console.log = () => {};

            console.debug = () => {};

            console.warn = () => {};

            console.error = () => {};

            console.info = () => {};
          }
        }
        /**格式后的当前时间 */


        static getCurTimeFormat() {
          return "[" + (_crd && UTime === void 0 ? (_reportPossibleCrUseOfUTime({
            error: Error()
          }), UTime) : UTime).dateFormat(new Date(), "hh:mm:ss.S") + "]";
        }
        /**默认输出（绿色） */


        static log(param) {
          for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            optionalParams[_key - 1] = arguments[_key];
          }

          console.log("%c" + this.getCurTimeFormat(), "color:#08C91F", param, ...optionalParams);
        }
        /**输出（红色） */


        static logRed(param) {
          for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            optionalParams[_key2 - 1] = arguments[_key2];
          }

          console.log("%c" + this.getCurTimeFormat(), "color:#FF0000", param, ...optionalParams);
        }
        /**输出（蓝色） */


        static logBlue(param) {
          for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            optionalParams[_key3 - 1] = arguments[_key3];
          }

          console.log("%c" + this.getCurTimeFormat(), "color:#055AF1", param, ...optionalParams);
        }
        /**输出（橙色） */


        static logOrange(param) {
          for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            optionalParams[_key4 - 1] = arguments[_key4];
          }

          console.log("%c" + this.getCurTimeFormat(), "color:#FF8500", param, ...optionalParams);
        }
        /**输出（灰色） */


        static logGray(param) {
          for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            optionalParams[_key5 - 1] = arguments[_key5];
          }

          console.log("%c" + this.getCurTimeFormat(), "color:#666666", param, ...optionalParams);
        }

        static debug(param) {
          for (var _len6 = arguments.length, optionalParams = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            optionalParams[_key6 - 1] = arguments[_key6];
          }

          console.debug(param, ...optionalParams);
        }

        static warn(param) {
          for (var _len7 = arguments.length, optionalParams = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            optionalParams[_key7 - 1] = arguments[_key7];
          }

          console.warn(param, ...optionalParams);
        }

        static error(param) {
          for (var _len8 = arguments.length, optionalParams = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
            optionalParams[_key8 - 1] = arguments[_key8];
          }

          console.error(param, ...optionalParams);
        }

        static info(param) {
          for (var _len9 = arguments.length, optionalParams = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
            optionalParams[_key9 - 1] = arguments[_key9];
          }

          console.info(param, ...optionalParams);
        }

        static trace(param) {
          for (var _len10 = arguments.length, optionalParams = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
            optionalParams[_key10 - 1] = arguments[_key10];
          }

          console.trace(param, ...optionalParams);
        }

        static assert(condition, param) {
          for (var _len11 = arguments.length, optionalParams = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
            optionalParams[_key11 - 2] = arguments[_key11];
          }

          console.assert(condition, param, ...optionalParams);
        }

        static count(label) {
          console.count(label);
        }

        static countReset(label) {
          console.countReset(label);
        }

        static dir(item, options) {
          console.dir(item, options);
        }

        static dirxml(param) {
          for (var _len12 = arguments.length, optionalParams = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
            optionalParams[_key12 - 1] = arguments[_key12];
          }

          console.dirxml(param, ...optionalParams);
        }

        static group(param) {
          for (var _len13 = arguments.length, optionalParams = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
            optionalParams[_key13 - 1] = arguments[_key13];
          }

          console.group(param, ...optionalParams);
        }

        static groupCollapsed(param) {
          for (var _len14 = arguments.length, optionalParams = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
            optionalParams[_key14 - 1] = arguments[_key14];
          }

          console.groupCollapsed(param, ...optionalParams);
        }

        static groupEnd() {
          console.groupEnd();
        }

        static table(tabularData, properties) {
          console.table(tabularData, properties);
        }

        static time(label) {
          console.time(label);
        }

        static timeEnd(label) {
          console.timeEnd(label);
        }

        static timeLog(label) {
          for (var _len15 = arguments.length, optionalParams = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
            optionalParams[_key15 - 1] = arguments[_key15];
          }

          console.timeLog(label, ...optionalParams);
        }

        static timeStamp(label) {
          console.timeStamp(label);
        }

        static clear() {
          console.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2168a74988c37f9813169630dd16b169daaa6ac.js.map