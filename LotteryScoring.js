/**
 *  Author: Steven Balagtas
 *  Description: A solution that will check if John and Mary has won any games in any division.
 */

/**
 * Test data
 */
let johnGame1 = [7, 9, 13, 24, 33, 40];
let johnGame2 = [16, 19, 22, 29, 31, 39];
let johnGame3 = [1, 7, 18, 22, 30, 36];
let John = {
    playerName : 'John',
    tickets : [johnGame1, johnGame2, johnGame3]
}

let maryGame1 = [2, 22, 13, 24, 32, 39];
let maryGame2 = [7, 22, 24, 31, 33, 40];
let maryGame3 = [3, 7, 18, 21, 37, 38];
let Mary = {
    playerName : 'Mary',
    tickets : [maryGame1, maryGame2, maryGame3]
}

let winningGame = [7, 22, 24, 31, 33, 40]

/**
 * Check ticket score function
 * @param {array} ticket
 * @param {array} game
 * returns an object with game result
 */
let checkTicketScore = (ticket, game) => {
    const minWin = 3;
    let matches = [];
    let numOfMatches = 0;
    let didWin = false;

    // Check if any ticket numbers are in game
    for (let i = 0; i < ticket.length; i++) {
        if (game.includes(ticket[i])) {
            matches.push(ticket[i]);
            numOfMatches++;
        }
    }

    numOfMatches >= minWin ? didWin = true : didWin = false;

    // Return game result
    return gameResult = {
        game: game,
        didWin: didWin,  
        numOfMatches: numOfMatches,
        matches: matches
    }
}

/**
 * Return results function
 * This is the main function that checks if a player has won any games
 */
let returnResults = (player) => {
    let totalWins = 0;

    console.log(`\n--------------------- ${player.playerName}'s Games ---------------------\n`)
    // Go through player's tickets and check scores
    for (let i = 0; i < player.tickets.length; i++) {
        let gameNum = i + 1;
        let result = checkTicketScore(player.tickets[i], winningGame);

        if (result.didWin) totalWins++;

        console.log(buildResponse(player.playerName, result, gameNum));
    }
    console.log(`${player.playerName} has won a total of: ${totalWins} out of ${player.tickets.length} games\n`);
}

/**
 * Helper functions 
 */
let buildResponse = (playerName, result, gameNum) => {
    if (result.didWin) {
        return `${playerName} wins a division ${whatDiv(result.numOfMatches)} in game #${gameNum} with matches ${result.matches.join(', ')} in game ${result.game.join(', ')}\n`;
    } else {
        return `It appears that ${playerName} didn't win any divisions in game #${gameNum}, better luck next time!\n`;
    }
}

let whatDiv = (numOfMatches) => {
    switch (numOfMatches) {
        case 3:
            return 4;
        case 4:
            return 3;
        case 5:
            return 2;
        case 6:
            return 1;
    }
}

// Test solution to the task here:
returnResults(John);
returnResults(Mary);

/**
 * -------------------- BONUS TASK ------------------- 
 */
// Generate all 84 unique games from Jack's system 9 entry
let jackSystemGame = [3, 5, 7, 11, 22, 24, 31, 34, 40];

let getUniqueGames = (jackSystemGame) => {
}