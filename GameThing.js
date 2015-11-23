/**
 * Created by scoogumss on 21/11/2015.
 */

var gameText = ["<br/>","<br/>","<br/>","<br/>","<br/>","<br/>","<br/>"];
var monsterNames = ["goblin", "snake", "dog", "chicken"];
var roll;
var roamingTimer;

var Player = function (name, level, gold, maxHealth, currentHealth, damage, armor) {
    this.name = name;
    this.level = level;
    this.gold = gold;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.damage = damage;
    this.armor = armor;
};

var Monster = function () {
    this.name = "Monster";
    this.currentHealth = 10;
    this.maxHealth = 20;
    this.minDamage = 3;
    this.maxDamage = 6;
    this.armor = 5;
}

$().ready(function () {
    player = new Player("Johnny", 1, 100, 50, 50, 5, 5);
    displayGameText();
    updateHtmlElements();
    var devTimer = setInterval (devStuff, 5000);
    var bloop = setInterval (progressBar, 100);
    $( "#startButton" ).click(function() {
        updateGameText("You head out into the wilderness.<br/>");
        roamingTimer = setInterval(wanderAround, 2000);
    });
    $( "#stopButton" ).click(function() {
        updateGameText("You return to town<br/>");
        clearInterval(roamingTimer);
    });
    $( "#fightTest" ).click(function() {
        combatStuff();
    });
});


var combatStuff = function () {
    var combatCounter = 0;
    updateGameText("You encounter a " + monsterNames[Math.floor((Math.random() * monsterNames.length))] + "<br/>");
    var combat = setInterval(function() {
        if (combatCounter == 1) {
            alert("1");
        }
        combatCounter++;
    }, 1000);

}

var progressBar = function () {
    var bar = $('#progressTest');
    valueBoop = bar.val();
    if (valueBoop == 100) {
        $('#progressTest').val(0);
    }
    valueBoop = bar.val();
    valueBoop += 5
    $('#progressTest').val(valueBoop);
}

var healthBarUpdate = function () {
    var health = $('#healthBar');
    var fish = 50;
    $('#healthBar').attr('max',player.maxHealth);
    $('#healthBar').val(player.currentHealth);
}

Player.prototype.changeGold = function(number) {
    this.gold += number;
};

Player.prototype.changeHealth = function(number) {
    this.currentHealth += number;
};

var displayGameText = function(){
    for (var x = 0;x<gameText.length;x++) {
        $('#gameText').append(gameText[x]);
    }
};

var clearGameText = function() {
    $('#gameText').empty();
};

var updateHtmlElements = function() {
    healthBarUpdate();
    $('#name').html("Name: " + player.name);
    $('#level').html("Level: " + player.level);
    $('#gold').html("Gold: " + player.gold);
    $('#health').html("Health: " + player.currentHealth + "/" + player.maxHealth);
    $('#damage').html("Damage: " + player.damage);
    $('#armor').html("Armor: " + player.armor);
    $('#terminal').css('font-family', 'sans-serif');
    healthBarUpdate();
}

var updateGameText = function(newString) {
    clearGameText();
    var holder = newString;
    var holder2 = gameText[6];
    for (var x = gameText.length - 1;x>-1;x--) {
        holder2 = gameText[x];
        gameText[x] = holder;
        holder = holder2;
    }
    displayGameText();
};

var wanderAround = function () {
    roll = Math.floor(Math.random() * 100 + 1);
    switch(true) {
        case (roll < 50):
            updateGameText("You wander around not doing much<br/>");
            break;
        case (roll > 50 && roll < 75):
            gold = Math.floor(Math.random() * 10 + 1)
            updateGameText("You find [" + gold + "] gold!<br/>");
            $('#gold').html("Gold: " + player.gold);
            player.changeGold(gold);
            break;
        case (roll > 75):
            var damage = Math.floor(Math.random() * 10 + 1)
            updateGameText("A snake bites you for [" + damage + "] and stufffff<br/>");
            player.changeHealth(-damage);
            break;
    };
    updateHtmlElements();
}

var devStuff = function () {
    $('#devStuff').html("Current roll value: " + roll);
}


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

