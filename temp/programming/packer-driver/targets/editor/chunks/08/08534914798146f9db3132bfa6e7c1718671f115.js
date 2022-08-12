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


        static log(param, ...optionalParams) {
          console.log("%c" + this.getCurTimeFormat(), "color:#08C91F", param, ...optionalParams);
        }
        /**输出（红色） */


        static logRed(param, ...optionalParams) {
          console.log("%c" + this.getCurTimeFormat(), "color:#FF0000", param, ...optionalParams);
        }
        /**输出（蓝色） */


        static logBlue(param, ...optionalParams) {
          console.log("%c" + this.getCurTimeFormat(), "color:#055AF1", param, ...optionalParams);
        }
        /**输出（橙色） */


        static logOrange(param, ...optionalParams) {
          console.log("%c" + this.getCurTimeFormat(), "color:#FF8500", param, ...optionalParams);
        }
        /**输出（灰色） */


        static logGray(param, ...optionalParams) {
          console.log("%c" + this.getCurTimeFormat(), "color:#666666", param, ...optionalParams);
        }

        static debug(param, ...optionalParams) {
          console.debug(param, ...optionalParams);
        }

        static warn(param, ...optionalParams) {
          console.warn(param, ...optionalParams);
        }

        static error(param, ...optionalParams) {
          console.error(param, ...optionalParams);
        }

        static info(param, ...optionalParams) {
          console.info(param, ...optionalParams);
        }

        static trace(param, ...optionalParams) {
          console.trace(param, ...optionalParams);
        }

        static assert(condition, param, ...optionalParams) {
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

        static dirxml(param, ...optionalParams) {
          console.dirxml(param, ...optionalParams);
        }

        static group(param, ...optionalParams) {
          console.group(param, ...optionalParams);
        }

        static groupCollapsed(param, ...optionalParams) {
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

        static timeLog(label, ...optionalParams) {
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
//# sourceMappingURL=08534914798146f9db3132bfa6e7c1718671f115.js.map