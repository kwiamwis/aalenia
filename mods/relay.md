# Aalenian Relay
Tired of bot command spam? Replace all your underwhelming prefix commands with refined slash commands!

Players can use the new `/Relay` or `/Y` to relay commands to your bot, which may respond with the RCON enabled `/Message`.

The commands may be run from any chat window (System, Global, Group, Local) and will not appear for other players. Likewise, response messages are fully private!

## Chat Commands
::: details /Relay [Command]
Players use this relay a command to your bot through the new PlayerRelay webhook, along with a copious amount of useful data. For example, a player running '/relay tp ic' will send the string 'tp ic' under the 'Command' key to your bot along with the other data.
:::

::: details /Y [Command]
shorthand for '/Relay'
:::

::: details /Message [PlayerName/AGID] [Message]
Sends a private message to the specified player in whichever chat window they had open last. This command may be used to respond to the '/Relay' command. For example, your RCON application may send the string 'message Jiggy Have fun!' to send the message 'Have fun!' to the player named 'Jiggy'.
> administrator access required
>
> RCON Supported
:::

::: details /SpawnCommandRegistrar
Spawns a server-side actor which fixes a bug preventing clients from registering modded commands
> administrator access required
>
> RCON Supported
:::

## Webhooks
New webhooks are available for you to add to your server's Game.ini, see them just below!
```ini
[ServerWebhooks]
PlayerRelay=""
```
::: details PlayerRelay
Triggered when a player uses the new `/Relay` or `/Y`
> Keys: Command, ServerGuid, ServerName, PlayerName, AlderonId, Role, bServerAdmin, bMuted, Platform, Ping, TimeOfDay*, MapName*, Transform*, Location*, LocationTag*, POI*, bSpectatorMode*, bCreatorMode*, CharacterName*, CurrentMarks*, DinosaurGrowth*, GroupState*, Diet*, DinosaurType*, CharacterID*, bCharacterFemale*, SkinName*, bInCombat*
>
> *Those keys marked by the asterix may not be sent if the player is not logged into a character or is in spectator mode.
:::

## Warnings
::: danger Command Registration Failure
A base game bug prevents modded commands from registering on clients until one is run, which means the **FIRST** command run by a player upon joining the server will **FAIL**.

This mod includes a fix applicable to all mods containing new chat commands. To employ this fix, run the RCON command `/SpawnCommandRegistrar` twice when you detect that your server has started. The first execution will fail due to the same bug, while the second one spawns an actor which fixes the bug.

The **Aalenian Utilities** mod includes a fix for the same bug, which automatically runs if the Aalenian Controller CMO is placed
:::

## Installation
Add the following line of code to your server's GameUserSettings.ini
```ini
EnabledMods=(ModSku="UGC_M_W61782Z7MD_SK", BuildSku="release")
```