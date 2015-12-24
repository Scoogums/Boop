/**
 * Created by scoogumss on 21/11/2015.
 */

var gameText = ["<br/>","<br/>","<br/>","<br/>","<br/>","<br/>","<br/>", "<br/>", "<br/>"];
var monsterNames = ["goblin", "snake", "dog", "chicken", "scary bug", "cute bug"];
var globalTimer = 2000;
var townTimer;
var encounterRoll = 0;
var roamingTimer;
var combatChecker = false;


// Calculates random value based on two integers.
var calculateRandomValue = function (num1, num2) {
    return Math.floor(Math.random() * num1 + num2);
};

// Main code that is accessible when the document is loaded. Initializes html elements and sets up
// operations for the buttons.
$().ready(function () {
    $('#devStuff').hide();
    $('#inventory').hide();
    $('#stopButton').hide();
    updateGameText("You are in town.")
    player = new Player("Johnny", 50, 50, 5, 10, 5, 1, 100);
    displayGameText();
    equipFirstItems();
    updateHtmlElements();
    shopCreateCommonItem();
    shopCreateCommonItem();
    shopCreateCommonItem();
    shopCreateCommonItem();
    $( "#startButton" ).click(function()
    {
        updateGameText("You head out into the wilderness.");
        roamingTimer = setInterval(wanderAround, globalTimer);
        stopTownTimer();
        hiddenWhileExploring();
    });
    $( "#stopButton" ).click(function()
    {
        if (combatChecker == true) {
            updateGameText("You are in combat!");
        }
        else {
            startTownTimer();
            hiddenWhileInTown();
            clearInterval(roamingTimer);
        }
    });
    $( "#equipItem" ).click(function() {
        equipItem();
        updateHtmlElements();
    });
    $( "#sellItem" ).click(function() {
        sellItem();
        updateHtmlElements();
    });
    $('#clickToShow').click(function () {
        $('#devStuff').fadeToggle();
    });
    $('#oldInventory').click(function () {
        $('#inventory').fadeToggle();
    });
    $('#sortButtonDamageLow').click(function () {
        playerInventory.sort(compareDamageLow);
        updateHtmlElements();
    });
    $('#sortButtonDamageHigh').click(function () {
        playerInventory.sort(compareDamageHigh);
        updateHtmlElements();
    });
    $('#sortButtonPriceLow').click(function () {
        playerInventory.sort(comparePriceLow);
        updateHtmlElements();
    });
    $('#sortButtonPriceHigh').click(function () {
        playerInventory.sort(comparePriceHigh);
        updateHtmlElements();
    });
    $('#sortButtonRarityLow').click(function () {
        playerInventory.sort(compareRarityLow);
        updateHtmlElements();
    });
    $('#sortButtonRarityHigh').click(function () {
        playerInventory.sort(compareRarityHigh);
        updateHtmlElements();
    });
    $('#buyItem').click(function () {
        shopBuyItem();
    });
});

function hiddenWhileInTown () {
    // Hides these
    $('#stopButton').hide();


    // Shows these
    $('#startButton').fadeToggle();
    $('#sortButtonDamageLow').fadeToggle();
    $('#sortButtonDamageHigh').fadeToggle();
    $('#sortButtonPriceLow').fadeToggle();
    $('#sortButtonPriceHigh').fadeToggle();
    $('#sortButtonRarityLow').fadeToggle();
    $('#sortButtonRarityHigh').fadeToggle();
    $('#sortInventory').fadeToggle();
    $('#equipItem').fadeToggle();
    $('#sellItem').fadeToggle();
    $('#shopStuff').fadeToggle();
}

function hiddenWhileExploring () {
    // Hides these
    $('#startButton').hide();
    $('#sortButtonDamageLow').fadeToggle();
    $('#sortButtonDamageHigh').fadeToggle();
    $('#sortButtonPriceLow').fadeToggle();
    $('#sortButtonPriceHigh').fadeToggle();
    $('#sortButtonRarityLow').fadeToggle();
    $('#sortButtonRarityHigh').fadeToggle();
    $('#sortInventory').fadeToggle();
    $('#equipItem').fadeToggle();
    $('#sellItem').fadeToggle();
    $('#shopStuff').fadeToggle();




    // Shows these again.
    $('#stopButton').fadeToggle();
}
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

