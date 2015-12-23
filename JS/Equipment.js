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
var swordDescriptionMythical = ["Shimmering", "Mystical", "Magical", "Enchanted", "Vorpal"];
var swordDescriptionLegendary = ["Humming", "Talking", "Possessed", "Invisible", "Nervous", "Malevolent"];
var swordDescriptionUnique = ["Legendary"];
var swordMaterialCommon = ["Oak", "Beech", "Pine", "Hazel", "Birch", "Elm", "Cedar", "Mahogany", "Hickory", "Red Oak", "Poplar", "Maple", "Cherry", "Butternut", "Eldar", "Birch", "Ash", "Walnut", "Spruce", "Teak", "Sequoia"];
var swordMaterialUncommon = ["Copper", "Iron", "Bronze", "Tin", "Dolomite", "Brass", "Cast Iron"];
var swordMaterialRare = ["Steel", "Silver", "Gold"];
var swordMaterialMythical = ["Mithril", "Adamantite", "Diamond", "Dilithium", "Orichalcum"];
var swordMaterialLegendary = ["Moonstone", "Sunstone", "Skystone", "Anti-Matter", "Dark-Matter", "Strange-Matter"];
var swordMaterialUnique = ["Glowing"];

var daggerNameCommon = ["Dagger", "Shiv", "Knife", "Skewer"];
var daggerNameUncommon = ["Dagger", "Shiv", "Knife", "Skewer", "Dirk"];
var daggerNameRare = ["Poignard", "Stiletto", "Sticker", "Skewer", "Rondel", "Main Gauche", "Kukri", "Cinquedea", "Basilard", "Katar", "Parrying Dagger", "Hunting Dagger", "Dirk", "Kryss"];
var daggerNameMythical = ["Poignard", "Stiletto", "Sticker", "Skewer", "Rondel", "Main Gauche", "Kukri", "Cinquedea", "Basilard", "Katar", "Parrying Dagger", "Hunting Dagger", "Dirk", "Kryss"];
var daggerNameLegendary = ["Tooth", "Claw"];
var daggerNameUnique = ["Knife of Dreams"];
var daggerDescriptionCommon = ["Rusty", "Bent", "Dull", "Crooked", "Askew", "Damaged", "Battered", "Used", "Primitive", "Blunt", "Edgeless"];
var daggerDescriptionUncommon = ["Serviceable", "Almost new", "Functional", "Adequate", "Durable", "Unadorned", "Slightly damaged", "Unbalanced", "Off-Center"];
var daggerDescriptionRare = ["Needled", "Pointed", "Sharp", "Deadly", "Toothed", "Subtle","Razor-sharp", "Sharpened", "Keen", "Stinging", "Barbed", "Pointy", "Thorny", "Serrated", "Honed", "Prickly", "Tapered"];
var daggerDescriptionMythical = ["Glistening", "Glittering", "Beaming", "Sparkling", "Twinkling", "Scintillating"];
var daggerDescriptionLegendary = ["Dark", "Gloomy", "Forlorn", "Somber", "Dismal", "Bleak", "Sepulchral", "Shadowy", "Clouded", "Shady", "Illusory", "Indistinct"];
var daggerDescriptionUnique = ["Ancient"];
var daggerMaterialCommon = ["Stone", "Flint", "Bone", "Wooden"];
var daggerMaterialUncommon = ["Copper", "Iron", "Bronze", "Tin", "Dolomite", "Brass", "Cast Iron"];
var daggerMaterialRare = ["Ivory", "Steel", "Silver", "Gold", "Platinum", "Palladium"];
var daggerMaterialMythical = ["Mithril", "Adamantite", "Dilithium", "Orichalcum", "Stabbatium"];
var daggerMaterialLegendary = ["Dragon's", "Basilisk's", "Raging ape's", "Scary monster's"];
var daggerMaterialUnique = ["Glowing"];

