import { cloth, weapon, shoes, defaultRole } from 'template/dataForm';
import Role from 'component/basicRole';

const Soldier = function(role){
    const o = Object.assign({},defaultRole,role);
    Role.call(this,0);    //构造函数继承
    this.nickname = o.nickname;
    this.gender = o.gender;
    this.career = '战士';
    if (role.hp === defaultRole.hp) {
        this.hp = defaultRole.hp + 20;
    } // 战士的移动血条 + 20
    if (role.speed === defaultRole.speed) {
        this.speed = defaultRole.speed + 5;
    }
};

//  原型继承
Soldier.prototype = Object.create(Role.prototype,{
    constructor: {
        value: Soldier,
    },
    run: {
        value: function() {
            console.log('战士的奔跑动作');
        },
    },
    attack: {
        value: function() {
            console.log('战士的基础攻击');
        }
    }
});

// 基础装饰类
const Decorator = function(role) {
    this.role = role;
    this.hp = role.hp;
    this.atk = role.atk;
    this.speed = role.speed;
    this.cloth = role.cloth;
    this.weapon = role.weapon;
    this.shoes = role.shoes;
    this.career = role.career;
    this.gender = role.gender;
    this.nickname = role.nickname;
};

Decorator.prototype = {
    constructor: Decorator,
    run: function() {
        this.role.run();
    },
    attack: function() {
        this.role.attack();
    }
};

const ClothDecorator = function(role, cloth) {
    Decorator.call(this, role);
    this.cloth = cloth.name;
    this.hp += cloth.hp;
};