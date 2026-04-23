# DupaBot
DupaBot is an open-source JavaScript application which integrates Path of Titans (PoT) community servers with Discord community servers. One instance of DupaBot should run per Discord server, and can manage multiple PoT servers. 

A community wishing to employ DupaBot must host it's own instance. The DupaBot application exists as both a Docker image and as a Pterodactyl egg and yolk combination. Either version should run on the same hardware as your PoT servers.
## Why use a Self-Hosted Discord Application?
Most applications with Discord connectivity are added to Discord servers with the click of a button and are set up on other websites or with a few slash commands. These applications only work because companies or individuals other than Discord host them. Such applications perform poorly at recieving streams of many webhooks from video game servers and executing many remote commands therein.

The solution to this poor performance is for communities that host game servers to host any applications communicating with these servers on the same hardware as these servers. Such communities may register Discord applications in the [Discord developer portal](https://discord.com/developers/applications) and register bot users for their applications. Communities can code and deploy such applications in any language, though the most common are JavaScript and Python.
## Functionalities
DupaBot is modular such that all functionalities can be disabled. Functionalities not requiring webhook reception include:
* Enabling PoT command execution from Discord
* Displaying a dashboard for each connected PoT server that shows the players online and server conditions
* Displaying a leaderboard for each connected PoT server

These functionalities require webhook reception:
* Syncing a PoT server's "Global" chat with a Discord chat channel (PlayerChat webhook required)
* Syncing Discord roles to all connected PoT servers (PlayerLink webhook required)
* Log any webhooks sent to the application to a Discord channel
## Pre-Installation
Before installing and using DupaBot, you must register an application with Discord and create an associated Discord bot user:
0. Please do not try to do this on your phone
1. Navigate to https://discord.com/developers/applications and create an application with a good name
2. Add an application profile image
3. Find your application id under "General Information", **saving it somewhere safe**
4. Under "Installation" find "Installation Contexts" and deselect "User Install"
5. Under "Installation" find "Install Link" and select "None"
6. Under "Bot" find "Build-A-Bot" and select an icon, username, and banner
7. Under "Bot" find "Build-A-Bot" and reset your token, **saving it somewhere safe**
8. Under "OAuth2" find "OAuth2 URL Generator" and add "bot" and "application.commands" to "scopes"
9. Under "OAuth2" find "OAuth2 URL Generator" and add "Administrator" to "permissions"
10. Under "OAuth2" find "OAuth2 URL Generator" and set "Integration Type" to "Guild Install"
11. Under "OAuth2" find "OAuth2 URL Generator", copy the "generated url", paste it into another browser tab, and install the application to your discord server
## DupaBot Docker Installation
DupaBot is not yet available for public use
## DupaBot Pterodactyl Installation
DupaBot is not yet available for public use

DupaBot does not have meaningful latency, does not collect or store your data, does not demand exclusivity (a PoT server can employ both DupaBot and any other application since it does not require webhooks to function), and is only offline when you tell it to be offline.
