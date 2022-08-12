/**
 * 游戏枚举
 */

/**游戏id */
export const enum EGameId {
    GAME_1 = 1000,
    GAME_2 = 1001,
}

/**游戏状态 */
export const enum EGameState {
    /**正常 */
    NORMAL,
    /**最新 */
    NEW,
    /**火爆 */
    HOT,
    /**维护 */
    MAINTAIN,
    /**关闭 */
    CLOSE
}