import { Component, instantiate, Label, Node, Tween, tween, UIOpacity, Vec3, _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass('VTooltip')
export default class VTooltip extends Component {

    @property({ type: Node, tooltip: '背景节点' })
    bgNode: Node = null;

    @property({ type: Label, tooltip: '文本label' })
    textLbl: Label = null;

    @property({ tooltip: '是否展示多个提示文本' })
    enableMulti: boolean = true;

    @property({ tooltip: '是否展示提示文本移动动作' })
    enableMoveAni: boolean = true;

    init() {
        this.node.active = true;
        this.hide();
    }

    show(text: string) {
        if (typeof (text) === 'string' && text !== '') {
            let node = this.bgNode;
            let textLabel = this.textLbl;
            if (this.enableMulti) {
                node = instantiate(this.bgNode);
                textLabel = node.getChildByName('label').getComponent(Label);
                node.parent = this.node;
                this.bgNode.active = false;
            }
            textLabel.string = text;
            Tween.stopAllByTarget(node);
            Tween.stopAllByTarget(node.getComponent(UIOpacity));
            node.setPosition(0, 0);
            node.getComponent(UIOpacity).opacity = 255;
            node.active = true;
            let moveDis = this.enableMoveAni ? 168 : 0;
            tween(node)
                .by(1.0, { position: new Vec3(0, moveDis, 0) }, { easing: 'sineOut' })
                .start()
            tween(node.getComponent(UIOpacity))
                .delay(2.0)
                .to(1.0, { opacity: 0 })
                .call(() => {
                    if (this.enableMulti) {
                        node.destroy();
                    } else {
                        this.hide();
                    }
                })
                .start()
        }
    }

    hide() {
        this.bgNode.active = false;
        this.textLbl.string = '';
    }
}
