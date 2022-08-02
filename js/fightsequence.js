'use strict';

let attack = [5, 10];
let defense = 5;
let specialAttack = [15, 20];
let healthPoints = 100;

let bAttack = [5, 10];
let bDefense = 5;
let bSpecialAttack = [15, 20];
let bHealthPoints = 100;


// console.log(healthPoints);
// console.log(test());

// Attack function (takes both "attack" and "special attack" moves)
// Use <button onclick ="attack(atk[0], atk[1])">Attack</button> to call for attack
// Use <button onclick ="attack(spa[0], spa[1])">Attack</button> to call for special attack
function attackStart(min, max, hp) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    hp = Math.ceil(hp);
    let crit = critical();
    if (crit === false) {
        let dmg = Math.floor(Math.random() * (max - min + 1) + min);
        return hp = hp - dmg;
    }
    else if (crit === true) {
        let critDmg = Math.floor(Math.random() * (max - min + 1) + min) * 2;
        return hp = hp - critDmg;
    }
}


// Call to reduce HP 
function newBHp() {
    return bHealthPoints = attack(atk[0], atk[1], bHealthPoints);
}
console.log(newBHp());

// Call to reduce HP 
function newHp() {
    return healthPoints = attack(bAttack[0], bAttack[1], healthPoints);
}
console.log(newHp());

// Defend function
// Use <button onclick ="defend()">Attack</button> to call
function defendStart(num1, num2) {
    num1 = Math.ceil(num1);
    return Math.floor(num1 - num2);
}

// Critical strike function
function criticalStart() {
    let crit = Math.floor(Math.random() * 100);
    if (crit <= 10) {
        return true;
    }
    return false;
}

// Healh reduction
function minusHealth() {

}

// Tests the HP reduction 
function test() {
    while (healthPoints > 0) {
        console.log(attack(atk[0], atk[1]));
    }
    console.log('Game Over!');
    return healthPoints = 0;
}

// function newHealthValue(oldValue) {
//     oldValue = 
//     return hp; 
// }
// console.log(newHealthValue);

function playerSelectAttack() {
    attackStart(attack[0], attack[1], bHealthPoints); 
}

function playerSelectSpecialAttack() {
    attackStart(specialAttack[0], specialAttack[1], bHealthPoints); 
}

function playerSelectDefense() {
    defendStart

}
