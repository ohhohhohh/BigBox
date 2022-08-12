System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, instantiate, Label, Node, Tween, tween, UIOpacity, Vec3, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, VTooltip;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cc29J6u3dKDbvqUuWF95Yd", "VTooltip", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", VTooltip = (_dec = ccclass('VTooltip'), _dec2 = property({
        type: Node,
        tooltip: '背景节点'
      }), _dec3 = property({
        type: Label,
        tooltip: '文本label'
      }), _dec4 = property({
        tooltip: '是否展示多个提示文本'
      }), _dec5 = property({
        tooltip: '是否展示提示文本移动动作'
      }), _dec(_class = (_class2 = class VTooltip extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "textLbl", _descriptor2, this);

          _initializerDefineProperty(this, "enableMulti", _descriptor3, this);

          _initializerDefineProperty(this, "enableMoveAni", _descriptor4, this);
        }

        show(text) {
          if (typeof text === 'string' && text !== '') {
            let node = this.bgNode;
            let textLabel = this.textLbl;

            if (this.enableMulti) {
              node = instantiate(this.bgNode);
              textLabel = node.getChildByName('label').getComponent(Label);
              node.parent = this.node;
              this.bgNode.active = false;
            }

            textLabel.string = text;
            Tween.stopAllByTarget(node);
            Tween.stopAllByTarget(node.getComponent(UIOpacity));
            node.setPosition(0, 0);
            node.getComponent(UIOpacity).opacity = 255;
            node.active = true;
            let moveDis = this.enableMoveAni ? 168 : 0;
            tween(node).by(1.0, {
              position: new Vec3(0, moveDis, 0)
            }, {
              easing: 'sineOut'
            }).start();
            tween(node.getComponent(UIOpacity)).delay(1.0).to(1.0, {
              opacity: 0
            }).call(() => {
              if (this.enableMulti) {
                node.destroy();
              } else {
                this.hide();
              }
            }).start();
          }
        }

        hide() {
          this.bgNode.active = false;
          this.textLbl.string = '';
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "textLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enableMulti", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enableMoveAni", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95f666a8d9a391db4e5650bbb9b1ea8b5fde2cff.js.map