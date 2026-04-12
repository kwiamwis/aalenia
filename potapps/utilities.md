# Aalenian Utilities
Aalenian Utilities adds a number of interactable objects, gameplay features, chat commands, and administrative tools to Path of Titans. This mod is fully modular such that any feature you do not like can be disabled.
## Initiation
At least one Aalenian Controller creator mode object must exist on the server to initiate the mod, so add one to your default creator mode save!

To add creator objects to the default save slot, add those objects to your server then run `/savecreatormode [SlotName]`. Just replace `[SlotName]` with a default save slot name of your choosing, such as `RadDefaultName`.

When your server is shut down, you can enable that slot as your default by adding the following to your server's Game.ini
```ini
[/Script/PathOfTitans.IGameMode]
DefaultCreatorModeSave=RadDefaultName
```
You may instead choose to initiate the mod each server session by running `/InitiateAalenianUtilities` remotely. The Aalenian Controller works by running this command internally on spawn.
## Configuration
Use the new `Utilities` button in the game's tab menu, or run either `/AalenianUtilities` or `/AU`, to access a configuration and documentation interface.

All players may use the 'Utilities' button to access a menu of enabled features including an available commands list, that list also available by running /c or /commands.
## Chat Commands
Commands are either *unrestricted*, *optionally unrestricted*, or *restricted*. 
* Unrestricted commands are always available to every player
* Optionally unrestricted commands can be configured to be always available to every player, or to only available to players possessing the command's permission attribute
* Restricted commands are only available to players possessing the command's permission attribute
* System commands are used by the game to communicate with itself. Be not concerned when you see these commands in your logs. Using these likely will do nothing unless you know exactly what you are doing

::: details Unrestricted

`AU/AalenianUtilities`  Opens documentation and configuration for Aalenian Utilities, only administrators or those with the 'manage' permission able to change settings

`AGID [Username/AGID]?`  Returns a player's AGID copied to your clipboard
>
>RCON Supported

`C/Commands`  Lists chat commands currently available to everyone

`Discord`  Returns the discord invite link for this server copied to your clipboard

`HUD [Type]? -a? -c?`  Brings up the HUD enhancement menu or toggles specific hud enhancements. Types: FPS, Clock, Movement, GroupInfo, Ping, PlayerCount. Use flag 'a' to add all or flag 'c' to clear all

`Invisibility`  Toggles your character's visibility on your client for photographic purposes, other players still able to see you

`Menu`  Shows the escape menu

`Uptime`  Returns server uptime in seconds
>
>RCON Supported

:::
::: details Optionally Unrestricted

`Activity`  Shows a widget detailing PoIs and their respective player counts. If run remotely or run with flag 'r' the command returns the information in JSON copied to your clipboard
>
>+permission=playerinfo
>
>RCON Supported

