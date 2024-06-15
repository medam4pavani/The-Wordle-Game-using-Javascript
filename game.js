let userScore=localStorage.getItem("userScore");
let userPlayed=localStorage.getItem("userPlayed");
let words=["HAPPY","GREAT","THINK","FRIED","NIGHT","LIGHT","TRAIN","TEETH","DECAY","VIRUS","MANIA","PARTY","RIGHT","BRAIN","QUEEN","WOMEN"];
let word=words[Math.floor(Math.random()*(words.length))];
let count=0;
let chances=0;
let str="";
let isDisable;
let maxRow=0;
function ableAndDisable(isDisable)
{
    for(let i=0;i<26;i++)
    {
        document.getElementsByClassName("alpha")[i].disabled=isDisable;
    }
}
function display()
{
    var data=event.target.value;
    document.getElementsByClassName("btn")[count].innerHTML=data;
    count++;
    str+=data;
    maxRow=Math.ceil(count/5);
    if (count%5==0)
    {
        ableAndDisable(true);
    }
    document.getElementById("dele").disabled=false;
}
let count2=0;
function keysColorChange(val,col)
{
    for (let i=0;i<26;i++)
    {
        let e=document.getElementsByClassName("alpha")[i];
        if(e.value==val)
        {
            console.log(e.value);
            console.log(val);
            e.style.background=col;
            break;
        }
    }
}
function enter()
{
    if(str.length==5)
    {
        chances++;
        for (let i=0;i<word.length;i++)
        {
            document.getElementsByClassName("btn")[count2].style.transition="all";
            document.getElementsByClassName("btn")[count2].style.transition="3s";
            if (word[i]==str[i])
            {
                document.getElementsByClassName("btn")[count2].style.background="green";
                count2++;
                keysColorChange(str[i],"green");
            }
            else if(word.includes(str[i]))
            {
                document.getElementsByClassName("btn")[count2].style.background="yellow";
                count2++;
                keysColorChange(str[i],"yellow");
            }
            else
            {
                document.getElementsByClassName("btn")[count2].style.background="red";
                count2++;
                keysColorChange(str[i],"red");
            }
        }
        if (str==word)
        {
            ableAndDisable(true);
            document.getElementById("ent").disabled=true;
            document.getElementById("greet").innerHTML="Congratulations you got it";
            if (userScore===null)
            {
                userScore=1;
            }
            else
            {
                localStorage.setItem("userScore",Number(localStorage.getItem("userScore"))+1);
            }
        }
        else{
            ableAndDisable(false);
            str="";
        }
        document.getElementById("dele").disabled=true;
        if(str==word || chances==6)
        {
            setTimeout(result,4000);
        }
    }
}
function del()
{
    if(count>0 && maxRow==Math.ceil(count/5))
    {
        document.getElementsByClassName("btn")[count-1].innerHTML="";
        count--;
        str=str.substring(0,str.length-1);
        ableAndDisable(false);
    }
}
function result()
{
    if (userPlayed===null)
    {
        userPlayed=1;
    }
    else
    {
        localStorage.setItem("userPlayed",Number(localStorage.getItem("userPlayed"))+1);
    }
    document.getElementById("out").style.display="none";
    document.getElementById("games").innerHTML=document.getElementById("games").innerText+" : "+localStorage.getItem("userPlayed");
    document.getElementById("won").innerHTML=document.getElementById("won").innerText+" : "+localStorage.getItem("userScore");
    document.getElementById("res").style.display="block";
}

function reset()
{
    localStorage.setItem("userPlayed",0);
    localStorage.setItem("userScore",0);
    document.getElementById("games").innerHTML="No of games played : "+localStorage.getItem("userPlayed");
    document.getElementById("won").innerHTML="No of games won : "+localStorage.getItem("userScore");
}