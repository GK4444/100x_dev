// Classes, objects
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
