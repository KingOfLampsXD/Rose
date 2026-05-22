document.addEventListener(
"DOMContentLoaded",
()=>{

const pages=
document.querySelectorAll(
".page"
)

window.showTab=
function(tab){

pages.forEach(
x=>x.classList.remove(
"active"
))

document
.getElementById(tab)
.classList.add(
"active"
)

}


setInterval(()=>{

const clock=
document.getElementById(
"clock"
)

const date=
document.getElementById(
"date"
)

if(clock){

clock.innerText=
new Date()
.toLocaleTimeString()

}

if(date){

date.innerText=
new Date()
.toDateString()

}

},1000)



const games=[

"🎲 Spin Bottle",
"❤️ Love Calculator",
"🎯 Truth or Dare",
"🤗 Hug Counter",
"🎉 Emoji Challenge",
"🎁 Mystery Box"

]

const gamesGrid=
document.getElementById(
"gamesGrid"
)

if(gamesGrid){

games.forEach(x=>{

gamesGrid.innerHTML+=`

<div class="card"
onclick="alert('${x}')">

${x}

</div>

`

})

}



const memories=[

"📷 First Chat",
"💞 First Memory",
"✨ First Chaos"

]

const memoryGrid=
document.getElementById(
"memoryGrid"
)

if(memoryGrid){

memories.forEach(x=>{

memoryGrid.innerHTML+=`

<div class="card">

${x}

</div>

`

})

}



const music=[

"🎵 Favorite Song",
"💿 Couple Playlist",
"🌙 Night Vibes"

]

const musicGrid=
document.getElementById(
"musicGrid"
)

if(musicGrid){

music.forEach(x=>{

musicGrid.innerHTML+=`

<div class="card">

${x}

</div>

`

})

}



const dashboardGrid=
document.getElementById(
"dashboardGrid"
)

if(dashboardGrid){

dashboardGrid.innerHTML=`

<div class="card">

❤️ Love Score
10000%

</div>

<div class="card">

🤗 Hugs
99999

</div>

<div class="card">

💖 Soulmate Rank
S+

</div>

`

}



window.unlock=
function(){

const pass=
document.getElementById(
"pass"
)

const secret=
document.getElementById(
"secretText"
)

if(
pass.value==
"lampyrose"
){

secret.innerText=

"😭❤️ Secret unlocked"

}

else{

secret.innerText=

"Wrong password"

}

}

})
