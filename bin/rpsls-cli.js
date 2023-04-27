#!/usr/bin/env node

import minimist from "minimist"; // To read inputs
import { rpsls_function } from "../lib/rpsls.js"; //To create game logic

const args = minimist(process.argv.slice(2));

const help_message = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`;

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`;

//If the player needs help, display this
if (args.help_message || args.h) {
    console.log(help_message);
    process.exit(0);
}

//If they need a refresher on the rules, display this
if (args.rules || args.r) {
    console.log(rules);
    process.exit(0);
}

//Prepare the player input to be fed into the logic
let player_attack = args._[0];

try {
    //Play the game
    console.log(JSON.stringify(rpsls_function(player_attack)));
}
catch (error){
    //If something doesn't work, display the help and rules to try to get the player to correct their mistakes.
    console.log(help_message);
    console.log(rules);
    process.exit(1);
}
