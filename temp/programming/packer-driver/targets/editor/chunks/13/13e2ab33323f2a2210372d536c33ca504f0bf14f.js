System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EEnvironment, _crd, cfg_global;

  function _reportPossibleCrUseOfEEnvironment(extras) {
    _reporterNs.report("EEnvironment", "../enum/EGlobal", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EEnvironment = _unresolved_2.EEnvironment;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc0a2r4yXVCforCP0SSpGSD", "cfg_global", undefined);

      /**
       * 全局配置
       */
      cfg_global = {
        /**开发环境 */
        environment: (_crd && EEnvironment === void 0 ? (_reportPossibleCrUseOfEEnvironment({
          error: Error()
        }), EEnvironment) : EEnvironment).TEST,

        /**当前版本号 */
        version: "1.0.0",

        /**构建时间 */
        buildTime: "2022-08-11",

        /**是否开启打印日志 */
        enableLog: true,

        /**是否开启主包热更 */
        enableMainHot: false,

        /**是否开启游戏热更 */
        enableGameHot: false,

        /**socket地址集合 */
        socketUrls: [],

        /**热更地址集合 */
        hotUrls: [],

        /**socket地址 */
        socketUrl: "",

        /**热更地址 */
        hotUrl: ""
      };

      _export("default", cfg_global);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13e2ab33323f2a2210372d536c33ca504f0bf14f.js.map