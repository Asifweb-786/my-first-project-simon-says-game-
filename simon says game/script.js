let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
// game started 
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp()
    }
})
// level up
let btns = ["Aqua","green","blue","orange"]
let h2 = document.querySelector("h2");
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    // console.log(randIdx);
    let randColor = btns[randIdx];
    // console.log(randColor)
    let randBtn = document.querySelector(`.${randColor}`); 
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
// btn flash
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
    btn.classList.remove("flash");
    },300)
}
// user buuton event listener
let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns){
    btn.addEventListener("click",btnPress)
}
function btnPress(){
    // console.log(this)
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(()=>{
    btn.classList.remove("userflash");
    },300)
}
// Matching Sequence
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
                 setTimeout(levelUp,1000);
        }
    }
    else{
         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "rgb(214, 165, 165)";  
        }, 300);
        reset();
    }
}
// reset game
function reset() {
    started = 0;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let half = document.querySelector("body");