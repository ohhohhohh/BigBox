System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Game, game, ULog, AppHub, _crd;

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../core/util/ULog", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Game = _cc.Game;
      game = _cc.game;
    }, function (_unresolved_2) {
      ULog = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "682fbKUtnpEVp1MuxMEMsFR", "AppHub", undefined);

      /**
       * App中心
       */
      _export("default", AppHub = class AppHub {
        constructor() {
          this.runningBundleName = null;
        }

        static get ins() {
          if (!this._ins) {
            this._ins = new AppHub();
          }

          return this._ins;
        }
        /**app场景状态 */
        // public appSceneState: ESceneState = ESceneState.SATART;

        /**当前运行bundle名称 */


        /**初始化 */
        init() {
          // this.appSceneState = ESceneState.SATART;
          this.initGlobalEvent();
        }
        /**初始化全局事件 */


        initGlobalEvent() {
          game.on(Game.EVENT_HIDE, this.onAppEventHide, this);
          game.on(Game.EVENT_SHOW, this.onAppEventShow, this);
        }
        /**app切到后台 */


        onAppEventHide() {
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('onAppEventHide'); // EventMgr.emit(EGlobalEvent.APP_SHOW_HIDE, false);
        }
        /**app切到前台 */


        onAppEventShow() {
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('onAppEventShow'); // EventMgr.emit(EGlobalEvent.APP_SHOW_HIDE, true);
        }

      });

      AppHub._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e75d41b15f503a078d2a3bd4b31f1c939c99c7e.js.map