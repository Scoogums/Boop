/**
 * Created by scoogumss on 21/11/2015.
 */

var gameText = ["<br/>","<br/>","<br/>","<br/>","<br/>","<br/>","<br/>", "<br/>", "<br/>"];
var monsterNames = ["goblin", "snake", "dog", "chicken", "scary bug", "cute bug"];
var globalTimer = 2000;
var encounterRoll = 0;
var roamingTimer;
var combatChecker = false;


// Calculates random value based on two integers.
var calculateRandomValue = function (num1, num2) {
    return Math.floor(Math.random() * num1 + num2);
};

// Defines the player object.
var Player = function (name, level, gold, maxHealth, currentHealth, damageMin, damageMax, armor) {
    this.name = name;
    this.level = level;
    this.gold = gold;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.minDamage = damageMin;
    this.maxDamage = damageMax;
    this.armor = armor;
};

// Defines the monster object.
var Monster = function (name) {
    this.name = name;
    this.currentHealth = calculateRandomValue(5, 6);
    this.maxHealth = this.currentHealth;
    this.minDamage = calculateRandomValue(3, 1);
    this.maxDamage = this.minDamage + calculateRandomValue(3, 1);
    this.armor = 2;
};

// Used by the monster to calculate damage.
Monster.prototype.getDamage = function() {
    var damage = calculateRandomValue (this.maxDamage, 1);
    if (damage < this.minDamage) {
        damage = this.minDamage;
    }
    return damage;
};

// Used by the player to calculate damage.
Player.prototype.getDamage = function () {
    var damage = calculateRandomValue(this.maxDamage, 1);
    if (damage < this.minDamage) {
        damage = this.minDamage;
    }
    return damage;
};

// Main code that is accessible when the document is loaded. Initializes html elements and sets up
// operations for the buttons.
$().ready(function () {
    player = new Player("Johnny", 1, 100, 50, 50, 5, 10, 5);
    displayGameText();
    updateHtmlElements();
    var devTimer = setInterval (devStuff, globalTimer);
    var progressTimer = setInterval (progressBar, globalTimer/20);
    $( "#startButton" ).click(function()
    {
        updateGameText("You head out into the wilderness.");
        roamingTimer = setInterval(wanderAround, globalTimer);
    });
    $( "#stopButton" ).click(function()
    {
        if (combatChecker == true)
        {
            updateGameText("You are in combat!");
        }
        else
        {
            updateGameText("You return to town.");
            clearInterval(roamingTimer);
        }
    });
    $( "#fightTest" ).click(function() {
        combatStuff();
    });
});

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
            updateGameText("The " + monster.name + " is dead! You find [" + gold + "] gold.");
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
                    monster.currentHealth -= combatValueHolder;
                    combatCounter = 2;
                } else {
                    combatValueHolder = monster.getDamage();
                    updateGameText("The " + monster.name + " hits you for [" + combatValueHolder + "] damage.");
                    player.currentHealth -= combatValueHolder;
                    combatCounter = 1;
                }
            }
        }
        updateHtmlElements();
    }, globalTimer);
}

// Code for the progress bar in the middle of the screen. Currently does nothing but
// loop infinitely as it was primarily a test to see if it would work.
var progressBar = function () {
    var bar = $('#progressTest');
    var barValue = bar.val();
    if (barValue == 100) {
        $('#progressTest').val(0);
    }
    barValue = bar.val();
    barValue += 5
    $('#progressTest').val(barValue);
}

// Updates player healthbar visual display. Runs during updateHtmlElements which
// will usually run after anything changes, so health should be updated whenever
// the player takes damage.
var healthBarUpdate = function () {
    $('#healthBar').attr('max',player.maxHealth);
    $('#healthBar').val(player.currentHealth);
}

// Changes player gold.
Player.prototype.changeGold = function(number) {
    this.gold += number;
};

// Changes player health. Not used yet because I'm lazy.
Player.prototype.changeHealth = function(number) {
    this.currentHealth += number;
};

// Iterates through the gameText array to display the current stored values.
var displayGameText = function(){
    for (var x = 0;x<gameText.length;x++) {
        $('#gameText').append(gameText[x]);
    }
};

// Clears the game text. This is run whenever updateGameText is run. If it didn't,
// text would infinitely fill up the screen. If the game text was displayed by using
// static html elements this wouldn't be needed, but then the option to dynamically
// change how much text is on the screen wouldn't exist either.
var clearGameText = function() {
    $('#gameText').empty();
};

// Updates HTML elements on the screen. Maybe at some point change it to only update
// any value that actually needs changing.
var updateHtmlElements = function() {
    healthBarUpdate();
    $('#name').html("Name: " + player.name);
    $('#level').html("Level: " + player.level);
    $('#gold').html("Gold: " + player.gold);
    $('#health').html("Health: " + player.currentHealth + "/" + player.maxHealth);
    $('#damage').html("Damage: " + player.minDamage + "-" + player.maxDamage);
    $('#armor').html("Armor: " + player.armor);
    $('#terminal').css('font-family', 'sans-serif');
}

// Updates the gametext. It runs backwards through the gameText array and overwrites
// each value with the one ahead of it. This gives the appearance of scrolling text.
var updateGameText = function(newString) {
    clearGameText();
    var stringHolder = newString + "<br/>";
    var stringHolderTwo = gameText[6];
    for (var x = gameText.length - 1;x>-1;x--) {
        stringHolderTwo = gameText[x];
        gameText[x] = stringHolder;
        stringHolder = stringHolderTwo;
    }
    displayGameText();
};

// Takes in a string of text, colours it, and returns it. It can take in numbers or
// Strings since it runs a toString() method. The colour value can also be either
// text or hexidecimal.
var colourText = function (string, colour) {
    var textToColour = string.toString();
    var result = textToColour.fontcolor (colour);
    return result
};

// The game code for wandering around and doing stuff. Currently exists in a basic
// state.
var wanderAround = function () {
    encounterRoll = calculateRandomValue(100, 1);
    switch(true) {
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
    updateHtmlElements();
};

// Displays values that are useful to see while the program is running.
var devStuff = function () {
    $('#devStuff').html("encounterRoll: " + encounterRoll);
};


//var damage = Math.floor(Math.random() * 10 + 1);
//updateGameText("A snake bites you for [" + damage + "] and stufffff");
//player.changeHealth(-damage);

// <div id = "lol"><progress id="progressbar" value="0" max="100"></progress></div>
//var doShit = function () {
//    var progressbar = $('#progressbar'),
//        max = progressbar.attr('max'),
//        time = (100),
//        value = progressbar.val();
//    var loading = function() {
//        value += 1;
//        addValue = progressbar.val(value);
//        $('.progress-value').html(value + '%');
//        if (value == max) {
//            value = value - 10;
//            addValue = progressbar.val(value);
//            clearInterval(animate);
//        }
//    };
//    var animate = setInterval(function() {
//        loading();
//    }, time);
//}

