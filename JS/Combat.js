/**
 * Created by scoogumss on 24/11/2015.
 */

// Code for combat. Does stuff.
var combatStuff = function () {
    var monster = new Monster(monsterNames[calculateRandomValue(monsterNames.length, 0)]);
    var combatCounter = 0;
    var combatValueHolder;
    combatChecker = true;
    updateGameText("You encounter a " + monster.name);
    var combat = setInterval(function() {
        if (monster.currentHealth <= 0) {
            gold = calculateRandomValue(10, 1);
            updateGameText("The " + monster.name + " is dead! You find [" + colourText(gold, "#DAA520") + "] gold.");
            weaponDrop(monster);
            player.changeGold(gold);
            combatChecker = false;
            clearInterval(combat);
            roamingTimer = setInterval(wanderAround, globalTimer);
        } else {
            if (combatCounter == 0) {
                updateGameText("The " + monster.name + " snarls at you menacingly.");
                combatCounter = 1;
            } else {
                if (combatCounter == 1) {
                    combatValueHolder = player.getDamage();
                    updateGameText("You hit the " + monster.name + " for [" + combatValueHolder + "] damage.");
                    monster.decrementHealth(combatValueHolder);
                    combatCounter = 2;
                } else {
                    combatValueHolder = monster.getDamage();
                    updateGameText("The " + monster.name + " hits you for [" + combatValueHolder + "] damage.");
                    player.decrementHealth(combatValueHolder);
                    combatCounter = 1;
                    if (player.currentHealth <= 0) {
                        updateGameText("You have been killed by the " + monster.name);
                        var droppedGold = Math.floor((player.gold / 100) * 25);
                        player.changeGold(-droppedGold);
                        updateGameText("You drop [" + colourText(droppedGold, "#DAA520") + "] gold.")
                        clearInterval(combat);
                        hiddenWhileInTown();
                        startTownTimer();
                    }
                }
            }
        }
        updateHtmlElements();
    }, globalTimer);
};