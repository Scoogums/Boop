/**
 * Created by scoogumss on 20/12/2015.
 */

// This file is for managing the players inventory.

//Player Equipped is 10 spaces
// 0 - R Arm
// 1 - L Arm
// 2 - Torso
// 3 - Head
// 4 - Neck
// 5 - Belt
// 6 - Legs
// 7 - Boots
// 8 - Ring
// 9 - Ring
// 10 - Cloak

playerInventory = [];
playerEquipped = [];

var equipFirstItems = function() {
    var commonItem = new sword();
    generateBaseDamage(commonItem, 3, player.level, 1);
    commonItem.name = generateName("sword", "Common");
    commonItem.rarity = "Common";
    commonItem.rarityValue = 1;
    commonItem.goldValue = generatePrice(2, player.level);
    console.log("Generated a weapon called: " + commonItem.name);
    console.log("Min Damage:" + commonItem.minDamage + " Max Damage:" + commonItem.maxDamage);
    console.log("Price:" + commonItem.goldValue + "g Rarity:" + commonItem.rarity);
    player.minDamage = commonItem.minDamage;
    player.maxDamage = commonItem.maxDamage;
    playerEquipped[0] = commonItem;
    updateGameText("You equip a [" + colourText(commonItem.name, "#6495ED") + "]");
};

var equipItem = function () {
    var itemColour;
    var inventoryList = document.getElementById("inventoryList");
    var selectedItem = inventoryList.options[inventoryList.selectedIndex].value;
    itemColour = colourByRarity(playerInventory[selectedItem].rarity);
    updateGameText("You equip a [" + colourText(playerInventory[selectedItem].name, itemColour) + "]");
    playerInventory.push(playerEquipped[0]);
    playerEquipped[0] = playerInventory[selectedItem];
    playerInventory.splice(selectedItem, 1);
    player.minDamage = playerEquipped[0].minDamage;
    player.maxDamage = playerEquipped[0].maxDamage;
};

var sellItem = function () {
    var itemColour;
    var inventoryList = document.getElementById("inventoryList");
    var selectedItem = inventoryList.options[inventoryList.selectedIndex].value;
    itemColour = colourByRarity(playerInventory[selectedItem].rarity);
    player.changeGold(playerInventory[selectedItem].goldValue);
    updateGameText("You sold the [" + colourText(playerInventory[selectedItem].name, itemColour) + " for [" + colourText(playerInventory[selectedItem].goldValue, "#DAA520") + "] gold.");
    playerInventory.splice(selectedItem, 1);
};

var addToInventory = function (item) {
    playerInventory.push(item);
};

var colourByRarity = function (rarity) {
    var colour;
    if (rarity == "Common") {
        colour = "#6495ED"
    }
    if (rarity == "Uncommon") {
        colour = "#00b300"
    }
    if (rarity == "Rare") {
        colour = "#0000e6"
    }
    if (rarity == "Mythical") {
        colour = "#b30059"
    }
    if (rarity == "Legendary") {
        colour = "#000033"
    }
    if (rarity == "Unique") {
        colour = "#ff9900"
    }
    return colour;
};

function compareDamageLow(a, b) {
    if (a.maxDamage < b.maxDamage)
        return -1;
    if (a.maxDamage > b.maxDamage)
        return 1;
    return 0
};

function compareDamageHigh(a, b) {
    if (a.maxDamage > b.maxDamage)
        return -1;
    if (a.maxDamage < b.maxDamage)
        return 1;
    return 0
};

function comparePriceLow(a, b) {
    if (a.goldValue < b.goldValue)
        return -1;
    if (a.goldValue > b.goldValue)
        return 1;
    return 0
};

function comparePriceHigh(a, b) {
    if (a.goldValue > b.goldValue)
        return -1;
    if (a.goldValue < b.goldValue)
        return 1;
    return 0
};

function compareRarityLow(a, b) {
    if (a.rarityValue < b.rarityValue)
        return -1;
    if (a.rarityValue > b.rarityValue)
        return 1;
    return 0
};

function compareRarityHigh(a, b) {
    if (a.rarityValue > b.rarityValue)
        return -1;
    if (a.rarityValue < b.rarityValue)
        return 1;
    return 0
};

