let form = document.getElementById("form")
let feedback = document.getElementById("feedback")
let feedback2 = document.getElementById("feedback2")
let feedback3 = document.getElementById("feedback3")
let feedback4 = document.getElementById("feedback4")

const data = [
    { wiskunde: 20, geschiedenis: 69, nederlands: 21, engels: 78, name: '<a href="user.blade.php"><u>Erik</u></a>' },
    { wiskunde: 80, geschiedenis: 36, nederlands: 50, engels: 24, name: '<a href="user.blade.php"><u>Bob</u></a>' },
    { wiskunde: 64, geschiedenis: 45, nederlands: 40, engels: 60, name: '<a href="user.blade.php"><u>Ellen</u></a>' },
    { wiskunde: 70, geschiedenis: 36, nederlands: 84, engels: 55, name: '<a href="user.blade.php"><u>Wesley</u></a>' },
    { wiskunde: 60, geschiedenis: 80, nederlands: 40, engels: 27, name: '<a href="user.blade.php"><u>Ramon</u></a>' },
    { wiskunde: 68, geschiedenis: 70, nederlands: 24, engels: 42, name: '<a href="user.blade.php"><u>Julia</u></a>' },
    { wiskunde: 80, geschiedenis: 36, nederlands: 80, engels: 74, name: '<a href="user.blade.php"><u>Eva</u></a>' },
    { wiskunde: 75, geschiedenis: 48, nederlands: 40, engels: 59, name: '<a href="user.blade.php"><u>Bas</u></a>' },
    { wiskunde: 47, geschiedenis: 54, nederlands: 86, engels: 39, name: '<a href="user.blade.php"><u>Maaike</u></a>' },
    { wiskunde: 80, geschiedenis: 87, nederlands: 40, engels: 46, name: '<a href="user.blade.php"><u>Marlous</u></a>' },
]

const machine = new kNear(1)
for (let d of data) {
    machine.learn([d.wiskunde, d.geschiedenis, d.nederlands, d.engels], d.name)
}


// waarden invullen voor een voorspelling
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const wiskunde = parseInt(e.target[0].value)
    const geschiedenis = parseInt(e.target[1].value)
    const nederlands = parseInt(e.target[2].value)
    const engels = parseInt(e.target[3].value)
    console.log(`wiskunde ${wiskunde} geschiedenis ${geschiedenis}`)
    const prediction = machine.classify([wiskunde, geschiedenis, nederlands, engels])
    // const prediction2 = machine.classify([geschiedenis])
    // const prediction3 = machine.classify([nederlands])
    // const prediction4 = machine.classify([engels])
    console.log(prediction)
    feedback.innerHTML = `Je beste match is ${prediction}`
    // feedback2.innerHTML = `Je beste match Geschiedenis is ${prediction2}`
    // feedback3.innerHTML = `Je beste match Nederlands is ${prediction3}`
    // feedback4.innerHTML = `Je beste match Engels is ${prediction4}`
})



// // Data tekenen op de x,y as. Als je meer dan twee interesses hebt moet je kiezen welke je wil tekenen
// const chartdata = data.map(person => ({
//     x: person.wiskunde,
//     y: person.geschiedenis,
// }))
// const chartlabels = data.map(person => person.name)
// createChart(chartdata, chartlabels, "wiskunde", "geschiedenis")
