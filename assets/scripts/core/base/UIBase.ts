import { Component, Node, _decorator } from "cc";
import { EUIId } from "../../enum/EUI";
import ULog from "../util/ULog";

const { ccclass, property } = _decorator;

@ccclass('UIBase')
export default class UIBase extends Component {

    /**ui类型 */
    uiId: EUIId;

    /**
     * 初始化
     * @param uiId ui id
     */
    init(uiId: EUIId) {
        ULog.log('init uiId:', uiId)
        this.uiId = uiId;
    }

    /**
     * 显示
     * @param data 数据
     */
    show(data: any) {
        ULog.log('show data:', data)
        this.node.active = true;
    }

    /**隐藏 */
    hide() {
        this.node.active = false;
    }

    /**销毁 */
    destroyMe() {
        this.node.destroy();
    }

    /**
     * 设置父节点
     * @param parent 父节点
     */
    setParent(parent: Node) {
        this.node.parent = parent;
        this.node.setPosition(0, 0);
    }

    /**
     * 设置层级顺序
     * @param zIndex 层级
     */
    setZIndex(zIndex: number) {
        // this.node.zIndex = zIndex;
        // this.node.setSiblingIndex(zIndex);
    }


}

