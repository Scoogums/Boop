/**
 * Created by scoogumss on 20/12/2015.
 */


var weaponDrop = function (monster) {
    var newItem = new sword();
    generateSword(newItem);
    addToInventory(newItem);
    updateGameText("The " + monster.name + " dropped a [" + colourText(newItem.name, "#6495ED") + "]!");
    updateHtmlElements();
};