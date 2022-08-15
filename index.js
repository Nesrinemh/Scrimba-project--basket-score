const btn1Home = document.getElementById("addOneH")
const btn2Home = document.getElementById("addTwoH")
const btn3Home = document.getElementById("addThreeH")
const btn1Guest = document.getElementById("addOneG")
const btn2Guest = document.getElementById("addTwoG")
const btn3Guest = document.getElementById("addThreeG")
const btnReset = document.getElementById("reset")

let scoreHome = document.getElementById("home")
let scoreGuest = document.getElementById("guest")

let initialScoreH = 0
let initialScoreG =  0



function Add1ptH() {
    initialScoreH += 1
}

function Add2ptsH() {
    initialScoreH += 2
}

function Add3ptsH() {
    initialScoreH += 3
}

function Add1ptG() {
    initialScoreG += 1
}

function Add2ptsG() {
    initialScoreG += 2
}

function Add3ptsG() {
    initialScoreG += 3
}



btn1Home.addEventListener("click", function  (){
    Add1ptH()
   scoreHome.textContent= initialScoreH
} )

btn2Home.addEventListener("click", function  (){
    Add2ptsH()
   scoreHome.textContent= initialScoreH
} )

btn3Home.addEventListener("click", function  (){
    Add3ptsH()
   scoreHome.textContent= initialScoreH
} )

btn1Guest.addEventListener("click", function  (){
    Add1ptG()
   scoreGuest.textContent= initialScoreG
} )

btn2Guest.addEventListener("click", function  (){
    Add2ptsG()
   scoreGuest.textContent= initialScoreG
} )

btn3Guest.addEventListener("click", function  (){
    Add3ptsG()
   scoreGuest.textContent= initialScoreG
} )

function resetScore(){
    initialScoreG = 0
    initialScoreH = 0
    scoreHome.textContent = 0
    scoreGuest.textContent =0
}

btnReset.addEventListener("click", function (){
    resetScore()
})