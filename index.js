/*

The Bus Unofficial RPC - Discord Rich Presence for The Bus
Github: https://github.com/Leobrtl/thebus-rpc
Developed by leobrtlt#0001
The Bus steam link: https://store.steampowered.com/app/1366540/The_Bus/
Created by TML Studios

This software is not affiliated with TML Studios or any other company.

This source code is free to use, modify, but you must keep this header and credits the original author (leobrtlt#0001)

*/


var colors = require('colors/safe');
const rpc = require("discord-rpc");
const config = require('./config.json');



console.log(colors.white('[The Bus RPC]'), colors.white(`-----------------------------------------------`));
console.log(colors.magenta('[The Bus RPC]'), colors.yellow(`The Bus Unofficial RPC`));
console.log(colors.magenta('[The Bus RPC]'), colors.yellow(`Developed by leobrtlt#0001`));
console.log(colors.magenta('[The Bus RPC]'), colors.white(`Source code available on GitHub: https://github.com/Leobrtl/thebus-rpc`));
console.log(colors.magenta('[The Bus RPC]'), colors.red(`This software is not affiliated with TML Studios`));
console.log(colors.magenta('[The Bus RPC]'), colors.red(`This software is not affiliated with Discord`));
console.log(colors.magenta('[The Bus RPC]'), colors.red(`This software is not affiliated with The Bus`));
console.log(colors.magenta('[The Bus RPC]'), colors.red(`This software is not affiliated with any other company`));
console.log(colors.white('[The Bus RPC]'), colors.white(`-----------------------------------------------`));
console.log(colors.yellow('[The Bus RPC]'), colors.green(`Loading configuration file...`));
if (config.DISCORD_APP_ID == "") {
  console.log(colors.yellow('[The Bus RPC]'), colors.red(`Discord App ID is not set. Please edit configuration file.`));
  process.exit(1);
} else {
  console.log(colors.yellow('[The Bus RPC]'), colors.green(`Discord App ID is set to ${colors.red(config.DISCORD_APP_ID)}`));

  // login to discord
  const discord = new rpc.Client({
    transport: 'ipc'
  });
  discord.login({
    clientId: config.DISCORD_APP_ID
  }).catch(() => {
    console.log(colors.yellow('[The Bus RPC]'), colors.red(`Discord App ID is not set or invalid. Please edit configuration file and re-launch this app.`));

  });
  discord.on('ready', () => {
    console.log(colors.yellow('[The Bus RPC]'), colors.green(`Discord Rich Presence activated for ${colors.red(discord.user.username)}`));
    discord.request('SET_ACTIVITY', {
      pid: process.pid,
      activity: {
        details: config.RPC_DETAILS,
        state: config.RPC_STATE,
        timestamps: {
          start: Date.now()
        },
        assets: {
          large_image: 'thebus',
          large_text: "The Bus - Developed by TML Studios",
          small_image: 'thebusvbc',
          small_text: "Using The Bus Unofficial RPC", // please, do not edit this line, respect the author and the project
        },
        buttons: [config.buttons[0], config.buttons[1]]
      }
    });
  });



}