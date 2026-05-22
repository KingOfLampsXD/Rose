function showTab(tab){

document
.querySelectorAll(
".page"
)

.forEach(
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

document
.getElementById(
"clock"
).innerText=

new Date()
.toLocaleTimeString()


document
.getElementById(
"date"
).innerText=

new Date()
.toDateString()

},1000)
