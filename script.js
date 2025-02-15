let btn = document.querySelectorAll(".btn");
let win = document.querySelector(".win");
let che = true;
let reset = document.querySelector(".reset");

let arr = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

function checkx()
{
    for(let i = 0;i<arr.length;i++)
    {
        const a = arr[i][0];
        const b = arr[i][1];
        const c = arr[i][2];
        if(btn[a].innerText != "" && btn[b].innerText != "" &&btn[c].innerText != "")
        {
            if(btn[a].innerText===btn[b].innerText && btn[b].innerText===btn[c].innerText)
            {
                win.innerHTML = `${btn[a].innerHTML} is WINNER`;
                return;
            }
            
        }
    }
}
for(let i = 0;i<btn.length;i++)
{
    btn[i].addEventListener("click",function()
    {
        if(che === true)
        {
            btn[i].innerText = `X`;
            che = false;
        }
        else{
            btn[i].innerText = `O`;
            che = true;
        }
       
       checkx();
       btn[i].disabled = true;
       
    })
    
}
reset.addEventListener("click",function()
{
    for(let i = 0;i<btn.length;i++)
    {
        btn[i].innerText = "";
        btn[i].disabled = false;
    }
    win.innerText = "";
    che = true;
})