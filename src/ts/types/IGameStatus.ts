export interface IGameStatus {
    isStarted: boolean;
    isFinished: boolean;
    win: boolean;
    score: number;
    lives: number;
    endGame: () => void;
}