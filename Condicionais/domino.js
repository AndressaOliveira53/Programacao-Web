class Domino {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    toString() {
        return `[${this.value1}|${this.value2}]`;
    }
}

class DominoSet {
    constructor() {
        this.dominoes = [];
        for (let i = 0; i <= 6; i++) {
            for (let j = i; j <= 6; j++) {
                this.dominoes.push(new Domino(i, j));
            }
        }
    }
    shuffle() {
        for (let i = this.dominoes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.dominoes[i], this.dominoes[j]] = [this.dominoes[j], this.dominoes[i]];
        }
    }
    draw() {
        return this.dominoes.pop();
    }
}

class Game {
    constructor() {
        this.dominoSet = new DominoSet();
        this.dominoSet.shuffle();
        this.playerHand = [];
        this.table = [];
    }
    startGame() {
        for (let i = 0; i < 7; i++) {
            this.playerHand.push(this.dominoSet.draw());
        }
        this.table.push(this.dominoSet.draw());
        console.log("Jogo iniciado!");
        console.log("Mão do jogador:", this.playerHand.map(domino => domino.toString()).join(", "));
        console.log("Mesa:", this.table.map(domino => domino.toString()).join(", "));
    }
}

const game = new Game();
game.startGame();
