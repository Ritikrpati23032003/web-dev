let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const gcompC=()=>{
    const options=["rock","paper","scissor"];
    const  randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const gamedraw=()=>{
    // console.log("Game was draw");
    msg.innerText="Game draw .Try again";
};

const showinner=(userwin)=>{
    if(userwin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        // console.log("You win");
        msg.innerText="You Win";
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        // console.log("You lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="Red";
    }

};

const playgame=(userchoice)=>{
    console.log("user =",userchoice);
    //generate computer choice
    const compchoice= gcompC();
    console.log("computer =",compchoice);

    if(userchoice === compchoice)
    {
        gamedraw();
    }
    else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ?false : true;
        }else if(userchoice==="paper"){
            userwin = compchoice === "scisssor" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        showinner(userwin);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice)
    });
});


}

