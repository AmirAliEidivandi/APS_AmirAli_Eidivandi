const obj = {
    one: 1,
    two: 2,
    three: 3
}

const propertyName = 'two'

delete obj[propertyName]

const { [propertyName]: _, ...modifiedObject } = obj;

console.log(modifiedObject);
// { one: 1, three: 3 }