System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _decorator, ULog, UTime, _dec, _class, _crd, DEFAULT_MAX_WAITING_TIME, ccclass, property, VCircle;

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../../core/util/ULog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUTime(extras) {
    _reporterNs.report("UTime", "../../core/util/UTime", _context.meta, extras);
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
    }, function (_unresolved_3) {
      UTime = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edfb3xEC3lIrLmueJ4mx4QE", "VCircle", undefined);

      /*默认加载转圈自动隐藏时间 */
      DEFAULT_MAX_WAITING_TIME = 10;
      ({
        ccclass,
        property
      } = _decorator);

      _export("default", VCircle = (_dec = ccclass('VCircle'), _dec(_class = class VCircle extends Component {
        constructor(...args) {
          super(...args);
          this._timerId = 0;
        }

        init() {
          this.hide();
          this._timerId = 0;
        }

        show(showTime) {
          this._timerId && clearInterval(this._timerId);
          let time = showTime ? showTime : DEFAULT_MAX_WAITING_TIME;
          this.node.active = true;
          this._timerId = (_crd && UTime === void 0 ? (_reportPossibleCrUseOfUTime({
            error: Error()
          }), UTime) : UTime).countDown(time, () => {
            this.hide();
          }, leftTime => {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).debug('VCircleLoading leftTime:', leftTime);
          });
        }

        hide() {
          this.node.active = false;
        }

        onDisable() {
          this._timerId && clearInterval(this._timerId);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e306c0146f82285bfca71849aa6732610370a9e.js.map