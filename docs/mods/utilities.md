# Aalenian Utilities
**Aalenian Utilities** adds a number of server features, administrative tools, and chat commands to Path of Titans
## Setup
Run `/au` in-game for configuration and documentation! At least one Aalenian Controller creator mode object must exist on the server for every feature to work, so add one to your default creator mode save!
## Chat Commands
### Commands:
> `/commands` (`/c`): lists commands available to everyone, that list changing to reflect which features you have enabled
### Optional Commands: 
> /unstuck, /tp, /marks, /growth (/g), /zoom (/z), /moon, /baby, /leaderboard (/lb), /carryable, /give [Marks], /bank, /transfer [Username] [Marks], /fillnest, /poke, /shed
### Admin/RCON Commands (Non-Exhaustive List):
> /kill [Username], /smite [Username], /execute [Username], /boss [Username], /freeze [Username], /restore [Username], /zoom [Username], /moon [Username], /zerogravity [Username], slow [Username], /drop [Username], /push [Username], /shield [Username], /listplayerpois, /light, /dark, /creator, /spectator
## Optional Tools
### Teleportation
* Configure `/tp` to use unlimited custom tp locations each with configurable costs and per-PLAYER cooldowns. Optional 30 second sleeping requirement therefor.
* Solo-friendly waystones, or "Advanced Waystones" allow players to teleport from one waystone to another at a configurable cost. Implement an optional 30 second sleeping requirement.
* Unlimited Teleport Stone placements. Players may teleport from one to another at a configurable cost, this system interfacing with Advanced Waystones. Implement an ptional 30 second sleeping requirement.
* Temporary post-waystone and post-teleport immunity, with which players cannot deal or recieve damage for a configurable amount of seconds upon teleporting
### Spawning
* Unlimited custom spawn locations
* Temporary spawn immunity, with which players cannot deal or recieve damage for a configurable amount of seconds upon spawning
### Other
* Configure `/marks` with a per-CHARACTER cooldown and customizable amount
* Running `/leaderboard` (`/lb`) shows a leaderboard with the top 10 killers, bucket-kickers, and K/D ratios (as well as a player's own standing); leaderboard data is extractable with RCON
* Death mesages
* Join and leave messages
* Instant shedding
## Creator Mode Objects
### Power Stones
* Safe Zone Stone: players inside the effect radius cannot deal or recieve damage, while players in combat are unable to enter
* Regeneration Stone: increases healing rate by a factor of 10
* Moon Stone: gives players in the effect radius moon gravity
* Teleport Stone
  * *only placeable from the configuration panel*
* Placeable Waystone
  * *limit of 15 land and 5 underwater placements*
### Other
* Aalenian Controller: one or more must exist on the server or not all features of htis mod will work properly
* Safety Cone
## Webhooks
New webhooks are available for you to add to your server's Game.ini, see them just below!
```ini
[ServerWebhooks]
PlayerVoiceCall=""
PlayerChangeRestState=""
```
## Installation
Add the following line of code to your server's GameUserSettings.ini
```ini
[PathOfTitans.Mods]
EnabledMods=(ModSku="UGC_M_Y250GRMEVZ_SK", BuildSku="release")
```