#!/usr/bin/env node

let charClass = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"]

let classGen = () => {
    let num = Math.floor(Math.random() * 12) + 0
    return charClass[num]
}

console.log(classGen())