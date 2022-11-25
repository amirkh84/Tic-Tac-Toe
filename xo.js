var BoaredCells = document.getElementsByClassName("BoaredCell");
var body = document.body;
var count = 0;
var cond;
var WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var turn = false;
for (i=0; i < BoaredCells.length; i++) {
    BoaredCells[i].addEventListener("click", RunFunctions);
}
function RunFunctions(e) {
    AddClass(e);
    CheckWin("o");
    CheckWin("x");
    Tie();
}
function AddClass(e) {
    if (turn === false) {
        e.target.classList.add("x");
    } else { e.target.classList.add("o"); }
    e.target.removeEventListener("click", RunFunctions);
    turn = !turn;
}
function CheckWin(c) {
    for (i=0; i < WinPatterns.length; i++) {
         cond = 
        BoaredCells[WinPatterns[i][0]].classList.contains(c) && 
        BoaredCells[WinPatterns[i][1]].classList.contains(c) && 
        BoaredCells[WinPatterns[i][2]].classList.contains(c);
        if (cond === true) {
            body.innerHTML += `<div class="win"><p>${c} wins!</p><button>Restart</button></div>`;
            var btn = document.getElementsByTagName("button")[0];
            btn.addEventListener("click", () => { location.reload(); });
            break;
        }
    }
}
function Tie() {
    count++;
    if (count == 9 && cond === false) {
        body.innerHTML += `<div class="win"><p>Tie!</p><button>Restart</button></div>`;
        var btn = document.getElementsByTagName("button")[0];
        btn.addEventListener("click", () => { location.reload(); });
    }
}