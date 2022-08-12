import { _decorator, Component, Node, Label, AssetManager, resources, Sprite } from 'cc';
import UIBase from '../../core/base/UIBase';
import UIManager from '../../core/manager/UIManager';
import ULog from '../../core/util/ULog';
import { ESceneType } from '../../enum/EScene';
import { EUICacheMode, EUIId } from '../../enum/EUI';

const { ccclass, property } = _decorator;

@ccclass('VLaunch')
export class VLaunch extends UIBase {

    @property({ type: Label, tooltip: '加载进度label' })
    progressLbl: Label = null;

    @property({ type: Sprite, tooltip: '加载进度条' })
    progressBar: Sprite = null;

    private _progress: number = 0;

    start() {

    }

    onClickTest() {
        UIManager.ins.openScene(ESceneType.RUN_ROCKET, null, (finish: number, total: number, item: AssetManager.RequestItem) => {
            // ULog.log('loadScene RUN_ROCKET:', finish, '/', total);
            if (this._progress < finish / total) {
                this._progress = finish / total;
                this.progressLbl.string = Math.ceil(this._progress * 100) + '%';
                this.progressBar.fillRange = this._progress;
            }
        }, () => {
            // UIManager.ins.closeUI(EUIId.LAUNCH, EUICacheMode.REUSABLE);
        });

        // UIManager.ins.showTip('a aaaaaaaa')
    }

    onClickTest2() {
        // UIManager.ins.closeUI(EUIId.LAUNCH, EUICacheMode.REUSABLE);
        // UIManager.ins.openUI(EUIId.LAUNCH);
        UIManager.ins.showCircle(3);
    }


}

