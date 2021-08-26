let health = 101;
let strikes = -1;

function slap() {
    let slap = 1
    let currentHealth = (health = health - slap)
    // if( currentHealth == 0){
    //     return "Game Over"
    // }
    // window.alert(currentHealth)
    console.log(currentHealth)
    hits()
    update(currentHealth)
}
function punch() {
    let punch = 5
    let currentHealth = (health = health - punch)
    // window.alert(currentHealth)
    console.log(currentHealth)
    hits()
    update(currentHealth)
}
function kick() {
    let kick = 10
    let currentHealth = (health = health - kick)
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
    document.getElementById("health").innerText = currentHealth
    
}
function updateHit(currentHits){
    document.getElementById("hits").innerText = currentHits
}

slap()
hits()
