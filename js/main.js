const xText = "X"
const oText = "O"
let xTurn = true;

let restartBtn = document.querySelector("button")
let gridEls = document.querySelectorAll(".cell")
gridEls.forEach(gridEl => {
    gridEl.addEventListener("click", clicked);
});

function clicked(){  
    if(xTurn){
        if(this.innerHTML === ""){
        this.innerHTML = xText
        xTurn = false;
        }
    }else{
        if(this.innerHTML === ""){
        this.innerHTML = oText
        xTurn = true
        }
    }
}
restartBtn.addEventListener("click", restartFn);

function restartFn(){
    gridEls.forEach(function(e){
        e.innerHTML = ""
    })
}