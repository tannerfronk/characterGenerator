#!/usr/bin/env node
let races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"]

let raceGen = () => {
    let num = Math.floor(Math.random() * 8) + 0
    return races[num]
}

console.log(raceGen())