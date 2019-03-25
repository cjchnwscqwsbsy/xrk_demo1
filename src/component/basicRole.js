const Role = function(role) {
    this.hp = role.hp;
    this.atk = role.atk;
    this.speed = role.speed;
    this.cloth = role.cloth;
    this.weapon = role.weapon;
    this.shoes = role.shoes;
};
Role.prototype = {
    constructor: Role,
    run: function() {},
    attack: function() {}
};

export default Role;