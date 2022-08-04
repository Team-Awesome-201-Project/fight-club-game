'use strict';

let combatLogArray = [];




console.log(boss1.bAttack[0]);



function criticalStart() {
    let crit = Math.floor(Math.random() * 100);
    if (crit <= 10) {
        console.log(crit);
        return true;
    }
    console.log(crit);
    return false;


}

function bossPickRandomizer() {
    return Math.floor(Math.random() * (2 - 1 + 1) + 1);
}

function gameLogic(playerButtonClick) {
    let player = '';
    let boss = bossArr[0];
    let playerIncDmg = 0;
    let bossIncDmg = 0;
    let playerDefense = false;
    let bossMove = bossPickRandomizer();

// Player fight sequence
    if (playerButtonClick = 'attack') {
        playerIncDmg += newPlayer.attackStart(newPlayer.attack[0], newPlayer.attack[1]);
        console.log(`Player does: ${playerIncDmg} damage`);
    } else if (playerButtonClick = 'specialAttack') {
        playerIncDmg += newPlayer.specialAttackStart(newPlayer.specialAttack[0], specialAttack[1]);
        console.log(playerIncDmg);
    } else if (playerButtonClick = 'defend') {
        player.defendStart();
    }

// Damage to boss
    boss.newHealth(playerIncDmg);
    console.log(`Boss hit for: ${playerIncDmg}`);
    console.log(`Boss has: ${boss.healthPoints} health left`);

    if (boss.healthPoints === 0) {
=======
}

function bossPickRandomizer() {
    return Math.floor(Math.random() * (2 - 1 + 1) + 1);
}

function gameLogic(playerButtonClick) {
    let player = '';
    let boss = '';
    let playerIncDmg = 0;
    let bossIncDmg = 0;
    let playerDefense = false;
    let bossMove = bossPickRandomizer();

// Player fight sequence
    if (playerButtonClick = 'attack') {
        playerIncDmg += player1.attackStart(player1.attack[0], player1.attack[1]);
        console.log(`Player does: ${playerIncDmg} damage`);
    } else if (playerButtonClick = 'specialAttack') {
        playerIncDmg += player1.specialAttackStart(player1.specialAttack[0], specialAttack[1]);
        console.log(playerIncDmg);
    } else if (playerButtonClick = 'defend') {
        player.defendStart();
    }

// Damage to boss
    boss1.newHealth(playerIncDmg);
    console.log(`Boss hit for: ${playerIncDmg}`);
    console.log(`Boss has: ${boss1.bHealthPoints} health left`);

    if (boss1.bHealthPoints === 0) {

        console.log('Win!');
        console.log('Reminder to update local storage!');
        console.log('Reminder to call new boss');
        // Update local storage
        // Call next boss

    } else {
        console.log('Boss: Now its my turn');
    }


// Boss fight sequence
    if (bossMove === 1) {

        bossIncDmg += boss.attackStart(boss.attack[0], boss.attack[1])
        console.log(`Boss does: ${bossIncDmg} damage`);
    } else {
        bossIncDmg += boss.specialAttackStart(boss.specialAttack[0], boss.specialAttack[1]);
        console.log(`Boss does: ${bossIncDmg} damage`);

// Damage to player

    newPlayer.newHealth(bossIncDmg);
    console.log(`Player hit for: ${newPlayer.healthPoints}`);

    if (newPlayer.healthPoints === 0) {

        console.log('Defeat!');
        console.log('Reminder to update local storage!');
        console.log('Reminder to call to main page/un-render');
        console.log('Reminder to update leaderboard');
        // Update local storage
        // Call to main page / un-render
    } else {
        console.log('Player: Now its my turn');
    }
}

gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');
gameLogic('attack');

