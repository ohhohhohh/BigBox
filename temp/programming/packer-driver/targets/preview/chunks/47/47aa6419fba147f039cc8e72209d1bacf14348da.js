System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Label, Node, _decorator, UIBase, EDialogMsgType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, VMsgDialog;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../core/base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEDialogMsgType(extras) {
    _reporterNs.report("EDialogMsgType", "../../enum/EUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Label = _cc.Label;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.default;
    }, function (_unresolved_3) {
      EDialogMsgType = _unresolved_3.EDialogMsgType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e458XG5MdFZpimhkafnxTm", "VMsgDialog", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", VMsgDialog = (_dec = ccclass('VMsgDialog'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class VMsgDialog extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "msgContentLbl", _descriptor, this);

          _initializerDefineProperty(this, "ok", _descriptor2, this);

          _initializerDefineProperty(this, "cancel", _descriptor3, this);

          this._okCallback = null;
          this._cancelCallback = null;
          this._closeCallback = null;
        }

        show(data) {
          super.show(data);

          if (data) {
            if (data.msg && typeof data.msg == 'string') {
              this.setMsgContent(data.msg);
            }

            switch (data.dialogType) {
              case (_crd && EDialogMsgType === void 0 ? (_reportPossibleCrUseOfEDialogMsgType({
                error: Error()
              }), EDialogMsgType) : EDialogMsgType).BOTH:
                this.ok.active = true;
                this.cancel.active = true;
                break;

              case (_crd && EDialogMsgType === void 0 ? (_reportPossibleCrUseOfEDialogMsgType({
                error: Error()
              }), EDialogMsgType) : EDialogMsgType).OK:
                this.ok.active = true;
                this.cancel.active = false;
                break;

              case (_crd && EDialogMsgType === void 0 ? (_reportPossibleCrUseOfEDialogMsgType({
                error: Error()
              }), EDialogMsgType) : EDialogMsgType).CANCEL:
                this.ok.active = false;
                this.cancel.active = true;
                break;

              default:
                this.ok.active = true;
                this.cancel.active = false;
                break;
            }

            if (data.okCallback) {
              this._okCallback = data.okCallback;
            }

            if (data.cancelCallback) {
              this._cancelCallback = data.cancelCallback;
            }

            if (data.closeCallback) {
              this._closeCallback = data.closeCallback;
            }
          }
        }
        /**设置消息内容 */


        setMsgContent(msg) {
          this.msgContentLbl.string = msg;
        }
        /**点击确定 */


        onClickOk() {
          if (this._okCallback) {
            this._okCallback();
          }

          this.close();
        }
        /**点击取消 */


        onClickCancel() {
          if (this._cancelCallback) {
            this._cancelCallback();
          }

          this.close();
        }
        /**点击关闭 */


        onClickClose() {
          if (this._closeCallback) {
            this._closeCallback();
          }

          this.close();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "msgContentLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ok", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cancel", [_dec4], {
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
//# sourceMappingURL=47aa6419fba147f039cc8e72209d1bacf14348da.js.map