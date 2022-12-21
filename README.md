# Overview
This sourcecode is here to use Discord RPC for The Bus, a game made by TML Studios. You can easily edit configuration file to edit what you want to display on your Discord profile, such as buttons, images, etc using your own Discord application or the default one.

# Summary
This tutorial will show you how to install NodeJS and all the modules from the package.json file.

# Prerequisites
- A computer with an internet connection
- A text editor (I use Visual Studio Code)
- NodeJS installed
- NEXE for compiling the script into an executable file (optional)

# Installing NodeJS
1. Go to the [NodeJS website](https://nodejs.org/en/download/) and download the latest version of NodeJS
2. Run the installer and follow the instructions
3. Open a terminal and type `node -v` to check if NodeJS is installed

# Installing the modules
1. Open a terminal and navigate to the folder where the package.json file is located
2. Type `npm install` to install all the modules

# Running the script
1. Open a terminal and navigate to the folder where the package.json file is located
2. Type `npm start` to run the script

# Configuring the script
- Open the config.json file and change the values to your liking

# Discord Application Setup
- Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application
- Go to the Rich Presence tab and upload your images
- Go to the OAuth2 tab and enable the "rpc" scope
- Copy the Client ID and paste it in the config.json file
- Launch the script

# Installing NEXE (optional)
1. Open a terminal and type `npm install nexe -g` to install NEXE globally
2. Type `nexe -v` to check if NEXE is installed

# Compiling the script into an executable file
1. Open a terminal and navigate to the folder where the package.json file is located
2. Type `nexe -i index.js -o install-nodejs.exe` to compile the script into an executable file
3. The executable file will be located in the folder where the package.json file is located

# Contributing
- Fork the repository
- Create a new branch
- Make your changes
- Create a pull request


# Troubleshooting
- if you get an error while installing "npm i windows-build-tools -g", install in Powershell as administrator
- If you get an error when running `npm install`, try running `npm install --no-bin-links` instead
- If you get an error when running `npm start`, try running `npm start --no-bin-links` instead

# Credits
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Markdown](https://daringfireball.net/projects/markdown/)
- [TML Studios](https://tml-studios.de/)
- [My GitHub](https://github.com/Leobrtl)
