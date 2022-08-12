System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EUIId, UIConfig, _crd, cfg_ui;

  function _reportPossibleCrUseOfEUIId(extras) {
    _reporterNs.report("EUIId", "../enum/EUI", _context.meta, extras);
  }

  _export("UIConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EUIId = _unresolved_2.EUIId;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a503zn7VFMMIMPq2uKztFh", "cfg_ui", undefined);

      _export("UIConfig", UIConfig = class UIConfig {
        constructor() {
          this.bundleName = void 0;
          this.resPath = void 0;
          this.zIndex = void 0;
        }

      });

      cfg_ui = {
        [(_crd && EUIId === void 0 ? (_reportPossibleCrUseOfEUIId({
          error: Error()
        }), EUIId) : EUIId).LAUNCH]: {
          bundleName: 'resources',
          resPath: 'prefab/launch/launch',
          zIndex: 1
        },
        [(_crd && EUIId === void 0 ? (_reportPossibleCrUseOfEUIId({
          error: Error()
        }), EUIId) : EUIId).DIALOG_MSG]: {
          bundleName: 'resources',
          resPath: 'prefab/common/dialog_msg',
          zIndex: 98
        }
      };

      _export("default", cfg_ui);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b7448842a3dfcef66ddd68dad44b1d7543bd6f2.js.map