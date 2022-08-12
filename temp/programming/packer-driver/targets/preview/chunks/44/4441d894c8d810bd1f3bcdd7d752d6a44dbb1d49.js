System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, JsonAsset, cfg_global, UIManager, ULog, EUIId, AppHub, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MainScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcfg_global(extras) {
    _reporterNs.report("cfg_global", "../config/cfg_global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../core/manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../core/util/ULog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEUIId(extras) {
    _reporterNs.report("EUIId", "../enum/EUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppHub(extras) {
    _reporterNs.report("AppHub", "./AppHub", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      cfg_global = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      ULog = _unresolved_4.default;
    }, function (_unresolved_5) {
      EUIId = _unresolved_5.EUIId;
    }, function (_unresolved_6) {
      AppHub = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4acdSYkzpFYK47NNn7hSZK", "MainScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainScene", MainScene = (_dec = ccclass('MainScene'), _dec2 = property({
        type: JsonAsset,
        tooltip: '全局配置文件'
      }), _dec(_class = (_class2 = class MainScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "globalJson", _descriptor, this);
        }

        onLoad() {
          this.init();
        }

        start() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).ins.openUI((_crd && EUIId === void 0 ? (_reportPossibleCrUseOfEUIId({
            error: Error()
          }), EUIId) : EUIId).LAUNCH);
        }

        init() {
          this.initGlobalConfig();
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).init();
          (_crd && AppHub === void 0 ? (_reportPossibleCrUseOfAppHub({
            error: Error()
          }), AppHub) : AppHub).ins.init();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).ins.init(this.node);
        }
        /**初始化全局配置 */


        initGlobalConfig() {
          if (!this.globalJson || !this.globalJson.json) return;
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('initGlobalConfig:', this.globalJson.json);
          var json = this.globalJson.json;
          (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).environment = json['environment'];
          (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).version = json['version'];
          (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).buildTime = json['buildTime'];
          (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).enableLog = json['enableLog'];
          (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).enableMainHot = json['enableMainHot'];
          (_crd && cfg_global === void 0 ? (_reportPossibleCrUseOfcfg_global({
            error: Error()
          }), cfg_global) : cfg_global).enableGameHot = json['enableGameHot'];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "globalJson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4441d894c8d810bd1f3bcdd7d752d6a44dbb1d49.js.map