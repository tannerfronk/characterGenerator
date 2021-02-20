#!/usr/bin/env node
// 120 backgrounds
let backgrounds = ["Entertainer", "Gladiator", "Folk Hero", "Iron Route Bandit", "Ticklebelly Nomad", "Caravan Specialist", "Sage", "Cloistered Scholar", "Far Traveler", "Knight of the Order", "Haunted One", "Outlander", "Pirate", "Sailor", "Soldier", "City Watch", "Mercenary Veteran", "Uthgardt Tribe Member", "Earthspur Miner", "Harborfolk", "Phlan Refugee", "Initiate", "Charlatan", "Criminal", "Spy", "Urban Bounty Hunter", "Black Fist Double Agent", "Stojanow Prisoner", "Gate Urchin", "Secret Identity", "Shade Fanatic", "Mulmaster Aristocrat", "Heretic", "Knight", "Noble", "Sage", "Clan Crafter", "Cloistered Scholar", "Far Traveler", "Knight of the Order", "Waterdhavian Noble", "Vizier", "Archaeologist", "Acolyte", "Guild Artisan", "Guild Merchant", "City Watch", "Clan Crafter", "Courtier", "Faction Agent", "Investigator", "Urban Bounty Hunter", "Black Fist Double Agent", "Hillsfar Merchant", "Phlan Refugee", "Anthropologist", "Soldier", "Dragon Casualty", "Shade Fanatic", "Initiate", "Investigator", "Haunted One", "Trade Sheriff", "Inquisitor", "Hermit", "Cloistered Scholar", "Knight of the Order", "Ticklebelly Nomad", "Cormanthor Refugee", "Pirate", "Sailor", "Stojanow Prisoner", "Hillsfar Smuggler", "Entertainer", "Gladiator", "Mulmaster Aristocrat", "Guild Artisan", "Guild Merchant", "Knight", "Noble", "Courtier", "Knight of the Order", "Mercenary Veteran", "Urban Bounty Hunter", "Waterdhavian Noble", "Hillsfar Merchant", "Trade Sheriff", "Acolyte", "Hermit", "Cloistered Scholar", "Far Traveler", "Knight of the Order", "Haunted One", "Vizier", "Anthropologist", "Inquisitor", "Heretic", "Charlatan", "Urchin", "Gate Urchin", "Harborfolk", "Criminal", "Spy", "Urchin", "Urban Bounty Hunter", "Iron Route Bandit", "Phlan Insurgent", "Hillsfar Smuggler", "Secret Identity", "Folk Hero", "Outlander", "Far Traveler", "Uthgardt Tribe Member", "Dragon Casualty", "Phlan Insurgent", "Haunted One", "Cormanthor Refugee", "Caravan Specialist", "Earthspur Miner", "Archaeologist"]

let backgroundGenerator = () => {
    let num = Math.floor(Math.random() * 119) + 0
    return backgrounds[num]
}

console.log(backgroundGenerator())