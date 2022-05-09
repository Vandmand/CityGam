class Car {
    constructor(startPos) {
        this.pos = startPos;
        this.path = [startPos]
    }
    calcPath() {
        let pos = this.pos;
        let pathFound = false
        for(let i = 0; i < 100 || !pathFound; i++) {
            let neighbors = grid.getNeighbors(pos.gx,pos.gy).filter(value => value.tile != undefined);
            let choise = random(neighbors)
            console.log(choise);
            let lastpos = this.path[this.path.length-1]
            if( lastpos.gx != choise.gx && lastpos.gy != choise.gy) {
                yeet()
                this.path.push(choise);
                pos = choise
            } else if(this.path[this.path.length-1].tile == 'HOUSE' && this.path.length != 1) {
                pathFound = true
            }
        }
    }
}

function createCar(position) {
    if(position.tile == 'HOUSE') {
        let temp = new Car(position);
        temp.calcPath();
        return temp;
    }
}