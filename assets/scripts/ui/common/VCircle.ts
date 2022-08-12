import { Component, _decorator } from "cc";
import ULog from "../../core/util/ULog";
import UTime from "../../core/util/UTime";

/*默认加载转圈自动隐藏时间 */
const DEFAULT_MAX_WAITING_TIME = 10;

const { ccclass, property } = _decorator;

@ccclass('VCircle')
export default class VCircle extends Component {

    /**定时器id */
    private _timerId: number = 0;

    init() {
        this.hide();
        this._timerId = 0;
    }

    show(showTime?: number) {
        this._timerId && clearInterval(this._timerId);
        let time = showTime ? showTime : DEFAULT_MAX_WAITING_TIME;
        this.node.active = true;
        this._timerId = UTime.countDown(time, () => {
            this.hide();
        }, (leftTime: number) => {
            ULog.log('VCircle leftTime:', leftTime);
        });
    }

    hide() {
        this.node.active = false;
    }

    protected onDisable(): void {
        this._timerId && clearInterval(this._timerId);
    }

}
