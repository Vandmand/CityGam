let available = 5
let price = 10
let HousesUsed = 0
let placed1 = false
let placed2 = false
let placed3 = false
let placed4 = false
let placed5 = false
let houseisselected = false
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




//Hus-boks til selection

function housebox(){
    fill(200,200,200)
    rd.add('boxes', () => rect(1100, 170, 70, 70)) 
    rd.add('text', () => text("Press 'down' to select", 980, 270))
}
//Select hus når clicker på down & og de-select hus når clicker på down
function keyPressed(){
if(keyCode === DOWN_ARROW && houseisselected == false){
houseisselected == true
   
}
if(keyCode === DOWN_ARROW &&  houseisselected == true ){
    houseisselected == false
       
    }
}

