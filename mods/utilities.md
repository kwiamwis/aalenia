# Aalenian Utilities
Aalenian Utilities adds a number of server features, administrative tools, and chat commands to Path of Titans.
## Setup
Run `/au` in-game for configuration and documentation! At least one Aalenian Controller creator mode object must exist on the server for every feature to work, so add one to your default creator mode save!

To add creator objects to the default save slot, add those objects to your server then run `/savecreatormode [SlotName]`. Just replace `[SlotName]` with a default save slot name of your choosing, such as `RadDefaultName`.

When your server is shut down, you can enable that slot as your default by adding the following to your server's Game.ini
```ini
[/Script/PathOfTitans.IGameMode]
DefaultCreatorModeSave=RadDefaultName
```

## Chat Commands
Commands are either *unrestricted*, *optionally unrestricted*, or *restricted*. 
* Unrestricted commands are always available to every player
* Optionally unrestricted commands can be confugured to be always available to every player, or to only available to players possesing the command's permission attribute
* Restricted commands are only available to players possesing the command's permission attribute
* System commands are used by the game to comminucate with itself. So not be concerned if you see these in your logs. Using them yourself will not break the game, but likely will do nothing unless you know exactly what you are doing.

::: details Unrestricted

`/AGID [Username/AGID]?`  Returns AGID of you or specified player copied to your clipboard

`/Attribute [Attribute]`  Returns specified attribute value for your current character

`/AU`  Opens documentation and configuration for Aalenian Utilities 

`/Aussie`  Gives you an Australian gaming experience

`/Commands/C`  Lists chat commands currently available to everyone on this server

`/Discord`  Returns discord invite link for this server copied to your clipboard
>
>RCON Supported

`/Dupa`   (/≧▽≦)/

`/Invisible`  Toggles your visibility for photographic purposes, other players still able to see you

`/Uptime`  Returns uptime in seconds copied to your clipboard
>
>RCON Supported

:::
::: details Optionally Unrestricted

`/Activity`  Lists PoIs and their respective player counts
>
>+permission=playerinfo

`/Adult`  Sets your growth to adult
>
>+permission=set attribute

`/Baby`  Makes you a hatchling until the effect is removed
>
>+permission=set attribute

`/Bank`  Opens the bank menu. Shortcut the menu with /Withdraw [Marks] and /Deposit [Marks]
>
>+permission=setmarks

`/Carryable`  Makes you light enough to be carried by any creature until the effect is removed
>
>+permission=set attribute

`/Deposit [Marks]`  Deposits specified marks from your purse into your bank account
>
>+permission=setmarks

`/FillNest`  Fills nest with all resources and sets its health to 100%
>
>+permission=replenishnest

`/Give [Username/AGID] [Marks]`  Transfers marks from your character to the character of the specified player (Feature togglable with /au)
>
>+permission=setmarks

`/Growth/Grow/G`  Brings up a menu allowing you to select your growth. Shortcut the menu with /Adult, /Subadult, /Immature, /Juvenile, or /Hatchling 
>
>+permission=set attribute

`/Hatchling`  Sets your growth to hatchling
>
>+permission=set attribute

`/Home`  Sends you to your Home Cave if you have the "Comfortable Nest" effect
>
>+permission=teleport

`/Immature`  Sets your growth to immature
>
>+permission=set attribute

`/Juvenile`  Sets your growth to juvenile
>
>+permission=set attribute

`/Leaderboard`  Shows leaderboard
>
>+permission=playerinfo

`/Marks`  Gives you marks! 
>
>+permission=setmarks

`/Menu`  shows the escape menu
>
>+permission=serverinfo

`/Moon`  Grants moon gravity until the effect is removed
>
>+permission=set attribute

`/Poke [Username/AGID]?`  Pokes you or a specified player
>
>+permission=set attribute

`/Shed/S [Username/AGID]?`  Skipshed shortcut which allows all players to use the command if configured
>
>+permission=skipshed

`/Subadult`  Sets your growth to subadult
>
>+permission=set attribute

`/TP`  Shows you a menu of enabled teleport locations which you may select. Shortcut the menu with /TP [LocationName]
>
>+permission=teleport

`/Transfer [Username/AGID] [Marks]`  Transfers marks from your bank account to that of another player. Transfer marks to an offline player's account by specifying their AGID rather than their username
>
>+permission=setmarks

`/Unstick/Unstuck/U`  Unsticks you if stuck
>
>+permission=teleport

`/Withdraw [Marks]`  Withdraws specified marks from your bank account to your purse
>
>+permission=setmarks

`/Zoom`  Grants you super speed
>
>+permission=set attribute

:::
::: details Restricted

`/AdvancedListPlayers`  Displays detailed player information for all players
>
>+permission=playerinfo
>
>RCON Supported

`/AdvancedPlayerInfo [Username/AGID]`  Displays detailed player information for specified player
>
>+permission=playerinfo
>
>RCON Supported

