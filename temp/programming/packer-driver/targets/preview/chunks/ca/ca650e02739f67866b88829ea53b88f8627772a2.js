System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Asset, assetManager, ULog, UBundle, _crd;

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "./ULog", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      ULog = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9c89gfKBdCWKdgrmtzkXwK", "UBundle", undefined);

      /**
       * bundle工具类
       */
      _export("default", UBundle = class UBundle {
        /**
         * 加载bundle
         * @param bundleName bundle名称
         * @param callback 回调
         */
        static loadBundle(bundleName, callback) {
          var bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).log('loadBundle 已存在 bundleName:', bundleName);
            callback && callback(bundle);
          } else {
            assetManager.loadBundle(bundleName, (error, bundle) => {
              if (!error) {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).log('loadBundle 成功 bundleName:', bundleName);
                callback && callback(bundle);
              } else {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).error('loadBundle 失败 bundleName:', bundleName, ' error:', error);
                callback && callback(null);
              }
            });
          }
        }
        /**
        * 释放Bundle
        * @param bundleName bundle名称
        */


        static releaseBundle(bundleName) {
          var bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).log('releaseBundle 成功 bundleName:', bundleName);
          } else {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).warn('releaseBundle 失败 bundleName:', bundleName);
          }
        }
        /**
         * 加载bundle资源
         * @param bundleName bundle名称
         * @param path 路径
         * @param callback 回调
         */


        static loadBundleRes(bundleName, path, onProgress, onComplete) {
          var bundle = assetManager.getBundle(bundleName);

          var loadedFunc = bundle => {
            bundle.load(path, Asset, (finish, total, item) => {
              // ULog.log('loadBundleRes progeress:', finish, ' / ', total);
              onProgress && onProgress(finish, total, item);
            }, (error, asset) => {
              if (error) {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).error('loadBundleRes 失败 path:', path, ' error:', error);
              } else {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).log('loadBundleRes 成功 path:', path);
              }

              onComplete && onComplete(error, asset);
            });
          };

          if (bundle) {
            loadedFunc(bundle);
          } else {
            this.loadBundle(bundleName, bundle => {
              if (bundle) {
                loadedFunc(bundle);
              } else {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).error('加载bundle资源 失败 bundleName:', bundleName);
              }
            });
          }
        }
        /**
         * 加载Bundle目录
         * @param bundleName bundle名称
         * @param callback 回调
         */


        static loadBundleDir(bundleName, path, callback) {
          this.loadBundle(bundleName, bundle => {
            if (bundle) {
              bundle.loadDir(path, Asset, (finish, total, item) => {
                (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                  error: Error()
                }), ULog) : ULog).log('loadBundleDir progeress:', finish, ' / ', total);
              }, (error, assets) => {
                callback && callback(error, assets);
              });
            } else {
              (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                error: Error()
              }), ULog) : ULog).error('loadBundleDir 失败 bundleName:', bundleName);
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca650e02739f67866b88829ea53b88f8627772a2.js.map