class Car {
    constructor(startPos) {
        this.pos = startPos;
        this.path = [startPos]
    }
    calcPath() {
        let pos = this.pos;
        for(let pathFound = false; !pathFound;) {
            let choise = random(grid.getNeighbors(pos.gx,pos.gy).filter(value => value.tile != undefined))
            let lastpos = this.path[this.path.length-1]
            if( lastpos.px != choise.px && lastpos.py != choise.py) {
                yeet()
                this.path.push(choise);
            }
            if(this.path[this.path.length-1].tile == 'HOUSE') {
                pathFound = true
            }
            else {
                pos = choise;
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