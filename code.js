let boxes = document.querySelectorAll(".box");

let reset = document.getElementById("reset");

let newGameBtn = document.getElementById("new_btn");

let msg_cont = document.querySelector(".msg-contain");

let msg = document.querySelector("#message");

let curr = 'O';

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        if(curr==='X'){
            curr = 'O';
            box.innerHTML = 'O';
            box.style.backgroundColor = 'blue';
        }

        else if(curr==='O'){
             curr = 'X';
            box.innerHTML = 'X';
            box.style.backgroundColor = 'red';
        }
        box.disabled = true;
        CheckWinner();
    });
});


const DisabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }

};


const showWinner = (winner) =>{
    msg_cont.classList.remove('hide');
    msg.innerText = `Congratulations ! Winner is ${winner}`;
    DisabledBoxes();      
}




const CheckFilled = ()=>{
    for(let box of boxes){
        if(box.innerText === ''){
            return false;
        }
    }
    return true;
};



let winner = false;
const CheckWinner = () => {
    for ( patterns of WinPatterns ){
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;

        if(val1 != '' && val2 != '' && val3 != ''){
            if(val1 === val2 && val2 === val3){
                winner = true;
                showWinner(val1);
                return;
            }
        }
    }

     if (CheckFilled() && !winner) {
        msg.innerText = "It's a Draw!";
        msg_cont.classList.remove("hide");
        DisabledBoxes();
    }
}

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.style.backgroundColor = ''; 
        box.disabled = false;
    });
    curr = 'O'; 
    msg_cont.classList.add('hide');
    winner = false;
};

reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);




