/**
 * Created by scoogumss on 20/12/2015.
 */

$().ready(function () {
    $( "#generateItem" ).click(function() {
        var newItem = new weapon("sword");
        newItem.generateEquipment();
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
    var uniqueItem = new weapon("sword");
    uniqueItem.generateEquipmentFixedRarity(100);
    console.log("Generated a weapon called: " + uniqueItem.name);
    console.log("Min Damage:" + uniqueItem.minDamage + " Max Damage:" + uniqueItem.maxDamage);
    console.log("Price:" + uniqueItem.goldValue + "g Rarity:" + uniqueItem.rarity);
    addToInventory(uniqueItem)
};