var helmNameCommon = ["Cap", "Hood", "Hat"];
var helmNameUncommon = ["Coif", "Bassinet", "Helm", "Armet", "Sallet", "Close Helm", "Barbute", "Great Helm"];
var helmNameRare = ["Coif", "Bassinet", "Helm", "Armet", "Sallet", "Close Helm", "Barbute", "Great Helm"];
var helmNameMythical = ["Coif", "Bassinet", "Helm", "Armet", "Sallet", "Close Helm", "Barbute", "Great Helm", "Knights Helmet", "Circlet", "Crown"];
var helmNameLegendary = ["Halo", "Horns", "Spikes", "Angry Slug", "Calm Slug", "Tame Bird", "Strange Leaf"];
var helmNameUnique = ["Joke Shop Arrow", "Bunny Ears", "Ram Horns"];

var armorDescriptionCommon = ["Cloth", "Leather", "Wool", "Bone", "Jute", "Linen", "Fur", "Straw"];
var armorDescriptionUncommon = ["Copper", "Iron", "Bronze", "Tin", "Dolomite", "Brass", "Cast Iron"];
var armorDescriptionRare = ["Steel", "Silver", "Gold"];
var armorDescriptionMythical = ["Mithril", "Adamantite", "Diamond", "Dilithium", "Orichalcum", "Mage-Steel", "Wizard wrought"];
var armorDescriptionLegendary = ["Moonstone", "Sunstone", "Skystone", "Anti-Matter", "Dark-Matter", "Strange-Matter", "Dragon", "Demon", "Faerie", "Wyvern"];
var armorDescriptionUnique = ["Ancient"];
var armorMaterialCommon = ["Shoddy", "Decaying", "Dirty", "Dented", "Damaged", "Old", "Stained", "Primitive", "Wind damaged", "Weather beaten", "Musty", "Dusty", "Battered"];
var armorMaterialUncommon = ["Serviceable", "Almost new", "Functional", "Adequate", "Durable", "Unadorned", "Basic", "Generic", "Second Hand"];
var armorMaterialRare = ["Polished", "Shiny", "Expertly crafted"];
var armorMaterialMythical = ["Magical", "Enchanted", "Mystical", "Enhanced", "Skintight"];
var armorMaterialLegendary = ["Talking", "Spirit bonded", "Possessed", "Ensorcelled", "Nervous", "Blood thirsty"];
var armorMaterialUnique = ["Glowing"];

var chestNameCommon = ["Gambeson", "Robe", "Shirt", "Chestpiece", "Tunic", "Doublet", "Coat", "Jacket"];
var chestNameUncommon = ["Breastplate", "Brigandine", "Cuirass", "Hauberk", "Mail", "Harness"];
var chestNameRare = ["Breastplate", "Brigandine", "Cuirass", "Hauberk", "Mail"];
var chestNameMythical = ["Breastplate", "Brigandine", "Cuirass", "Hauberk", "Mail"];
var chestNameLegendary = ["Breastplate", "Brigandine", "Cuirass", "Hauberk", "Mail"];
var chestNameUnique = ["Robotic Exoskeleton", "Emperors new clothes"];

var shoulderNameCommon = ["Pauldrons", "Mantle", "Shoulder pads", "Shoulder guards", "Spaulders", "Ailettes"];
var shoulderNameUncommon = ["Shoulder plates", "Pauldrons", "Mantle", "Shoulder pads", "Shoulder guards", "Spaulders", "Ailettes"];
var shoulderNameRare = ["Shoulder plates", "Pauldrons", "Mantle", "Shoulder pads", "Shoulder guards", "Spaulders", "Ailettes"];
var shoulderNameMythical = ["Shoulder plates", "Curved Pauldrons", "Mantle", "Spiked Shoulder pads", "Rounded Shoulder guards", "Spaulders", "Ailettes"];
var shoulderNameLegendary = ["Tame parrot"];
var shoulderNameUnique = ["Pauldrons of Eternity"];