`Adult [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Sets your character's growth to adult if it can edit abilities and is not in combat. If you have the permissions you may use this command on other players' characters
>
>+permission=set attribute
>
>RCON Supported

`Attribute [Attribute]`  Returns your character's specified attribute value
>
>+permission=get attribute

`Baby [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Grants your character a temporary hatchling effect if it can edit abilities. If you have the permissions, you may enhatchling other players' characters
>
>+permission=set attribute
>
>RCON Supported

`Bank [AccountType]?`  Opens your character or player bank account from anywhere. Specify account type as 'Player' or 'Character' if the server has both enabled; failure to specify will result in the player account opening. Shortcut the menu with '/Withdraw [Marks] [AccountType]?' and '/Deposit [Marks] [AccountType]?'. If transfers and player accounts are enabled you may use '/Transfer [Username/AGID] [Marks]'
>
>+permission=setmarks

`Carryable [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Makes your character light enough to be carried by any other if able to edit abilities. If you have the permissions, you may enlighten other players' characters
>
>+permission=set attribute
>
>RCON Supported

`ClaytonWasHere`  Clayton was here...or was he?
>
>+permission=manage
>
>RCON Supported

`Deposit [Marks] [AccountType]?`  Deposits marks from your character's purse into your character or player bank account. Specify account type as 'Player' or 'Character' if the server has both enabled
>
>+permission=setmarks

`Dupa`   (/≧▽≦)/
>
>+permission=manage

`FillNest [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Fills your character's nest with all resources and sets its health to 100%. If you have the permissions, you may fill other players' characters' nests
>
>+permission=replenishnest
>
>RCON Supported

`Give [Username/AGID] [Marks]`  Transfers marks from your character to the character of another player
>
>+permission=setmarks

`G/Growth/Grow [GrowthStage]? -o?`  Brings up a menu allowing you to select your growth. Shortcut the menu by specifying a growth stage or numerical value. Only usable when able to edit abilities and not in combat. The flag 'o' will, if you have the permissions, override the ability editing state check
>
>+permission=set attribute

`Hatchling [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Sets your character's growth to hatchling if it can edit abilities and is not in combat. If you have the permissions you may use this command on other players' characters
>
>+permission=set attribute
>
>RCON Supported

`Home [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Sends your character to their home cave. Servers may require the character to have the "Comfortable Nest" effect. If you have the permissions, you may try to homesend other players' characters; though, it is still impossible that they teleport to a home cave if they are in combat
>
>+permission=teleport
>
>RCON Supported

`Immature [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Sets your character's growth to immature if it can edit abilities and is not in combat. If you have the permissions you may use this command on other players' characters
>
>+permission=set attribute
>
>RCON Supported

`Juvenile [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Sets your character's growth to juvenile if it can edit abilities and is not in combat. If you have the permissions you may use this command on other players' characters
>
>+permission=set attribute
>
>RCON Supported

`LB/Leaderboard --r? --d? --k? --kd? --i=[AGID]?`  Shows the leaderboard. If run remotely or run with flag 'r' the command returns the leaderboard information in JSON copied to your clipboard. Flags 'd', 'k', and 'kd' when run remotely or with 'r' will return an amount of the relevant information that does not exceed the single page return limit. Running with an AGID will return the leaderboard information for that AGID if present
>
>+permission=playerinfo
>
>RCON Supported

`LoneAteo`  doubles your character's polygon count
>
>+permission=manage

`Marks`  Gives your active character marks! Cooldowns may apply
>
>+permission=setmarks

`Moon [Username/AGID]? d=[DurationSeconds]? r=[TargetedPlayerRadiusCentimeters]?`  Grants moon gravity for your character. If you have the permissions, you may moon other players' characters
>
>+permission=set attribute
>
>RCON Supported

`Poke [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Gives someone's character a poke! If you have the permissions you can poke en masse
>
>+permission=set attribute
>
>RCON Supported

`S/Shed [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Skips your character's shedding process. If you have the permissions, you may use this to skip shedding for other players' characters
>
>+permission=skipshed
>
>RCON Supported

`Skin -o?`  Shows HSV skin color customization menu for your character if it can edit abilities. The flag 'o' will, if you have the permissions, override the ability editing state check and any realsim restrictions
>
>+permission=set attribute

`Subadult [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Sets your character's growth to subadult if it can edit abilities and is not in combat. If you have the permissions you may use this command on other players' characters
>
>+permission=set attribute
>
>RCON Supported

`Transfer [Username/AGID] [Marks]`  Transfers marks from your player bank account to that of another player. Transfer marks to an offline player's account by specifying their AGID rather than their username, but be careful that you do not type the wrong AGID in or your marks will be lost
>
>+permission=setmarks

`TP/Transport -u=[Username/AGID]? [LocationName]?`  Shows a menu of enabled teleport location buttons which you may press in order to initiate the teleport sequence for your character. Shortcut the menu with /TP [LocationName]. If you have the permissions you may teleport other players' characters immediatly and without cost or cooldown
>
>+permission=teleport
>
>RCON Supported

`U/Unstick/Unstuck [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Unsticks your poor character! If you have the permissions you may use this command on other players' characters
>
>+permission=teleport
>
>RCON Supported

`Withdraw [Marks] [AccountType]?`  Withdraws specified marks from your character or player bank account to your character's purse. Specify account type as 'Player' or 'Character' if the server has both enabled
>
>+permission=setmarks

`Z/Zoom [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Grants super speed on your character. If you have the permissions, you may zoom other players' characters
>
>+permission=set attribute
>
>RCON Supported

:::
::: details Restricted

`AbridgedListPlayers`   Returns sparse player information for all players in JSON copied to your clipboard
>
>+permission=playerinfo
>
>RCON Supported

`AddLocationCoordinates -u=[Username/AGID]? [LocationName]`  Adds the coordinates of a character to a location's coordinate array. Teleports to and spawns at a location use one coordinate at random
>
>+permission=manage
>
>RCON Supported

`Admin [Username/AGID]?`  Toggles administrator status. Be careful...
>
>administrator access required
>
>RCON Supported

`AdvancedListPlayers`  Returns detailed player information for all players in JSON copied to your clipboard
>
>+permission=playerinfo
>
>RCON Supported

`AdvancedPlayerInfo [Username/AGID]?`  Returns detailed player information in JSON copied to your clipboard
>
>+permission=playerinfo
>
>RCON Supported

`AdvancedServerInfo`  Returns detailed server information in JSON copied to your clipboard
>
>+permission=serverinfo
>
>RCON Supported

`Boss [Username/AGID]? -l=[Level]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Starts a boss event starring a player, difficulty level ranging 1-10
>
>+permission=set attribute
>
>RCON Supported

`ClearAbilityCooldowns [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]`  Clears a character's ability cooldowns
>
>+permission=set attribute
>
>RCON Supported

`ClearCustomSkin [Username/AGID]`  Clears a character's custom skin
>
>+permission=manage
>
>RCON Supported

`ClearSaveGame [SaveGameSlotName]`  Deletes the save game object in a slot
>
>+permission=manage
>
>RCON Supported

`ClearTeleportCooldowns -a? [Username/AGID]?`  Clears a player's cooldowns for all teleport locations. An offline player's cooldowns can be cleared by specifying AGID. Flag 'a' will cause all players' cooldowns to clear whether or not they are online
>
>+permission=manage
>
>RCON Supported

`Cloak [Username/AGID]?  -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Grants an invisibility cloak for a character
>
>+permission=set attribute
>
>RCON Supported

`CMOLocation [X] [Y] [Z]`  Moves your focused creator mode object to the specified coordinates
>
>creator access required

`CMORotation [Roll] [Pitch] [Yaw]`  Sets the rotation of your focused creator mode object to the specified rotation in degrees
>
>creator access required

`CMOScale [X] [Y] [Z]`  Sets the scale of your focused creator mode object to the specified scale
>
>creator access required

`CMOTessellate [X] [Y] [Z]`  Moves your focused creator mode object the specified number of centimeters
>
>creator access required

`Combat [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Toggles the combat effect for a character
>
>+permission=set attribute
>
>RCON Supported

`CommandReply [Username/AGID] [ChatMessage]`  Sends a chat command response to a player in whichever of their chat channels is active
>
>+permission=manage

`Conceal [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Grants a character full replicated invisibility
>
>+permission=set attribute
>
>RCON Supported

`Console -c=[Username/AGID]? [Command]`  Executes a console command on the server. Flag 'c' makes the command run on your client rather than the server. Specifying a username or AGID value for flag 'c' makes the command run on that player's client
>
>+permission=manage
>
>RCON Supported

`CrashClient [Username/AGID]?`  Crashes a player's client
>
>+permission=manage

`CM/Creator/CreatorMode`  Toggles creator mode. This command will not remove you from spectator mode, just creator mode
>
>creator access required

`Critter [Username/AGID/[X] [Y] [Z]]? -n=[CritterName]? -q=[CritterQuantity]? -g=[CritterGrowth]? -a? -s?`  Spawns critters at a location. Flag 'a' ensures the critter will be albino, which is otherwise random. Flag 's' allows subsurface spawns by spawning critters at a location's exact height rather than on the surface
>
>+permission=set attribute

`Cure [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Heals, removes negative effects from, and removes ability cooldowns from a character. Use '/Restore' to also remove positive effects
>
>+permission=heal
>
>RCON Supported

`D/DayTime -f?`  Clears the skies and brings on the day. Flag 'f' freezes weather and time if not run remotely
>
>+permission=weather
>
>RCON Supported

`Degravitate [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Removes the effects of gravity for a character
>
>+permission=set attribute
>
>RCON Supported

`Disintegrate [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Erases an active character from existance
>
>+permission=set attribute
>
>RCON Supported

`Drop [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Drops an active character to it's likely death
>
>+permission=teleport
>
>RCON Supported

`Edit [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Permits ability editing for a character
>
>+permission=set attribute
>
>RCON Supported

`Elasticize [Username/AGID]?  -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Puts a character in a state where it deals and takes extreme knockback
>
>+permission=set attribute
>
>RCON Supported

`Erase [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Erases a character from gameplay (i.e. kills and destroys the character, but does not erase the character from the game files)
>
>+permission=set attribute
>
>RCON Supported

`Etherify [Username/AGID]? -d=[DurationSeconds]? r=[TargetedPlayerRadiusCentimeters]?`  Forces characters to the astral plane to become invincible and be able to (kind of) walk through others
>
>+permission=set attribute
>
>RCON Supported

`Execute [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Executes a character for crimes against dinosauria ... or maybe suchia
>
>+permission=set attribute
>
>RCON Supported

`FOV [AngleDegrees]`  Sets your FOV to any angle in degrees from 10 to 170
>
>+permission=manage

`Fracture [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Breaks a character's bones
>
>+permission=set attribute
>
>RCON Supported

`Freeze [Username/AGID]?  -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Stops a character in their tracks
>
>+permission=set attribute
>
>RCON Supported

`GetBalance  [Username/AGID]? [AccountType]`  Gets a player's or character's bank balance. Specify account type 'Player' or 'Character'
>
>+permission=playerinfo
>
>RCON Supported

`GetSettings`  Returns the current configuration of Aalenian Utilities in JSON copied to your clipboard
>
>+permission=serverinfo
>
>RCON Supported

`GlobalDilation [Dilation]`  Sets the global time dilation
>
>+permission=manage
>
>RCON Supported

`GM`  toggles your godmode
>
>+permission=godmode

`GroupInfo [Username/AGID]?`  Returns group info for a player in JSON copied to your clipboard
>
>+permission=playerinfo
>
>RCON Supported

`H [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Heals a character
>
>+permission=heal
>
>RCON Supported

`Ignite [Username/AGID]?  -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]? -s=[EffectStackCount]?`  Sets a character aflame
>
>+permission=set attribute
>
>RCON Supported

`A/InitiateAalenianUtilities`  Initates Aalenian Utilities, spawning and loading the required management infrastucture on the server. This command is called by the Aalenian Controller, but can be called manually
>
>+permission=manage
>
>RCON Supported

`Invite [Username/AGID] [LocationName]`  Sends a player an invite to a location
>
>+permission=teleport

`Kill [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Kills a character
>
>+permission=set attribute
>
>RCON Supported

`Lag [DurationMilliseconds]`  Introduces artificial lag to your server, up to 1000 milliseconds or 1 second
>
>+permission=manage
>
>RCON Supported

`Launch [Username/AGID]s?  -r=[TargetedPlayerRadiusCentimeters]? -x=[X]? -y=[Y]? -z=[Z]?`  Launches a character at a velocity in cm/s. Leaving a component of the velocity vector unspecified results in that component being randomly generated
>
>+permission=teleport
>
>RCON Supported

`ListPlayersPoIs`  Returns a list of all players and their PoIs in JSON copied to your clipboard
>
>+permission=playerinfo
>
>RCON Supported

`Log [Message]`  Print a string to the server log. Begin with 'Error:' or 'Warning:' to highlight the log entry as an error or warning
>
>+permission=manage
>
>RCON Supported

`Loss [Percentage] [Type]?`  Introduces artificial packet loss to your server, up to 90 percent. Optionally specify type as 'Inbound' or 'Outbound'. Failure to specify type results in both types being set
>
>+permission=manage
>
>RCON Supported

`Nick [Username/AGID]? [Nickname]`  Changes a player's username for the server session. Avoid setting multiple players' names to the same nickname or chat commands will not know which player to target
>
>+permission=nick
>
>RCON Supported

`NightLuminosity [Luminosity]`  Sets the night luminosity to a value of your choosing. Select 30 to emulate a full moon, and 3.5 to emulate a new moon
>
>+permission=manage
>
>RCON Supported

`N/NightTime -f?`  Clears the skies and brings on the night. Flag 'f' freezes weather and time if not run remotely
>
>+permission=weather
>
>RCON Supported

`Omnivore [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Makes a character a true omnivore
>
>+permission=set attribute
>
>RCON Supported

`Paralyze [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Paralyzes a character
>
>+permission=set attribute
>
>RCON Supported

`Ping [Username/AGID]?`  Returns a player's roundtrip latency in milliseconds
>
>+permission=playerinfo
>
>RCON Supported

`PlayerChat -s=[SendingUsername/SendingAGID]? -u=[RecievingUsername/RecievingAGID]? -c=[ChannelIndex]? [ChatMessage]`  Chat as an online player in a channel, defaulting to Global. Specifying a recieving username or AGID will make the chat only visible to that player, rather than all players
>
>+permission=manage
>
>RCON Supported

`PrivateAnnounce -u=[Username/AGID]? [Announcement]`  Announce a message to only the relevant/specified player
>
>+permission=announce
>
>RCON Supported

`Push [Username/AGID]? -v=[Velocity]? -r=[TargetedPlayerRadiusCentimeters]?`  Pushes a character away from you at a velocity in cm/s. Running remotely will push characters away from the world origin
>
>+permission=set attribute
>
>RCON Supported

`Push [Username/AGID]? -v=[Velocity]? -r=[TargetedPlayerRadiusCentimeters]?`  Pushes a character away from you at a velocity in cm/s. Running remotely will push characters away from the world origin
>
>+permission=set attribute
>
>RCON Supported

`RemoteChat -u=[RecievingUsername/RecievingAGID]? -c=[ChannelIndex]? -n=[SenderName]? -r=[SenderRole]? -a? -b? [ChatMessage]`  Send a chat message which appears to be sent from [SenderName] with [SenderRole]. Flag 'a' makes the message appear to be from an administrator. The name will include '(Remote)' so players and the server itself do not get confused, but flag 'b' will use '(NPC)' instead if you wish the message to appear from a bot. Specifying a recieving username or AGID will make the chat only visible to that player, rather than all players
>
>+permission=manage
>
>RCON Supported

`RemoveLocation [LocationName]`  Removes the specified location from the saved location array
>
>+permission=manage
>
>RCON Supported

`RemoveLocationCoordinates [Index] [LocationName]`  Removes an index from a location's coordinate array
>
>+permission=manage
>
>RCON Supported

`ResetAalenianUtilities`  'Factory reset' the Aalenian Utilities application
>
>+permission=manage
>
>RCON Supported

`RS/Restore [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Heals, removes all effects from, and removes ability cooldowns from a character
>
>+permission=heal
>
>RCON Supported

`SetBalance [Username/AGID]? [AccountType] [Balance]`  Sets a player's or character's bank balance. Specify account type 'Player' or 'Character'
>
>+permission=setmarks
>
>RCON Supported

`SetImpactDamageMultiplier [Username/AGID]? -m=[ImpactDamageMultiplier] -r=[TargetedPlayerRadiusCentimeters]?`  Sets a character's flight impact damage multiplier
>
>+permission=set attribute
>
>RCON Supported

`SetJoinRole [JoinRole]?`  Sets the role players will promote to when they join the server if they have no other roles. Run without the [JoinRole] argument to delete the current join role
>
>+permission=manage
>
>RCON Supported

`SetLocation -u=[Username/AGID]? [LocationName]`  Sets a location with the specified name at the coordinates and rotation of a character. Using a location name already in use will override the old one. Spaces are acceptable but some special characters will return an error
>
>+permission=manage
>
>RCON Supported

`SetWelcomeMessage -a? [WelcomeMessage]`  Sets the welcome message players see on their first spawn of a play session. Include strings  '[PlayerName]' and '[ServerName]' to include the player's name or server's name in the message. Flag 'a' makes the command set the welcome message for administrators, which is different from the normal welcome message
>
>+permission=manage
>
>RCON Supported

`Shield [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Grants a character immunity from damage and disables all abilities
>
>+permission=heal
>
>RCON Supported

`Shockwave [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]? -f=[FalloffRadiusCentimeters]? -i=[IntensityCentimetersPerSecond]?`  Creates a shockwave about a character, knocking back nearby characters within the falloff radius
>
>+permission=teleport
>
>RCON Supported

`ShowLoadingScreen [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Shows a player a loading screen for a duration if their character is valid
>
>+permission=set attribute
>
>RCON Supported

`Silence [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Prevents a character's vocalizations from producing sound
>
>+permission=set attribute
>
>RCON Supported

`Slow [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Slows a character's movement by 50%
>
>+permission=set attribute
>
>RCON Supported

`Smite [Username/AGID]? -r=[TargetedPlayerRadiusCentimeters]?`  Smite thy enemies or smite thyslef if thou wouldst
>
>+permission=set attribute
>
>RCON Supported

`SpawnTeleport [Username/AGID]? [PoIName]`  Teleports a character to an appropriate spawn point in the specified PoI. Returns an error if no appropriate spawn exists (e.g. an aquatic character is told to spawn in a PoI with only terrestrial spawn points)
>
>+permission=teleport
>
>RCON Supported

`SM/Spectator/SpectatorMode`  Toggles spectator mode
>
>spectator access required

`StealthAdmin [Username/AGID]?`  Toggles administrator stealth mode, where other players cannot see your administrator colors in chat
>
>administrator access required
>
>RCON Supported

`SystemChat [ChatMessage]`  Send a message as yourself in the 'System' chat channel
>
>+permission=systemmessageall

`Waterbreathing [Username/AGID]? -d=[DurationSeconds]? -r=[TargetedPlayerRadiusCentimeters]?`  Grants water breathing for a character
>
>+permission=set attribute
>
>RCON Supported

:::
::: details System

`commandscsv` 
>
>+permission=manage
>
>RCON Supported

`commandsmarkdown` 
>
>+permission=manage
>
>RCON Supported

`executestandaloneasserver` 
>
>+permission=manage

`getstring` 
>
>+permission=manage
>
>RCON Supported

`refreshlodestones` 
>
>+permission=manage
>
>RCON Supported

`refreshtelestones` 
>
>+permission=manage
>
>RCON Supported

`setfeatureenabled` 
>
>+permission=manage
>
>RCON Supported

`setfloat` 
>
>+permission=manage
>
>RCON Supported

`setlocationparameter` 
>
>+permission=manage
>
>RCON Supported

`setparameter` 
>
>+permission=manage
>
>RCON Supported

`setstring` 
>
>+permission=manage
>
>RCON Supported

`test` 
>
>+permission=manage

`testclient` 
>
>+permission=manage

`testserver` 
>
>+permission=manage

`teststandalone` 
>
>+permission=manage
>
>RCON Supported

:::

## Gameplay Features
All Gameplay features are optional and configurable!
### Command-Based Teleportation System
* Unlimited custom spawn locations, each configurable costs and cooldowns
* Cooldowns can be per-character or per-player
* `/TP` brings up a user interface with the selectable locations
* All teleports require characters be out of combat
* Optional 30 second sleeping requirement before teleportation
* Optional post-teleport immunity, with which players cannot deal or recieve damage for a time
* Optionally enable each character's nest as a teleport location for that character with a configurabel cost and cooldown, accessable with `/Nest`
* Enable players to use `/Home` to teleport to their homecaves, optionally requiing the comfortable nest effect
### Object-Based Teleportation System: Lodestones and Telestones
* Lodestones can replace waystones, allowing Lodestone to Lodestone solo-friendly teleportation
* Lodestones can keep the traditional waystone function, replace it with a modded invite system, or remove all invite-based teleportation systems
* Telestones are like Lodestones but can be placed anywhere from the configuration menu instead of replacing Waystones. They allow Telestone to Telestone solo-friendly teleportation and can employ a modded invite system
* Telestones and Lodestones can be configured to allow Telestone to Lodestone or Lodestone to Telestone teleportation
* Telestones and Lodestones share a global cost and cooldown, cooldowns applying on a per-character scale
* The `/TP` menu can be configured to allow teleports to Telestones/Lodestones, and the stones can be configured to allow access to the teleports normally reserved to the `/TP` user interface
* Telestones/Lodestones can employ an anti-camping system
### Custom Spawning Features
* Unlimited custom spawn locations, each configurable to character locomotion type
* Spawn locations can be one custom point, a random selection from an array of custom points, an launch at a random velocity from a point (no fall damage!), or a PoI. PoI spawns can be unsafe or safe, safe meaning characters spawn at real map spawn points (safe spawns will fail if no valid real map spawn points exist)
* Temporary spawn immunity, with which players cannot deal or recieve damage for a configurable amount of seconds upon spawning
* Set growth on spawn
* Set or give marks on spawn
* Characters spawn at their nest if it is above a threshold
### Banking System
* The banker NPC or the optional `/Bank` bring up a bank account interface
* Enable player accounts, character accounts, or both! Character accounts are reccomended
* Optional transfers between player bank accounts
### Advanced Skin Customization
* The taxadermist NPC or the optional `/Skin` bring up a menu allowing more refined skin customization than the vanilla game can provide
* Realism-safe mode which only allows hue changes
* Role-play servers can emulate pigmentation conditions like albanism, leucism, and melanism
* Optional instant shedding
### Leaderboard
* Tracks kills, deaths, and the kill/death ratio
* Exploit-proof (cannot be fooled by players logging out of characters before death)
* Use RCON to get information from this custom leaderboard to display elsewhere
* Enable or restrict in-game access to the leaderboard as needed
### Gameplay Information Chat Messages
* Death mesages
* Join and leave messages
### Environmental Enhancements
* Impact crater flooding on Gondowa
* Configurable resource replenishment
### Growth System Enhancements
* Scale passive growth with hunger and thirst
* Scale passive growth with health
* Scale passive growth with current growth level
### Combat Enhancements
* Post-kill buff
### HUD Enhancements
* Clock displaying in-game time
* FPS, ping, player count, and group information widgets in the upper-left corner
* Enhanced movement gauges in the bottom-center displaying whether your character's sprint mode or trot mode are enabled, and whether it is swimming or underwater
## Creator Mode Objects
* Aalenian Controller: one or more must exist on the server
* Amplistone: allows players to change growth levels
* Invulnistone: players inside the effect radius cannot deal or recieve damage. Players in combat are unable to enter
* One-way invulnistone: players inside the effect radius cannot deal or recieve damage. Players cannot enter by walking in, and may only spawn or teleport inside
* Regenistone: increases healing rate by a factor of 10
* Lunaristone: gives players in the effect radius moon gravity
* Telestone *(only placeable from the configuration panel)*
* Taxadermist NPC: allows access to the skin customization menu
* Banker NPC: allows access to whichever bank accounts are enabled
* Critter Spawner Terrestrial: spawns terrestrial creatures on a random timer
* Critter Spawner Aquatic: spawns aquatic creatures on a random timer
* Lodestone *(only placeable from the configuration panel)*
* Home Rock: allows access to the home cave
* Safety Cone: plain ol' traffic cone
## Webhooks
New webhooks are available for you to add to your server's Game.ini, see them just below! These will only trigger if in your Game.ini and if the mod is initiated and active. 
```ini
[ServerWebhooks]
PlayerVoiceCall=""
; Called when a character vocalizes
PlayerChangeRestState=""
; Called when a character changes rest states (default, sitting, or sleeping)
PlayerKilledAdvanced=""
; Called when a character dies, regardless of whether a player is in control of the character as it dies
```
::: details PlayerVoiceCall

```json
{
    "VoiceCall": "Extra6",
    "ServerName": "Example_Realsim",
    "PlayerName": "CaptainExample",
    "AlderonId": "123-456-789",
    "Role": "Administrator",
    "bServerAdmin": "true",
    "bMuted": "false",
    "Platform": "PT_WINDOWS",
    "Ping": "77.678574",
    "MapName": "Island",
    "Transform": "Translation: X=-216533.290 Y=-82875.440 Z=1055.730 Rotation: P=0.000000 Y=47.406006 R=-0.000000 Scale: X=1.000 Y=1.000 Z=1.000",
    "Location": "X=-216533.290 Y=-82875.440 Z=1055.730",
    "LocationTag": "WhiteCliffs",
    "POI": "White Cliffs",
    "bSpectatorMode": "false",
    "bCreatorMode": "false",
    "CharacterName": "Pam",
    "CurrentMarks": "30100",
    "DinosaurGrowth": "1.0",
    "GroupState": "NotInAGroup",
    "CharacterTag": "Amargasaurus",
    "Diet": "HERBIVORE",
    "DinosaurType": "Amargasaurus",
    "CharacterID": "6A536D4470464BF6AC1D8F2461AF4236",
    "bCharacterFemale": "true",
    "SkinName": "Backer",
    "bInCombat": "false",
    "ServerGuid": "00000000-0000-0000-0000-000000000000"
}
```

:::
::: details PlayerChangeRestState
```json
{
    "RestState": "Default",
    "ServerName": "Example_Realsim",
    "PlayerName": "CaptainExample",
    "AlderonId": "123-456-789",
    "Role": "Administrator",
    "bServerAdmin": "true",
    "bMuted": "false",
    "Platform": "PT_WINDOWS",
    "Ping": "77.678574",
    "MapName": "Island",
    "Transform": "Translation: X=-216533.290 Y=-82875.440 Z=1055.730 Rotation: P=0.000000 Y=47.406006 R=-0.000000 Scale: X=1.000 Y=1.000 Z=1.000",
    "Location": "X=-216533.290 Y=-82875.440 Z=1055.730",
    "LocationTag": "WhiteCliffs",
    "POI": "White Cliffs",
    "bSpectatorMode": "false",
    "bCreatorMode": "false",
    "CharacterName": "Pam",
    "CurrentMarks": "30100",
    "DinosaurGrowth": "1.0",
    "GroupState": "NotInAGroup",
    "CharacterTag": "Amargasaurus",
    "Diet": "HERBIVORE",
    "DinosaurType": "Amargasaurus",
    "CharacterID": "6A536D4470464BF6AC1D8F2461AF4236",
    "bCharacterFemale": "true",
    "SkinName": "Backer",
    "bInCombat": "false",
    "ServerGuid": "00000000-0000-0000-0000-000000000000"
}
```
:::
::: details PlayerKilledAdvanced
Always sent:
```json
{
    "ServerName": "Example_Realsim",
    "ServerMapName": "Island",
    "VictimName": "CaptainExample",
    "VictimAlderonId": "123-456-789",
    "DamageType": "DT_ATTACK",
    "VictimTransform": "Translation: X=-216533.290 Y=-82875.440 Z=1055.730 Rotation: P=0.000000 Y=47.406006 R=-0.000000 Scale: X=1.000 Y=1.000 Z=1.000", 
    "VictimLocation": "X=-216533.290 Y=-82875.440 Z=1055.730",
    "VictimLocationTag": "WhiteCliffs",
    "VictimPOI": "White Cliffs",
    "VictimPCharacterName": "Pam",
    "VictimCurrentMarks": "30100",
    "VictimGrowth": "1.0",
    "VictimCharacterID": "6A536D4470464BF6AC1D8F2461AF4236",
    "VictimCharacterFemale": "true",
    "VictimSkinName": "Backer",
    "VictimCharacterTag": "Amargasaurus",
    "VictimDiet": "HERBIVORE",
    "VictimDinosaurType": "Amargasaurus",
    "ServerGuid": "00000000-0000-0000-0000-000000000000"
}
```
Sent if a player is in control of the victim character:
```json
{
    "VictimRole": "Administrator",
    "VictimIsAdmin": "true",
    "VictimMuted": "false",
    "VictimPlatform": "PT_WINDOWS",
    "VictimPing": "77.678574",
    "VictimGroupState": "NotInAGroup", 
}
```
Sent if the victim character is killed by a character:
```json
{
    "KillerName": "MajorExample",
    "KillerAlderonId": "123-123-123",
    "KillerRole": "None",
    "KillerIsAdmin": "false",
    "KillerMuted": "false",
    "KillerPlatform": "PT_WINDOWS",
    "KillerPing": "77.678574",
    "KillerGroupState": "InAGroup",
    "KillerTransform": "Translation: X=-216533.290 Y=-82875.440 Z=1055.730 Rotation: P=0.000000 Y=47.406006 R=-0.000000 Scale: X=1.000 Y=1.000 Z=1.000",
    "KillerLocation": "X=-216533.290 Y=-82875.440 Z=1055.730",
    "KillerLocationTag": "WhiteCliffs",
    "KillerPOI": "White Cliffs",
    "KillerCharacterName": "Brian",
    "KillerCurrentMarks": "19500",
    "KillerGrowth": "1.0",
    "KillerCharacterID": "3F58445EB6AE47D493A5B44798AC2265",
    "KillerCharacterFemale": "false",
    "KillerSkinName": "Melanistic",
    "KillerCharacterTag": "Spinosaurus",
    "KillerDiet": "CARNIVORE",
    "KillerDinosaurType": "Spinosaurus",
}
```
:::
## Installation
Add the following line of code to your server's GameUserSettings.ini
```ini
[PathOfTitans.Mods]
EnabledMods=(ModSku="UGC_M_Y250GRMEVZ_SK", BuildSku="release")
```
