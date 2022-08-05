'use strict';

let combatLogArray = [];
let combatLog = document.querySelector(".combatLog")





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
    console.log('boss[]', i);
    let boss = bossArr[i];
    console.log(bossArr);
    let playerIncDmg = 0;
    let bossIncDmg = 0;
    let playerDefense = false;
    let bossMove = bossPickRandomizer();

    // Player fight sequence
    if (playerButtonClick = 'attack') {
        playerIncDmg += newPlayer.attackStart(newPlayer.attack[0], newPlayer.attack[1]);
        console.log(`Player does: ${playerIncDmg} damage`);
        // combatLog.innerHTML=`Player does: ${playerIncDmg} damage`;
        


    } else if (playerButtonClick = 'specialAttack') {
        playerIncDmg += newPlayer.specialAttackStart(newPlayer.specialAttack[0], specialAttack[1]);
        console.log(`Player does: ${playerIncDmg} damage`);
        
    } else if (playerButtonClick = 'defend') {
        player.defendStart();

    }
    // Damage to boss
    boss.newHealth(playerIncDmg);
    console.log(`Boss hit for: ${playerIncDmg}`);
    console.log(`Boss has: ${boss.healthPoints} health left`);


    if (boss.healthPoints === 0) {
        alert('Win!');
        console.log('Reminder to update local storage!');
        console.log('Reminder to call new boss');
        // localStorage.clear();
        newPlayer.totalWins ++;
      gameEnd();
      newBoss = boss;
      renderCharacters();

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
        console.log('Ahhhahaha, how did that feel!?');
    }

    // Damage to player
    newPlayer.newHealth(bossIncDmg);
    console.log(`Player hit for: ${newPlayer.healthPoints}`);
    combatLog.innerHTML = `<p> player does :${playerIncDmg} damage</p><p>Boss has ${boss.healthPoints} health left</p><p>Boss has done ${bossIncDmg} damage.</p><p>Player has ${newPlayer.healthPoints} left.</p>`
    if (newPlayer.healthPoints === 0) {

        alert('defeat')
        newPlayer.totalLosses++ ;
        console.log('Reminder to call to main page/un-render');
        console.log('Reminder to update leaderboard');
        
       gameEnd();
        

        // Call to main page / un-render
    } else {
        console.log('Player: Now its my turn');
    }
    
}

function gameEnd() {
    localStorage.clear();
    stringifiedPlayer = JSON.stringify(newPlayer);
    localStorage.setItem('storedPlayer', stringifiedPlayer);
    moveSection.setAttribute("class","dont-use");
    console.log('game eneded moving to next index', i);
    if(i < bossArr.length){
     i++; 
    }
else {
    i=0;
}
console.log(i);
boss = bossArr[i];
console.log(bossArr[i]);
}

