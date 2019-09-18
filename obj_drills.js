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
        return false;}

    for (let i = 0; i < expectedKeys.length; i++) {
        let objKeys = Object.keys(object);
        if (!objKeys.find(key => key === expectedKeys[i])){
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
  
  loaf.hydration = function(){
      return ((this.water)/(this.flour))*100
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
  
  myArray.map(function(obj) {
    console.log(obj.name);
    console.log(obj.jobTitle);
  })