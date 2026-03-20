// Classes
console.log("1.Classes")
class Player{
    constructor (name, sport, rank){
        this.name = name
        this.sport = sport
        this.rank = rank
    }
    static myJob() {
        console.log(`I'm a Player.`)
    }

    info() {
        console.log(`${this.name} plays ${this.sport} and is ranked #${this.rank}`)
    }
}

const p1 = new Player('Kohli', 'cricket', '1')
const p2 = new Player('Messi', 'football', '1')
p1.info()
p2.info()
Player.myJob()


// JSON
console.log("2.JSON")
const user = {
    "user": "gk",
    "gender": "male"
}
const userString = JSON.stringify(user)
console.log(userString)
const parserdUser = JSON.parse(userString)
console.log(parserdUser)

// Objects (Dicts)
let obj = {
    "key1": "value1",
    "key2": "value2",
}
console.log(`obj: ${obj}`)
let keys = Object.keys(obj)
console.log(`keys: ${keys}`)
let values = Object.values(obj)
console.log(`values: ${values}`)
let hasProperty = Object.hasOwn(obj, "property")
console.log(`hasProperty: ${hasProperty}`)
obj = Object.assign({}, obj, {"property": false})
hasProperty = Object.hasOwn(obj, "property")
console.log(`After assign hasProperty: ${hasProperty}`)
console.log(`final obj: ${Object.entries(obj)}`)