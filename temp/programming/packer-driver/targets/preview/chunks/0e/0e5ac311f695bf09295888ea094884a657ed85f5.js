System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EUIId, EUICacheMode, EDialogMsgType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b41dCcPYNF27lYqlmm7tRo", "EUI", undefined);

      /**
       * UI枚举
       */

      /**UI名称 */
      _export("EUIId", EUIId = {
        LAUNCH: "LAUNCH",
        DIALOG_MSG: "DIALOG_MSG"
      });
      /**UI类型 */


      _export("EUICacheMode", EUICacheMode = {
        REUSABLE: 0,
        DESTROY: 1,
        RELEASE: 2
      });
      /**消息弹窗类型 */


      _export("EDialogMsgType", EDialogMsgType = {
        BOTH: 0,
        OK: 1,
        CANCEL: 2
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e5ac311f695bf09295888ea094884a657ed85f5.js.map