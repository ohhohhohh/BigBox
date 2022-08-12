System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SceneBase, UIManager, EUIId, _dec, _class, _crd, ccclass, property, RunRocketCtrl;

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "../../../../scripts/core/base/SceneBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../../../scripts/core/manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEUIId(extras) {
    _reporterNs.report("EUIId", "../../../../scripts/enum/EUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SceneBase = _unresolved_2.SceneBase;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      EUIId = _unresolved_4.EUIId;
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
        start() {}

        onClickTest() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).ins.openUI((_crd && EUIId === void 0 ? (_reportPossibleCrUseOfEUIId({
            error: Error()
          }), EUIId) : EUIId).LAUNCH);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69673074307e461ec4b2d86b9ca4d4fee70ab30d.js.map