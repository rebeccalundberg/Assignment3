let cat = {
    alive: true,
    name: "Gustav",

    
}

function catButton() {
    cat.alive = Math.random() < 0.5
    let txt = "dead"
    if (cat.alive) 
        txt = "alive"

    alert("The cats name is " + cat.name + " and it is " + txt)
    
}


