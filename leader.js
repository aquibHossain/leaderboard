document.getElementById("titleName").style.color="#061a7c"
document.getElementById("mainFile").style.backgroundColor="rgb(253 255 229 / 30%)"
document.getElementById("add-player").addEventListener("click",function(){
    const heading=document.createElement("h3")
    heading.innerText="Player New"
    heading.className="player-name"
    const picture=document.createElement("img")
    picture.src="images/players/aquib.png"
    const division=document.createElement("div")
    division.className="player"
    division.appendChild(picture)
    division.appendChild(heading)
    const topPlayer=document.getElementById("topPlayer")
    topPlayer.appendChild(division)
})