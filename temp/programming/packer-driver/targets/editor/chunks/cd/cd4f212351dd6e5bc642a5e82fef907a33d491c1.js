System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Asset, instantiate, resources, cfg_scene, cfg_ui, EDialogMsgType, EUICacheMode, EUIId, AppHub, VTooltip, SceneBase, UIBase, UBundle, ULog, UIManager, _crd;

  function _reportPossibleCrUseOfcfg_scene(extras) {
    _reporterNs.report("cfg_scene", "../../config/cfg_scene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcfg_ui(extras) {
    _reporterNs.report("cfg_ui", "../../config/cfg_ui", _context.meta, extras);
  }

  function _reportPossibleCrUseOfESceneType(extras) {
    _reporterNs.report("ESceneType", "../../enum/EScene", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEDialogMsgType(extras) {
    _reporterNs.report("EDialogMsgType", "../../enum/EUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEUICacheMode(extras) {
    _reporterNs.report("EUICacheMode", "../../enum/EUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEUIId(extras) {
    _reporterNs.report("EUIId", "../../enum/EUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppHub(extras) {
    _reporterNs.report("AppHub", "../../main/AppHub", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVMsgDialog(extras) {
    _reporterNs.report("VMsgDialog", "../../ui/common/VMsgDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVTooltip(extras) {
    _reporterNs.report("VTooltip", "../../ui/common/VTooltip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "../base/SceneBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../base/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUBundle(extras) {
    _reporterNs.report("UBundle", "../util/UBundle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfULog(extras) {
    _reporterNs.report("ULog", "../util/ULog", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Asset = _cc.Asset;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      cfg_scene = _unresolved_2.default;
    }, function (_unresolved_3) {
      cfg_ui = _unresolved_3.default;
    }, function (_unresolved_4) {
      EDialogMsgType = _unresolved_4.EDialogMsgType;
      EUICacheMode = _unresolved_4.EUICacheMode;
      EUIId = _unresolved_4.EUIId;
    }, function (_unresolved_5) {
      AppHub = _unresolved_5.default;
    }, function (_unresolved_6) {
      VTooltip = _unresolved_6.default;
    }, function (_unresolved_7) {
      SceneBase = _unresolved_7.SceneBase;
    }, function (_unresolved_8) {
      UIBase = _unresolved_8.default;
    }, function (_unresolved_9) {
      UBundle = _unresolved_9.default;
    }, function (_unresolved_10) {
      ULog = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9d92XnepNDJJEuvaA1hvZ1", "UIManager", undefined);

      /**
       * UI管理类
       */
      _export("default", UIManager = class UIManager {
        constructor() {
          this._sceneRoot = null;
          this._uiRoot = null;
          this._uiRunningPool = {};
          this._uiCachePool = {};
          this._prefabCachePool = {};
          this._tooltip = null;
          this._msgDialog = null;
        }

        static get ins() {
          if (!this._ins) {
            this._ins = new UIManager();
          }

          return this._ins;
        }
        /**场景根节点 */


        init(rootNode) {
          this._uiRunningPool = {};
          this._uiCachePool = {};
          this._prefabCachePool = {};
          this._sceneRoot = rootNode.getChildByName('sceneRoot');
          this._uiRoot = rootNode.getChildByName('uiRoot');
          this._tooltip = rootNode.getChildByName('tooltip').getComponent(_crd && VTooltip === void 0 ? (_reportPossibleCrUseOfVTooltip({
            error: Error()
          }), VTooltip) : VTooltip); // this._msgDialog = rootNode.getChildByName('msgDialog').getComponent(VMsgDialog);
        }
        /**
         * 加载场景
         * @param sceneType 场景类型
         * @param data 数据
         * @param enableCircle 是否显示转圈加载加载
         */


        loadScene(sceneType, data, onProgress, onComplete, enableCircle = true) {
          let cfgScene = (_crd && cfg_scene === void 0 ? (_reportPossibleCrUseOfcfg_scene({
            error: Error()
          }), cfg_scene) : cfg_scene)[sceneType];

          if (!cfgScene) {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).error('loadScene cfg_ui没有对应配置! sceneType:', sceneType);
            return;
          } // if (AppHub.ins.runningBundleName === cfgScene.bundleName) {
          //     ULog.warn('loadScene bundle! sceneType:', sceneType);
          //     return;
          // }
          //释放当前bundle


          if ((_crd && AppHub === void 0 ? (_reportPossibleCrUseOfAppHub({
            error: Error()
          }), AppHub) : AppHub).ins.runningBundleName) {
            (_crd && UBundle === void 0 ? (_reportPossibleCrUseOfUBundle({
              error: Error()
            }), UBundle) : UBundle).releaseBundle((_crd && AppHub === void 0 ? (_reportPossibleCrUseOfAppHub({
              error: Error()
            }), AppHub) : AppHub).ins.runningBundleName);
          }

          enableCircle && this.showCircle();
          (_crd && UBundle === void 0 ? (_reportPossibleCrUseOfUBundle({
            error: Error()
          }), UBundle) : UBundle).loadBundleRes(cfgScene.bundleName, cfgScene.resPath, (finish, total, item) => {
            // ULog.log(cfgScene.resPath, ':', finish, '/', total);
            onProgress && onProgress(finish, total, item);
          }, (error, asset) => {
            if (error) {
              (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                error: Error()
              }), ULog) : ULog).error('loadBundleScene 加载失败:', cfgScene, ' error:', error);
            } else {
              let bundleScene = instantiate(asset);
              let baseScene = bundleScene.getComponent(_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
                error: Error()
              }), SceneBase) : SceneBase);

              this._sceneRoot.destroyAllChildren();

              (_crd && AppHub === void 0 ? (_reportPossibleCrUseOfAppHub({
                error: Error()
              }), AppHub) : AppHub).ins.runningBundleName = cfgScene.bundleName;
              baseScene.initSceneData(data);
              bundleScene.parent = this._sceneRoot;
              onComplete && onComplete();
            }

            enableCircle && this.hideCircle();
          });
        }
        /**
         * 打开UI
         * @param uiId ui id
         * @param data 打开ui传输的数据
         * @param enableCircle 是否显示转圈加载
         * @param onProgress 进度回调
         * @param onComplete 完成回调
         */


        openUI(uiId, data, enableCircle = true, onProgress, onComplete) {
          let cfgUi = (_crd && cfg_ui === void 0 ? (_reportPossibleCrUseOfcfg_ui({
            error: Error()
          }), cfg_ui) : cfg_ui)[uiId];

          if (!cfgUi) {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).error('cfg_ui没有对应配置! uiId:', uiId);
            return;
          } // ULog.log('openUI _uiRunningPool ', this._uiRunningPool)
          // ULog.log('openUI _uiCachePool ', this._uiCachePool)
          // ULog.log('openUI _prefabCachePool ', this._prefabCachePool)


          let uiRunning = this._uiRunningPool[uiId];

          if (uiRunning) {
            //正在运行
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).warn('ui正在运行,请先关闭再打开! uiId:', uiId);
            return;
          } else {
            let uiCache = this._uiCachePool[uiId];

            if (uiCache) {
              //有ui缓存
              (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                error: Error()
              }), ULog) : ULog).log('openUI 有ui缓存 ', uiId);
              uiCache.show(data); // uiCache.setParent(this._uiRoot);
              // uiCache.setZIndex(cfgUi.zIndex);

              this._uiRunningPool[uiId] = uiCache;
              delete this._uiCachePool[uiId];
            } else {
              //新加载
              (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                error: Error()
              }), ULog) : ULog).log('openUI 新加载 ', uiId);

              let loadSuccess = asset => {
                let node = instantiate(asset);
                let uiClass = node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
                  error: Error()
                }), UIBase) : UIBase);
                asset.addRef();
                this._prefabCachePool[uiId] = asset;

                if (uiClass) {
                  uiClass.init(uiId);
                  uiClass.show(data);
                  uiClass.setParent(this._uiRoot);
                  uiClass.setZIndex(cfgUi.zIndex);
                  this._uiRunningPool[uiId] = uiClass;
                } else {
                  (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                    error: Error()
                  }), ULog) : ULog).error('没有对应脚本 UIBase uiId:', uiId);
                }

                onComplete && onComplete();
              };

              enableCircle && this.showCircle();

              if (cfgUi.bundleName == 'resources') {
                resources.load(cfgUi.resPath, Asset, (finish, total, item) => {
                  // ULog.log(cfgUi.resPath, ':', finish, '/', total);
                  onProgress && onProgress(finish, total, item);
                }, (error, asset) => {
                  if (error) {
                    (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                      error: Error()
                    }), ULog) : ULog).error('加载ui失败 resources:', uiId, ' error:', error);
                  } else {
                    loadSuccess(asset);
                  }

                  enableCircle && this.hideCircle();
                });
              } else {
                (_crd && UBundle === void 0 ? (_reportPossibleCrUseOfUBundle({
                  error: Error()
                }), UBundle) : UBundle).loadBundleRes(cfgUi.bundleName, cfgUi.resPath, (finish, total, item) => {
                  // ULog.log(cfgUi.resPath, ':', finish, '/', total);
                  onProgress && onProgress(finish, total, item);
                }, (error, asset) => {
                  if (error) {
                    (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
                      error: Error()
                    }), ULog) : ULog).error('加载ui失败 bundle:', uiId, ' error:', error);
                  } else {
                    loadSuccess(asset);
                  }

                  enableCircle && this.hideCircle();
                });
              }
            }
          }
        }
        /**
         * 关闭UI
         * @param uiId ui id
         * @param cacheMode 缓存模式
         */


        closeUI(uiId, cacheMode = (_crd && EUICacheMode === void 0 ? (_reportPossibleCrUseOfEUICacheMode({
          error: Error()
        }), EUICacheMode) : EUICacheMode).REUSABLE) {
          let uiRunning = this._uiRunningPool[uiId];

          if (uiRunning) {
            uiRunning.hide();
            delete this._uiRunningPool[uiId];

            switch (cacheMode) {
              case (_crd && EUICacheMode === void 0 ? (_reportPossibleCrUseOfEUICacheMode({
                error: Error()
              }), EUICacheMode) : EUICacheMode).REUSABLE:
                //加入缓存池
                this._uiCachePool[uiId] = uiRunning;
                break;

              case (_crd && EUICacheMode === void 0 ? (_reportPossibleCrUseOfEUICacheMode({
                error: Error()
              }), EUICacheMode) : EUICacheMode).DESTROY:
                //删除节点，删除缓存池对象
                uiRunning.destroyMe();
                delete this._uiCachePool[uiId];
                break;

              case (_crd && EUICacheMode === void 0 ? (_reportPossibleCrUseOfEUICacheMode({
                error: Error()
              }), EUICacheMode) : EUICacheMode).RELEASE:
                //删除节点，删除缓存池对象，释放并删除预制体缓存
                uiRunning.destroyMe();

                this._prefabCachePool[uiId].decRef();

                delete this._uiCachePool[uiId];
                delete this._prefabCachePool[uiId];
                break;

              default:
                break;
            }
          } else {
            (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
              error: Error()
            }), ULog) : ULog).warn('closeUI 不存在运行ui uiId:', uiId);
          }

          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('openUI _uiRunningPool ', this._uiRunningPool);
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('openUI _uiCachePool ', this._uiCachePool);
          (_crd && ULog === void 0 ? (_reportPossibleCrUseOfULog({
            error: Error()
          }), ULog) : ULog).log('openUI _prefabCachePool ', this._prefabCachePool);
        }
        /**
         * 展示提示文本
         * @param text 文本内容
         */


        showTip(text) {
          this._tooltip.show(text);
        }
        /**
         * 展示等待转圈圈
         * @param showTime 展示时间
         */


        showCircle(showTime) {// this._waiting.show(showTime);
        }
        /**隐藏转圈加载 */


        hideCircle() {// this._waiting.hide();
        }
        /**
         * 展示消息弹窗
         * @param msg 消息内容
         * @param dialogType 弹窗类型
         */


        showDialogMsg(msg, dialogType = (_crd && EDialogMsgType === void 0 ? (_reportPossibleCrUseOfEDialogMsgType({
          error: Error()
        }), EDialogMsgType) : EDialogMsgType).OK, okCallback, cancelCallback, closeCallback) {
          let data = {
            msg: msg,
            dialogType: dialogType,
            okCallback: okCallback,
            cancelCallback: cancelCallback,
            closeCallback: closeCallback
          };
          this.openUI((_crd && EUIId === void 0 ? (_reportPossibleCrUseOfEUIId({
            error: Error()
          }), EUIId) : EUIId).DIALOG_MSG, data);
        }

      });

      UIManager._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd4f212351dd6e5bc642a5e82fef907a33d491c1.js.map