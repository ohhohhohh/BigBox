System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UString, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fd42JPxEtF7p5jXA9UUS4o", "UString", undefined);

      /**
       * 字符串
       */
      _export("default", UString = class UString {
        /**
         * 字符串是否是json格式
         * @param str 字符串
         * @returns 
         */
        static isJsonStr(str) {
          try {
            let obj = JSON.parse(str);

            if (obj && typeof obj == 'object') {
              return true;
            } else {
              return false;
            }
          } catch (e) {
            return false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac0df90be5c291faaa6035239f62e5a6c21f0a5e.js.map