import { _decorator, Component, Node, Label, AssetManager, resources, Sprite } from 'cc';
import UIBase from '../../core/base/UIBase';
import UIManager from '../../core/manager/UIManager';
import ULog from '../../core/util/ULog';
import { ESceneType } from '../../enum/EScene';
import { EDialogMsgType, EUICacheMode, EUIId } from '../../enum/EUI';

const { ccclass, property } = _decorator;

@ccclass('VLaunch')
export class VLaunch extends UIBase {

    @property({ type: Label, tooltip: '加载进度label' })
    progressLbl: Label = null;

    @property({ type: Sprite, tooltip: '加载进度条' })
    progressBar: Sprite = null;

    private _progress: number = 0;

    onLoad() {

        UIManager.ins.loadScene(ESceneType.RUN_ROCKET, null, (finish: number, total: number, item: AssetManager.RequestItem) => {
            // ULog.log('loadScene RUN_ROCKET:', finish, '/', total);
            if (this._progress < finish / total) {
                this._progress = finish / total;
                this.progressLbl.string = Math.ceil(this._progress * 100) + '%';
                this.progressBar.fillRange = this._progress;
            }
        }, () => {
            UIManager.ins.closeUI(EUIId.LAUNCH, EUICacheMode.RELEASE);
        });

    }

    start() {

    }

    onClickTest() {
        // UIManager.ins.loadScene(ESceneType.RUN_ROCKET, null, (finish: number, total: number, item: AssetManager.RequestItem) => {
        //     // ULog.log('loadScene RUN_ROCKET:', finish, '/', total);
        //     if (this._progress < finish / total) {
        //         this._progress = finish / total;
        //         this.progressLbl.string = Math.ceil(this._progress * 100) + '%';
        //         this.progressBar.fillRange = this._progress;
        //     }
        // }, () => {
        //     UIManager.ins.closeUI(EUIId.LAUNCH, EUICacheMode.RELEASE);
        // });

    }

    onClickTest2() {
        // UIManager.ins.openUI(EUIId.DIALOG_MSG);
        UIManager.ins.showMsgDialog('h啊哈哈哈哈哈哈哈', EDialogMsgType.BOTH);
    }


}

