let Happy = 0

//Starter scorecounter som 0.
function drawhappiness(){
    textSize(30)

    rd.add('text', () => text(Happy, 1200, 40))
    rd.add('text', () => text("Current score:", 1000, 39))

}


//Extra Text informationer:
function housesplaced(){
    rd.add('text', () => text(HousesUsed, 1200, 70)) 
    rd.add('text', () => text("Houses Placed:", 980, 70)) 
}
