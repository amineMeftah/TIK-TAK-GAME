const square1 = document.querySelectorAll(".square1");
const title = document.getElementsByClassName("title")[0];






function blackbackground(num1,num2,num3) {
    square1[num1-1].style.backgroundColor="black"
    square1[num2-1].style.backgroundColor="black"
    square1[num3-1].style.backgroundColor="black"
}



let items = [];

function winner() {
    for (let i = 1; i < 10; i++) {
        items[i]=document.getElementById("item"+i)
    }
}
winner()

function unclikable() {
    square1.forEach(item => {
        item.style.pointerEvents="none"
    });
}


function check () {
    if (items[1].innerText==="x" && items[2].innerText==="x" && items[3].innerText==="x" && items[1].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(1,2,3)
    }else if (items[1].innerText==="o" && items[2].innerText==="o" && items[3].innerText==="o" && items[1].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(1,2,3)
    }else if (items[4].innerText==="x" && items[5].innerText==="x" && items[6].innerText==="x" && items[5].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(4,5,6)
    }else if (items[4].innerText==="o" && items[5].innerText==="o" && items[6].innerText==="o" && items[5].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(4,5,6)
    }else if (items[7].innerText==="x" && items[8].innerText==="x" && items[9].innerText==="x" && items[7].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(7,8,9)
    }else if (items[7].innerText==="o" && items[8].innerText==="o" && items[9].innerText==="o" && items[7].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(7,8,9)
    }else if (items[1].innerText==="x" && items[5].innerText==="x" && items[9].innerText==="x" && items[1].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(1,5,9)
    }else if (items[1].innerText==="o" && items[5].innerText==="o" && items[9].innerText==="o" && items[1].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(1,5,9)
    }else if (items[3].innerText==="x" && items[5].innerText==="x" && items[7].innerText==="x" && items[3].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(3,5,7)
    }else if (items[3].innerText==="o" && items[5].innerText==="o" && items[7].innerText==="o" && items[3].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(3,5,7)
    }else if (items[1].innerText==="x" && items[4].innerText==="x" && items[7].innerText==="x" && items[1].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(1,4,7)
    }else if (items[1].innerText==="o" && items[4].innerText==="o" && items[7].innerText==="o" && items[1].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(1,4,7)
    }else if (items[2].innerText==="x" && items[5].innerText==="x" && items[8].innerText==="x" && items[2].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(2,5,8)
    }else if (items[2].innerText==="o" && items[5].innerText==="o" && items[8].innerText==="o" && items[2].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(2,5,8)
    }else if (items[3].innerText==="x" && items[6].innerText==="x" && items[9].innerText==="x" && items[3].innerText!="") {
        title.innerText="X is the winner";
        reload()
        unclikable()
        blackbackground(3,6,9)
    }else if (items[3].innerText==="o" && items[6].innerText==="o" && items[9].innerText==="o" && items[3].innerText!="") {
        title.innerText="O is the winner";
        reload()
        unclikable()
        blackbackground(3,6,9)
    }

    else{
        return false;
    }

}


let turn = "x";

square1.forEach(item => {
    item.addEventListener("click",(eo) => {
        if (turn==="x" && eo.target.innerText==="") {
            eo.target.innerText="x";
            turn="o";
            title.innerText=`O`;
            title.style.color="yellow"
        }
        else if (turn==="o" && eo.target.innerText==="") {
            eo.target.innerText="o"
            turn="x"
            title.innerText=`X`;
        }

        check()
    })

    
});


function reload() {
    setInterval(() => {
        title.innerText+="."
    }, 1000);

    setTimeout(() => {
        location.reload()
    }, 3000);
}



let x = 0;

square1.forEach(element => {   
    element.addEventListener("click",(eo) => {
        
        if (x==square1.length-1 && check()===false) {
            title.innerText="It's a tie! The game will reload";
            setInterval(() => {
                title.innerText+="."
            }, 1000);
            setTimeout(() => {
                location.reload()
            }, 3000);
        }
        x++
    })
});
