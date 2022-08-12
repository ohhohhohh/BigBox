import { EGameId, EGameState } from "../enum/EGame";


/**
 * 游戏配置
 */
let cfg_game = {
    [EGameId.GAME_1]: {
        gameName: "game1",
        gameId: EGameId.GAME_1,
        gameState: EGameState.HOT,
    },
    [EGameId.GAME_2]: {
        gameName: "game2",
        gameId: EGameId.GAME_2,
        gameState: EGameState.HOT,
    },
}

export default cfg_game;
