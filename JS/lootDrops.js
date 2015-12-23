/**
 * Created by scoogumss on 20/12/2015.
 */


var weaponDrop = function (monster) {
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
        equipmentDrop = new armor(armorTypes[weaponRoll]);
        equipmentDrop.generateEquipment();
    }
    addToInventory(equipmentDrop);
    updateGameText("The " + monster.name + " dropped a [" + colourText(equipmentDrop.name, "#6495ED") + "]!");
    updateHtmlElements();
};