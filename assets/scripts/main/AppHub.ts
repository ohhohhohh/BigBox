import { Game, game, System, SystemEvent } from "cc";
import ULog from "../core/util/ULog";
import { ESceneState } from "../enum/EGlobal";


/**
 * App中心
 */
export default class AppHub {
    private static _ins: AppHub = null;
    public static get ins(): AppHub {
        if (!this._ins) {
            this._ins = new AppHub();
        }
        return this._ins;
    }

    /**app场景状态 */
    public appSceneState: ESceneState = ESceneState.SATART;
    /**当前运行bundle名称 */
    public runningBundleName: string = null;

    /**初始化 */
    init() {
        this.appSceneState = ESceneState.SATART;
        this.initGlobalEvent();
    }

    /**初始化全局事件 */
    initGlobalEvent() {
        game.on(Game.EVENT_HIDE, this.onAppEventHide, this);
        game.on(Game.EVENT_SHOW, this.onAppEventShow, this);
    }

    /**app切到后台 */
    onAppEventHide() {
        ULog.log('onAppEventHide');
        // EventMgr.emit(EGlobalEvent.APP_SHOW_HIDE, false);
    }

    /**app切到前台 */
    onAppEventShow() {
        ULog.log('onAppEventShow');
        // EventMgr.emit(EGlobalEvent.APP_SHOW_HIDE, true);
    }

}

