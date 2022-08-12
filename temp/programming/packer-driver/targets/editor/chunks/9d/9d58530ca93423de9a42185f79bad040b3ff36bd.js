System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UTime, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bfe95joQ9DoZCQCZX3+zus", "UTime", undefined);

      /**
       * 日期时间
       */
      _export("default", UTime = class UTime {
        /**
         * 日期格式化处理
         * @param fmt 格式
         * @param date 日期
         * @param isToBeijingDate 是否转换到北京日期
         * @returns 返回格式化后的日期
         */
        static dateFormat(date, fmt, isToBeijingDate = false) {
          if (isToBeijingDate) {
            date = new Date(new Date().getTime() + (new Date().getTimezoneOffset() / 60 + 8) * 3600 * 1000);
          }

          let o = {
            "M+": date.getMonth() + 1,
            //月份 
            "d+": date.getDate(),
            //日 
            "h+": date.getHours(),
            //小时 
            "m+": date.getMinutes(),
            //分 
            "s+": date.getSeconds(),
            //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3),
            //季度 
            "S": date.getMilliseconds() //毫秒 

          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

          for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

          return fmt;
        }
        /**
         * 设置倒计时
         * @param totalTime 总时间
         * @param finishFunc 结束回调
         * @param onceFunc 每一秒回调
         * @returns 
         */


        static countDown(totalTime, finishFunc, onceFunc) {
          let countNum = totalTime;
          onceFunc && onceFunc(countNum);
          let timerId = setInterval(() => {
            countNum--;

            if (countNum <= 0) {
              onceFunc && onceFunc(countNum);
              finishFunc && finishFunc();
              clearInterval(timerId);
            } else {
              onceFunc && onceFunc(countNum);
            }
          }, 1000);
          return timerId;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d58530ca93423de9a42185f79bad040b3ff36bd.js.map