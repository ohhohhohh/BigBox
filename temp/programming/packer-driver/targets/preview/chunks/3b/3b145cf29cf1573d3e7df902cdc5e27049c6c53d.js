System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventManager, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7b74UVIwZIpZBzCX4YQHEM", "EventManager", undefined);

      /**
       * 事件管理器
       */
      _export("default", EventManager = class EventManager {
        /**
         * key: 事件名
         * value: 缓存事件
         */

        /**
         * 广播事件
         *
         * @param eventName 事件名
         * @param param 传递的剩余不定参数
         */
        static emit(eventName) {
          var eventCacheArray = this._eventCacheMap.get(eventName);

          if (eventCacheArray) {
            var eventCache = null;

            for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              param[_key - 1] = arguments[_key];
            }

            for (var i = eventCacheArray.length - 1; i >= 0; i--) {
              eventCache = eventCacheArray[i]; // call 方法的语法和作用与 apply() 方法类似
              // 只有一个区别
              // 就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

              eventCache.callback.apply(eventCache.target, param); // 只接受一次回调的事件，在触发之后就移除掉该缓存事件

              if (eventCache.once) {
                eventCacheArray.splice(i, 1);
              }
            }
          }
        }
        /**
         * 注册事件
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         */


        static on(eventName, callback, target) {
          this._on(eventName, callback, target, false);
        }
        /**
         * 注册事件（接受函数执行一次后会自动销毁，不用主动off）
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         */


        static onOnce(eventName, callback, target) {
          this._on(eventName, callback, target, true);
        }
        /**
         * 注册事件
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         * @param once 是否只回调一次
         */


        static _on(eventName, callback, target, once) {
          var eventCacheArray = this._eventCacheMap.get(eventName);

          if (!eventCacheArray) {
            eventCacheArray = [];
          }

          var index = eventCacheArray.findIndex(eventCache => {
            return eventCache.target === target && eventCache.callback === callback;
          });

          if (index === -1) {
            eventCacheArray.push({
              target: target,
              callback: callback,
              once: once
            });

            this._eventCacheMap.set(eventName, eventCacheArray);
          }
        }
        /**
         * 注销事件
         *
         * @param eventName 事件名
         * @param callback 事件处理函数
         * @param target 事件处理函数的执行对象
         */


        static off(eventName, callback, target) {
          var eventCacheArray = this._eventCacheMap.get(eventName);

          if (eventCacheArray) {
            if (callback && target) {
              var index = eventCacheArray.findIndex(eventCache => {
                return eventCache.target === target && eventCache.callback === callback;
              });

              if (index !== -1) {
                eventCacheArray.splice(index, 1);

                this._eventCacheMap.set(eventName, eventCacheArray);
              }
            } else {
              eventCacheArray = null;

              this._eventCacheMap.delete(eventName);
            }
          }
        }
        /**
         * 注销某个已经注册的对象的所有事件
         *
         * @param target 事件函数处理的执行对象
         */


        static offTarget(target) {
          this._eventCacheMap.forEach((eventCacheArray, eventName) => {
            if (eventCacheArray) {
              for (var i = eventCacheArray.length - 1; i >= 0; i--) {
                if (eventCacheArray[i].target === target) {
                  eventCacheArray.splice(i, 1);
                }
              }
            }
          });
        }

      });
      /**
       * 缓存事件
       */


      EventManager._eventCacheMap = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b145cf29cf1573d3e7df902cdc5e27049c6c53d.js.map