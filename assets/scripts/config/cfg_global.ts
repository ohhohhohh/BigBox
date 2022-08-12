import { EEnvironment } from "../enum/EGlobal";

/**
 * 全局配置
 */
let cfg_global = {
    /**开发环境 */
    environment: EEnvironment.TEST,
    /**当前版本号 */
    version: "1.0.0",
    /**构建时间 */
    buildTime: "2022-08-11",
    /**是否开启打印日志 */
    enableLog: true,
    /**是否开启主包热更 */
    enableMainHot: false,
    /**是否开启游戏热更 */
    enableGameHot: false,
    /**socket地址集合 */
    socketUrls: [],
    /**热更地址集合 */
    hotUrls: [],
    /**socket地址 */
    socketUrl: "",
    /**热更地址 */
    hotUrl: "",
}

export default cfg_global;