var glovesNameCommon = ["Gloves", "Grips"];
var glovesNameUncommon = ["Gloves", "Gauntlets", "Vambraces", "Fingerless gloves", "Plated gauntlets"];
var glovesNameRare = ["Gloves", "Gauntlets", "Vambraces", "Fingerless gloves", "Plated gauntlets"];
var glovesNameMythical = ["Gloves", "Gauntlets", "Vambraces", "Fingerless gloves", "Plated gauntlets"];
var glovesNameLegendary = ["Gloves", "Gauntlets", "Vambraces", "Fingerless gloves", "Plated gauntlets"];
var glovesNameUnique = ["Hand of Midas"];

var legsNameCommon = ["Pants", "Leggings", "Breeches", "Faulds", "Legwraps", "Chausses", "Tassets"];
var legsNameUncommon = ["Leg guards", "Mail leggings", "Plated leggings", "Mailed tassets", "Plated tassets", "Mailed faulds", "Plated faulds", "Plated tassets", "Mailed tassets"];
var legsNameRare = ["Leg guards", "Mail leggings", "Plated leggings", "Mailed tassets", "Plated tassets", "Mailed faulds", "Plated faulds", "Plated tassets", "Mailed tassets"];
var legsNameMythical = ["Leg guards", "Mail leggings", "Plated leggings", "Mailed tassets", "Plated tassets", "Mailed faulds", "Plated faulds", "Plated tassets", "Mailed tassets"];
var legsNameLegendary = ["Scaled leggings", "Plated leggings", "Scaled tassets", "Plated tassets", "Scaled faulds", "Plated faulds", "Scaled tassets", "Mailed tassets"];
var legsNameUnique = ["Leggings of Eternity"];

var bootsNameCommon = ["Shoes", "Boots"];
var bootsNameUncommon = ["Heavy boots", "Sabatons", "Greaves", "Boots", "Treads"];
var bootsNameRare = ["Heavy boots", "Sabatons", "Greaves", "Boots", "Treads"];
var bootsNameMythical = ["Heavy boots", "Sabatons", "Greaves", "Boots", "Treads"];
var bootsNameLegendary = ["War boots", "Footprints", "Strides", "Greaves", "Sabatons"];
var bootsNameUnique = ["Seven league boots"];

var cloakNameCommon = ["Cloak"];
var cloakNameUncommon = ["Cloak"];
var cloakNameRare = ["Cloak"];
var cloakNameMythical = ["Cloak"];
var cloakNameLegendary = ["Cloak"];
var cloakNameUnique = ["Invisibility Cloak"];

var commonValue = 50;
var uncommonValue = 75;
var rareValue = 90;
var mythicalValue = 97;
var legendaryValue = 99.5;
var uniqueValue = 100;

function equipment (name, minDamage, maxDamage, rarity, goldValue, rarityValue, armorValue) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.rarity = rarity;
    this.goldValue = goldValue;
    this.rarityValue = rarityValue;
    this.armorValue = armorValue;
};

function weapon (weaponType) {
    this.weaponType = weaponType;
    equipment.apply(this, arguments);
};

weapon.prototype = new equipment();

function armor (armorSlot) {
    this.armorType = armorSlot;
    equipment.apply(this, arguments);
};

armor.prototype = new equipment();

equipment.prototype.generateEquipment = function () {
    rarityRoll = (Math.random()*100).toFixed(2);
    if (rarityRoll <= commonValue) {
        this.generateName("Common");
        this.generateBaseStats(3, player.level, 1);
        this.rarity = "Common";
        this.rarityValue = 1;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= uncommonValue) {
        this.generateName("Uncommon");
        this.generateBaseStats(5, player.level, 1.25);
        this.rarity = "Uncommon";
        this.rarityValue = 2;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= rareValue) {
        this.generateName("Rare");
        this.generateBaseStats(7, player.level, 1.5);
        this.rarity = "Rare";
        this.rarityValue = 3;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= mythicalValue) {
        this.generateName("Mythical");
        this.generateBaseStats(10, player.level, 2);
        this.rarity = "Mythical";
        this.rarityValue = 4;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= legendaryValue) {
        this.generateName("Legendary");
        this.generateBaseStats(14, player.level, 2.5);
        this.rarity = "Legendary";
        this.rarityValue = 5;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= uniqueValue) {
        this.generateName("Unique");
        this.generateBaseStats(20, player.level, 4);
        this.rarity = "Unique";
        this.rarityValue = 6;
        this.goldValue = generatePrice(2, player.level);
    };
    console.log("Generated a weapon called: " + this.name);
    console.log("Min Damage:" + this.minDamage + " Max Damage:" + this.maxDamage);
    console.log("Price:" + this.goldValue + "g Rarity:" + this.rarity);
};

