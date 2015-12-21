/**
 * Created by scoogumss on 20/12/2015.
 */

$().ready(function () {
    $( "#generateItem" ).click(function() {
        var newItem = new sword();
        generateSword(newItem);
        addToInventory(newItem);
        updateHtmlElements();
    });
    $( "#generateUniqueItem" ).click(function() {
        generateUniqueItem();
        updateHtmlElements();
    });
    $( "#fightTest" ).click(function() {
        combatStuff();
    });
});

var generateUniqueItem = function () {
    var uniqueItem = new sword();
    generateBaseDamage(uniqueItem, 20, player.level, 4);
    uniqueItem.name = generateName("sword", "Unique");
    uniqueItem.rarity = "Unique";
    uniqueItem.goldValue = generatePrice(20, player.level);
    uniqueItem.rarityValue = 6;
    console.log("Generated a weapon called: " + uniqueItem.name);
    console.log("Min Damage:" + uniqueItem.minDamage + " Max Damage:" + uniqueItem.maxDamage);
    console.log("Price:" + uniqueItem.goldValue + "g Rarity:" + uniqueItem.rarity);
    addToInventory(uniqueItem)
};

var generateCommonItem = function () {
    var commonItem = new sword();
    generateBaseDamage(commonItem, 3, player.level, 1);
    commonItem.name = generateName("sword", "Common");
    commonItem.rarity = "Common";
    commonItem.rarityValue = 1;
    commonItem.goldValue = generatePrice(2, player.level);
    console.log("Generated a weapon called: " + commonItem.name);
    console.log("Min Damage:" + commonItem.minDamage + " Max Damage:" + commonItem.maxDamage);
    console.log("Price:" + commonItem.goldValue + "g Rarity:" + commonItem.rarity);
};