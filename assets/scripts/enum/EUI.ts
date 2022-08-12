/**
 * UI枚举
 */

/**UI名称 */
export const enum EUIId {

    /**Launch启动页 */
    LAUNCH = 'LAUNCH',
    /**消息弹窗 */
    DIALOG_MSG = 'DIALOG_MSG',

}

/**UI类型 */
export const enum EUICacheMode {
    /**只隐藏关闭，缓存节点和资源 */
    REUSABLE,
    /**销毁节点，但不释放资源 */
    DESTROY,
    /**销毁节点，且释放资源 */
    RELEASE
}

/**消息弹窗类型 */
export const enum EDialogMsgType {
    BOTH,
    OK,
    CANCEL
}
