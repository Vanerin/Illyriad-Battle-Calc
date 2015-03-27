
function Commander(c, b, a) {
    this.type = c;
    this.stats = b;
    this.name = a;
    if (this.stats == null) {
        this.stats = {}
    }
    if (this.name == null) {
        this.name = ""
    }
}

function Division(c, b, a) {
    this.commander = c;
    this.name = b;
    if (a != null) {
        this.troops = a
    } else {
        this.troops = {}
    }
}

function Army(b, a) {
    this.race = b;
    if (a == null) {
        this.divisions = new Array()
    } else {
        this.divisions = a
    }
}
Army.prototype.addDivision = function(a) {
    this.divisions.push(a)
};

function TerrainCommander(g, c, f, e, b, a, h, d) {
    this.atkspear = g;
    this.atkbow = c;
    this.atksword = f;
    this.atkcav = e;
    this.defspear = b;
    this.defbow = a;
    this.defsword = h;
    this.defcav = d
}

function Terrain(c, a, b) {
    this.id = c;
    this.name = a;
    this.bonus = b
}

function UnitType(b, a) {
    this.id = b;
    this.name = a
}

function Unit(b, h, g, c, i, e, j, a, d, f) {
    this.name = b;
    this.type = h;
    this.attack = g;
    this.defspear = c;
    this.defbow = i;
    this.defsword = e;
    this.defcav = j;
    this.capacity = a;
    this.speed = d;
    this.xp = f
}
var terrainStrings = new Array(null, /attacking into very mountainous terrain/, null, null, /Attacking up a small hill offers little advantage, or penalty, to the attacking force/, null, null, /on open plains/, /when fighting in a building/, null, /Heavily wooded terrain spells difficulty for ranged units and cavalry/, null, null, null, null);
var terrains1 = new Array(null, new Terrain(1, "Large Mountain", new TerrainCommander(0, 100, 0, -50, 0, 100, 0, -50)), new Terrain(2, "Small Mountain", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(3, "Large Hill", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(4, "Small Hill", new TerrainCommander(0, 0, 0, 0, 5, 5, 5, 5)), new Terrain(5, "Impassable", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(6, "Small Forest", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(7, "Plains", new TerrainCommander(-20, 0, 0, 100, -20, 0, 0, 100)), new Terrain(8, "Buildings", new TerrainCommander(60, 0, 50, 0, 60, 0, 50, 0)), new Terrain(9, "Nonexisting", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(10, "Large Forest", new TerrainCommander(0, 0, 50, -50, 0, 0, 50, -50)), new Terrain(11, "Fresh Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(12, "Tidal Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(13, "Shallow Salt Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(14, "Ocean", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)));
var terrains2 = new Array(null, new Terrain(1, "Large Mountain", new TerrainCommander(0, 25, -20, -40, 20, 40, 0, -40)), new Terrain(2, "Small Mountain", new TerrainCommander(0, 10, -10, -20, 10, 20, 0, -20)), new Terrain(3, "Large Hill", new TerrainCommander(0, 5, -5, -10, 5, 10, 0, -10)), new Terrain(4, "Small Hill", new TerrainCommander(0, 0, 0, 0, 5, 5, 5, 5)), new Terrain(5, "Impassable", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(6, "Small Forest", new TerrainCommander(0, -10, 10, -10, 0, 0, 0, 0)), new Terrain(7, "Plains", new TerrainCommander(0, 0, 0, 30, -15, 0, 0, 30)), new Terrain(8, "Buildings", new TerrainCommander(15, 0, 25, -25, 20, 15, 25, -70)), new Terrain(9, "Nonexisting", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(10, "Large Forest", new TerrainCommander(0, -15, 20, -15, 0, 0, 25, -30)), new Terrain(11, "Fresh Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(12, "Tidal Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(13, "Shallow Salt Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)), new Terrain(14, "Ocean", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)));
var terrains3 = new Array(null,
                          new Terrain(1, "Large Mountain", new TerrainCommander(0, 15, 15, -30, 20, 30, 5, -30)),
                          new Terrain(2, "Small Mountain", new TerrainCommander(0, 10, 5, -20, 15, 15, 5, -15)),
                          new Terrain(3, "Large Hill", new TerrainCommander(0, 10, 10, -15, 10, 15, 5, -10)),
                          new Terrain(4, "Small Hill", new TerrainCommander(0, 0, 0, 0, 5, 5, 5, 0)),
                          new Terrain(5, "Impassable", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)),
                          new Terrain(6, "Small Forest", new TerrainCommander(10, -10, 30, -10, 10, -10, 30, -10)),
                          new Terrain(7, "Plains", new TerrainCommander(-15, 0, 0, 30, -15, 0, 0, 25)),
                          new Terrain(8, "Buildings", new TerrainCommander(20, 5, 40, -50, 25, 15, 30, -45)),
                          new Terrain(9, "Nonexisting", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)),
                          new Terrain(10, "Large Forest", new TerrainCommander(5, -20, 30, -15, 5, -20, 25, -15)),
                          new Terrain(11, "Fresh Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)),
                          new Terrain(12, "Tidal Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)),
                          new Terrain(13, "Shallow Salt Water", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)),
                          new Terrain(14, "Ocean", new TerrainCommander(0, 0, 0, 0, 0, 0, 0, 0)));
var terrains = terrains3;
var _spear = new UnitType(1, "spear");
var _ranged = new UnitType(2, "ranged");
var _infantry = new UnitType(3, "infantry");
var _cavalry = new UnitType(4, "cavalry");
var unitTypes = new Array(_spear, _ranged, _infantry, _cavalry);
var units = new Array();

function getRace(a) {
    for (var c in units) {
        for (var b = 0; b < units[c].length; b++) {
            var d = units[c][b];
            if (a == d.name || a == d.name + "s") {
                return c
            }
        }
    }
    return null
}

function getUnit(c, a) {
    for (var b = 0; b < units[c].length; b++) {
        var d = units[c][b];
        if (d == null) {
            alert(c + " " + a + " i=" + b + "  len=" + units[c].length)
        }
        if (a == d.name) {
            return d
        }
    }
    return null
}
units.Alligators = new Array();
units.Anacondas = new Array();
units["Arctic Wolves"] = new Array();
units.Baboons = new Array();
units["Black Bears"] = new Array();
units["Black Panthers"] = new Array();
units["Brown Bears"] = new Array();
units.Cobras = new Array();
units["Coral Snakes"] = new Array();
units.Cyclopes = new Array();
units.Dwarves = new Array();
units.Elephants = new Array();
units.Elves = new Array();
units["Escaped Air Elementals"] = new Array();
units["Escaped Earth Elementals"] = new Array();
units["Escaped Water Elementals"] = new Array();
units["Fire Salamanders"] = new Array();
units.Gharials = new Array();
units.Ghosts = new Array();
units["Giant Beetles"] = new Array();
units["Giant Rats"] = new Array();
units["Giant Scorpions"] = new Array();
units["Giant Scuttlers"] = new Array();
units["Giant Snakes"] = new Array();
units["Giant Spiders"] = new Array();
units["Golden Monkeys"] = new Array();
units.Humans = new Array();
units["Ice Salamanders"] = new Array();
units.Jaguars = new Array();
units.Leopards = new Array();
units.Lions = new Array();
units.Mammoths = new Array();
units["Massive Scarabs"] = new Array();
units.Mercenaries = new Array();
units.Moumiyas = new Array();
units.Orcs = new Array();
units["Poisonous Crawlers"] = new Array();
units["Polar Bears"] = new Array();
units.Pumas = new Array();
units.Rhinoceros = new Array();
units["Roaming Trolls"] = new Array();
units.Salamanders = new Array();
units.Saurians = new Array();
units["Scaled Chargers"] = new Array();
units.Scritchers = new Array();
units["Simien Wolves"] = new Array();
units.Skeletons = new Array();
units["Snow Leopards"] = new Array();
units.Tigers = new Array();
units["White Tigers"] = new Array();
units["Wild Dogs"] = new Array();
units.Wolves = new Array();
units.Zombies = new Array();
units.Alligators.push(new Unit("Small Alligator", _spear, 9, 11, 10, 11, 14, 0, 15, 1));
units.Alligators.push(new Unit("Swamp Gator", _infantry, 19, 18, 17, 14, 21, 0, 14, 2));
units.Alligators.push(new Unit("Razor-toothed Alligator", _infantry, 28, 28, 26, 29, 30, 0, 16, 3));
units.Alligators.push(new Unit("Bone Crusher", _infantry, 38, 39, 35, 40, 42, 0, 14, 5));
units.Anacondas.push(new Unit("Green Anaconda", _spear, 8, 9, 11, 9, 12, 0, 12, 1));
units.Anacondas.push(new Unit("Yellow Anaconda", _infantry, 16, 16, 14, 17, 19, 0, 12, 2));
units.Anacondas.push(new Unit("Dark-spotted Anaconda", _infantry, 27, 28, 36, 29, 30, 0, 11, 3));
units.Anacondas.push(new Unit("Giant Anaconda", _infantry, 46, 39, 40, 40, 37, 0, 16, 5));
units["Arctic Wolves"].push(new Unit("Arctic Wolfpup", _spear, 7, 7, 8, 7, 8, 0, 17, 1));
units["Arctic Wolves"].push(new Unit("Adolescent Polar Wolf", _spear, 16, 14, 14, 13, 13, 0, 18, 2));
units["Arctic Wolves"].push(new Unit("Frost Wolf", _infantry, 23, 23, 23, 22, 21, 0, 18, 3));
units["Arctic Wolves"].push(new Unit("Permafrost Alpha Wolf", _infantry, 45, 42, 42, 37, 39, 0, 19, 5));
units.Baboons.push(new Unit("Young Baboon", _spear, 9, 9, 11, 9, 10, 0, 14, 1));
units.Baboons.push(new Unit("Adult Baboon", _spear, 19, 19, 20, 19, 20, 0, 14, 2));
units.Baboons.push(new Unit("Aggressive Baboon", _spear, 22, 33, 15, 32, 32, 0, 13, 3));
units.Baboons.push(new Unit("Sacred Baboon", _spear, 25, 38, 26, 34, 40, 0, 16, 5));
units["Black Bears"].push(new Unit("Black Bear Cub", _spear, 8, 8, 8, 7, 8, 0, 17, 1));
units["Black Bears"].push(new Unit("Adolescent Short-Faced Bear", _spear, 15, 13, 14, 15, 14, 0, 18, 2));
units["Black Bears"].push(new Unit("Adult Black Bear", _infantry, 24, 25, 24, 21, 22, 0, 18, 3));
units["Black Bears"].push(new Unit("Moon Bear", _infantry, 33, 32, 33, 33, 32, 0, 19, 5));
units["Black Panthers"].push(new Unit("Ferocious Black Panther", _spear, 17, 16, 16, 14, 15, 0, 19, 1));
units["Black Panthers"].push(new Unit("Snarling Panther", _infantry, 24, 20, 21, 18, 21, 0, 21, 2));
units["Black Panthers"].push(new Unit("Territorial Panther", _infantry, 33, 32, 36, 36, 29, 0, 23, 3));
units["Black Panthers"].push(new Unit("Massive Black Panther", _cavalry, 45, 42, 42, 42, 43, 0, 20, 5));
units["Brown Bears"].push(new Unit("Bear Cub", _spear, 7, 7, 7, 7, 8, 0, 12, 1));
units["Brown Bears"].push(new Unit("Adolescent Grizzlies", _infantry, 14, 12, 12, 12, 13, 0, 13, 1));
units["Brown Bears"].push(new Unit("Enraged Kodiak", _infantry, 21, 20, 20, 20, 21, 0, 14, 2));
units["Brown Bears"].push(new Unit("Adult Grizzlies", _infantry, 34, 32, 32, 25, 33, 0, 15, 3));
units.Cyclopes.push(new Unit("Argeian Cyclops", _spear, 25, 22, 16, 20, 18, 0, 10, 1));
units.Cyclopes.push(new Unit("Brontian Cyclops", _spear, 35, 38, 28, 26, 29, 0, 10, 2));
units.Cyclopes.push(new Unit("Steropean Cyclops", _infantry, 45, 35, 32, 34, 35, 0, 12, 3));
units.Cyclopes.push(new Unit("Polyphemian Cyclops", _infantry, 55, 48, 40, 52, 50, 0, 11, 5));
units.Cobras.push(new Unit("Small Cobra", _spear, 8, 9, 11, 8, 9, 0, 15, 1));
units.Cobras.push(new Unit("Large Cobra", _infantry, 18, 16, 26, 17, 20, 0, 18, 2));
units.Cobras.push(new Unit("Spitting Cobra", _ranged, 26, 28, 35, 30, 31, 0, 13, 3));
units.Cobras.push(new Unit("Naja", _cavalry, 46, 39, 42, 41, 37, 0, 14, 5));
units["Coral Snakes"].push(new Unit("Small Coral Snake", _spear, 9, 11, 11, 9, 12, 0, 15, 1));
units["Coral Snakes"].push(new Unit("Banded Coral Snake", _infantry, 18, 17, 26, 16, 21, 0, 18, 2));
units["Coral Snakes"].push(new Unit("Yellow Coral Snake", _infantry, 27, 29, 34, 30, 30, 0, 13, 3));
units["Coral Snakes"].push(new Unit("Thornscrub Coral Snake", _infantry, 35, 37, 40, 38, 39, 0, 14, 5));
units.Elephants.push(new Unit("Young Elephant", _cavalry, 86, 54, 55, 54, 66, 0, 8, 1));
units.Elephants.push(new Unit("Adult Elephant", _cavalry, 102, 70, 72, 72, 81, 0, 7, 2));
units.Elephants.push(new Unit("Bull Elephant", _cavalry, 138, 83, 86, 84, 100, 0, 7, 3));
units.Elephants.push(new Unit("Elder Elephant", _cavalry, 186, 95, 136, 140, 142, 0, 5, 5));
units["Fire Salamanders"].push(new Unit("Small Fire Salamander", _spear, 19, 17, 16, 12, 16, 0, 17, 1));
units["Fire Salamanders"].push(new Unit("Large Fire Salamander", _infantry, 25, 22, 21, 20, 20, 0, 18, 2));
units["Fire Salamanders"].push(new Unit("Spitting Fire Salamander", _ranged, 31, 31, 30, 31, 30, 0, 21, 3));
units["Fire Salamanders"].push(new Unit("Greater Fire Salamander", _cavalry, 45, 44, 44, 43, 45, 0, 19, 5));
units.Gharials.push(new Unit("Snaptooth", _spear, 10, 13, 13, 12, 13, 0, 13, 1));
units.Gharials.push(new Unit("Spindly Gharial", _spear, 17, 22, 20, 18, 21, 0, 14, 2));
units.Gharials.push(new Unit("Vicious Gharial", _infantry, 26, 30, 32, 31, 28, 0, 12, 3));
units.Gharials.push(new Unit("Brooding Gharial", _infantry, 35, 39, 39, 39, 38, 0, 10, 5));
units["Giant Beetles"].push(new Unit("Swarming Greenback", _spear, 6, 4, 4, 4, 6, 0, 14, 1));
units["Giant Beetles"].push(new Unit("Teeming Beetle", _spear, 12, 9, 10, 8, 10, 0, 14, 2));
units["Giant Beetles"].push(new Unit("Venomous Beetle", _spear, 17, 16, 10, 16, 16, 0, 13, 3));
units["Giant Beetles"].push(new Unit("Giant Beetle", _spear, 22, 20, 18, 17, 21, 0, 16, 5));
units["Giant Rats"].push(new Unit("Ratling", _spear, 6, 4, 4, 4, 6, 0, 24, 1));
units["Giant Rats"].push(new Unit("Rat", _spear, 12, 9, 8, 8, 8, 0, 28, 2));
units["Giant Rats"].push(new Unit("Diseased Rat", _spear, 14, 11, 11, 10, 12, 0, 26, 3));
units["Giant Rats"].push(new Unit("Elder Buck", _spear, 16, 14, 14, 14, 16, 0, 20, 5));
units["Giant Scorpions"].push(new Unit("Baby Giant Scorpion", _spear, 12, 15, 13, 5, 5, 0, 18, 1));
units["Giant Scorpions"].push(new Unit("Adult Giant Scorpion", _spear, 22, 27, 24, 15, 14, 0, 19, 2));
units["Giant Scorpions"].push(new Unit("Barbed Giant Scorpion", _infantry, 35, 41, 30, 20, 19, 0, 19, 3));
units["Giant Scorpions"].push(new Unit("Predatory Giant Scorpion", _cavalry, 52, 58, 56, 40, 21, 0, 17, 5));
units["Giant Scuttlers"].push(new Unit("Scuttler", _spear, 11, 13, 11, 9, 10, 0, 24, 1));
units["Giant Scuttlers"].push(new Unit("Adult Scuttler", _cavalry, 21, 25, 21, 22, 19, 0, 26, 2));
units["Giant Scuttlers"].push(new Unit("Ravenous Scuttler", _cavalry, 36, 25, 33, 30, 34, 0, 30, 3));
units["Giant Scuttlers"].push(new Unit("Elder Scuttler", _cavalry, 62, 52, 50, 48, 52, 0, 25, 5));
units["Giant Spiders"].push(new Unit("Adolescent Giant Spider", _spear, 15, 16, 16, 12, 17, 0, 17, 1));
units["Giant Spiders"].push(new Unit("Giant Spider", _infantry, 25, 21, 20, 19, 20, 0, 20, 2));
units["Giant Spiders"].push(new Unit("Spitting Spider", _ranged, 31, 31, 30, 33, 32, 0, 22, 3));
units["Giant Spiders"].push(new Unit("Elder Giant Spider", _cavalry, 42, 45, 47, 25, 46, 0, 20, 5));
units["Giant Spiders"].push(new Unit("Greater Spinner", _ranged, 22, 56, 10, 54, 35, 0, 18, 6));
units["Giant Snakes"].push(new Unit("Adolescent Serpent", _spear, 14, 11, 4, 12, 12, 0, 15, 1));
units["Giant Snakes"].push(new Unit("Adult Serpent", _infantry, 24, 19, 20, 21, 18, 0, 16, 2));
units["Giant Snakes"].push(new Unit("Spitter", _ranged, 32, 27, 28, 28, 28, 0, 16, 3));
units["Giant Snakes"].push(new Unit("Deathbite", _ranged, 39, 45, 48, 45, 45, 0, 15, 5));
units["Giant Snakes"].push(new Unit("Elder Serpent", _cavalry, 46, 45, 41, 42, 46, 0, 14, 5));
units["Golden Monkeys"].push(new Unit("Young Golden Monkey", _spear, 6, 4, 5, 4, 6, 0, 14, 1));
units["Golden Monkeys"].push(new Unit("Adult Golden Monkey", _spear, 11, 9, 10, 9, 9, 0, 14, 2));
units["Golden Monkeys"].push(new Unit("Cunning Golden Monkey", _spear, 15, 14, 10, 16, 16, 0, 13, 3));
units["Golden Monkeys"].push(new Unit("Golden Monkey Elder", _spear, 20, 20, 18, 17, 20, 0, 16, 5));
units["Ice Salamanders"].push(new Unit("Small Ice Salamander", _spear, 16, 13, 15, 12, 16, 0, 17, 1));
units["Ice Salamanders"].push(new Unit("Large Ice Salamander", _infantry, 21, 20, 18, 19, 21, 0, 18, 2));
units["Ice Salamanders"].push(new Unit("Spitting Ice Salamander", _ranged, 29, 21, 29, 27, 28, 0, 20, 3));
units["Ice Salamanders"].push(new Unit("Greater Ice Salamander", _cavalry, 37, 31, 34, 32, 30, 0, 17, 5));
units.Jaguars.push(new Unit("Jaguar Cub", _spear, 9, 8, 9, 10, 9, 0, 24, 1));
units.Jaguars.push(new Unit("Adolescent Jaguar", _spear, 16, 16, 16, 15, 16, 0, 26, 2));
units.Jaguars.push(new Unit("Adult Jaguar", _infantry, 28, 27, 28, 24, 25, 0, 28, 3));
units.Jaguars.push(new Unit("Elder Jaguar", _infantry, 35, 36, 38, 36, 36, 0, 5, 5));
units.Leopards.push(new Unit("Leopard Cub", _spear, 14, 11, 12, 12, 12, 0, 28, 1));
units.Leopards.push(new Unit("Young Leopard", _spear, 20, 19, 21, 19, 19, 0, 30, 2));
units.Leopards.push(new Unit("Fully Grown Leopard", _infantry, 31, 11, 38, 32, 31, 0, 36, 3));
units.Leopards.push(new Unit("Elder Leopard", _infantry, 38, 38, 38, 36, 36, 0, 30, 5));
units.Lions.push(new Unit("Lion Cub", _spear, 16, 15, 13, 15, 15, 0, 18, 1));
units.Lions.push(new Unit("Adolescent Lion", _spear, 21, 21, 19, 19, 20, 0, 20, 2));
units.Lions.push(new Unit("Adult Lion", _infantry, 35, 32, 31, 33, 34, 0, 22, 3));
units.Lions.push(new Unit("Long-maned Lion", _infantry, 41, 46, 40, 41, 44, 0, 20, 5));
units.Mammoths.push(new Unit("Young Mammoth", _cavalry, 102, 80, 86, 86, 82, 0, 6, 1));
units.Mammoths.push(new Unit("Adult Mammoth", _cavalry, 158, 112, 70, 119, 130, 0, 6, 2));
units.Mammoths.push(new Unit("Enraged Tusker", _cavalry, 196, 165, 168, 110, 105, 0, 7, 3));
units.Mammoths.push(new Unit("Elder Tusker", _cavalry, 268, 238, 245, 105, 100, 0, 5, 5));
units["Massive Scarabs"].push(new Unit("Small Scarab", _spear, 11, 9, 10, 8, 10, 0, 18, 1));
units["Massive Scarabs"].push(new Unit("Aggressive Scarab", _spear, 19, 16, 10, 16, 16, 0, 19, 1));
units["Massive Scarabs"].push(new Unit("Adult Scarab", _spear, 22, 20, 18, 17, 21, 0, 17, 1));
units["Massive Scarabs"].push(new Unit("Elder Scarab", _spear, 30, 34, 36, 34, 32, 0, 18, 1));
units["Poisonous Crawlers"].push(new Unit("Small Poisonous Crawler", _spear, 12, 14, 15, 12, 16, 0, 11, 1));
units["Poisonous Crawlers"].push(new Unit("Adult Crawler", _infantry, 20, 17, 20, 21, 21, 0, 12, 2));
units["Poisonous Crawlers"].push(new Unit("Spitting Crawler", _ranged, 32, 31, 30, 29, 32, 0, 13, 3));
units["Poisonous Crawlers"].push(new Unit("Crawler Queen", _cavalry, 51, 40, 37, 50, 42, 0, 13, 5));
units["Polar Bears"].push(new Unit("Polar Bear Cub", _spear, 9, 8, 7, 9, 10, 0, 12, 1));
units["Polar Bears"].push(new Unit("Adolescent Polar Bear", _infantry, 18, 25, 18, 23, 17, 0, 13, 2));
units["Polar Bears"].push(new Unit("Nanuq", _infantry, 25, 45, 32, 40, 35, 0, 15, 4));
units["Polar Bears"].push(new Unit("IsbjÃ¸rn", _infantry, 50, 72, 39, 70, 58, 0, 13, 6));
units.Pumas.push(new Unit("Adolescent Puma", _spear, 13, 11, 8, 9, 11, 0, 20, 1));
units.Pumas.push(new Unit("Wiry Puma", _spear, 19, 19, 20, 19, 18, 0, 26, 2));
units.Pumas.push(new Unit("Muscular Puma", _infantry, 29, 26, 36, 32, 28, 0, 27, 3));
units.Pumas.push(new Unit("Puma Leader", _infantry, 36, 36, 33, 31, 34, 0, 24, 5));
units.Rhinoceros.push(new Unit("Rhino Calf", _cavalry, 48, 30, 32, 30, 32, 0, 9, 1));
units.Rhinoceros.push(new Unit("Enraged Rhino", _cavalry, 62, 49, 52, 50, 51, 0, 15, 2));
units.Rhinoceros.push(new Unit("Adult Black Rhino", _cavalry, 89, 68, 70, 71, 72, 0, 17, 3));
units.Rhinoceros.push(new Unit("Adult White Rhino", _cavalry, 92, 71, 73, 74, 75, 0, 17, 5));
units["Roaming Trolls"].push(new Unit("Young Troll", _spear, 18, 21, 13, 17, 17, 0, 7, 1));
units["Roaming Trolls"].push(new Unit("Troll Wanderer", _spear, 29, 22, 24, 23, 24, 0, 8, 2));
units["Roaming Trolls"].push(new Unit("Troll Devourer", _infantry, 38, 35, 35, 34, 35, 0, 7, 3));
units["Roaming Trolls"].push(new Unit("Hunting Troll", _infantry, 47, 42, 44, 42, 43, 0, 7, 5));
units.Salamanders.push(new Unit("Small Salamander", _spear, 17, 16, 16, 12, 17, 0, 17, 1));
units.Salamanders.push(new Unit("Large Salamander", _infantry, 24, 21, 21, 19, 21, 0, 19, 2));
units.Salamanders.push(new Unit("Spitting Salamander", _ranged, 32, 32, 30, 33, 32, 0, 21, 3));
units.Salamanders.push(new Unit("Greater Salamander", _cavalry, 40, 41, 41, 41, 43, 0, 18, 5));
units.Saurians.push(new Unit("Spike-Backed Saurian", _spear, 83, 70, 82, 72, 80, 0, 7, 1));
units.Saurians.push(new Unit("Long-Necked Saurian", _infantry, 142, 136, 138, 124, 121, 0, 6, 2));
units.Saurians.push(new Unit("Saurian Raptor", _infantry, 244, 196, 160, 184, 201, 0, 11, 3));
units.Saurians.push(new Unit("Saurian Lord", _cavalry, 301, 272, 284, 286, 280, 0, 6, 5));
units["Scaled Chargers"].push(new Unit("Scaled Charger", _infantry, 22, 10, 28, 24, 15, 0, 12, 1));
units["Scaled Chargers"].push(new Unit("Armoured Charger", _infantry, 25, 28, 36, 26, 17, 0, 10, 2));
units["Scaled Chargers"].push(new Unit("Heavy Charger", _infantry, 35, 34, 34, 32, 21, 0, 8, 3));
units["Scaled Chargers"].push(new Unit("Lightning Charger", _cavalry, 47, 37, 32, 30, 23, 0, 15, 5));
units.Scritchers.push(new Unit("Small Scritcher", _spear, 10, 7, 8, 9, 9, 0, 16, 1));
units.Scritchers.push(new Unit("Adult Scritcher", _spear, 18, 16, 16, 17, 17, 0, 17, 2));
units.Scritchers.push(new Unit("Taloned Scritcher", _infantry, 37, 26, 34, 24, 21, 0, 18, 3));
units.Scritchers.push(new Unit("Elder Scritcher", _infantry, 36, 38, 41, 26, 32, 0, 16, 5));
units["Simien Wolves"].push(new Unit("Adolescent Simien Wolf", _spear, 8, 10, 12, 10, 8, 0, 17, 1));
units["Simien Wolves"].push(new Unit("Adult Simien Wolf", _spear, 16, 17, 20, 16, 14, 0, 18, 2));
units["Simien Wolves"].push(new Unit("Snarling Simien Wolf", _infantry, 25, 27, 29, 20, 22, 0, 18, 3));
units["Simien Wolves"].push(new Unit("Simien Wolfpack Leader", _cavalry, 34, 32, 35, 33, 32, 0, 19, 5));
units["Snow Leopards"].push(new Unit("Snow Leopard Cub", _spear, 9, 9, 9, 10, 10, 0, 17, 1));
units["Snow Leopards"].push(new Unit("Adolescent Snow Leopard", _spear, 17, 15, 16, 12, 16, 0, 18, 2));
units["Snow Leopards"].push(new Unit("Adult Snow Leopard", _infantry, 26, 28, 26, 24, 25, 0, 18, 3));
units["Snow Leopards"].push(new Unit("Elder Snow Leopard", _infantry, 38, 33, 39, 33, 37, 0, 19, 5));
units.Tigers.push(new Unit("Tiger Cub", _spear, 18, 15, 13, 17, 17, 0, 17, 1));
units.Tigers.push(new Unit("Adolescent Tiger", _spear, 25, 20, 19, 19, 21, 0, 19, 2));
units.Tigers.push(new Unit("Adult Tiger", _infantry, 37, 32, 31, 33, 33, 0, 21, 3));
units.Tigers.push(new Unit("Elder Amur Tiger", _infantry, 52, 46, 42, 41, 44, 0, 19, 5));
units["White Tigers"].push(new Unit("White Tiger Cub", _spear, 19, 15, 13, 17, 17, 0, 16, 1));
units["White Tigers"].push(new Unit("Adolescent White Tiger", _spear, 26, 20, 19, 19, 21, 0, 18, 2));
units["White Tigers"].push(new Unit("Adult White Tiger", _infantry, 38, 32, 31, 33, 44, 0, 20, 3));
units["White Tigers"].push(new Unit("Elder White Tiger", _infantry, 60, 46, 42, 41, 60, 0, 18, 5));
units["Wild Dogs"].push(new Unit("Pup", _spear, 3, 3, 4, 3, 3, 0, 16, 1));
units["Wild Dogs"].push(new Unit("Wild Dog", _spear, 5, 5, 6, 5, 5, 0, 17, 1));
units["Wild Dogs"].push(new Unit("Rabid Hound", _infantry, 9, 7, 8, 7, 7, 0, 18, 2));
units["Wild Dogs"].push(new Unit("Pack Leader", _infantry, 11, 10, 11, 10, 10, 0, 18, 3));
units.Wolves.push(new Unit("Wolfpup", _spear, 5, 5, 6, 5, 5, 0, 16, 1));
units.Wolves.push(new Unit("Grey Wolves", _infantry, 8, 8, 9, 8, 8, 0, 18, 1));
units.Wolves.push(new Unit("White Wolves", _infantry, 14, 14, 15, 14, 14, 0, 19, 2));
units.Wolves.push(new Unit("Alpha Wolves", _cavalry, 20, 20, 21, 20, 20, 0, 18, 3));
units.Wolves.push(new Unit("Wolfpack Leader", _cavalry, 30, 30, 31, 30, 35, 0, 20, 5));
units.Skeletons.push(new Unit("Reanimated Bonesmen", _infantry, 9, 16, 18, 10, 7, 0, 6, 1));
units.Skeletons.push(new Unit("Ribbed Cadavers", _infantry, 22, 28, 32, 16, 18, 0, 6, 2));
units.Skeletons.push(new Unit("Skeletal Warriors", _infantry, 32, 40, 38, 27, 27, 0, 6, 3));
units.Skeletons.push(new Unit("Ossified Commanders", _infantry, 40, 55, 58, 34, 32, 0, 6, 4));
units.Zombies.push(new Unit("Khraglangs", _ranged, 8, 7, 7, 5, 6, 0, 5, 1));
units.Zombies.push(new Unit("Shalangs", _infantry, 18, 16, 13, 10, 12, 0, 5, 2));
units.Zombies.push(new Unit("Ruslangs", _infantry, 25, 27, 22, 17, 19, 0, 5, 3));
units.Zombies.push(new Unit("Armlangs", _infantry, 32, 40, 38, 32, 34, 0, 3, 4));
units.Ghosts.push(new Unit("Phantasms", _cavalry, 13, 24, 28, 12, 15, 0, 26, 2));
units.Ghosts.push(new Unit("Spectres", _cavalry, 22, 34, 40, 22, 25, 0, 24, 3));
units.Ghosts.push(new Unit("Tortured Souls", _ranged, 30, 42, 44, 30, 36, 0, 19, 5));
units.Ghosts.push(new Unit("Banshees", _ranged, 42, 60, 66, 40, 48, 0, 19, 7));
units.Mercenaries.push(new Unit("Hired Spear", _spear, 9, 14, 4, 14, 20, 10, 6, 1));
units.Mercenaries.push(new Unit("Marauder", _spear, 23, 16, 6, 16, 26, 10, 4, 2));
units.Mercenaries.push(new Unit("Henchmen", _infantry, 14, 13, 9, 14, 13, 10, 5, 1));
units.Mercenaries.push(new Unit("Corsair", _infantry, 28, 16, 14, 17, 15, 10, 3, 2));
units.Mercenaries.push(new Unit("Bowmen", _ranged, 14, 16, 17, 15, 8, 10, 7, 2));
units.Mercenaries.push(new Unit("Professional Crossbowmen", _ranged, 23, 22, 21, 21, 10, 10, 5, 3));
units.Mercenaries.push(new Unit("Mercenary Light Horse", _cavalry, 29, 14, 15, 17, 15, 10, 13, 3));
units.Mercenaries.push(new Unit("Errant Knight", _cavalry, 43, 17, 18, 27, 28, 10, 9, 4));
units.Humans.push(new Unit("Militiamen", _spear, 7, 11, 4, 11, 13, 20, 8, 1));
units.Humans.push(new Unit("Pikemen", _spear, 16, 17, 11, 17, 29, 12, 6, 2));
units.Humans.push(new Unit("Archer", _ranged, 16, 21, 22, 20, 13, 20, 7, 2));
units.Humans.push(new Unit("Longbowmen", _ranged, 24, 33, 32, 32, 20, 27, 9, 3));
units.Humans.push(new Unit("Swordsmen", _infantry, 22, 13, 10, 15, 14, 48, 7, 2));
units.Humans.push(new Unit("Men-at-Arms", _infantry, 35, 20, 18, 21, 19, 55, 5, 3));
units.Humans.push(new Unit("Charioteer", _cavalry, 37, 15, 16, 20, 21, 150, 18, 3));
units.Humans.push(new Unit("Knight", _cavalry, 65, 20, 19, 28, 28, 100, 12, 4));
units.Elves.push(new Unit("Protector", _spear, 6, 11, 4, 10, 13, 18, 9, 1));
units.Elves.push(new Unit("Phalanx", _spear, 15, 15, 10, 15, 30, 10, 7, 2));
units.Elves.push(new Unit("Sentinel", _ranged, 20, 23, 24, 23, 16, 25, 10, 2));
units.Elves.push(new Unit("Elven Trueshot", _ranged, 32, 36, 36, 34, 25, 30, 8, 3));
units.Elves.push(new Unit("Warden", _infantry, 21, 14, 12, 14, 14, 55, 6, 2));
units.Elves.push(new Unit("Wardancer", _infantry, 33, 19, 19, 20, 20, 65, 8, 3));
units.Elves.push(new Unit("Swiftsteed", _cavalry, 36, 13, 13, 20, 21, 130, 20, 3));
units.Elves.push(new Unit("Marshal", _cavalry, 59, 19, 18, 27, 28, 92, 17, 4));
units.Dwarves.push(new Unit("Yeomen", _spear, 7, 12, 4, 13, 13, 22, 8, 1));
units.Dwarves.push(new Unit("Halbardier", _spear, 16, 17, 13, 17, 29, 16, 6, 2));
units.Dwarves.push(new Unit("Slinger", _ranged, 15, 21, 22, 20, 13, 35, 9, 2));
units.Dwarves.push(new Unit("Crossbowmen", _ranged, 26, 32, 31, 30, 21, 30, 7, 3));
units.Dwarves.push(new Unit("Axmen", _infantry, 29, 14, 11, 17, 14, 70, 9, 2));
units.Dwarves.push(new Unit("Stalwart", _infantry, 45, 20, 18, 21, 17, 44, 8, 3));
units.Dwarves.push(new Unit("Packsmen", _cavalry, 32, 15, 15, 10, 23, 95, 15, 3));
units.Dwarves.push(new Unit("Runerider", _cavalry, 57, 21, 20, 26, 29, 75, 11, 4));
units.Orcs.push(new Unit("Kobold Cohort", _spear, 9, 12, 6, 12, 13, 25, 8, 1));
units.Orcs.push(new Unit("Clan Guardsmen", _spear, 19, 18, 11, 18, 33, 18, 6, 2));
units.Orcs.push(new Unit("Clanguard", _ranged, 17, 19, 21, 20, 12, 32, 9, 2));
units.Orcs.push(new Unit("Death Dealer", _ranged, 26, 31, 30, 30, 20, 27, 7, 3));
units.Orcs.push(new Unit("Fang", _infantry, 22, 14, 11, 15, 14, 40, 7, 2));
units.Orcs.push(new Unit("Fist", _infantry, 36, 18, 17, 18, 19, 60, 5, 3));
units.Orcs.push(new Unit("Wolfrider", _cavalry, 34, 14, 14, 20, 24, 115, 17, 3));
units.Orcs.push(new Unit("Death Pack", _cavalry, 59, 21, 19, 28, 29, 85, 12, 4));
units.Moumiyas.push(new Unit("Black Moumiyas", _spear, 13, 12, 14, 11, 9, 0, 5, 3));
units.Moumiyas.push(new Unit("Red Moumiyas", _spear, 18, 22, 20, 15, 15, 0, 6, 4));
units.Moumiyas.push(new Unit("Ancient Moumiyas", _ranged, 29, 35, 42, 27, 25, 0, 5, 6));
units.Moumiyas.push(new Unit("Moumiyas Lords", _ranged, 50, 48, 46, 32, 36, 0, 4, 8));
units["Escaped Air Elementals"].push(new Unit("Escaped Air Elementals", _spear, 150, 250, 500, 250, 250, 0, 10, 15));
units["Escaped Earth Elementals"].push(new Unit("Escaped Earth Elementals", _spear, 500, 250, 250, 250, 250, 0, 10, 15));
units["Escaped Water Elementals"].push(new Unit("Escaped Water Elementals", _spear, 150, 250, 250, 500, 250, 0, 10, 15));

function parseCommanders(c) {
    var b = new Array();
    var a = c.split(/\n/);
    var d = 0;
    $.each(a, function(g, e) {
        var f = null;
        f = e.match(/(Skill Required)/);
        if (f != null && f.length > 0) {
            if (d == 0) {
                b.push(new Commander());
                d++
            } else {
                d = 0
            }
            return
        }
        f = e.match(/([A-Za-z ]+)\s+([A-Za-z ]+)\s+([0-9]+)\/([0-9]+)/);
        if (f != null && f.length > 0) {
            if (b.length == 0) {
                b.push(new Commander())
            }
            var h = b[b.length - 1];
            h.stats[f[1].replace(/ /g, "")] = ([f[3], f[4]]);
            return
        }
    });
    return b
}

function parseArmy2(d) {
    var e = new Army();
    var b = null;
    var a = d.split(/\n/);
    var c = "";
    $.each(a, function(k, o) {
        var m = null;
        var h = false;
        m = o.match(/^([-#'&A-Za-z0-9()\. ]+?)\s*\t+([-#'&A-Za-z0-9()\. ]+?)\s+\[([-A-Za-z ]+?)\]\s+([-A-Za-z ]+?)(\s+[0-9,]+)+/);
        if (!h && m != null && m.length > 0) {
            h = true;
            var f = m[1];
            var l = m[2];
            var n = m[4];
            var g = new Commander(m[4], null, m[2]);
            if (f != c) {
                c = f;
                e.divisions.push(new Division(g, c))
            }
            if (e.race == null) {
                e.race = getRace(m[4])
            }
        }
        m = o.match(/([-#'&A-Za-z0-9()\. ]+?)\s*\t+\[([A-Za-z][-A-Za-z ]+[A-Za-z])\]\s+([A-Za-z][-A-Za-z ]+[A-Za-z])\s+([0-9,]+)(\s+[0-9,]+){5}/);
        if (!h && m != null && m.length > 0) {
            h = true;
            var f = m[1];
            var n = m[3];
            var j = m[4];
            if (f != c) {
                c = f;
                e.divisions.push(new Division(null, c))
            }
            if (e.race == null) {
                e.race = getRace(m[3])
            }
            e.divisions[e.divisions.length - 1].troops[m[3]] = [m[4]]
        }
    });
    return e
}

function parseArmy(c) {
    var d = new Army();
    var b = null;
    var a = c.split(/\n/);
    $.each(a, function(j, g) {
        var h = null;
        var e = false;
        h = g.match(/Commander:\s+([-#'&A-Za-z0-9()\. ]+)\s+\[([-A-Za-z ]+)\]\s+[-A-Za-z ]+\s+[0-9]+/);
        if (!e && h != null && h.length > 0) {
            e = true;
            var f = null;
            for (var l = 0; l < commanders.length; l++) {
                var f = commanders[l];
                if (f != null) {
                    commanders[l] = null;
                    break
                }
            }
            if (f == null) {
                f = new Commander(h[2], null, h[1])
            } else {
                f.type = h[2];
                f.name = h[1]
            }
            var k = new Division(f);
            d.divisions.push(k);
            if (d.race == null) {
                d.race = getRace(h[2])
            }
            return
        }
        h = g.match(/Troops:\s+\[([-A-Za-z ]+)\]\s+\1+\s+([0-9]+)\s*([0-9]+)?/);
        if (!e && h != null && h.length > 0) {
            e = true;
            if (d.divisions.length == 0 || (d.divisions[d.divisions.length - 1].troops[h[1]] != null)) {
                d.divisions.push(new Division())
            }
            d.divisions[d.divisions.length - 1].troops[h[1]] = [h[2], h[3]];
            if (d.race == null) {
                d.race = getRace(h[1])
            }
            return
        }
    });
    return d
}

function processBattleReport(f) {
    for (var d = 1; d < terrainStrings.length; d++) {
        var e = terrainStrings[d];
        var c = f.match(e);
        if (c != null) {
            terrain = terrains[d].name;
            break
        }
    }
    var g = f.indexOf("Defenders:");
    var b = f.substring(f.indexOf("Attackers:"), g);
    var a = f.substring(g);
    commanders = parseCommanders(f);
    attackers = parseArmy(b);
    defenders = parseArmy(a)
}

function processReport(b) {
    var a = null;
    if ((a = b.match(/Two opposing forces clash against each other./)) != null) {
        processBattleReport(b)
    } else {
        if ((a = b.match(/Army: [A-Za-z ]+ [A-Za-z ]+/)) != null) {
            defenders = parseArmy(b)
        } else {
            if ((a = b.match(/Division\s+Commander\s+Type\s+#\s+Atk\s+DefSpr\s+DefBow\s+DefSwo\s+DefCav/)) != null) {
                attackers = parseArmy2(b)
            } else {
                alert("WTF IS THIS CRAP !?")
            }
        }
    }
    writeStuff();
    calculate()
}

function writeArmy(h, b, f, c) {
    h.append(newDivisionButton(c, b)).append("<br>");
    var a = f.divisions.length;
    for (var e = 0; e < a; e++) {
        var g = f.divisions[e];
        h.append(newDivision(c, b, g))
    }
}

function newCommander(g, d, f) {
    var a = "";
    var e = "";
    var c = null;
    if (f != null) {
        a = f.name;
        e = f.type;
        c = f.stats
    }
    var b = $("<fieldset><legend>Commander <i>" + a + "</i></legend>").attr("class", g + "c");
    b.append($('<input type="button" value="Remove Commander" onclick="$(this).parent().replaceWith(newCommanderButton(\'' + g + "', '" + d + "'));calculate();\"><br>"));
    b.append(newCommanderSelectbox(g + "cs", d, e));
    b.append(newCommanderStats(c));
    return b
}

function newCommanderButton(b, a) {
    return $('<input type="button" value="Add Commander" onclick="$(this).replaceWith(newCommander(\'' + b + "', '" + a + "'));calculate();\">")
}

function newDivisionButton(b, a) {
    return $('<input type="button" value="Add Division" onclick="$(this).parent().append(newDivision(\'' + b + "', '" + a + "', new Division()));\">")
}

function newDivision(f, e, h) {
    var g = h.commander;
    var b = h.troops;
    var d = h.name;
    if (d == null || d == "") {
        d = "division";
        d = ""
    }
    var a = $('<fieldset class="division"><legend>' + d + "</legend></fieldset>");
    a.find("legend").append($('<input type="button" value="Remove Division" onclick="$(this).parent().parent().remove();calculate();"><br>'));
    if (g != null) {
        a.append(newCommander(f, e, g))
    } else {
        a.append(newCommanderButton(f, e))
    }
    if (b != null) {
        var c = $("<fieldset><legend>Troops</legend>").attr("class", f + "t");
        a.append(c);
        c.append(newRaceUnits(e, b))
    }
    return a
}

function newTerrainSelectbox(d, a, c) {
    var b = $("<select></select>").attr("id", d);
    $.each(terrains, function(e, f) {
        if (f != null) {
            b.append(jQuery("<option></option>").val(f.id).html(f.name));
            if (a != null && a != "" && a == f.name) {
                b.find('option[value="' + f.id + '"]').attr("selected", "selected")
            }
        }
    });
    b.change(c);
    return b
}

function newCommanderSelectbox(e, c, a) {
    var b = $("<select></select>").attr("class", e);
    var d = units[c];
    $.each(d, function(f, g) {
        b.append($("<option></option>").val(g.name).html(g.name));
        if (g.name == a.substring(0, a.length - 1)) {
            a = a.substring(0, a.length - 1)
        }
    });
    if (a != null && a != "") {
        b.find('option[value="' + a + '"]').attr("selected", "selected")
    }
    b.change(calculate);
    b.keyup(calculate);
    return b
}

function newCommanderStats(a) {
    var g = {
        Heroism: [0, 10],
        AvoidCharge: [0, 10],
        BreakSpearWall: [0, 10],
        Cover: [0, 10],
        SwordMastery: [0, 10],
        Vitality: [0, 10],
        AcceleratedHealing: [0, 10],
        DefyDeath: [0, 10],
        UncannySense: [0, 10]
    };
    var f = {
        Charge: [0, 10],
        CloseQuarter: [0, 10],
        ConcentratedFire: [0, 10],
        Bloodlust: [0, 10],
        SquareFormation: [0, 10],
        PhalanxFormation: [0, 10],
        TortoiseFormation: [0, 10],
        InterlockedShields: [0, 10],
        ForcedMatch: [0, 10],
        MilitaryLogistics: [0, 10],
        ForceOfWill: [0, 10]
    };
    var d = $("<table>").attr({
        border: 0
    });
    var b = g;
    for (var c in b) {
        var e = $("<tr>");
        d.append(e);
        var h = b[c];
        if (a != null && a[c] != null) {
            h = a[c]
        }
        e.append($("<td>").html(c), $("<td>").append($("<input>").attr({
            name: c.toLowerCase(),
            type: "text",
            size: 4,
            value: h[0]
        }).keyup(calculate)), $("<td>").html("/ " + h[1]))
    }
    b = f;
    for (var c in b) {
        var e = $("<tr>");
        d.append(e);
        var h = b[c];
        if (a != null && a[c] != null) {
            h = a[c]
        }
        e.append($("<td>").html(c), $("<td>").append($("<input>").attr({
            name: c.toLowerCase(),
            type: "text",
            size: 4,
            value: h[0]
        }).keyup(calculate)), $("<td>").html("/ " + h[1]))
    }
    return d
}

function newRaceSelectbox(e, a, d) {
    var b = $("<select></select>").attr("id", e);
    for (var c in units) {
        b.append($("<option></option>").val(c).html(c))
    }
    if (a != null && a != "") {
        b.find('option[value="' + a + '"]').attr("selected", "selected")
    }
    b.change(d);
    b.keyup(d);
    return b
}

function newRaceUnits(b, a) {
    var c = $("<table>").attr({
        border: 0
    });
    var d = $("<tr>");
    c.append($("<thead>").append(d));
    d.append($("<td>").html("#"), $("<td>").html('Name <i>(Type)</i> <span style="color:red">(<i>loss</i>)</span>'), $("<td>").html("Losses"));
    $.each(units[b], function(f, g) {
        var h = $("<tr>");
        c.append(h);
        var i = 0;
        var e = "";
        if (a != null) {
            if (a[g.name] != null) {
                i = a[g.name]
            } else {
                if (a[g.name + "s"] != null) {
                    i = a[g.name + "s"]
                } else {
                    if (a[f] != null) {
                        i = a[f]
                    }
                }
            }
            if (i instanceof Array) {
                if (i[1] != null) {
                    e = "(<i>" + i[1] + "</i>)"
                }
                i = i[0]
            }
        }
        h.append($("<td>").append($("<input>").attr({
            name: "count",
            type: "text",
            size: 4,
            value: i
        }).keyup(calculate)), $("<td>").html(g.name + " (<i>" + g.type.name + '</i>) <small style="color:red">' + e + "</small>"), $("<td>").append($("<input>").attr({
            disabled: "disabled",
            name: "loss",
            type: "text",
            size: 4,
            value: ""
        })))
    });
    return c
}

function getCommanderBonus(a, b) {
    var c = 0;
    if (a != null && a.html() != "" && a.html() != null) {
        c = a.find("input[name=" + b + "]").val() * 1
    }
    return c
}

function getSpearAtkBonus(b) {
    var a = terrains[$("#t1").val()].bonus.atkspear;
    a += getCommanderBonus(b, "closequarter");
    return a
}

function getRangeAtkBonus(b) {
    var a = terrains[$("#t1").val()].bonus.atkbow;
    a += getCommanderBonus(b, "concentratedfire");
    return a
}

function getSwordAtkBonus(b) {
    var a = terrains[$("#t1").val()].bonus.atksword;
    a += getCommanderBonus(b, "bloodlust");
    return a
}

function getCavalAtkBonus(b) {
    var a = terrains[$("#t1").val()].bonus.atkcav;
    a += getCommanderBonus(b, "charge");
    return a
}

function getSpearDefBonus(b) {
    var a = terrains[$("#t1").val()].bonus.defspear;
    return a
}

function getRangeDefBonus(b) {
    var a = terrains[$("#t1").val()].bonus.defbow;
    return a
}

function getSwordDefBonus(b) {
    var a = terrains[$("#t1").val()].bonus.defsword;
    return a
}

function getCavalDefBonus(b) {
    var a = terrains[$("#t1").val()].bonus.defcav;
    return a
}

function calculateAttack(b, d) {
    var a = totalrawattack = spearattack = swordattack = rangeattack = cavalattack = heroism = 0;
    var c = units[b];
    d.find("fieldset[class=division]").each(function(k) {
        var i = divspearattack = divswordattack = divrangeattack = divcavalattack = divrawattack = 0;
        $(this).find("[class=at] table tbody tr").each(function(n) {
            var m = $(this).find("input[name=count]").val();
            var o = c[n];
            var l = m * o.attack;
            divrawattack += l;
            switch (o.type) {
                case _spear:
                    divspearattack += l;
                    break;
                case _infantry:
                    divswordattack += l;
                    break;
                case _ranged:
                    divrangeattack += l;
                    break;
                case _cavalry:
                    divcavalattack += l;
                    break;
                default:
                    alert('Unknow unit type: "' + o.type + '"')
            }
        });
        var f = $(this).find("[class=ac]");
        divspearattack += divspearattack * getSpearAtkBonus(f) / 100;
        divrangeattack += divrangeattack * getRangeAtkBonus(f) / 100;
        divswordattack += divswordattack * getSwordAtkBonus(f) / 100;
        divcavalattack += divcavalattack * getCavalAtkBonus(f) / 100;
        i = divspearattack + divswordattack + divrangeattack + divcavalattack;
        var g = (divspearattack == 0) ? 0 : divspearattack / i;
        var h = (divrangeattack == 0) ? 0 : divrangeattack / i;
        var j = (divswordattack == 0) ? 0 : divswordattack / i;
        var e = (divcavalattack == 0) ? 0 : divcavalattack / i;
        spearattack += divspearattack;
        rangeattack += divrangeattack;
        swordattack += divswordattack;
        cavalattack += divcavalattack;
        a += i;
        totalrawattack += divrawattack
    });
    d.find("fieldset[class=division]").each(function(i) {
        var e = getUnit(b, $(this).find("[class=acs]").val());
        if (e != null) {
            var h = Math.floor(e.attack * (1 + 6 * $(this).find("[class=ac] input[name=heroism]").val()));
            var j = 0;
            var g = $(this).find("[class=ac]");
            switch (e.type) {
                case _spear:
                    j += getSpearAtkBonus(g);
                    break;
                case _infantry:
                    j += getSwordAtkBonus(g);
                    break;
                case _ranged:
                    j += getRangeAtkBonus(g);
                    break;
                case _cavalry:
                    j += getCavalAtkBonus(g);
                    break;
                default:
                    alert('Unknown unit type: "' + e.type + '"')
            }
            j = (100 + j) / 100;
            var f = Math.floor(Math.min(totalrawattack, h) * j);
            switch (e.type) {
                case _spear:
                    spearattack += f;
                    break;
                case _infantry:
                    swordattack += f;
                    break;
                case _ranged:
                    rangeattack += f;
                    break;
                case _cavalry:
                    cavalattack += f;
                    break
            }
            a += f
        }
    });
    $("#spearattack").val(Math.floor(spearattack));
    $("#swordattack").val(Math.floor(swordattack));
    $("#rangeattack").val(Math.floor(rangeattack));
    $("#cavalattack").val(Math.floor(cavalattack));
    $("#totalattack").val(Math.floor(a))
}

function getUnitTerrainDefBonus(c, b) {
    var a = 100;
    switch (c.type) {
        case _spear:
            a += getSpearDefBonus(b);
            break;
        case _infantry:
            a += getSwordDefBonus(b);
            break;
        case _ranged:
            a += getRangeDefBonus(b);
            break;
        case _cavalry:
            a += getCavalDefBonus(b);
            break
    }
    a = a / 100;
    return a
}

function calculateDefense(c, e) {
    var b = sworddef = rangedef = cavaldef = 0;
    var d = units[c];
    e.find("fieldset[class=division]").each(function(j) {
        var h = $(this).find("[class=dc]");
        $(this).find("[class=dt] table tbody tr").each(function(l) {
            var k = $(this).find("input[name=count]").val();
            var n = d[l];
            var m = getUnitTerrainDefBonus(n, h);
            b += n.defspear * k * m * (1 + getCommanderBonus(h, "phalanxformation") / 100);
            sworddef += n.defsword * k * m * (1 + getCommanderBonus(h, "interlockedshields") / 100);
            rangedef += n.defbow * k * m * (1 + getCommanderBonus(h, "tortoiseformation") / 100);
            cavaldef += n.defcav * k * m * (1 + getCommanderBonus(h, "squareformation") / 100)
        });
        var f = 1;
        var i = getUnit(c, $(this).find("[class=dcs]").val());
        if (i != null) {
            var g = getUnitTerrainDefBonus(i, h);
            b += i.defspear * f * g * (1 + getCommanderBonus(h, "phalanxformation") / 100);
            sworddef += i.defsword * f * g * (1 + getCommanderBonus(h, "interlockedshields") / 100);
            rangedef += i.defbow * f * g * (1 + getCommanderBonus(h, "tortoiseformation") / 100);
            cavaldef += i.defcav * f * g * (1 + getCommanderBonus(h, "squareformation") / 100)
        }
    });
    b = b * $("#wall").val() * $("#spearattack").val() / $("#totalattack").val();
    sworddef = sworddef * $("#wall").val() * $("#swordattack").val() / $("#totalattack").val();
    rangedef = rangedef * $("#wall").val() * $("#rangeattack").val() / $("#totalattack").val();
    cavaldef = cavaldef * $("#wall").val() * $("#cavalattack").val() / $("#totalattack").val();
    var a = b + sworddef + rangedef + cavaldef;
    $("#speardef").val(b);
    $("#sworddef").val(sworddef);
    $("#rangedef").val(rangedef);
    $("#cavaldef").val(cavaldef);
    $("#totaldef").val(a)
}

function calculateLosses() {
    var d = $("#totalattack").val() * 1;
    var g = 0;
    var f = $("#totaldef").val() * 1 / $("#totalattack").val() * 1;
    var c = 0;
    var b = $("#racea").val();
    var e = units[b];
    $("#attacking fieldset[class=division]").each(function(i) {
        $(this).find("[class=at] table tbody tr").each(function(k) {
            var m = e[k];
            var j = $(this).find("input[name=count]").val();
            var l = Math.min(j, Math.floor(j * f));
            c += l * m.xp;
            g += j - l;
            $(this).find("input[name=loss]").val(l)
        })
    });
    var h = 0;
    var f = $("#totalattack").val() * 1 / $("#totaldef").val() * 1;
    var a = 0;
    var b = $("#raceb").val();
    var e = units[b];
    $("#defending fieldset[class=division]").each(function(i) {
        $(this).find("[class=dt] table tbody tr").each(function(k) {
            var m = e[k];
            var j = $(this).find("input[name=count]").val();
            var l = Math.min(j, Math.floor(j * f));
            a += l * m.xp;
            h += j - l;
            $(this).find("input[name=loss]").val(l)
        })
    });
    $("#attackingXP").val(c);
    $("#defendingXP").val(a);
    return (g > 0)
}

function calculate() {
    calculateAttack($("#racea").val(), $("#armya"));
    calculateDefense($("#raceb").val(), $("#armyb"));
    var a = calculateLosses();
    if (a) {
        $("#attacking").css({
            "background-color": "#669966"
        });
        $("#defending").css({
            "background-color": "#996666"
        })
    } else {
        $("#attacking").css({
            "background-color": "#996666"
        });
        $("#defending").css({
            "background-color": "#669966"
        })
    }
};
