System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SceneBase, _dec, _class, _crd, ccclass, property, RunRocketCtrl;

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "../../../../scripts/core/base/SceneBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SceneBase = _unresolved_2.SceneBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14cd7XMMIJEi7NZpEX72ye2", "RunRocketScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RunRocketCtrl", RunRocketCtrl = (_dec = ccclass('RunRocketCtrl'), _dec(_class = class RunRocketCtrl extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        start() {
          setTimeout(() => {// UIManager.ins.openUI(EUIId.LAUNCH);
          }, 2222);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3559cd087b46337a5f289bee36b026233ca07a88.js.map