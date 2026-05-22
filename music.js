const music=[

"🎵 Favorite Song",

"💿 Couple Playlist",

"🌙 Night Vibes"

]

music.forEach(x=>{

musicGrid.innerHTML+=`

<div class="card">

${x}

</div>

`

})
