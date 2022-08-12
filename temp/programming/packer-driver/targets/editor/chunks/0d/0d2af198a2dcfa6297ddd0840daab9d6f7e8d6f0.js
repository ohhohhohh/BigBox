System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EEnvironment, ESceneState, EGlobalEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7b8aFHVkJJtbOLZ3lmI9ie", "EGlobal", undefined);

      /**
       * 全局枚举
       */

      /**
       * 环境
       */
      _export("EEnvironment", EEnvironment = {
        DEVELOP: 0,
        TEST: 1,
        PRE: 2,
        MASTER: 3
      });
      /**
       * 场景状态
       */


      _export("ESceneState", ESceneState = {
        SATART: "SATART",
        LOGIN: "LOGIN",
        LOBBY: "LOBBY",
        GAME: "GAME"
      });
      /**
       * 全局事件
       */


      _export("EGlobalEvent", EGlobalEvent = {
        APP_EVENT_SHOW_HIDE: "APP_EVENT_SHOW_HIDE"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d2af198a2dcfa6297ddd0840daab9d6f7e8d6f0.js.map