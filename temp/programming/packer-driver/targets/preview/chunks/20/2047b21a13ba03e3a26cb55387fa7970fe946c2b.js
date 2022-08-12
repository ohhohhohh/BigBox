System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EGameId, EGameState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40962TGkitJfLRldHR9qMbc", "EGame", undefined);

      /**
       * 游戏枚举
       */

      /**游戏id */
      _export("EGameId", EGameId = {
        GAME_1: 1000,
        GAME_2: 1001
      });
      /**游戏状态 */


      _export("EGameState", EGameState = {
        NORMAL: 0,
        NEW: 1,
        HOT: 2,
        MAINTAIN: 3,
        CLOSE: 4
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2047b21a13ba03e3a26cb55387fa7970fe946c2b.js.map