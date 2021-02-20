#!/usr/bin/env node
// roll character stats
let statGenerator = () => {
    let strength = Math.floor(Math.random() * 20) + 1
    let dexterity = Math.floor(Math.random() * 20) + 1
    let constitution = Math.floor(Math.random() * 20) + 1
    let intelligence = Math.floor(Math.random() * 20) + 1
    let wisdom = Math.floor(Math.random() * 20) + 1
    let charisma = Math.floor(Math.random() * 20) + 1
    let stats = "Strength: "+strength+"\n"+
    "Dexterity: "+dexterity+"\n"+
    "Constitution: "+constitution+"\n"+
    "Intelligence: "+intelligence+"\n"+
    "Wisdom: "+wisdom+"\n"+
    "Charisma: "+charisma
    return stats
}

console.log(statGenerator())