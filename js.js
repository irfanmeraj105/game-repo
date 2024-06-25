let boxes = document.querySelectorAll('.boxes');
let resetbtn = document.querySelector('#resetbtn');
let newgamebtn = document.querySelector('#newgame');
let msgcontainer = document.querySelector('.msgcontainer');
let para = document.querySelector('#msg');
let hide = document.querySelector('.hide')

const resetgame = () => {
    turnO = true;
    enablestheboxes();
    msgcontainer.classList.add('hide')
}

let enablestheboxes = () => {
    for (let box of boxes) {
        box.dissabled = false;
        boxes.innerText('');
    }
}
let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        console.log('box was clicked');
        if (turnO) {
            boxes.innerText = 'O';
            turnO = false;
        } else {
            boxes.innerText = "X";
            turnO = true;
        }
        boxes.disabled = true;
        checkwinner();
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner', pos1val)
                showwinner(pos1val);
            }
        }
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulatios, ${winner} is winner!`;
    msgcontainer.classList.remove('hide');
    disableboxes();
}

resetbtn.addEventListener("click", resetgame);