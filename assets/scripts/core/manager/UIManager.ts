import { Asset, AssetManager, instantiate, Node, Prefab, resources } from "cc";
import cfg_scene from "../../config/cfg_scene";
import cfg_ui from "../../config/cfg_ui";
import { ESceneType } from "../../enum/EScene";
import { EDialogMsgType, EUICacheMode, EUIId } from "../../enum/EUI";
import AppHub from "../../main/AppHub";
import VMsgDialog from "../../ui/common/VMsgDialog";
import VTooltip from "../../ui/common/VTooltip";
import { SceneBase } from "../base/SceneBase";
import UIBase from "../base/UIBase";
import UBundle from "../util/UBundle";
import ULog from "../util/ULog";


/**
 * UI管理类
 */
export default class UIManager {
    private static _ins: UIManager = null;
    public static get ins(): UIManager {
        if (!this._ins) {
            this._ins = new UIManager();
        }
        return this._ins;
    }

    /**场景根节点 */
    private _sceneRoot: Node = null;
    /**ui根节点 */
    private _uiRoot: Node = null;

    /**ui运行池 */
    private _uiRunningPool: { [key: string]: UIBase } = {};
    /**ui缓存池 */
    private _uiCachePool: { [key: string]: UIBase } = {};
    /**ui预制体缓存池 */
    private _prefabCachePool: { [key: string]: Prefab } = {};

    /**公共文本提示 */
    private _tooltip: VTooltip = null;
    /**公共消息弹窗 */
    private _msgDialog: VMsgDialog = null;

    init(rootNode: Node) {
        this._uiRunningPool = {};
        this._uiCachePool = {};
        this._prefabCachePool = {};
        this._sceneRoot = rootNode.getChildByName('sceneRoot');
        this._uiRoot = rootNode.getChildByName('uiRoot');
        this._tooltip = rootNode.getChildByName('tooltip').getComponent(VTooltip);
        // this._msgDialog = rootNode.getChildByName('msgDialog').getComponent(VMsgDialog);
    }