`/AdvancedServerInfo`  Displays detailed server information
>
>+permission=serverinfo
>
>RCON Supported

`/Australize [Username/AGID]`  Gives the specified player an Australian gaming experience
>
>+permission=set attribute
>
>RCON Supported

`/Boss [Username/AGID] [Level]?`  Starts a boss event starring the specified player, difficulty levels 1-10 defaulting to 3
>
>+permission=set attribute
>
>RCON Supported

`/ClearSaveGame [SaveGameSlotName]`  Deletes the save game object in the specified slot
>
>administrator access required
>
>RCON Supported

`/ClearTeleportCooldowns`  Clears cooldowns for all teleport locations
>
>administrator access required
>
>RCON Supported

`/Cloak [Username/AGID]`  Grants an invisibility cloak to a specified player
>
>+permission=set attribute
>
>RCON Supported

`/CM/Creator/CreatorMode`  Toggles creator mode when in spectator mode, giving you spectator mode if run the command as a dinosaur character
>
>creator access required

`/Combat [Username/AGID]`  Toggles the combat effect for the specified player
>
>+permission=set attribute
>
>RCON Supported

`/Conceal [Username/AGID]`  Grants full invisibility to a specified player
>
>+permission=set attribute
>
>RCON Supported

`/Dark`  Clears the skies and brings out the moon
>
>+permission=weather
>
>RCON Supported

`/Deage [Username/AGID]`  Makes the specified player a hatchling until the effect is removed
>
>+permission=set attribute
>
>RCON Supported

`/Degravitate [Username/AGID]`  Removes gravity from the specified player
>
>+permission=set attribute
>
>RCON Supported

`/Disintegrate [Username/AGID]?`  Erases from existance the active character of you or a specified player
>
>+permission=set attribute
>
>RCON Supported

`/Dislodge [Username/AGID]`  Unsticks the specified stuck player
>
>+permission=teleport
>
>RCON Supported

`/Drop [Username/AGID]`  Drops the specified player, probably killing them
>
>+permission=teleport
>
>RCON Supported

`/Elasticize [Username/AGID]`  The specified player will deal and take extreme knockback
>
>+permission=set attribute
>
>RCON Supported

`/Erase [Username/AGID]`  Erases from existance the specified player
>
>+permission=set attribute
>
>RCON Supported

`/Etherify [Username/AGID]`  Brings the specified character to the astral plane
>
>+permission=set attribute
>
>RCON Supported

`/Execute [Username/AGID]`  Executes the specified player for crimes against dinosauria
>
>+permission=set attribute
>
>RCON Supported

`/Fracture [Username/AGID]`  Break the bones of the specified player for one minute
>
>+permission=set attribute
>
>RCON Supported

`/Freeze [Username/AGID]`  Stops a specified player in their tracks
>
>+permission=set attribute
>
>RCON Supported

`/GetSettings`  Returns a string detailing the current configuration of Aalenian Utilities
>
>+permission=serverinfo
>
>RCON Supported

`/GlobalDilation [Dilation]`  Sets global time dilation
>
>administrator access required
>
>RCON Supported

`/GlobalMessage [Name] [Message]`  Send a message in global from [Name]
>
>administrator access required
>
>RCON Supported

`/GM`  toggles your godmode
>
>+permission=godmode

`/H`  heals you
>
>+permission=heal

`/Ignite [Username/AGID]?`  Ignites the active character of you or a specified player
>
>+permission=set attribute
>
>RCON Supported

`/Kill [Username/AGID]`  Kills the active character the specified player
>
>+permission=set attribute
>
>RCON Supported

`/Launch [Username/AGID] [X] [Y] [Z]`  Launches the specified player at the specified velocity in cm/s
>
>+permission=teleport
>
>RCON Supported

`/LeaderboardString`  Lists leaderboard info as a string
>
>+permission=playerinfo
>
>RCON Supported

`/Light`  Clears the skies and brings out the sun
>
>+permission=weather
>
>RCON Supported

`/ListPlayerPoIs`  Returns all player PoIs
>
>+permission=playerinfo
>
>RCON Supported

`/ListPoIOccupancy`  Lists PoIs and their respective player counts
>
>+permission=playerinfo
>
>RCON Supported

`/Lunarize [Username/AGID]`  Grants moon gravity to the specified player until the effect is removed
>
>+permission=set attribute
>
>RCON Supported

`/Nick [Username/AGID] [Nickname]`  Changes the username of the specified player temporarily. Commands will not work with the old username
>
>+permission=nick
>
>RCON Supported

`/Paralyze [Username/AGID]`  Paralyze the specified player for one minute
>
>+permission=set attribute
>
>RCON Supported

`/Ping [Username/AGID]`  returns roundtrip latency in milliseconds for the specified player
>
>+permission=playerinfo
>
>RCON Supported

`/PrivateAnnounce [Username/AGID]?`  Announce a message to only you or the specified player
>
>+permission=announce
>
>RCON Supported

`/Prod [Username/AGID]`  Prods the specified player
>
>+permission=set attribute
>
>RCON Supported

