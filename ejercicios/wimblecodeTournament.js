import { createMatch } from "./wimblecode.js";

const createTournament = (player1, player2, player3, player4) => {

    const finalists = [];

    const randomMatch = (player1, player2) => {
        const match = createMatch(player1, player2);
        let randomPointWinner;
        do {
            randomPointWinner = Math.floor(Math.random() * 2) + 1;
            match.pointWonBy(randomPointWinner);
        } while (match.getWinner() === null)
        return match;
    };

    const semifinal1 = () => {
        const semifinalMatch = randomMatch(player1, player2);
        finalists.push(semifinalMatch.getWinner());
        return semifinalMatch;
    };

    const semifinal2 = () => {
        const semifinalMatch = randomMatch(player3, player4);
        finalists.push(semifinalMatch.getWinner());
        return semifinalMatch;
    };

    const final = () => (randomMatch(finalists[0], finalists[1]));

    return { semifinal1, semifinal2, final };
}

console.log("-------------------Simulación del torneo-------------------");
let myTournament = createTournament('Alberto C', 'David J', 'Javier M', 'Edu Aguilar');

const semifinal1Match = myTournament.semifinal1();
console.log("Semifinal 1 ganador:", semifinal1Match.getWinner())
console.log("Semifinal 1 marcador:", semifinal1Match.getMatchScore())
const semifinal2Match = myTournament.semifinal2();
console.log("Semifinal 2 ganador:", semifinal2Match.getWinner())
console.log("Semifinal 2 marcador:", semifinal2Match.getMatchScore())
const finalMatch = myTournament.final();
console.log("Final ganador:", finalMatch.getWinner())
console.log("Final marcador:", finalMatch.getMatchScore())
