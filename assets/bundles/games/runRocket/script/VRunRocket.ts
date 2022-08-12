import { _decorator, Component, Node, game } from 'cc';
import { SceneBase } from '../../../../scripts/core/base/SceneBase';
import UIManager from '../../../../scripts/core/manager/UIManager';
import { EUIId } from '../../../../scripts/enum/EUI';
const { ccclass, property } = _decorator;

@ccclass('VRunRocket')
export class VRunRocket extends SceneBase {

    start() {

    }

    onClickTest() {
        // UIManager.ins.showTip('99999999');
        UIManager.ins.showMsgDialog('66666666666');
    }

    update(deltaTime: number) {

    }
}

