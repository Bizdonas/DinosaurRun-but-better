export class MenuScene {
    private startButton: HTMLButtonElement;
    private instructionsButton: HTMLButtonElement;

    constructor() {
        this.startButton = document.createElement('button');
        this.startButton.innerText = 'Start Game';
        this.startButton.onclick = this.startGame.bind(this);

        this.instructionsButton = document.createElement('button');
        this.instructionsButton.innerText = 'Instructions';
        this.instructionsButton.onclick = this.showInstructions.bind(this);

        this.setupMenu();
    }

    private setupMenu() {
        const menuContainer = document.createElement('div');
        menuContainer.appendChild(this.startButton);
        menuContainer.appendChild(this.instructionsButton);
        document.body.appendChild(menuContainer);
    }

    public startGame() {
        // Logic to start the game
        console.log('Game Started');
    }

    public showInstructions() {
        // Logic to show game instructions
        console.log('Instructions displayed');
    }
}