const newObj = {
    name: 'amirali',
    family: 'eidivandi',
    get age() {
        return this.userAge;
    },
    set age(uAge) {
        if (uAge < 20) {
            throw new Error('this is a access')
        }
        this.userAge = uAge;
    }
}

newObj.age = 30;

console.log(newObj.age);
console.log(newObj);