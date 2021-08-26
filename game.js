let health = 100;
let strikes = 0;

function slap() {
    let slap = 1
    let currentHealth = (health = health - slap)
    if (health <= 0){
       stopGame()
    }
    // window.alert(currentHealth)
    console.log(currentHealth)
    hits()
    update(currentHealth)
}
function punch() {
    let punch = 5
    let currentHealth = (health = health - punch)
    if (health <= 0){
        stopGame()
     }
    // window.alert(currentHealth)
    console.log(currentHealth)
    hits()
    update(currentHealth)
}
function kick() {
    let kick = 10
    let currentHealth = (health = health - kick)
    if (health <= 0){
        stopGame()
     }
    // window.alert(currentHealth)
    console.log(currentHealth)
    hits()
    update(currentHealth)
}

function hits(){
    let currentHits =  strikes ++
    updateHit(currentHits)

}

function update(currentHealth){
    document.getElementById("health").innerText = health
    
}
function updateHit(currentHits){
    document.getElementById("hits").innerText = strikes
}

function startGame(){
    document.getElementById("slap").classList.remove("hidden")
    document.getElementById("punch").classList.remove("hidden")
    document.getElementById("kick").classList.remove("hidden")
     document.getElementById("restart-game").classList.add("hidden") 
    health = 100
    strikes = 0
    updateHit()
    update()

}

function stopGame(){
    console.log("the game is over")
    document.getElementById("slap").classList.add("hidden")
    document.getElementById("punch").classList.add("hidden")
    document.getElementById("kick").classList.add("hidden")

    document.getElementById("restart-game").classList.remove("hidden")
}


