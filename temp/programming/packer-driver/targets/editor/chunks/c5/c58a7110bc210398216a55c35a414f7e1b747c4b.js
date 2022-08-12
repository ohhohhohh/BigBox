System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UMath, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a791dbtS35D/KtRcwIdkV8p", "UMath", undefined);

      /**
       * 数学
       */
      _export("default", UMath = class UMath {
        /**
         * 0~1随机数
         * @returns 返回数值
         */
        static random() {
          return Math.random();
        }
        /**
        * 在min到max的数值范围内取随机整数
         * @param min 最小值
         * @param max 最大值
         * @returns 返回数值
         */


        static randomRange(min, max) {
          let num = min + Math.floor(Math.random() * (max - min + 1));
          return num;
        }
        /**
         * 十进制转其他进制
         * @param num 十进制数字
         * @param otherType 几进制
         * @returns 返回进制字符串
         */


        static convertDecimalToOther(num, otherType) {
          return num.toString(otherType);
        }
        /**
         * 其他进制转十进制
         * @param char 其他进制字符
         * @param otherType 几进制
         * @returns 返回十进制数字
         */


        static convertOtherToDecimal(char, otherType) {
          return parseInt(char, otherType);
        }
        /**
         * 二维向量旋转 顺时针旋转
         * @param from 起始向量
         * @param angele 旋转角度(角度)
         */
        // static vec2Rot(from: cc.Vec2, angele: number): cc.Vec2 {
        //     let ro = (angele / 180) * Math.PI;
        //     var x = from.x * Math.cos(ro) - from.y * Math.sin(ro);
        //     var y = from.x * Math.sin(ro) + from.y * Math.cos(ro);
        //     return cc.v2(x, y);
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c58a7110bc210398216a55c35a414f7e1b747c4b.js.map