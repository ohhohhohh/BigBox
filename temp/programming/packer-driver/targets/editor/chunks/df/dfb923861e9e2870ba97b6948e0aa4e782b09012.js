System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EGameId, EGameState, _crd, cfg_game;

  function _reportPossibleCrUseOfEGameId(extras) {
    _reporterNs.report("EGameId", "../enum/EGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEGameState(extras) {
    _reporterNs.report("EGameState", "../enum/EGame", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EGameId = _unresolved_2.EGameId;
      EGameState = _unresolved_2.EGameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7bd8n9rW9F04+i7PSqev3F", "cfg_game", undefined);

      /**
       * 游戏配置
       */
      cfg_game = {
        [(_crd && EGameId === void 0 ? (_reportPossibleCrUseOfEGameId({
          error: Error()
        }), EGameId) : EGameId).GAME_1]: {
          gameName: "game1",
          gameId: (_crd && EGameId === void 0 ? (_reportPossibleCrUseOfEGameId({
            error: Error()
          }), EGameId) : EGameId).GAME_1,
          gameState: (_crd && EGameState === void 0 ? (_reportPossibleCrUseOfEGameState({
            error: Error()
          }), EGameState) : EGameState).HOT
        },
        [(_crd && EGameId === void 0 ? (_reportPossibleCrUseOfEGameId({
          error: Error()
        }), EGameId) : EGameId).GAME_2]: {
          gameName: "game2",
          gameId: (_crd && EGameId === void 0 ? (_reportPossibleCrUseOfEGameId({
            error: Error()
          }), EGameId) : EGameId).GAME_2,
          gameState: (_crd && EGameState === void 0 ? (_reportPossibleCrUseOfEGameState({
            error: Error()
          }), EGameState) : EGameState).HOT
        }
      };

      _export("default", cfg_game);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfb923861e9e2870ba97b6948e0aa4e782b09012.js.map