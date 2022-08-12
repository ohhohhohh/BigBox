import { _decorator, Component, Node, game } from 'cc';
import { SceneBase } from '../../../../scripts/core/base/SceneBase';
import UIManager from '../../../../scripts/core/manager/UIManager';
import { EUIId } from '../../../../scripts/enum/EUI';
const { ccclass, property } = _decorator;

@ccclass('RunRocketCtrl')
export class RunRocketCtrl extends SceneBase {

    start() {

    }

    onClickTest() {
        UIManager.ins.openUI(EUIId.LAUNCH);
    }

    update(deltaTime: number) {

    }
}

