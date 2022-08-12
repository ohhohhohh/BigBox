/**
 * scene配置
 */

import { ESceneType } from "../enum/EScene";

export class SceneConfig {
    /**bundle名称 */
    bundleName: string;
    /**资源路径 */
    resPath: string;
    /**层级 */
    // zIndex: number;
}


let cfg_scene: { [key: string]: SceneConfig } = {

    [ESceneType.LOGIN]: {
        bundleName: 'login',
        resPath: 'login',
        // zIndex: 1,
    },
    [ESceneType.HALL]: {
        bundleName: 'hall',
        resPath: 'hall',
        // zIndex: 1,
    },
    [ESceneType.RUN_ROCKET]: {
        bundleName: 'runRocket',
        resPath: 'runRocket',
        // zIndex: 1,
    },

}

export default cfg_scene;