    /**
     * 加载场景
     * @param sceneType 场景类型
     * @param data 数据
     * @param enableCircle 是否显示转圈加载加载
     */
    loadScene(sceneType: ESceneType, data?: any, onProgress?: Function, onComplete?: Function, enableCircle: boolean = true) {
        let cfgScene = cfg_scene[sceneType];
        if (!cfgScene) {
            ULog.error('loadScene cfg_ui没有对应配置! sceneType:', sceneType);
            return;
        }

        //释放当前bundle
        if (AppHub.ins.runningBundleName && AppHub.ins.runningBundleName != cfgScene.bundleName) {
            UBundle.releaseBundle(AppHub.ins.runningBundleName);
        }

        enableCircle && this.showCircle();
        UBundle.loadBundleRes(cfgScene.bundleName, cfgScene.resPath,
            (finish: number, total: number, item: AssetManager.RequestItem) => {
                // ULog.log(cfgScene.resPath, ':', finish, '/', total);
                onProgress && onProgress(finish, total, item);
            }, (error: Error, asset: Prefab) => {
                if (error) {
                    ULog.error('loadBundleScene 加载失败:', cfgScene, ' error:', error);
                } else {
                    let bundleScene = instantiate(asset);
                    let baseScene = bundleScene.getComponent(SceneBase);
                    this._sceneRoot.destroyAllChildren();
                    AppHub.ins.runningBundleName = cfgScene.bundleName;
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
    openUI(uiId: EUIId, data?: any, enableCircle: boolean = true, onProgress?: Function, onComplete?: Function) {
        let cfgUi = cfg_ui[uiId];
        if (!cfgUi) {
            ULog.error('cfg_ui没有对应配置! uiId:', uiId);
            return;
        }

        let uiRunning = this._uiRunningPool[uiId];
        if (uiRunning) { //正在运行
            ULog.warn('ui正在运行,请先关闭再打开! uiId:', uiId);
            return;
        } else {
            let uiCache = this._uiCachePool[uiId];
            if (uiCache) { //有ui缓存
                ULog.log('openUI 有ui缓存 ', uiId)
                uiCache.show(data);
                // uiCache.setParent(this._uiRoot);
                // uiCache.setZIndex(cfgUi.zIndex);
                this._uiRunningPool[uiId] = uiCache;
                delete this._uiCachePool[uiId];
            } else { //新加载
                ULog.log('openUI 新加载 ', uiId)
                let loadSuccess = (asset: Prefab) => {
                    let node = instantiate(asset);
                    let uiClass = node.getComponent(UIBase);
                    asset.addRef();
                    this._prefabCachePool[uiId] = asset;
                    if (uiClass) {
                        uiClass.init(uiId);
                        uiClass.show(data);
                        uiClass.setParent(this._uiRoot);
                        uiClass.setZIndex(cfgUi.zIndex);
                        this._uiRunningPool[uiId] = uiClass;
                    } else {
                        ULog.error('没有对应脚本 UIBase uiId:', uiId);
                    }
                    onComplete && onComplete();
                }

                enableCircle && this.showCircle();
                if (cfgUi.bundleName == 'resources') {
                    resources.load(cfgUi.resPath, Asset,
                        (finish: number, total: number, item: AssetManager.RequestItem) => {
                            // ULog.log(cfgUi.resPath, ':', finish, '/', total);
                            onProgress && onProgress(finish, total, item);
                        },
                        (error: Error, asset: Prefab) => {
                            if (error) {
                                ULog.error('加载ui失败 resources:', uiId, ' error:', error);
                            } else {
                                loadSuccess(asset);
                            }
                            enableCircle && this.hideCircle();
                        }
                    )
                } else {
                    UBundle.loadBundleRes(cfgUi.bundleName, cfgUi.resPath,
                        (finish: number, total: number, item: AssetManager.RequestItem) => {
                            // ULog.log(cfgUi.resPath, ':', finish, '/', total);
                            onProgress && onProgress(finish, total, item);
                        }, (error: Error, asset: Prefab) => {
                            if (error) {
                                ULog.error('加载ui失败 bundle:', uiId, ' error:', error);
                            } else {
                                loadSuccess(asset);
                            }
                            enableCircle && this.hideCircle();
                        });
                }
            }
        }

        // ULog.log('111 openUI _uiRunningPool ', this._uiRunningPool)
        // ULog.log('111 openUI _uiCachePool ', this._uiCachePool)
        // ULog.log('111 openUI _prefabCachePool ', this._prefabCachePool)
    }

    /**
     * 关闭UI
     * @param uiId ui id
     * @param cacheMode 缓存模式
     */
    closeUI(uiId: EUIId, cacheMode: EUICacheMode = EUICacheMode.REUSABLE) {
        let uiRunning = this._uiRunningPool[uiId];
        if (uiRunning) {
            uiRunning.hide();
            delete this._uiRunningPool[uiId];
            switch (cacheMode) {
                case EUICacheMode.REUSABLE:
                    //加入缓存池
                    this._uiCachePool[uiId] = uiRunning;
                    break;
                case EUICacheMode.DESTROY:
                    //删除节点，删除缓存池对象
                    uiRunning.destroyMe();
                    delete this._uiCachePool[uiId];
                    break;
                case EUICacheMode.RELEASE:
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
            ULog.warn('closeUI 不存在运行ui uiId:', uiId);
        }

        // ULog.log('222 openUI _uiRunningPool ', this._uiRunningPool)
        // ULog.log('222 openUI _uiCachePool ', this._uiCachePool)
        // ULog.log('222 openUI _prefabCachePool ', this._prefabCachePool)
    }

    /**
     * 展示提示文本
     * @param text 文本内容
     */
    showTip(text: string) {
        this._tooltip.show(text);
    }

    /**
     * 展示等待转圈圈
     * @param showTime 展示时间
     */
    showCircle(showTime?: number) {
        // this._waiting.show(showTime);
    }

    /**隐藏转圈加载 */
    hideCircle() {
        // this._waiting.hide();
    }

    /**
     * 展示消息弹窗
     * @param msg 消息内容
     * @param dialogType 弹窗类型
     */
    showDialogMsg(msg: string, dialogType: EDialogMsgType = EDialogMsgType.OK, okCallback?: Function, cancelCallback?: Function, closeCallback?: Function) {
        let data = {
            msg: msg,
            dialogType: dialogType,
            okCallback: okCallback,
            cancelCallback: cancelCallback,
            closeCallback: closeCallback
        }
        this.openUI(EUIId.DIALOG_MSG, data);
    }
}

