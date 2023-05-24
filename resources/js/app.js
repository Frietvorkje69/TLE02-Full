let form = document.getElementById("form")
let feedback = document.getElementById("feedback")

const data = [
    { wiskunde: 10, geschiedenis: 10, name: 'erik' },
    { wiskunde: 50, geschiedenis: 10, name: 'bob' },
    { wiskunde: 89, geschiedenis: 15, name: 'ellen' },
    { wiskunde: 44, geschiedenis: 65, name: 'wesley' },
    { wiskunde: 39, geschiedenis: 86, name: 'ramon' },
    { wiskunde: 85, geschiedenis: 75, name: 'julia' },
    { wiskunde: 86, geschiedenis: 30, name: 'eva' },
    { wiskunde: 39, geschiedenis: 24, name: 'bas' },
    { wiskunde: 12, geschiedenis: 19, name: 'ollie' },
    { wiskunde: 49, geschiedenis: 65, name: 'arno' },
    { wiskunde: 20, geschiedenis: 40, name: 'robin' },
    { wiskunde: 49, geschiedenis: 36, name: 'maaike' },
    { wiskunde: 74, geschiedenis: 19, name: 'karin' },
    { wiskunde: 58, geschiedenis: 18, name: 'marloes' },
]

const machine = new kNear(1)
for (let d of data) {
    machine.learn([d.wiskunde, d.geschiedenis], d.name)
}


// waarden invullen voor een voorspelling
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const wiskunde = parseInt(e.target[0].value)
    const geschiedenis = parseInt(e.target[1].value)
    console.log(`wiskunde ${wiskunde} geschiedenis ${geschiedenis}`)
    const prediction = machine.classify([wiskunde])
    const prediction2 = machine.classify([geschiedenis])
    console.log(prediction)
    feedback.innerHTML = `Je beste match Wiskunde is ${prediction}`
    feedback2.innerHTML = `Je beste match Geschiedenis is ${prediction2}`
})



// Data tekenen op de x,y as. Als je meer dan twee interesses hebt moet je kiezen welke je wil tekenen
const chartdata = data.map(person => ({
    x: person.wiskunde,
    y: person.geschiedenis,
}))
const chartlabels = data.map(person => person.name)
createChart(chartdata, chartlabels, "wiskunde", "geschiedenis")
