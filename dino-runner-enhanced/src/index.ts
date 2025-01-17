const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

import { GameScene } from './scenes/GameScene';
import { MenuScene } from './scenes/MenuScene';

const gameScene = new GameScene(ctx);
const menuScene = new MenuScene(ctx);

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    menuScene.start();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (gameScene.isActive) {
        gameScene.update();
    } else {
        menuScene.update();
    }
    requestAnimationFrame(gameLoop);
}

window.addEventListener('load', init);
window.addEventListener('resize', init);
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !gameScene.isActive) {
        gameScene.start();
    }
});

gameLoop();