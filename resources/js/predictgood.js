let form = document.getElementById("form")
let feedback = document.getElementById("feedback")
let feedback2 = document.getElementById("feedback2")
let feedback3 = document.getElementById("feedback3")
let feedback4 = document.getElementById("feedback4")
let machine

function loadData() {
    fetch("students.php")
        .then(response => response.json())
        .then(data => {
            console.log("loaded!");
            console.log(data);
            createMachine(data);
        })
        .catch(err => console.log(err));
}

// aanroepen nadat de data is geladen
function createMachine(data) {
    machine = new kNear(1);
    for (let d of data) {
        const { wiskunde_a, geschiedenis, nederlands, engels, name } = d;
        machine.learn([parseInt(wiskunde_a), parseInt(geschiedenis), parseInt(nederlands), parseInt(engels)], name);
    }
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
    console.log(prediction)
    feedback.innerHTML = `Je beste match is ${prediction}`
})


loadData()
