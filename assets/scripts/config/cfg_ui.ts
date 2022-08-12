
/**
 * UI配置
 */

import { EUIId } from "../enum/EUI";

export class UIConfig {
    /**bundle名称 */
    bundleName: string;
    /**资源路径 */
    resPath: string;
    /**层级 */
    zIndex: number;
}

let cfg_ui: { [key: string]: UIConfig } = {

    [EUIId.LAUNCH]: {
        bundleName: 'resources',
        resPath: 'prefab/launch/launch',
        zIndex: 1,
    },
    [EUIId.DIALOG_MSG]: {
        bundleName: 'resources',
        resPath: 'prefab/common/dialog_msg',
        zIndex: 98,
    },



}
export default cfg_ui;
