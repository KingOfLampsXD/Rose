const games=[

"🎲 Spin Bottle",

"❤️ Love Calculator",

"🎯 Truth or Dare",

"🤗 Hug Counter",

"🎉 Emoji Challenge",

"🎁 Mystery Box"

]

games.forEach(x=>{

gamesGrid.innerHTML+=`

<div class="card">

${x}

</div>

`

})
