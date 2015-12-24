/**
 * Created by scoogumss on 20/12/2015.
 */

$().ready(function () {
    $( "#generateItem" ).click(function() {
        var weaponTypes = ["sword", "dagger"];
        var armorTypes = ["helm", "legs", "chest", "shoulder", "gloves", "boots", "cloak"];
        var weaponRoll = calculateRandomValue(weaponTypes.length, 0);
        var armorRoll = calculateRandomValue(armorTypes.length, 0);
        var random = calculateRandomValue(2, 1);
        var equipmentDrop;
        if (random == 1) {
            equipmentDrop = new weapon(weaponTypes[weaponRoll]);
            equipmentDrop.generateEquipment();
        }
        if (random == 2) {
            equipmentDrop = new armor(armorTypes[armorRoll]);
            equipmentDrop.generateEquipment();
        }
        addToInventory(equipmentDrop);
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