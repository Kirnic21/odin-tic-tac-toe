
const rounds = document.querySelector("#round")
const contain = document.querySelector(".contains")
const submit = document.querySelector(".start")
const start = document.querySelector("#start")
const restart = document.querySelector("#restart")
restart.disabled = true
const gameBoard = ((array)=>
{
    {
    array = []
    const arraySize=9;
    for(let i = 0;i<arraySize;i++)
    {
        array.push("-")
    }
    }
    return {array};
})();
let round = 1;
const pl1 = document.querySelector("#player1")
const pl2 = document.querySelector("#player2")

const player = (name,token)=>
{
   return{name,token}
};

const displayController =((container)=>
{
    const displayGame = ()=>
    {
    container = document.createElement("div")
    container.setAttribute("id","gameboard-container");
    contain.appendChild(container)
    for (let i = 0;i<9;i++)
    {
    const p = document.createElement("p1")
    p.classList.add("contents")
    let text = document.createTextNode(gameBoard.array[i])
    p.dataset.id=i
    container.appendChild(p)
    p.appendChild(text)
    }
    }
    const score = ()=>{
        const pieces = document.querySelectorAll(".contents")
        for(let i = 0;i<pieces.length;i++)
            pieces[i].addEventListener("click",function(e){
                if(round%2!==0){
                let x="O"
                if(e.target.innerHTML===x || e.target.innerHTML==="X")
                {
                    alert("already taken")
                    return 0;
                }
                e.target.innerHTML = x
                gameBoard.array[e.target.dataset.id] = "O"
                round = round+1
                rounds.textContent=`${player2.name} Round`
                displayController.win()
                player.token= 2
                console.log(player.token)
            }
            else if(round%2===0){
                let x="X"
                if(e.target.innerHTML===x || e.target.innerHTML==="O")
                {
                    alert("already taken")
                    return 0;
                }
                e.target.innerHTML = x
                gameBoard.array[e.target.dataset.id] ="X"
                console.log(gameBoard.array)
                round = round+1
                rounds.textContent=`${player1.name} Round`
                displayController.win()
                player.token = 1
                console.log(player.token)
            }})}
    const win =()=>
    {
        if(gameBoard.array[0]===gameBoard.array[1] && gameBoard.array[0]===gameBoard.array[2] && gameBoard.array[0]!=="-")
        {
            if (player.token===1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                    


               
            }
            else if(player.token===2)
            {
                rounds.textContent = `${player2.name} won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
            }   
           
        }

        if(gameBoard.array[3]===gameBoard.array[4] && gameBoard.array[3]===gameBoard.array[5] && gameBoard.array[3]!=="-")
        {
            if (player.token===1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }   
            else if(player.token==2)
            {
                rounds.textContent = `${player2.name} Won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
            }   
           
        }
        if(gameBoard.array[6]===gameBoard.array[7] && gameBoard.array[6]===gameBoard.array[8] && gameBoard.array[6]!=="-")
        {

            if (player.token===1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
            else if(player.token===2)
            {
                rounds.textContent = `${player2.name} Won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
        }
        if(gameBoard.array[0]===gameBoard.array[3] && gameBoard.array[0]===gameBoard.array[6] && gameBoard.array[0]!=="-")
        {

            if (player.token===1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                

            }
            else if(player.token===2)
            {
                rounds.textContent = `${player2.name} Won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
        }
        if(gameBoard.array[1]===gameBoard.array[4] && gameBoard.array[1]===gameBoard.array[7] && gameBoard.array[1]!=="-")
        {
  
            if (player.token=1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
            else if(player.token=2)
            {
                rounds.textContent = `${player2.name} won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
            }   
           
        }
        if(gameBoard.array[2]===gameBoard.array[5] && gameBoard.array[2]===gameBoard.array[8] && gameBoard.array[2]!=="-")
        {
            console.log("Win")
            if (player.token=1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
            else if(player.token=2)
            {
                rounds.textContent = `${player2.name} Won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
        }
        if(gameBoard.array[0]===gameBoard.array[4] && gameBoard.array[0]===gameBoard.array[8] && gameBoard.array[0]!=="-")
        {
            if (player.token=1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                

            }
            else if(player.token=2)
            {
                rounds.textContent = `${player2.name} won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
        }
        if(gameBoard.array[2]===gameBoard.array[4] && gameBoard.array[2]===gameBoard.array[6] && gameBoard.array[2]!=="-")
        {
            if (player.token=1)
            {
                rounds.textContent = `${player1.name} Won!`
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
            else if(player.token=2)
            {
                rounds.textContent = `${player2.name} won!`
                start.disabled = false
                restart.disabled = true
                contain.removeChild(container)
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
            }
        }
        if(gameBoard.array.includes("-")=== false)
        {
            rounds.textContent = "Tie!"
            while(container.firstChild)
                {
                    container.removeChild(container.lastChild)
                }
            
                gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
                start.disabled = false
                restart.disabled = true
                
        }
        
}
const restart1=()=>{
        contain.removeChild(container)
        gameBoard.array= ["-","-","-","-","-","-","-","-","-"]
        start.disabled = false
        restart.disabled = true
        round=1
        rounds.textContent = "Round Reset"
        if(start.disabled === false)
        {
            restart.disabled = true
        }
}
    return {displayGame,score,win,restart1}
})();
start.addEventListener("click",displayController.displayGame)
start.addEventListener("click",displayController.score)
start.addEventListener("click",function changeName(){
    player1.name = pl1.value
    player2.name = pl2.value
})
start.addEventListener("click",function round1(){
    rounds.textContent = `${player1.name} Round`
})
start.addEventListener("click",function disableButton(e){
    e.target.disabled = true
    restart.disabled = false
})
restart.addEventListener("click",displayController.restart1)
