/**
 * Created by scoogumss on 20/12/2015.
 */
var townTimer = 6000;
var shopInventory = [];


function doTownThings () {
    console.log("Town timer tick");
    if (player.currentHealth < player.maxHealth) {
        console.log("Player regen: " + Math.floor((player.maxHealth / 100) * 5));
        console.log("Current health: " + player.currentHealth + " Max Health: " + player.maxHealth);
        player.currentHealth += Math.floor((player.maxHealth / 100) * 5);
        console.log("After regen: " + player.currentHealth + " Max Health: " + player.maxHealth);
        updateGameText("You heal a small amount: [" + Math.floor((player.maxHealth / 100) * 5) + "]");
    };
    if (player.currentHealth > player.maxHealth) {
        player.currentHealth = player.maxHealth;
        console.log("Player health over cap. Returning to max");
    };
    updateHtmlElements();
}

function startTownTimer() {
    townTimer = 6000;
    updateGameText("You return to town.");
    townTimer = setInterval (doTownThings, townTimer);
    console.log("Town Timer Enabled.");
};

function stopTownTimer() {
    clearInterval(townTimer);
    console.log("Town Timer Disabled.");
};

function shopPopulateList() {
    for (var x = 0;x<shopInventory.length;x++) {
        if (shopInventory[x] instanceof armor) {
            var shopListItem = document.createElement("option");
            shopListItem.text = "[" + shopInventory[x].armorType + "][" + shopInventory[x].name + "] [" + shopInventory[x].armorValue + "] [" + shopInventory[x].rarity.charAt(0) + "] [" + shopInventory[x].goldValue + "]";
            shopListItem.value = x;
            $("#shopList")[0].add(shopListItem);
        } else {
            var shopListItem = document.createElement("option");
            shopListItem.text = "[" + shopInventory[x].weaponType + "][" + shopInventory[x].name + "] [" + shopInventory[x].minDamage + "-" + shopInventory[x].maxDamage + "] [" + shopInventory[x].rarity.charAt(0) + "] [G:" + shopInventory[x].goldValue + "]";
            shopListItem.value = x;
            $("#shopList")[0].add(shopListItem);
        }
    };
};

function shopCreateCommonItem() {
    var weaponTypes = ["sword", "dagger"];
    var armorTypes = ["helm", "legs", "chest", "shoulder", "gloves", "boots", "cloak"];
    var weaponRoll = calculateRandomValue(weaponTypes.length, 0);
    var armorRoll = calculateRandomValue(armorTypes.length, 0);
    var commonItem = new weapon(weaponTypes[weaponRoll]);
    commonItem.generateEquipmentFixedRarity(1);
    commonItem.goldValue = commonItem.goldValue * 10;
    shopAddToInventory(commonItem);
    var commonItem = new armor(armorTypes[armorRoll]);
    commonItem.generateEquipmentFixedRarity(1);
    commonItem.goldValue = commonItem.goldValue * 10;
    console.log("Generated a weapon called: " + commonItem.name);
    console.log("Min Damage:" + commonItem.minDamage + " Max Damage:" + commonItem.maxDamage);
    console.log("Price:" + commonItem.goldValue + "g Rarity:" + commonItem.rarity);
    shopAddToInventory(commonItem);
    updateHtmlElements();
};

function shopWipeInventory() {
    shopInventory = [];
    updateHtmlElements();
}
function shopAddToInventory(item) {
    shopInventory.push(item);
};

function shopBuyItem () {
    var itemColour;
    var shopList = document.getElementById("shopList");
    var selectedItem = shopList.options[shopList.selectedIndex].value;
    itemColour = colourByRarity(shopInventory[selectedItem].rarity);
    if (player.gold < shopInventory[selectedItem].goldValue) {
        updateGameText("You cannot afford the [" + colourText(shopInventory[selectedItem].name, itemColour) + "]");
    }
    if (player.gold >= shopInventory[selectedItem].goldValue) {
        player.changeGold(-shopInventory[selectedItem].goldValue)
        updateGameText("You bought the [" + colourText(shopInventory[selectedItem].name, itemColour) + "] for [" + colourText(shopInventory[selectedItem].goldValue, "#DAA520") + "]");
        shopInventory[selectedItem].goldValue = Math.floor(shopInventory[selectedItem].goldValue / 10);
        addToInventory(shopInventory[selectedItem]);
        shopInventory.splice(selectedItem, 1);
    }
    updateHtmlElements();
};



var itemColour;
var inventoryList = document.getElementById("inventoryList");
var selectedItem = inventoryList.options[inventoryList.selectedIndex].value;
itemColour = colourByRarity(playerInventory[selectedItem].rarity);
player.changeGold(playerInventory[selectedItem].goldValue);
updateGameText("You sold the [" + colourText(playerInventory[selectedItem].name, itemColour) + " for [" + colourText(playerInventory[selectedItem].goldValue, "#DAA520") + "] gold.");
playerInventory.splice(selectedItem, 1);

