/**
 * Created by scoogumss on 24/11/2015.
 */

// The game code for wandering around and doing stuff. Currently exists in a basic
// state.
var wanderAround = function () {
    if (player.currentHealth <= 0) {
        updateGameText("You are too wounded. Returning to town.");
        clearInterval(roamingTimer);
        startTownTimer();
        hiddenWhileInTown();
    } else {
        encounterRoll = calculateRandomValue(100, 1);
        switch (true) {
            case (encounterRoll <= 49):
                updateGameText("You wander around not doing much");
                break;
            case (encounterRoll >= 50 && encounterRoll <= 74):
                gold = calculateRandomValue(10, 1);
                updateGameText("You find [" + colourText(gold, "#DAA520") + "] gold!");
                $('#gold').html("Gold: " + player.gold);
                player.changeGold(gold);
                break;
            case (encounterRoll >= 75):
                clearInterval(roamingTimer);
                combatStuff();
                break;
        }
    }
    updateHtmlElements();
};