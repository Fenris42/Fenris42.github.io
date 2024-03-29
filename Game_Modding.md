---
layout: default
title: Custom Game Maps
---

# Game Modding

![Minecraft](assets/images/screenshots/minecraft.jpg)

[![Download](assets/images/icons/download.png){:class='icon icon-download'}](https://www.minecraft.net/en-us/about-minecraft){:target="_blank"}
[Minecraft.net](https://www.minecraft.net/en-us/about-minecraft){:target="_blank"}

### Description of Game:

A game where the player collects resources and crafts a variety of items, structures and machines while exploring a block-based world. 

## CC Mine

![CC Mine](assets/images/screenshots/CC_Mine.png)

[![Download](assets/images/icons/download.png){:class='icon icon-download'}](https://github.com/Fenris42/CC-Mine){:target="_blank"}
[Github Repository](https://github.com/Fenris42/CC-Mine){:target="_blank"}

### Description:

A script for Minecraft mod [CC: Tweaked](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked){:target="_blank"} a fork  of the popular mod [ComputerCraft](https://www.curseforge.com/minecraft/mc-mods/computercraft){:target="_blank"}.

[CC: Tweaked](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked){:target="_blank"} adds basic [computers](https://www.computercraft.info/wiki/Computer){:target="_blank"} for programming, as well as [turtles](https://www.computercraft.info/wiki/Turtle){:target="_blank"} which are programmable robots, to the game. Scripts written in Lua, utilizing the [CC: Tweaked API](https://tweaked.cc/module/turtle.html){:target="_blank"} can perform a wide variety of tasks. In this case, mining.

### Features:
- Mines in a 3x3 block pattern.
- Ore blocks on tunnel walls are also mined.
	- Turtle scans the walls as it moves through the main tunnel, mining anything with “ore” in its name.
- Places a torch every 10 blocks.
- Floor and wall patching when required using cobblestone.
- Flooding detection in case you tunnel into a body of water or lava.
	- Turtle will move back and block the tunnel off using cobblestone to contain flooding.
	- If tunnel is above liquid level, a bridge will be created instead.
- Configurable junk filtering from inventory so you only bring back what you want.
- Returns to start position when inventory is full, out of fuel or tunnel flooding detected.

### Design Choices:
- Default tunnel program was very basic and was insufficient for my needs.
	- Tunnel was dug to a length input at start and did not return.
	- Completion resulted in having to go down a tunnel to retrieve the turtle.
	- The turtle did not stop if its inventory was full, and anything subsequently mined would be left on the ground.
	- Inventory would be mostly junk blocks like cobblestone and little ore.
	- The tunnel would be dark and full of monsters.
	
- I added the following functionality:
	- Auto torching to light up the tunnel and prevent monster spawns.
	- Patching of floor with cobblestone for easy traversal.
	- Patching of the walls when there was no block to place a torch on.
		- Later further improved to replace a gravity block like gravel with cobble first to prevent the torch falling off the wall if the block under it was mined.
	- Wrote enhanced dig function to continually dig and check until area was clear. This solved an issue where the turtle was digging into gravity blocks like gravel or sand.
	- A junk filter to drop blocks like cobblestone when inventory was full, then continue mining.
		- Later made a user customizable dynamic list.
	- Flood detection in case the turtle mines into a water or lava pocket.
		- The turtle will move back 3 blocks then build a wall to contain the leak.
	- Various checks for when the turtle was done, including:
		- Enough fuel on board to continue mining or to return home safely.
		- Flood detection.
		- Inventory full.
	- A report displayed on return that shows why the tunneling was finished.
	
### Retrospective:
- This was a very fun project and I will definitely write another turtle script in the future.
- I definitely experienced scope creep as development and testing went on, but I didn’t want this script to give me the same feeling of dissatisfaction that the default tunnel program left me with.
- In the end, I felt quite confident in what I had made. What was intended to be a personal program, I could now share with others. 

---

## Mekanism Polonium Alternate Recipe

![Polonium Recipe](assets/images/screenshots/Polonium Recipe.png)

[![Download](assets/images/icons/download.png){:class='icon icon-download'}](https://github.com/Fenris42/Kubejs_Polonium_Recipe){:target="_blank"}
[Github Repository](https://github.com/Fenris42/Kubejs_Polonium_Recipe){:target="_blank"}

### Description:

An alternate recipe path for converting [Big Reactors](https://www.curseforge.com/minecraft/mc-mods/big-reactors){:target="_blank"}
 / [Extreme Reactors](https://www.curseforge.com/minecraft/mc-mods/extreme-reactors){:target="_blank"} [Blutonium Ingots](https://ftbwiki.org/Blutonium_Ingot){:target="_blank"} to [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"} [Polonium Gas](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"}.
 
Recipe is written in a combination of Javascript and JSON, injected using the mod [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs){:target="_blank"}.

### Default Mekanism (Mek) Recipe Path:

**(Mek) [Fission Reactor:](https://wiki.aidancbrady.com/wiki/Fission_Reactor){:target="_blank"}** (Mek) [Fissile Fuel](https://wiki.aidancbrady.com/wiki/Fissile_Fuel){:target="_blank"} -> (Mek) [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"}
- Fuel is consumed in the reactor and waste product produced.

**(Mek) [Solar Neutron Activator:](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"}** (Mek) [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} -> (Mek) [Polonium Gas](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"}
- Final processing step.

### Alternate Big Reactors / Extreme Reactors (BER) Recipe Path:

**(BER) [Reactor:](https://ftbwiki.org/Big_Reactors){:target="_blank"}** (BER) [Yellorium Ingot](https://ftbwiki.org/Yellorium_Ingot){:target="_blank"} -> (BER) [Cyanite Ingot](https://ftbwiki.org/Cyanite_Ingot){:target="_blank"}
- Fuel is consumed in the reactor and waste product produced.

**(BER) [Reprocessor:](https://ftbwiki.org/Cyanite_Reprocessor){:target="_blank"}** (BER) [Cyanite Ingot](https://ftbwiki.org/Cyanite_Ingot){:target="_blank"} -> (BER) [Blutonium Ingot](https://ftbwiki.org/Blutonium_Ingot){:target="_blank"}
- Reactor waste product is processed to an analog of plutonium.

**(Mek) [Chemical Oxidizer:](https://wiki.aidancbrady.com/wiki/Chemical_Oxidizer){:target="_blank"}** (BER) [Blutonium Ingot](https://ftbwiki.org/Blutonium_Ingot){:target="_blank"} -> (Mek) [Plutonium Gas](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"}
- Conversion from [Big Reactors](https://www.curseforge.com/minecraft/mc-mods/big-reactors){:target="_blank"}
 / [Extreme Reactors](https://www.curseforge.com/minecraft/mc-mods/extreme-reactors){:target="_blank"} to [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"} occurs at a 1:1 scale using [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"}'s machines.

**(Mek) [Isotropic Centrifuge:](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"}** (Mek) [Plutonium Gas](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"} -> (Mek) [Polonium Gas](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"}
- Final processing step to replace [Solar Neutron Activator:](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} at a 10:1 ratio matching other recipes for both the [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} and [Isotropic Centrifuge](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"}.

### Design Choices:

### Issues:
- Default [Mekasuit](https://wiki.aidancbrady.com/wiki/Mekasuit){:target="_blank"} recipe assumes use of the [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"} [Fission Reactor](https://wiki.aidancbrady.com/wiki/Fission_Reactor){:target="_blank"} for power generation.
	- In modpacks there are a variety of different method of generating power from a selection of various mods, not all players will choose [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"}'s method especially due to the complexity, risks with radiation and threat of meltdowns.
	- I like many other players use [Extreme Reactors](https://www.curseforge.com/minecraft/mc-mods/extreme-reactors){:target="_blank"} for power generation leaving me in a situation where I have to build a completely separate, complicated and accident prone reactor just to generate some [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} in order to build the [Mekasuit](https://wiki.aidancbrady.com/wiki/Mekasuit){:target="_blank"}.
- [Fissile Fuel](https://wiki.aidancbrady.com/wiki/Fissile_Fuel){:target="_blank"} is a [complicated process](https://youtu.be/9HjghquMpfA?si=VdZH6u4F8ScBhtIo&t=581){:target="_blank"} just on its own and we are not even at building the [Fission Reactor](https://wiki.aidancbrady.com/wiki/Fission_Reactor){:target="_blank"} and [Turbine](https://wiki.aidancbrady.com/wiki/Industrial_Turbine){:target="_blank"} yet.
- The [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} is slow, requires being outside and is effected by day/night cycles as well as the biome its placed in.

### Resolution:
- Identified how to make a recipe:
	 - Originally started down a [datapack](https://minecraft.fandom.com/wiki/Data_pack){:target="_blank"} route with no success.
	 - Found out about [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs){:target="_blank"} and was already installed by default to the modpack im using.
	 - Reviewed [KubeJS wiki](https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-custom%2Fmodded-json-r){:target="_blank"} on how to write a custom recipe.
	 - Reviewed [Mekanism on Github](https://github.com/mekanism/Mekanism/tree/release/1.19.x){:target="_blank"} and found how they structured their [JSON recipes](https://github.com/mekanism/Mekanism/tree/release/1.19.x/src/datagen/generated/mekanism/data/mekanism/recipes){:target="_blank"} to create a template and replaced items and values with my own.
- Assumptions made:
	- [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} is refinable to [Plutonium Gas](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"} in a [Isotropic Centrifuge](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"}.
	- The not [Plutonium](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"} component of [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} converts to [Polonium](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"} when run through the [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} instead. This indicates [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} is part [Plutonium](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"} and part [Polonium](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"}.
	- The [Isotropic Centrifuge](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"} and [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} only has 1 output slot so the other material separated just disappears or can be assumed that the end product is refined but not pure.
	- [Blutonium Ingot](https://ftbwiki.org/Blutonium_Ingot){:target="_blank"} is an analog for plutonium based on name and processing steps to acquire.
- Unable to convert (BER) [Cyanite Ingot](https://ftbwiki.org/Cyanite_Ingot){:target="_blank"} to (Mek) [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} as [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"} to [Plutonium Gas](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"} in a [Isotropic Centrifuge](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"} is a taken recipe and must find an alternate route that does not involve the [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"}.
- Identified 2 equivalent materials (plutonium) from each mod and converted at a 1:1 ratio using a [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"} [Chemical Oxidizer](https://wiki.aidancbrady.com/wiki/Chemical_Oxidizer){:target="_blank"} in order to cut over to [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"} as soon as possible as well as a device that supported converting a solid item to a gas.
- Added an additional processing step of using the [Isotropic Centrifuge](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"} to replace the [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} for consistent production and freedom of placement using a 10:1 ratio matching existing recipes for both the [Solar Neutron Activator](https://wiki.aidancbrady.com/wiki/Solar_Neutron_Activator){:target="_blank"} and [Isotropic Centrifuge](https://wiki.aidancbrady.com/wiki/Isotopic_Centrifuge){:target="_blank"}. Thematically a centrifuge felt like a fitting machine to use for this processing step and allows for recovery of the [Polonium](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"} from the impure [Plutonium](https://wiki.aidancbrady.com/wiki/Plutonium){:target="_blank"}.
- This new recipe also does not provide an exploit path for pure [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism){:target="_blank"} players as it will result in a 100:1 instead of 10:1 conversion ratio for producing [Polonium](https://wiki.aidancbrady.com/wiki/Polonium){:target="_blank"} from [Nuclear Waste](https://wiki.aidancbrady.com/wiki/Nuclear_Waste){:target="_blank"}.


### Retrospective:
- I wanted to experiment with resolving this technically as well as designing a fair and balanced alternative path inline with the default recipe.
- As a long time player of Minecraft it was nice to work on something that effected the game itself.
- Now that I know how to write recipes I can make future alternate recipes as needed.
- I might consider writing a small mod in the future.

---

![Timberborn](assets/images/screenshots/timberborn.jpg)

[![Download](assets/images/icons/download.png){:class='icon icon-download'}](https://store.steampowered.com/app/1062090/Timberborn/){:target="_blank"}
[Steam Store](https://store.steampowered.com/app/1062090/Timberborn/){:target="_blank"}

### Description of Game:

A game about a world in which humans have died out due to climate change, and beavers are now the dominant species. The player aims for a high well-being score by building a town with farms, industry, housing and entertainment without succumbing to the environmental hazards, hunger or thirst.

Timberborn’s game loop involves seasons that alternate between temperate weather and either drought or [badtide](https://timberborn.wiki.gg/wiki/Weather#Badtide){:target="_blank"}.
- In temperate weather, water flows from sources and everything is in bloom.
- During a drought, water stops flowing from sources. Water on the map starts receding and crops wither.
- During a [badtide](https://timberborn.wiki.gg/wiki/Weather#Badtide){:target="_blank"}, water sources start pumping [badwater](https://timberborn.wiki.gg/wiki/Badwater){:target="_blank"} (toxic waste), which kills plants and makes your beavers sick on contact.

## Red Tide Islands

![Red_Tide_Island](assets/images/screenshots/Red_Tide_Island.PNG)

[![Download](assets/images/icons/download.png){:class='icon icon-download'}](https://mod.io/g/timberborn/m/red-tide-islands){:target="_blank"}
[Mod.io Download](https://mod.io/g/timberborn/m/red-tide-islands){:target="_blank"}

### Description:

A custom game map created using the game's built-in map editor.

### Map Layout:
1) A lush starting area with [berry patches](https://timberborn.wiki.gg/wiki/Berries){:target="_blank"} for plentiful food, nearby trees for construction and a river for [water wheels](https://timberborn.wiki.gg/wiki/Water_Wheel){:target="_blank"}.

2) A deep water reservoir that's easy to dam. The dam keeps the surrounding bounty of berries and trees for construction [irrigated](https://timberborn.wiki.gg/wiki/Fluids#Irrigation){:target="_blank"} through early droughts.
- However, [badwater](https://timberborn.wiki.gg/wiki/Badwater){:target="_blank"} (11) will start creeping towards the intake, increasing water toxicity. This presents a gentle challenge for the player to overcome and encourages them to start thinking about this map’s meta.

3) A short river to build industry and [water wheels](https://timberborn.wiki.gg/wiki/Water_Wheel){:target="_blank"} for power.

4) An easy area to expand to for early game farms, to be later replaced by industry.

5/6)  Nearby islands easy to expand to. These islands were made with farming in mind, with their dammable water sources for [irrigation](https://timberborn.wiki.gg/wiki/Fluids#Irrigation){:target="_blank"} and easy to clear foliage.

7/8) Both of these islands can be reached through a relay from island (6). Since they are quite far away from your starting area, it provides an incentive to create a [second district](https://timberborn.wiki.gg/wiki/Districts){:target="_blank"}.

Both islands have:
- A small water source and river to facilitate a [second district](https://timberborn.wiki.gg/wiki/Districts){:target="_blank"} or industry expansions.
- A clearing as a telegraphed district build spot.
- A dammable water source for drinking water and light [water wheels](https://timberborn.wiki.gg/wiki/Water_Wheel){:target="_blank"}.
- Abundant trees for construction.

9) An island to expand to from island (1) with the purpose of forestry in mind. Trees are harder to clear but provide more wood than normal trees.
- The moon shaped bay can be dammed but it will be more challenging than other islands. The island's abundant trees will make local construction easier.

10) An old human outpost now in ruins.
- [Badwater](https://timberborn.wiki.gg/wiki/Badwater){:target="_blank"} source to contain and harvest.
- Mid-game opportunity to harvest scrap metal from ruins for metal production.
- An entrance to [underground ruins](https://timberborn.wiki.gg/wiki/Underground_Ruins){:target="_blank"} for a late game scrap metal mine.

### The Challenge:
- This is a map that flips the [typical scenario](https://timberborn.wiki.gg/wiki/Maps){:target="_blank"} upside down. [Typical maps](https://timberborn.wiki.gg/wiki/Maps){:target="_blank"} are landlocked with a shallow river running through them. Water is your most precious resource.
- In this map, water is abundant but current for [water wheels](https://timberborn.wiki.gg/wiki/Water_Wheel){:target="_blank"} is scarce.
- Water levels drop a bit but remain fairly steady during a drought due to the map’s border.
- However, because of these borders, a [badtide](https://timberborn.wiki.gg/wiki/Weather#Badtide){:target="_blank"} now floods the map with [badwater](https://timberborn.wiki.gg/wiki/Badwater){:target="_blank"} that lingers after the season, increasing toxicity and creating challenge areas around coastlines.
	- This is the turning point of the map and when the difficulties becomes clearer.

### Design Choices:
- To build a map different from those on [third party sites](https://mod.io/g/timberborn?tags-in=Map){:target="_blank"} or [base game scenarios](https://timberborn.wiki.gg/wiki/Maps){:target="_blank"}.
- Water is unusually abundant but it becomes a primary antagonist as the map progresses, due to increasing [badwater](https://timberborn.wiki.gg/wiki/Badwater){:target="_blank"} toxicity.
	- This is a play on “too much of a good thing” and “water, water, everywhere, but not a drop to drink’”

- Progression:
	- Early Game:
		- Abundant resources and flat build spots.
	- Mid Game:
		- Incentivizing expansion to islands near your central [district](https://timberborn.wiki.gg/wiki/Districts){:target="_blank"} while pushing the travel distance limits.
		- Players will experience their first [badtide](https://timberborn.wiki.gg/wiki/Weather#Badtide){:target="_blank"} and discover that this map isn't as easy as they thought. A whole new problem will be revealed when the [badwater](https://timberborn.wiki.gg/wiki/Badwater){:target="_blank"} doesn't dissipate easily.
	- Late Game:
		- Multiple [districts](https://timberborn.wiki.gg/wiki/Districts){:target="_blank"} are required due to shortage of land and long travel distances between them.
		- [Districts](https://timberborn.wiki.gg/wiki/Districts){:target="_blank"} and [trade](https://timberborn.wiki.gg/wiki/District_Crossing){:target="_blank"} will be needed between the islands.
		- Water toxicity is quite high and solutions need to be implemented to protect anything on a coastline or near a water source.
