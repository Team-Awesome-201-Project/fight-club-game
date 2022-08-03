'use strict';


function criticalStart() {
    let crit = Math.floor(Math.random() * 100);
    if (crit <= 10) {
        return true;
    }
    return false;
}

function gameLogic(playerButtonClick) {
    let playerTurn = '';
    let bossTurn = '';
    let playerIncDmg = 0;
    let bossIncDmg = 0;
    let playerDefense = false;
    // let bossDefense = false;

    if (playerButtonClick = 'attack') {
        player1.attackStart(player1.attack[0], attack[1]);
    }

    else if (playerButtonClick = 'special attack') {
        player1.specialAttackStart(player1.specialAttack[0], specialAttack[1]);
    }

    else if (playerButtonClick = 'defend') {
        player.defendStart();
    }




}
