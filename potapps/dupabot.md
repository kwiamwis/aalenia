# DupaBot
DupaBot is an open-source JavaScript application which integrates Path of Titans (PoT) community servers with Discord community servers. One instance of DupaBot should run per Discord server, and can manage multiple PoT servers. 

A community wishing to employ DupaBot must host it's own instance. The DupaBot application exists as both a Docker image and as a Pterodactyl egg and yolk combination. Either version should run on the same hardware as your PoT servers.
## What is a Self-Hosted Discord Application?
Most Discord applications, also called bots, are added to Discord servers with the click of a button and set up on a third-party website or with a few slash commands. These applications only work because third-parties host them. Such a setup performs poorly at recieving a stream of many webhooks from a video game or executing many remote commands in that game.

The solution to this poor performance is for game hosting communities to host their own Discord application on the same hardware as their games. Such communities may register a Discord application in the [Discord developer portal](https://discord.com/developers/applications) and register a bot user for that application. Then it is possible to code and deploy the application in any language, though the most common are JavaScript and Python. 

DupaBot is one such application meant for PoT game hosting communities, coded in JavaScript and deployable with Docker or Pterodactyl. DupaBot does not have meaningful latency, does not collect or store your data, does not demand exclusivity (a PoT server can employ both DupaBot and any other application since it does not require webhooks to function), and is only offline when you tell it to be offline. Well, all that is true at least when there are no bugs at work.
## Registering a Discord Application and a Bot User
0. Please do not try to do this on your phone
1. Navigate to https://discord.com/developers/applications and create an application with a good name
2. Add an application profile image
3. Find your application id under "General Information" and **note it down**
4. Under "Installation" find "Installation Contexts" and deselect "User Install"
5. Under "Installation" find "Install Link" and select "None"
6. Under "Bot" find "Build-A-Bot" and select an icon, username, and banner
7. Under "Bot" find "Build-A-Bot" and reset your token, **noting it down**
8. Under "OAuth2" find "OAuth2 URL Generator" and add "bot" and "application.commands" to "scopes"
9. Under "OAuth2" find "OAuth2 URL Generator" and add "Administrator" to "permissions"
10. Under "OAuth2" find "OAuth2 URL Generator" and set "Integration Type" to "Guild Install"
11. Under "OAuth2" find "OAuth2 URL Generator", copy the "generated url", paste it into another browser tab, and install the application to your discord server
## DupaBot Docker Installation
DupaBot is not yet available for public use
## DupaBot Pterodactyl Installation
DupaBot is not yet available for public use
