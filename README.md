![Logo](https://raw.githubusercontent.com/Leobrtl/thebus-rpc/main/logo.png)
# Overview
This sourcecode is here to use Discord RPC for The Bus, a game made by TML Studios. You can easily edit configuration file to edit what you want to display on your Discord profile, such as buttons, images, etc using your own Discord application or the default one.

![image](https://user-images.githubusercontent.com/29234452/208965256-c4318db9-7c04-43c5-970d-35edc4484376.png)


# Prerequisites
- A computer with an internet connection
- A text editor (I use Visual Studio Code)
- NodeJS installed

# Installing NodeJS
1. Go to the [NodeJS website](https://nodejs.org/en/download/) and download the latest version of NodeJS
2. Run the installer and follow the instructions
3. Open a terminal and type `node -v` to check if NodeJS is installed

# Installing the modules
1. Download the script on "Code" button and "Download ZIP"
2. Extract to a folder on your computer
3. Open a terminal and navigate to the folder where the package.json file is located
4. Type `npm install` to install all the modules

# Running the script
1. Open a terminal and navigate to the folder where the package.json file is located
2. Type `npm start` to run the script

# Configuring the script

![image](https://user-images.githubusercontent.com/29234452/208965004-9e3abb34-f026-498c-a188-7f11521f1ff3.png)

- DISCORD_APP_ID: By default is 1052523461140021278, if you want to use custom, please refer to the "Discord application Setup" section.
- RPC_DETAILS & RPC_STATE: Here, you can simply write what you want, or keep it like default (Driving a bus / In Berlin)
- Buttons:
    - Buttons need to be always 2.
    - If you want to edit buttons, simply change label and url by what you want. URL need to be a valid URL

# Discord Application Setup

- By default, i've created a "The Bus RPC" app, default configuration of config.json file (appid: 1052523461140021278)

- Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application
- Go to the Rich Presence tab and upload your images
- Go to the OAuth2 tab and enable the "rpc" scope
- Copy the Client ID and paste it in the config.json file
- Launch the script

# Contributing
- Fork the repository
- Create a new branch
- Make your changes
- Create a pull request


# Troubleshooting
- If you get an error when running `npm install`, try running `npm install --no-bin-links` instead
- If you get an error when running `npm start`, try running `npm start --no-bin-links` instead

## Discord App Id is not set or invalid
![image](https://user-images.githubusercontent.com/29234452/208963736-739ae705-6661-48b7-b459-ad959eae4347.png)

This problem occurs when your "App Id" is invalid in the config.json file, by default the application ID is "1052523461140021278". 
However, you may have changed this, if so, please refer to the "Discord application Setup" section.


# Credits
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Markdown](https://daringfireball.net/projects/markdown/)
- [TML Studios](https://tml-studios.de/)
- [My GitHub](https://github.com/Leobrtl)
