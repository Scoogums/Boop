/**
 * Created by scoogumss on 19/12/2015.
 */

var swordNameCommon = ["Stick", "Branch", "Twig", "Plank"];
var swordNameUncommon = ["Sword", "Short-sword", "Broadsword", "Longsword"];
var swordNameRare = ["Gladius", "Estoc", "Claymore", "Cutlass", "Sabre", "Scimitar", "Bastard-Sword"];
var swordNameMythical = ["Katana", "Cleaver", "Scythe", "Rapier", "Flamberge", "Zweihander", "Bastard-Sword"];
var swordNameLegendary = ["Sword", "Short-sword", "Broadsword", "Longsword", "Katana", "Cleaver", "Scythe", "Rapier", "Flamberge", "Zweihander", "Bastard-Sword", "Gladius", "Estoc", "Claymore", "Cutlass", "Sabre", "Scimitar"];
var swordNameUnique = ["Durandal", "Excalibur", "Sting", "Callandor", "Glamdring", "Caledfwlch"];
var swordDescriptionCommon = ["Dented", "Damaged", "Battered", "Old", "Broken", "Stained", "Primitive", "Leafy", "Wind damaged"];
var swordDescriptionUncommon = ["Serviceable", "Almost new", "Functional", "Adequate", "Durable", "Unadorned", "Slightly damaged", "Unbalanced", "Off-Center"];
var swordDescriptionRare = ["Bejeweled", "Gem encrusted", "Shiny", "Sharp", "Deadly", "Polished", "Enhanced", "Counter-Weighted", "Basket Hilted"];
var swordDescriptionMythical = ["Shimmering", "Mystical", "Magical", "Enchanted", "Glowing", "Vorpal"];
var swordDescriptionLegendary = ["Humming", "Talking", "Possessed", "Invisible", "Nervous", "Malevolent"];
var swordDescriptionUnique = ["Legendary"];
var swordMaterialCommon = ["Oak", "Beech", "Pine", "Hazel", "Birch", "Elm", "Cedar", "Mahogany", "Hickory", "Red Oak", "Poplar", "Maple", "Cherry", "Butternut", "Eldar", "Birch", "Ash", "Walnut", "Spruce", "Teak", "Sequoia"];
var swordMaterialUncommon = ["Copper", "Iron", "Bronze", "Tin", "Dolomite", "Brass", "Cast Iron"];
var swordMaterialRare = ["Steel", "Silver", "Gold"];
var swordMaterialMythical = ["Mithril", "Adamantite", "Diamond", "Dilithium", "Orichalcum"];
var swordMaterialLegendary = ["Moonstone", "Sunstone", "Skystone", "Anti-Matter", "Dark-Matter", "Strange-Matter"];
var swordMaterialUnique = ["Glowing"];
var commonValue = 50;
var uncommonValue = 75;
var rareValue = 90;
var mythicalValue = 97;
var legendaryValue = 99.5;
var uniqueValue = 100;

var weapon = function (name, minDamage, maxDamage, rarity, goldValue, rarityValue) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.rarity = rarity;
    this.goldValue = goldValue;
    this.rarityValue = rarityValue;
};

var sword = function () {
    weapon.apply(this, arguments);
};

sword.prototype = new weapon();

// Can be changed in the future to deal with weapons that aren't swords.
// Rolls a value between 1-100 and then creates a weapon based on the rarity that is rolled.

var generateSword = function(sword) {
    rarityRoll = (Math.random()*100).toFixed(2);
    if (rarityRoll <= commonValue) {
        generateBaseDamage(sword, 3, player.level, 1);
        sword.name = generateName("sword","Common");
        sword.rarity = "Common";
        sword.rarityValue = 1;
        sword.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= uncommonValue) {
        generateBaseDamage(sword, 5, player.level, 1.25);
        sword.name = generateName("sword","Uncommon");
        sword.rarity = "Uncommon";
        sword.rarityValue = 2;
        sword.goldValue = generatePrice(4, player.level);
    } else if (rarityRoll <= rareValue) {
        generateBaseDamage(sword, 7, player.level, 1.5);
        sword.name = generateName("sword","Rare");
        sword.rarity = "Rare";
        sword.rarityValue = 3;
        sword.goldValue = generatePrice(6, player.level);
    } else if (rarityRoll <= mythicalValue) {
        generateBaseDamage(sword, 10, player.level, 2);
        sword.name = generateName("sword","Mythical");
        sword.rarity = "Mythical";
        sword.rarityValue = 4;
        sword.goldValue = generatePrice(8, player.level);
    } else if (rarityRoll <= legendaryValue) {
        generateBaseDamage(sword, 14, player.level, 2.5);
        sword.name = generateName("sword","Legendary");
        sword.rarity = "Legendary";
        sword.rarityValue = 5;
        sword.goldValue = generatePrice(12, player.level);
    } else if (rarityRoll <= uniqueValue) {
        generateBaseDamage(sword, 20, player.level, 4);
        sword.name = generateName("sword","Unique");
        sword.rarity = "Unique";
        sword.rarityValue = 6;
        sword.goldValue = generatePrice(20, player.level);
    };
    console.log("Generated a weapon called: " + sword.name);
    console.log("Min Damage:" + sword.minDamage + " Max Damage:" + sword.maxDamage);
    console.log("Price:" + sword.goldValue + "g Rarity:" + sword.rarity);
};

