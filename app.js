Ext.application({
    name: 'HelloExt',

    launch: function () {
        console.log('start');
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                title: 'Ext JS 4 application - а если так?',
                html: '<h3>Welcone to Ext JS 4 world! - или так?</h3>'
            }
        });
    }
});

Ext.define('Classes.Person', {
    name: '',
    surname: '',

    constructor: function (name = 'John', surname = 'Doe') {
        this.name = name;
        this.surname = surname;
    },

    consolLogInfo: function () {
        console.log(`Full Name: ${this.name} ${this.surname}`);
    }
});


// const eugene = Ext.create('Classes.Person');
// eugene.logInfo();

// eugene.name = 'Donald';
// eugene.surname = 'Trump';
// eugene.logInfo();

let pre = Ext.Class.getDefaultPreprocessors();
let post = Ext.ClassManager.defaultPostprocessors;
console.log('pre', pre);
console.log('post', post);

const defPerson = Ext.create('Classes.Person');
defPerson.consolLogInfo();

const albert = Ext.create('Classes.Person', 'Albert', 'Einstein ');
albert.consolLogInfo();

const billPerson = new Classes.Person('Bill', 'Gates');
billPerson.consolLogInfo();

//================
console.log('');
console.log('');
console.log('');

Ext.define('Classes.PersonConfig', {
    config: {
        name: 'JohnConfig',
        surname: 'DoeConfig'
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    consolLogInfo: function () {
        console.log(`Full Name Config: ${this.name} ${this.surname}`);
    }
});

const defPersonConfig = Ext.create('Classes.PersonConfig');
defPersonConfig.consolLogInfo();


//================
console.log('');
console.log('');
console.log('');

Ext.define('PersonStatic', {
    config: {
        name: '-',
        surname: '-',
    },

    statics: {
        instanceCount: 0,

        // статический метод, возвращающий объект класса
        factory: function (name, surname) {
            return new this({ name, surname });
        }
    },

    constructor: function (config) {
        this.initConfig(config);
        this.self.instanceCount++;
    },

    consoleLogInfo: function () {
        console.log(`Полное имя: ${this.name} ${this.surname} -- `, this);
    }

});

let first = Ext.create('PersonStatic');
let second = PersonStatic.factory('secondName', 'secondSurname');
// console.log('first', first);
// console.log('second', second);

first.consoleLogInfo();
second.consoleLogInfo();


//================ Наследование
console.log('');
console.log('');
console.log('');

