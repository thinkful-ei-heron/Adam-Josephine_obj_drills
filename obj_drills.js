//object creator
function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello: function () {
            return 'hello';
        }
    };
}

//object updater
function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

//person maker
function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        // replace `null` with a function that uses self reference to return
        // full name
        fullName: function () {
            return `${this.firstName} ${this.lastName}`
        },
    };
    return person;
}

//delete keys
const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
};

function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
}

//make student report
function makeStudentsReport(data) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
        newArr.push(`${data[i].name}: ${data[i].grade}`);

    }
    return (newArr);
}

//Enroll in summmer school
function enrollInSummerSchool(students) {
    return students.map(student => {
        return {
            name: student.name,
            status: 'In Summer School',
            course: student.course
        }
    })
}

//Find by id
const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
    return items.find(item => idNum === item.id)
}

// validating keys
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length) {
        return false;
    }

    for (let i = 0; i < expectedKeys.length; i++) {
        let objKeys = Object.keys(object);
        if (!objKeys.find(key => key === expectedKeys[i])) {
            return false;
        }
    }
    return true;
}

//object initializers and methods
const loaf = {
    flour: 300,
    water: 210
}

console.log(loaf.flour)
console.log(loaf.water)

loaf.hydration = function () {
    return ((this.water) / (this.flour)) * 100
}

console.log(loaf.hydration())

//iterating over an object's properties
const myObj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
}

for (let item in myObj) {
    console.log(myObj[item]);
}

//arrays in objects
const obj = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(obj.meals.find(meal => meal === obj.meals[3]));

//arrays of objects
let myArray = [
    {
        name: 'Kevin',
        jobTitle: 'Accountant'
    },
    {
        name: 'Creed',
        jobTitle: 'Quality Assurance'
    },
    {
        name: 'Kelly',
        jobTitle: 'Customer Service'
    },
    {
        name: 'Ryan',
        jobTitle: 'Temp'
    },
    {
        name: 'Jim',
        jobTitle: 'Sales'
    }
]

myArray.map(function (obj) {
    console.log(obj.name);
    console.log(obj.jobTitle);
})

//Properties that aren't there
let myArray = [
    {
        name: 'Kevin',
        jobTitle: 'Accountant'
    },
    {
        name: 'Creed',
        jobTitle: 'Quality Assurance'
    },
    {
        name: 'Kelly',
        jobTitle: 'Customer Service'
    },
    {
        name: 'Ryan',
        jobTitle: 'Temp'
    },
    {
        name: 'Jim',
        jobTitle: 'Sales'
    },
    {
        name: 'David',
        jobTitle: 'Owner'
    }
]


myArray.map(function (obj) {
    if (obj.jobTitle !== 'Owner') {
        obj.boss = 'Michael'
    }
})

console.log(myArray)

myArray.map(function (obj) {
    if (obj.jobTitle === 'Owner') {
        console.log(`${obj.jobTitle} ${obj.name} doesn\'t report to anybody.`)
    } else {
        console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`)
    }
})

//cracking the code
const cypherObj = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}

function decodeWords(str) {
    let firstArray = str.split(" ");
    let newArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        newArray.push(decode(firstArray[i]));
    }
    return newArray.join(" ");
}
function decode(word) {
    let firstLetter = word[0];
    let position = cypherObj[firstLetter];
    return word[position - 1];
}

//factory functions with LOTR
function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function () {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`)
        },
        evaluateFight: function (character) {
            if (character.defense > this.attack) { return `Your oppenent takes 0 damage and you receive ${(character.attack) - (this.defense)} damage.` }
            else if (this.defense > character.attack) {
                return
                `Your oppenent takes ${(this.attack) - (character.defense)} damage and you receive 0 damage.`
            }
            else {
                `Your oppenent takes ${(this.attack) - (character.defense)} damage and you receive ${(character.attack) - (this.defense)} damage.`
            }
        },
        weapon
    }
}

let characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
]

characters.push(createCharacter('Arwen', 'arwen', 'Half-Elf', 'Rivendell', 9, 7, 'Hadhafang'));

characters.find(person => person.nickname === 'aragorn').describe();

characters.filter(creature => creature.race === 'Hobbit');

characters.filter(creature => creature.attack > 5);

characters.map(obj => obj.describe = function () { console.log(`${obj.name} is a ${obj.race} from ${obj.origin} who uses a ${obj.weapon}.`) })

console.log(characters[0].describe());

//BONUS: a database search
const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
    let possibleSolution = null;
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        for (let item in query) {
            if (obj[item] === query[item]) {
                possibleSolution = obj;
            }
            else {
                possibleSolution = null;
                break;
            }
        }
        if (possibleSolution !== null) {
            return obj;
        }
    }
    return null;
}