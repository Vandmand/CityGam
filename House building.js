let available = 5
let price = 10
let HousesUsed = 0
let placed1 = false
let placed2 = false
let placed3 = false
let placed4 = false
let placed5 = false
timesdrawn = 0


//Sørger for at spillet ved når et af husende er placeret: 
function draw() {
    if (placed1 = true && HousesUsed < 1) {
        rd.add('placednow', () => available - 1 && HousesUsed + 1);
        if(timesdrawn = 0){
        drawmoney();
        }
        
    }
}

function draw() {
    if (placed2 = true && HousesUsed < 2) {
        rd.add('placednow', () => available - 1 && HousesUsed + 1)
        
    }
}

function draw() {
    if (placed3 = true && HousesUsed < 3) {
        rd.add('placednow', () => available - 1 && HousesUsed + 1)
        
    }
}

function draw() {
    if (placed4 = true && HousesUsed < 4) {
        rd.add('placednow', () => available - 1 && HousesUsed + 1)
        
    }
}

function draw() {
    if (placed4 = true && HousesUsed < 5) {
        rd.add('placednow', () => available - 1 && HousesUsed + 1)
        
    }
}




