
export function createMatch(player1, player2) {
    const currentScore = [{
        id: 1,
        player: player1,
        games: 0,
        rounds: 0,
        points: 0,
    },
    {
        id: 2,
        player: player2,
        games: 0,
        rounds: 0,
        points: 0,
    }];

    const roundWonBy = (playerId) => {
        const roundWinnerScore = currentScore.find(score => score.id === playerId);
        const roundLoserScore = currentScore.find(score => score.id !== playerId);
        roundWinnerScore.rounds += 1;
        roundWinnerScore.points = 0;
        roundLoserScore.points = 0;
        if ((roundWinnerScore.rounds >= 4 && (roundWinnerScore.rounds - roundLoserScore.rounds) >= 2) || roundWinnerScore.rounds === 7) {
            roundWinnerScore.games += 1;
            roundWinnerScore.rounds = 0;
            roundLoserScore.rounds = 0;
        }
    };

    const pointWonBy = (playerId) => {

        const pointWinnerScore = currentScore.find(score => score.id === playerId);
        switch (pointWinnerScore.points) {
            case 0:
                pointWinnerScore.points += 15;
                break;
            case 15:
                pointWinnerScore.points += 15;
                break;
            case 30:
                pointWinnerScore.points += 10;
                break;
            case 40:
                const pointLoserScore = currentScore.find(score => score.id !== playerId);
                switch (pointLoserScore.points) {
                    case 40:
                        pointWinnerScore.points = 'Advantage';
                        break;
                    case 'Advantage':
                        pointLoserScore.points = 40;
                        break;
                    default:
                        roundWonBy(playerId);
                };
                break;
            case 'Advantage':
                roundWonBy(playerId);
        };
    };

    const getCurrentRoundScore = () => {
        const player1Score = currentScore.find(score => score.id === 1);
        const player2Score = currentScore.find(score => score.id === 2);
        let roundsScoreMessage;
        if (player1Score.points === 40 && player2Score.points === 40) {
            roundsScoreMessage = 'Deuce';
        } else if (player1Score.points === 'Advantage') {
            roundsScoreMessage = `${player1Score.points} ${player1Score.player}`;
        } else if (player2Score.points === 'Advantage') {
            roundsScoreMessage = `${player2Score.points} ${player2Score.player}`;
        } else {
            roundsScoreMessage = `${player1Score.player} ${player1Score.points}-${player2Score.points} ${player2Score.player}`;
        }
        return roundsScoreMessage;
    };

    const getRoundsScore = () => {
        const player1Score = currentScore.find(score => score.id === 1);
        const player2Score = currentScore.find(score => score.id === 2);
        return `${player1Score.player} ${player1Score.rounds} ${player2Score.player} ${player2Score.rounds}`;
    };

    const getMatchScore = () => {
        const player1Score = currentScore.find(score => score.id === 1);
        const player2Score = currentScore.find(score => score.id === 2);
        return `${player1Score.player} ${player1Score.games} ${player2Score.player} ${player2Score.games}`;
    };

    const getWinner = () => {
        const winner = currentScore.find(score => score.games === 2);
        if (winner) {
            return winner.player;
        } else {
            return null;
        }
    };


    return {
        pointWonBy,
        getCurrentRoundScore,
        getRoundsScore,
        getMatchScore,
        getWinner,
    }
};



console.log("-------------------Simulación del partido-------------------");
// Ejemplo de software
const game = createMatch('Alberto C', 'David J');

// Cuando puntua el 1º judagor se registra de este modo
game.pointWonBy(1);
// Cuando puntua el 2º judagor se registra de este modo
game.pointWonBy(2);
// Quiero poder ver como va la ronda actual en todo momento
console.log(game.getCurrentRoundScore()); // Alberto C 15-15 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 30-15 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Alberto C 30-30 David J
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Alberto C 40-30 David J
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Deuce
// jugador 1 toma ventaja
game.pointWonBy(1);
console.log(game.getCurrentRoundScore()); // Advantage Alberto C
// jugador 2 empata
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Deuce
// jugador 2 toma ventaja
game.pointWonBy(2);
console.log(game.getCurrentRoundScore()); // Advantage David J
// Con este punto jugador 2 gana la ronda
game.pointWonBy(2);
// Quiero poder ver como va la puntuación de un juego
console.log(game.getRoundsScore()); // Alberto C 0 David J 1
// La primera ronda es para David le quedan 3 para ganar un juego

game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
// David gana 2º ronda
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
// David gana 3º ronda
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
game.pointWonBy(2); // Player 2 wins the game
// David gana 4º ronda
// Primer juego ganado
console.log(game.getMatchScore()); // Alberto C 0 David J 1


game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
// gana ronda 1º
game.pointWonBy(2); // Jugador 2 anota un punto

game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
// gana ronda 2º
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
// gana ronda 3º
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
game.pointWonBy(2); // Jugador 2 anota un punto
// gana ronda 4º
// Método para ver los juegos de cada jugador
console.log(game.getMatchScore()); // Alberto C 0\nDavid J 2
// método para ver el ganador. Si aún no hay ganador retornar null
console.log(game.getWinner()); // Output: "David J"

