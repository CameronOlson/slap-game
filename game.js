let health = 100;
let strikes = 0;
let progress = document.getElementById("progress")



function slap() {
    let slap = 1
    let currentHealth = (health = health - slap)
    if (health <= 0){
       stopGame()
    }
    Swal.fire({
        imageUrl: 'https://lh3.googleusercontent.com/proxy/y1DGJq4rdJ_2hiejE5bZrEtpu1NA77Db-gtuN68BLL_BmxKMad2N3EELeQNfGgijo4MaXgvL1fAjx-dLFNd3i3cGv25ytZy8xFQVRBFdir7jTw',
        imageHeight: 200,
        imageAlt: 'A tall image',
        timer: 300,
        background:"#000000"
        

      })
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
     Swal.fire({
        imageUrl: 'https://us.123rf.com/450wm/3dgenerator/3dgenerator1707/3dgenerator170700460/83380788-bang-illustration-pop-.jpg?ver=6',
        imageHeight: 200,
        imageAlt: 'A tall image',
        timer: 300,
        background:"#ffffff"

      })
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
     Swal.fire({
        imageUrl: 'https://www.fivesquid.com/blog/images/357_664x441.jpg',
        imageHeight: 200,
        imageAlt: 'A tall image',
        timer: 300,
        background:"#ffffff"

      })
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


