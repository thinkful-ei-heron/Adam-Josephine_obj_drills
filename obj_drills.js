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
        if (!Object.keys(object).find(key => {
            return key === expectedKeys[i];
        }))
            return false;
    }
    return true;
}