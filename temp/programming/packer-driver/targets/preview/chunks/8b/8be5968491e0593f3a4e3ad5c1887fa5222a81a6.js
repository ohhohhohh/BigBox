System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _decorator, ULog, _dec, _class, _crd, ccclass, property, UIBase;

  function _reportPossibleCrUseOfEUIId(extras) {
    _reporterNs.report("EUIId", "../../enum/EUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../util/ULog", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ULog = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47b8aXZU2RLrbczrColkMRN", "UIBase", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UIBase = (_dec = ccclass('UIBase'), _dec(_class = class UIBase extends Component {
        constructor() {
          super(...arguments);
          this.uiId = void 0;
        }

        /**
         * 初始化
         * @param uiId ui id
         */
        init(uiId) {
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('init uiId:', uiId);
          this.uiId = uiId;
        }
        /**
         * 显示
         * @param data 数据
         */


        show(data) {
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('show data:', data);
          this.node.active = true;
        }
        /**隐藏 */


        hide() {
          this.node.active = false;
        }
        /**销毁 */


        destroyMe() {
          this.node.destroy();
        }
        /**
         * 设置父节点
         * @param parent 父节点
         */


        setParent(parent) {
          this.node.parent = parent;
          this.node.setPosition(0, 0);
        }
        /**
         * 设置层级顺序
         * @param zIndex 层级
         */


        setZIndex(zIndex) {// this.node.zIndex = zIndex;
          // this.node.setSiblingIndex(zIndex);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8be5968491e0593f3a4e3ad5c1887fa5222a81a6.js.map