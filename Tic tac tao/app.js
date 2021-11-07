const selectBox = document.querySelector('.select-box'),
selectBtnX = selectBox.querySelector(".playerX"),
selectBtnO = selectBox.querySelector(".playerO"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players"),
playBoard = document.querySelector('.play-board'),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");
;




window.onload = ()=> {

   for (let i = 0 ;  i< allBox.length ; i++){
       allBox[i].setAttribute("onclick" , "clickedBox(this)");
   }

   selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}
    
  
    selectBtnO.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add('show');
    players.setAttribute ("class" , "players active player  ") ;
   };
    

}
let playerIconX = "fas fa-times";
let playerIconO = "far fa-circle";
let playerSign = "X";
let runBot= true ;

function clickedBox(element){
   if(players.classList.contains("player")){
       element.innerHTML = `<i class="${playerIconO}"></i>`;
       players.classList.add("active");

   }
   else{
    element.innerHTML = `<i class="${playerIconX}"></i>`;
    players.classList.add("active");
    // playerSign = "O";
    element.setAttribute("id" , playerSign);
   }
   selectWinner()
   element.style.pointerEvents = "none";
   playBoard.style.pointerEvents = "none"; 
   let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
   setTimeout(()=>{
       bot();
   }, randomDelayTime);
   
 }

 function bot(){
    if(runBot){
        playerSign = "O" 
   let array = [];
    for (let i = 0 ; i<allBox.length ; i++){
        if(allBox[i].childElementCount == 0){
            array.push(i);
        }
      }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if(array.length > 0){
     if(players.classList.contains("player")){
         allBox[randomBox].innerHTML = `<i class="${playerIconX}"></i>`;
         players.classList.remove("active");
        // playerSign = "X"
        allBox[randomBox].setAttribute("id" , playerSign);
     }
     else{
    allBox[randomBox].setAttribute("id" , playerSign);
    allBox[randomBox].innerHTML = `<i class="${playerIconO}"></i>`;
    players.classList.remove("active");
     
     }
    selectWinner()
    } 
    allBox[randomBox].style.pointerEvents = "none"; 
    playBoard.style.pointerEvents = "auto";
    playerSign = "X";
}
     }



// section Selection the winner

function getClass(classname){
    return document.querySelector(".box" + classname ).id;
}

function checkClass(val1 , val2 , val3, sign){
    if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign ){
        return true;
    }

}
function selectWinner() {
    if(checkClass(1,2,3,playerSign) || 
    checkClass(4,5,6,playerSign) || 
    checkClass(7,8,9,playerSign) || 
    checkClass(1,4,7,playerSign) || 
    checkClass(2,5,8,playerSign) || 
    checkClass(3,6,9,playerSign) || 
    checkClass(1,5,9,playerSign) || 
    checkClass(3,5,7,playerSign) ){
runBot = false;
bot();
setTimeout(()=>{
    bot()
    resultBox.classList.add("show");
    playBoard.remove("show") ;
},700);
  
wonText.innerHTML = `Player <p>${playerSign}</p>  won the game! `    

}else{
    if(getClass(1) != "" &&  
    getClass(2) != "" &&  
    getClass(3) != "" && 
    getClass(4) != "" && 
    getClass(5) != "" &&  
    getClass(6) != "" &&  
    getClass(7) != "" && 
    getClass(8) != "" && 
    getClass(9) != "" ){
        runBot = false;
        bot();
        setTimeout(()=>{
        bot(runBot);
        playBoard.classList.remove("show");
        resultBox.classList.add("show") ;
},700);
    }
  wonText.textContent = "Match has drawn!"
}


}

replayBtn.onclick = ()=>{
    window.location.reload();
}