`/Push [Username/AGID] [Velocity]?`  Pushes the specified player away from you with optional velocity in cm/s
>
>+permission=set attribute

`/Quicken [Username/AGID]`  Grants super speed to the specified player
>
>+permission=set attribute
>
>RCON Supported

`/R`   heals you, removes your effects, and removes your cooldowns
>
>+permission=set attribute

`/Ragdoll [Username/AGID] [true, false]`  Sets the specified player's character's ragdoll state
>
>administrator access required
>
>RCON Supported

`/Regenerate [Username/AGID]`  The specified player will heal 10x faster
>
>+permission=set attribute
>
>RCON Supported

`/RemoveLocation [LocationName]`  Removes the specified location from the saved list of locations
>
>administrator access required
>
>RCON Supported

`/Restore/R [Username/AGID]`  heals, removes effects, and removes cooldowns from the specified player
>
>+permission=heal
>
>RCON Supported

`/Roofsend [Username/AGID]`  Places a specified player on the roof if one exists
>
>+permission=teleport
>
>RCON Supported

`/Rotation [Roll] [Pitch] [Yaw]`  Sets the rotation of the focused creator mode object to the specified rotation in degrees
>
>creator access required

`/Scale [X] [Y] [Z]`  Sets the scale of the focused creator mode object to the specified scale
>
>creator access required

`/Self [Command]`  Executes any standalone command on yourself
>
>creator access required

`/SetLocation [Username/AGID] [LocationName]`  Sets a location with the specified name at the location and rotation of the specified player's character
>
>administrator access required
>
>RCON Supported

`/SetNightLuminosity`  Sets the night luminosity to a value of your choosing. Select 30 to emulate a full moon, and 3.5 to emulate a new moon.
>
>administrator access required
>
>RCON Supported

`/Shield [Username/AGID] [Duration]?`  Grants immunity from damage and disables all abilities for the specified player for the optional specified duration in seconds
>
>+permission=heal
>
>RCON Supported

`/Slim [Username/AGID]`  Makes the specified player light enough to be carried by any creature until the effect is removed
>
>+permission=set attribute
>
>RCON Supported

`/Slow [Username/AGID]`  Slows a specified player
>
>+permission=set attribute
>
>RCON Supported

`/SM/Spectator/SpectatorMode`  Toggles spectator mode
>
>spectator access required

`/Smite [Username/AGID]`  You know what this does...
>
>+permission=set attribute
>
>RCON Supported

`/Speak`  Robots can talk?
>
>administrator access required
>
>RCON Supported

`/Tessellate [X] [Y] [Z]`  Moves the focused creator mode object the specified number of centimeters
>
>creator access required

`/Transport [Username/AGID] [LocationName]`  Send the specified player to the specified location configured with Aalenian Utilities, ignoring requirements such as costs and cooldowns
>
>+permission=teleport
>
>RCON Supported

:::
::: details System

`/commandsmarkdown` 
>
>administrator access required
>
>RCON Supported

`/enhancedwaystone` 

`/refreshadvancedcreatormodeobjects` 
>
>administrator access required
>
>RCON Supported

`/refreshenhancedwaystones` 
>
>administrator access required
>
>RCON Supported

`/refreshteleportstones` 
>
>administrator access required
>
>RCON Supported

`/setfeatureenabled` 
>
>administrator access required
>
>RCON Supported

`/setlocationparameter` 
>
>administrator access required
>
>RCON Supported

`/setparameter` 
>
>administrator access required
>
>RCON Supported

`/teleportstone` 

`/test` 
>
>administrator access required

`/testclient` 
>
>administrator access required

`/teststandalone` 
>
>administrator access required

`/waystone` 
>
>RCON Supported

:::


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
* Running `/leaderboard` or `/lb` shows a leaderboard with the top 10 killers, bucket-kickers, and K/D ratios (as well as a player's own standing); leaderboard data is extractable with RCON
* Death mesages
* Join and leave messages
* Instant shedding
## Creator Mode Objects
### Power Stones
* Immunity Stone: players inside the effect radius cannot deal or recieve damage, while players in combat are unable to enter
* Regeneration Stone: increases healing rate by a factor of 10
* Moon Stone: gives players in the effect radius moon gravity
* Telestone *(only placeable from the configuration panel)*
* Enhanced Waystone
* Placeable Home Rock
### Other
* Aalenian Controller: one or more must exist on the server or not all features of htis mod will work properly
* Safety Cone
* Football
## Webhooks
New webhooks are available for you to add to your server's Game.ini, see them just below!
```ini
[ServerWebhooks]
PlayerVoiceCall=""
PlayerChangeRestState=""
```
::: details PlayerVoiceCall
:::
::: details PlayerChangeRestState
:::
## Installation
Add the following line of code to your server's GameUserSettings.ini
```ini
[PathOfTitans.Mods]
EnabledMods=(ModSku="UGC_M_Y250GRMEVZ_SK", BuildSku="release")
```