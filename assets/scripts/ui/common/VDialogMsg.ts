import { Label, Node, _decorator } from "cc";
import UIBase from "../../core/base/UIBase";
import UIManager from "../../core/manager/UIManager";
import { EDialogMsgType, EUICacheMode, EUIId } from "../../enum/EUI";

const { ccclass, property } = _decorator;

@ccclass('VDialogMsg')
export default class VDialogMsg extends UIBase {

    @property(Label) msgContentLbl: Label = null;
    @property(Node) ok: Node = null;
    @property(Node) cancel: Node = null;

    private _okCallback: Function = null;
    private _cancelCallback: Function = null;
    private _closeCallback: Function = null;

    show(data: any) {
        super.show(data);
        if (data) {
            if (data.msg && typeof (data.msg) == 'string') {
                this.setMsgContent(data.msg);
            }

            switch (data.dialogType) {
                case EDialogMsgType.BOTH:
                    this.ok.active = true;
                    this.cancel.active = true;
                    break;
                case EDialogMsgType.OK:
                    this.ok.active = true;
                    this.cancel.active = false;
                    break;
                case EDialogMsgType.CANCEL:
                    this.ok.active = false;
                    this.cancel.active = true;
                    break;
                default:
                    this.ok.active = true;
                    this.cancel.active = false;
                    break;
            }

            if (data.okCallback) {
                this._okCallback = data.okCallback;
            }
            if (data.cancelCallback) {
                this._cancelCallback = data.cancelCallback;
            }
            if (data.closeCallback) {
                this._closeCallback = data.closeCallback;
            }
        }
    }

    /**设置消息内容 */
    setMsgContent(msg: string) {
        this.msgContentLbl.string = msg;
    }

    /**点击确定 */
    onClickOk() {
        if (this._okCallback) {
            this._okCallback();
        }
        UIManager.ins.closeUI(EUIId.DIALOG_MSG, EUICacheMode.REUSABLE);
    }

    /**点击取消 */
    onClickCancel() {
        if (this._cancelCallback) {
            this._cancelCallback();
        }
        UIManager.ins.closeUI(EUIId.DIALOG_MSG, EUICacheMode.REUSABLE);
    }

    /**点击关闭 */
    onClickClose() {
        if (this._closeCallback) {
            this._closeCallback();
        }
        UIManager.ins.closeUI(EUIId.DIALOG_MSG, EUICacheMode.REUSABLE);
    }
}