// Calculates the price of the object.
var generatePrice = function (multiplier, level) {
     return calculateRandomValue((level * multiplier), (level * multiplier))
};

// Generates base damage for weapons. Should be changed at some point to a prototype function
// that will be able to dynamically calculate damage based on weapon types.
var generateBaseDamage = function (sword, baseDamage, level, modifier) {
    sword.minDamage = Math.floor(calculateRandomValue(baseDamage, level) * modifier);
    sword.maxDamage = Math.floor(sword.minDamage + calculateRandomValue(baseDamage, level) * modifier);
};

// Currently only works for swords. Forces the creation of a unique item.
var generateUniqueItem = function (item) {
    generateBaseDamage(item, 20, player.level, 4);
    item.name = generateName("sword", "Unique");
    item.rarity = "Unique";
    item.goldValue = generatePrice(20, player.level);
    console.log("Generated a weapon called: " + item.name);
    console.log("Min Damage:" + item.minDamage + " Max Damage:" + item.maxDamage);
    console.log("Price:" + item.goldValue + "g Rarity:" + item.rarity);
};

var generateCommonItem = function (item) {
    generateBaseDamage(item, 3, player.level, 1);
    item.name = generateName("sword", "Common");
    item.rarity = "Common";
    item.goldValue = generatePrice(2, player.level);
    console.log("Generated a weapon called: " + item.name);
    console.log("Min Damage:" + item.minDamage + " Max Damage:" + item.maxDamage);
    console.log("Price:" + item.goldValue + "g Rarity:" + item.rarity);
};

// Generates the namee of an object depending on it's rarity. Should be able to make it apply to any
// kind of object as long as the arrays are named correctly.
var generateName = function (equipmentObject, objectRarity) {
    var dynamicDescription, dynamicName, dynamicMaterial;
    var objectDescription = "Description", objectName = "Name", objectMaterial = "Material";
    dynamicDescription = (eval(equipmentObject + objectDescription + objectRarity));
    dynamicName = (eval(equipmentObject + objectName + objectRarity));
    dynamicMaterial = (eval(equipmentObject + objectMaterial + objectRarity));
    var objectNameString = "";
    objectNameString += dynamicDescription[Math.floor((Math.random() * dynamicDescription.length))] + " " + dynamicMaterial[Math.floor((Math.random() * dynamicMaterial.length))] + " " + dynamicName[Math.floor((Math.random() * dynamicName.length))];
    return objectNameString;
};

// Used for testing random distribution of weapon drops. Can simulate as many cases as you like by
// changing the value next to 'amount of simulations'.
var swordRaritySimulator = function () {
    var commons = 0, uncommons = 0, rares = 0, mythicals = 0, legendary = 0, unique = 0, randomValue;
    var amountOfSimulations = 10000;
    for (var x = 1; x < amountOfSimulations; x++) {
        randomValue = (Math.random()*100).toFixed(2);
        if (randomValue <= commonValue) {
            commons++;
        } else if (randomValue <= uncommonValue) {
             uncommons++;
             } else if (randomValue <= rareValue) {
            rares++;
        } else if (randomValue <= mythicalValue) {
            mythicals++;
        } else if (randomValue <= legendaryValue) {
            legendary++;
        } else if (randomValue <= uniqueValue) {
            unique++;
        }
    }
    console.log("Common:" + commons + " " + (commons / (amountOfSimulations / 100)) + "%");
    console.log("Uncommon:" + uncommons + " " + (uncommons / (amountOfSimulations / 100)) + "%");
    console.log("Rare:" + rares + " " + (rares / (amountOfSimulations / 100)) + "%");
    console.log("Mythical:" + mythicals + " " + (mythicals / (amountOfSimulations / 100)) + "%");
    console.log("Legendary:" + legendary + " " + (legendary / (amountOfSimulations / 100)) + "%");
    console.log("Unique:" + unique + " " + (unique / (amountOfSimulations / 100)) + "%");
};