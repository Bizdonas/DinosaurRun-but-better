export interface GameConfig {
    width: number;
    height: number;
    gravity: number;
    jumpHeight: number;
    obstacleSpeed: number;
}

export interface ObstacleType {
    id: number;
    width: number;
    height: number;
    image: string;
}

export interface DinoState {
    isJumping: boolean;
    isDucking: boolean;
    position: {
        x: number;
        y: number;
    };
}

export interface GroundState {
    position: number;
    width: number;
}