'use strict';

let atk = [5, 10];
let def = 5;
let spa = [15, 20];
let healthPoints = 100;

console.log(healthPoints);
console.log(test());

// Attack function (takes both "attack" and "special attack" moves)
// Use <button onclick ="attack(atk[0], atk[1])">Attack</button> to call for attack
// Use <button onclick ="attack(spa[0], spa[1])">Attack</button> to call for special attack
function attack(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let crit = critical();
    if (crit === false) {
        let dmg = Math.floor(Math.random() * (max - min + 1) + min);
        return healthPoints = healthPoints - dmg;
    }
    else if (crit === true) {
        let critDmg = Math.floor(Math.random() * (max - min + 1) + min) * 2;
        return healthPoints = healthPoints - critDmg;
    }
}

// Defend function
// Use <button onclick ="defend()">Attack</button> to call
function defend(num1, num2) {
    num1 = Math.ceil(num1);
    return Math.floor(num1 - num2);
}

// Critical strike function
function critical() {
    let crit = Math.floor(Math.random() * 100);
    if (crit <= 10) {
        return true;
    }
    return false;
}

// Tests the HP reduction 
function test() {
    while (healthPoints > 0) {
        console.log(attack(atk[0], atk[1]));
    }
    console.log('Game Over!');
    return healthPoints = 0;
}

