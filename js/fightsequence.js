'use strict';

let combatLogArray = [];




function criticalStart() {
    let crit = Math.floor(Math.random() * 100);
    if (crit <= 10) {
        return true;
    }
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
    console.log(`Boss has: ${boss.bHealthPoints} health left`);

    if (boss.bHealthPoints === 0) {
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
        bossIncDmg += boss.attackStart(boss.bAttack[0], boss.bAttack[1])
        console.log(`Player does: ${bossIncDmg} damage`);
    } else {
        bossIncDmg += boss.specialAttackStart(boss.bSpecialAttack[0], boss.bSpecialAttack[1])
        console.log(`Player does: ${bossIncDmg} damage`);
        console.log('Ahhhahaha, how did that feel!?');
    }

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

