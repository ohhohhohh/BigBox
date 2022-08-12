import { _decorator, Component, Node, JsonAsset } from 'cc';
import cfg_global from '../config/cfg_global';
import UIManager from '../core/manager/UIManager';
import ULog from '../core/util/ULog';
import { EUIId } from '../enum/EUI';
import AppHub from './AppHub';

const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends Component {

    @property({ type: JsonAsset, tooltip: '全局配置文件' })
    globalJson: JsonAsset = null;

    onLoad() {
        this.init();
    }

    start() {
        UIManager.ins.openUI(EUIId.LAUNCH);
    }

    init() {
        this.initGlobalConfig();
        ULog.init();
        AppHub.ins.init();
        UIManager.ins.init(this.node);

    }

    /**初始化全局配置 */
    private initGlobalConfig() {
        if (!this.globalJson || !this.globalJson.json) return;
        ULog.log('initGlobalConfig:', this.globalJson.json);
        let json = this.globalJson.json;
        cfg_global.environment = json['environment'];
        cfg_global.version = json['version'];
        cfg_global.buildTime = json['buildTime'];
        cfg_global.enableLog = json['enableLog'];
        cfg_global.enableMainHot = json['enableMainHot'];
        cfg_global.enableGameHot = json['enableGameHot'];
    }



}

