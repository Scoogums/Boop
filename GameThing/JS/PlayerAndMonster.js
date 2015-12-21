/**
 * Created by scoogumss on 24/11/2015.
 */
// Defines the player object.

var gameObject = function (name, maxHealth, currentHealth, minDamage, maxDamage, armor) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.armor = armor;
};

var Player = function (name, maxHealth, currentHealth, minDamage, maxDamage, armor, level, gold) {
    gameObject.apply(this, arguments);
    this.level = level;
    this.gold = gold;
};

Player.prototype = new gameObject();


var Monster = function (name) {
    this.name = name;
    this.currentHealth = calculateRandomValue(5, 6);
    this.maxHealth = this.currentHealth;
    this.minDamage = calculateRandomValue(3, 1);
    this.maxDamage = this.minDamage + calculateRandomValue(3, 1);
    this.armor = 2;
};

Monster.prototype = new gameObject();

// Calculates damage
gameObject.prototype.getDamage = function () {
    var damage = calculateRandomValue(this.maxDamage, 1);
    if (damage < this.minDamage) {
        damage = this.minDamage;
    }
    return damage;
};

// Changes player gold.
Player.prototype.changeGold = function(number) {
    this.gold += number;
};

// Updates health when taking damage.
gameObject.prototype.decrementHealth = function(number) {
    this.currentHealth -= number;
};