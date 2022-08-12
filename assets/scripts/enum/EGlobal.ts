/**
 * 全局枚举
 */

/**
 * 环境
 */
export const enum EEnvironment {
    /**开发 */
    DEVELOP = 0,
    /**测试 */
    TEST = 1,
    /**预发布 */
    PRE = 2,
    /**线上 */
    MASTER = 3
}

/**
 * 场景状态
 */
export const enum ESceneState {
    /**启动 */
    SATART = 'SATART',
    /**登陆 */
    LOGIN = 'LOGIN',
    /**大厅 */
    LOBBY = 'LOBBY',
    /**游戏 */
    GAME = 'GAME'
}

/**
 * 全局事件
 */
export const enum EGlobalEvent {
    /**app切到前后台 */
    APP_EVENT_SHOW_HIDE = 'APP_EVENT_SHOW_HIDE',

}