equipment.prototype.generateEquipmentFixedRarity = function (rarityNumber) {
    rarityRoll = rarityNumber;
    if (rarityRoll <= commonValue) {
        this.generateName("Common");
        this.generateBaseStats(3, player.level, 1);
        this.rarity = "Common";
        this.rarityValue = 1;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= uncommonValue) {
        this.generateName("Uncommon");
        this.generateBaseStats(5, player.level, 1.25);
        this.rarity = "Uncommon";
        this.rarityValue = 2;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= rareValue) {
        this.generateName("Rare");
        this.generateBaseStats(7, player.level, 1.5);
        this.rarity = "Rare";
        this.rarityValue = 3;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= mythicalValue) {
        this.generateName("Mythical");
        this.generateBaseStats(10, player.level, 2);
        this.rarity = "Mythical";
        this.rarityValue = 4;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= legendaryValue) {
        this.generateName("Legendary");
        this.generateBaseStats(14, player.level, 2.5);
        this.rarity = "Legendary";
        this.rarityValue = 5;
        this.goldValue = generatePrice(2, player.level);
    } else if (rarityRoll <= uniqueValue) {
        this.generateName("Unique");
        this.generateBaseStats(20, player.level, 4);
        this.rarity = "Unique";
        this.rarityValue = 6;
        this.goldValue = generatePrice(2, player.level);
    };
    console.log("Generated a weapon called: " + this.name);
    console.log("Min Damage:" + this.minDamage + " Max Damage:" + this.maxDamage);
    console.log("Price:" + this.goldValue + "g Rarity:" + this.rarity);
};

// Calculates the price of the object.
var generatePrice = function (multiplier, level) {
     return calculateRandomValue((level * multiplier), (level * multiplier))
};

weapon.prototype.generateBaseStats = function (baseValue, level, modifier) {
    this.minDamage = Math.floor(calculateRandomValue(baseValue, level) * modifier);
    this.maxDamage = Math.floor(this.minDamage + calculateRandomValue(baseValue, level) * modifier);
};

armor.prototype.generateBaseStats = function (baseValue, level, modifier) {
    this.armorValue = Math.floor(calculateRandomValue(baseValue, level) * modifier);
};

weapon.prototype.generateName = function (rarity) {
    var dynamicDescription, dynamicName, dynamicMaterial;
    var objectDescription = "Description", objectName = "Name", objectMaterial = "Material";
    dynamicDescription = (eval(this.weaponType + objectDescription + rarity));
    dynamicName = (eval(this.weaponType + objectName + rarity));
    dynamicMaterial = (eval(this.weaponType + objectMaterial + rarity));
    var objectNameString = "";
    objectNameString += dynamicDescription[Math.floor((Math.random() * dynamicDescription.length))] + " " + dynamicMaterial[Math.floor((Math.random() * dynamicMaterial.length))] + " " + dynamicName[Math.floor((Math.random() * dynamicName.length))];
    this.name = objectNameString;
};

armor.prototype.generateName = function (rarity) {
    var dynamicDescription, dynamicName, dynamicMaterial;
    var objectDescription = "Description", objectName = "Name", objectMaterial = "Material";
    dynamicDescription = (eval("armor" + objectDescription + rarity));
    dynamicName = (eval(this.armorType + objectName + rarity));
    dynamicMaterial = (eval("armor" + objectMaterial + rarity));
    var objectNameString = "";
    objectNameString += dynamicMaterial[Math.floor((Math.random() * dynamicMaterial.length))] + " " + dynamicDescription[Math.floor((Math.random() * dynamicDescription.length))] + " " + dynamicName[Math.floor((Math.random() * dynamicName.length))];
    this.name = objectNameString;
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