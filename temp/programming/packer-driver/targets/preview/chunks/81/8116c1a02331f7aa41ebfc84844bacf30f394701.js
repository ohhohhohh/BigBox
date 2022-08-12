System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Sprite, UIBase, UIManager, ULog, ESceneType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, VLaunch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../core/base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../core/manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../../core/util/ULog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfESceneType(extras) {
    _reporterNs.report("ESceneType", "../../enum/EScene", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      ULog = _unresolved_4.default;
    }, function (_unresolved_5) {
      ESceneType = _unresolved_5.ESceneType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f0d5Kun2tLjrf8SCnq0kZp", "VLaunch", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VLaunch", VLaunch = (_dec = ccclass('VLaunch'), _dec2 = property({
        type: Label,
        tooltip: '加载进度label'
      }), _dec3 = property({
        type: Sprite,
        tooltip: '加载进度条'
      }), _dec(_class = (_class2 = class VLaunch extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progressLbl", _descriptor, this);

          _initializerDefineProperty(this, "progressBar", _descriptor2, this);

          this._progress = 0;
        }

        start() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).ins.loadScene((_crd && ESceneType === void 0 ? (_reportPossibleCrUseOfESceneType({
            error: Error()
          }), ESceneType) : ESceneType).RUN_ROCKET, null, (finish, total, item) => {
            // ULog.log('loadScene RUN_ROCKET:', finish, '/', total);
            if (this._progress < finish / total) {
              this._progress = finish / total;
              this.progressLbl.string = Math.ceil(this._progress * 100) + '%';
              this.progressBar.fillRange = this._progress;
            }
          }, () => {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).log('finish, closeUI this.uiId:', this.uiId); // this.close();
          }); // UIManager.ins.loadScene(ESceneType.HALL, null, (finish: number, total: number, item: AssetManager.RequestItem) => {
          //     ULog.log('loadScene HALL:', finish, '/', total);
          //     if (this._progress < finish / total) {
          //         this._progress = finish / total;
          //         this.progressLbl.string = Math.ceil(this._progress * 100) + '%';
          //     }
          // }, () => {
          //     ULog.log('finish, closeUI this.uiId:', this.uiId)
          //     // UIManager.ins.closeUI(this.uiId, true);
          //     UIManager.ins.showTooltip('哈哈哈哈哈');
          // });
        }

        onClickTest() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).ins.showTip('哈哈哈哈哈');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
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
//# sourceMappingURL=8116c1a02331f7aa41ebfc84844bacf30f394701.js.map