System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ESceneType, SceneConfig, _crd, cfg_scene;

  function _reportPossibleCrUseOfESceneType(extras) {
    _reporterNs.report("ESceneType", "../enum/EScene", _context.meta, extras);
  }

  _export("SceneConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ESceneType = _unresolved_2.ESceneType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6109DsX8NDSIT4EPlhLzkD", "cfg_scene", undefined);

      _export("SceneConfig", SceneConfig = class SceneConfig {
        constructor() {
          this.bundleName = void 0;
          this.resPath = void 0;
        }
        /**层级 */
        // zIndex: number;


      });

      cfg_scene = {
        [(_crd && ESceneType === void 0 ? (_reportPossibleCrUseOfESceneType({
          error: Error()
        }), ESceneType) : ESceneType).LOGIN]: {
          bundleName: 'login',
          resPath: 'login' // zIndex: 1,

        },
        [(_crd && ESceneType === void 0 ? (_reportPossibleCrUseOfESceneType({
          error: Error()
        }), ESceneType) : ESceneType).HALL]: {
          bundleName: 'hall',
          resPath: 'hall' // zIndex: 1,

        },
        [(_crd && ESceneType === void 0 ? (_reportPossibleCrUseOfESceneType({
          error: Error()
        }), ESceneType) : ESceneType).RUN_ROCKET]: {
          bundleName: 'runRocket',
          resPath: 'runRocket' // zIndex: 1,

        }
      };

      _export("default", cfg_scene);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8615a576935dd4b607e7338a5994d62627d962b.js.map