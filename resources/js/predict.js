let form = document.getElementById("form")
let feedback = document.getElementById("feedback")
let buddy = document.getElementById("buddy");
let machine = 0
let giveGrade = 0
let takeGrade = 0
let giveSubject = 0
let takeSubject = 0

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

    switch (`${giveSubject}-${takeSubject}`) {
        //nederlands cases
        case "nederlands-engels":
            for (let d of data) {
                const {nederlands, engels, id} = d;
                machine.learn([parseInt(nederlands), parseInt(engels)], id);
            }
            break;
        case "nederlands-scheikunde":
            for (let d of data) {
                const {nederlands, scheikunde, id} = d;
                machine.learn([parseInt(nederlands), parseInt(scheikunde)], id);
            }
            break;
        case "nederlands-natuurkunde":
            for (let d of data) {
                const {nederlands, natuurkunde, id} = d;
                machine.learn([parseInt(nederlands), parseInt(natuurkunde)], id);
            }
            break;
        case "nederlands-biologie":
            for (let d of data) {
                const {nederlands, biologie, id} = d;
                machine.learn([parseInt(nederlands), parseInt(biologie)], id);
            }
            break;
        case "nederlands-filosofie":
            for (let d of data) {
                const {nederlands, filosofie, id} = d;
                machine.learn([parseInt(nederlands), parseInt(filosofie)], id);
            }
            break;
        case "nederlands-wiskunde_a":
            for (let d of data) {
                const {nederlands, wiskunde_a, id} = d;
                machine.learn([parseInt(nederlands), parseInt(wiskunde_a)], id);
            }
            break;
        case "nederlands-wiskunde_b":
            for (let d of data) {
                const {nederlands, wiskunde_b, id} = d;
                machine.learn([parseInt(nederlands), parseInt(wiskunde_b)], id);
            }
            break;
        case "nederlands-geschiedenis":
            for (let d of data) {
                const {nederlands, geschiedenis, id} = d;
                machine.learn([parseInt(nederlands), parseInt(geschiedenis)], id);
            }
            break;
        case "nederlands-duits":
            for (let d of data) {
                const {nederlands, duits, id} = d;
                machine.learn([parseInt(nederlands), parseInt(duits)], id);
            }
            break;
        case "nederlands-frans":
            for (let d of data) {
                const {nederlands, frans, id} = d;
                machine.learn([parseInt(nederlands), parseInt(frans)], id);
            }
            break;
        case "nederlands-spaans":
            for (let d of data) {
                const {nederlands, spaans, id} = d;
                machine.learn([parseInt(nederlands), parseInt(spaans)], id);
            }
            break;
        case "nederlands-aardrijkskunde":
            for (let d of data) {
                const {nederlands, aardrijkskunde, id} = d;
                machine.learn([parseInt(nederlands), parseInt(aardrijkskunde)], id);
            }
            break;
        case "nederlands-maatschappijleer":
            for (let d of data) {
                const {nederlands, maatschappijleer, id} = d;
                machine.learn([parseInt(nederlands), parseInt(maatschappijleer)], id);
            }
            break;
        case "nederlands-economie":
            for (let d of data) {
                const {nederlands, economie, id} = d;
                machine.learn([parseInt(nederlands), parseInt(economie)], id);
            }
            break;

        // engels cases
        case "engels-nederlands":
            for (let d of data) {
                const {engels, nederlands, id} = d;
                machine.learn([parseInt(engels), parseInt(nederlands)], id);
            }
            break;
        case "engels-scheikunde":
            for (let d of data) {
                const {engels, scheikunde, id} = d;
                machine.learn([parseInt(engels), parseInt(scheikunde)], id);
            }
            break;
        case "engels-natuurkunde":
            for (let d of data) {
                const {engels, natuurkunde, id} = d;
                machine.learn([parseInt(engels), parseInt(natuurkunde)], id);
            }
            break;
        case "engels-biologie":
            for (let d of data) {
                const {engels, biologie, id} = d;
                machine.learn([parseInt(engels), parseInt(biologie)], id);
            }
            break;
        case "engels-filosofie":
            for (let d of data) {
                const {engels, filosofie, id} = d;
                machine.learn([parseInt(engels), parseInt(filosofie)], id);
            }
            break;
        case "engels-wiskunde_a":
            for (let d of data) {
                const {engels, wiskunde_a, id} = d;
                machine.learn([parseInt(engels), parseInt(wiskunde_a)], id);
            }
            break;
        case "engels-wiskunde_b":
            for (let d of data) {
                const {engels, wiskunde_b, id} = d;
                machine.learn([parseInt(engels), parseInt(wiskunde_b)], id);
            }
            break;
        case "engels-geschiedenis":
            for (let d of data) {
                const {engels, geschiedenis, id} = d;
                machine.learn([parseInt(engels), parseInt(geschiedenis)], id);
            }
            break;
        case "engels-duits":
            for (let d of data) {
                const {engels, duits, id} = d;
                machine.learn([parseInt(engels), parseInt(duits)], id);
            }
            break;
        case "engels-frans":
            for (let d of data) {
                const {engels, frans, id} = d;
                machine.learn([parseInt(engels), parseInt(frans)], id);
            }
            break;
        case "engels-spaans":
            for (let d of data) {
                const {engels, spaans, id} = d;
                machine.learn([parseInt(engels), parseInt(spaans)], id);
            }
            break;
        case "engels-aardrijkskunde":
            for (let d of data) {
                const {engels, aardrijkskunde, id} = d;
                machine.learn([parseInt(engels), parseInt(aardrijkskunde)], id);
            }
            break;
        case "engels-maatschappijleer":
            for (let d of data) {
                const {engels, maatschappijleer, id} = d;
                machine.learn([parseInt(engels), parseInt(maatschappijleer)], id);
            }
            break;
        case "engels-economie":
            for (let d of data) {
                const {engels, economie, id} = d;
                machine.learn([parseInt(engels), parseInt(economie)], id);
            }
            break;

        //scheikunde cases
        case "scheikunde-nederlands":
            for (let d of data) {
                const {scheikunde, nederlands, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(nederlands)], id);
            }
            break;
        case "scheikunde-engels":
            for (let d of data) {
                const {scheikunde, engels, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(engels)], id);
            }
            break;
        case "scheikunde-natuurkunde":
            for (let d of data) {
                const {scheikunde, natuurkunde, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(natuurkunde)], id);
            }
            break;
        case "scheikunde-biologie":
            for (let d of data) {
                const {scheikunde, biologie, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(biologie)], id);
            }
            break;
        case "scheikunde-filosofie":
            for (let d of data) {
                const {scheikunde, filosofie, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(filosofie)], id);
            }
            break;
        case "scheikunde-wiskunde_a":
            for (let d of data) {
                const {scheikunde, filosofie, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(filosofie)], id);
            }
            break;
        case "scheikunde-wiskunde_b":
            for (let d of data) {
                const {scheikunde, wiskunde_b, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(wiskunde_b)], id);
            }
            break;
        case "scheikunde-geschiedenis":
            for (let d of data) {
                const {scheikunde, geschiedenis, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(geschiedenis)], id);
            }
            break;
        case "scheikunde-duits":
            for (let d of data) {
                const {scheikunde, duits, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(duits)], id);
            }
            break;
        case "scheikunde-frans":
            for (let d of data) {
                const {scheikunde, frans, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(frans)], id);
            }
            break;
        case "scheikunde-spaans":
            for (let d of data) {
                const {scheikunde, spaans, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(spaans)], id);
            }
            break;
        case "scheikunde-aardrijkskunde":
            for (let d of data) {
                const {scheikunde, aardrijkskunde, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(aardrijkskunde)], id);
            }
            break;
        case "scheikunde-maatschappijleer":
            for (let d of data) {
                const {scheikunde, maatschappijleer, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(maatschappijleer)], id);
            }
            break;
        case "scheikunde-economie":
            for (let d of data) {
                const {scheikunde, economie, id} = d;
                machine.learn([parseInt(scheikunde), parseInt(economie)], id);
            }
            break;

        // natuurkunde cases
        case "natuurkunde-nederlands":
            for (let d of data) {
                const {natuurkunde, nederlands, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(nederlands)], id);
            }
            break;
        case "natuurkunde-engels":
            for (let d of data) {
                const {natuurkunde, engels, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(engels)], id);
            }
            break;
        case "natuurkunde-scheikunde":
            for (let d of data) {
                const {natuurkunde, scheikunde, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(scheikunde)], id);
            }
            break;
        case "natuurkunde-biologie":
            for (let d of data) {
                const {natuurkunde, biologie, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(biologie)], id);
            }
            break;
        case "natuurkunde-filosofie":
            for (let d of data) {
                const {natuurkunde, filosofie, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(filosofie)], id);
            }
            break;
        case "natuurkunde-wiskunde_a":
            for (let d of data) {
                const {natuurkunde, filosofie, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(filosofie)], id);
            }
            break;
        case "natuurkunde-wiskunde_b":
            for (let d of data) {
                const {natuurkunde, wiskunde_b, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(wiskunde_b)], id);
            }
            break;
        case "natuurkunde-geschiedenis":
            for (let d of data) {
                const {natuurkunde, geschiedenis, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(geschiedenis)], id);
            }
            break;
        case "natuurkunde-duits":
            for (let d of data) {
                const {natuurkunde, duits, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(duits)], id);
            }
            break;
        case "natuurkunde-frans":
            for (let d of data) {
                const {natuurkunde, frans, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(frans)], id);
            }
            break;
        case "natuurkunde-spaans":
            for (let d of data) {
                const {natuurkunde, spaans, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(spaans)], id);
            }
            break;
        case "natuurkunde-aardrijkskunde":
            for (let d of data) {
                const {natuurkunde, aardrijkskunde, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(aardrijkskunde)], id);
            }
            break;
        case "natuurkunde-maatschappijleer":
            for (let d of data) {
                const {natuurkunde, maatschappijleer, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(maatschappijleer)], id);
            }
            break;
        case "natuurkunde-economie":
            for (let d of data) {
                const {natuurkunde, economie, id} = d;
                machine.learn([parseInt(natuurkunde), parseInt(economie)], id);
            }
            break;


        //biologie cases
        case "biologie-nederlands":
            for (let d of data) {
                const {biologie, nederlands, id} = d;
                machine.learn([parseInt(biologie), parseInt(nederlands)], id);
            }
            break;
        case "biologie-engels":
            for (let d of data) {
                const {biologie, engels, id} = d;
                machine.learn([parseInt(biologie), parseInt(engels)], id);
            }
            break;
        case "biologie-scheikunde":
            for (let d of data) {
                const {biologie, scheikunde, id} = d;
                machine.learn([parseInt(biologie), parseInt(scheikunde)], id);
            }
            break;
        case "biologie-biologie":
            for (let d of data) {
                const {biologie, natuurkunde, id} = d;
                machine.learn([parseInt(biologie), parseInt(natuurkunde)], id);
            }
            break;
        case "biologie-filosofie":
            for (let d of data) {
                const {biologie, filosofie, id} = d;
                machine.learn([parseInt(biologie), parseInt(filosofie)], id);
            }
            break;
        case "biologie-wiskunde_a":
            for (let d of data) {
                const {biologie, filosofie, id} = d;
                machine.learn([parseInt(biologie), parseInt(filosofie)], id);
            }
            break;
        case "biologie-wiskunde_b":
            for (let d of data) {
                const {biologie, wiskunde_b, id} = d;
                machine.learn([parseInt(biologie), parseInt(wiskunde_b)], id);
            }
            break;
        case "biologie-geschiedenis":
            for (let d of data) {
                const {biologie, geschiedenis, id} = d;
                machine.learn([parseInt(biologie), parseInt(geschiedenis)], id);
            }
            break;
        case "biologie-duits":
            for (let d of data) {
                const {biologie, duits, id} = d;
                machine.learn([parseInt(biologie), parseInt(duits)], id);
            }
            break;
        case "biologie-frans":
            for (let d of data) {
                const {biologie, frans, id} = d;
                machine.learn([parseInt(biologie), parseInt(frans)], id);
            }
            break;
        case "biologie-spaans":
            for (let d of data) {
                const {biologie, spaans, id} = d;
                machine.learn([parseInt(biologie), parseInt(spaans)], id);
            }
            break;
        case "biologie-aardrijkskunde":
            for (let d of data) {
                const {biologie, aardrijkskunde, id} = d;
                machine.learn([parseInt(biologie), parseInt(aardrijkskunde)], id);
            }
            break;
        case "biologie-maatschappijleer":
            for (let d of data) {
                const {biologie, maatschappijleer, id} = d;
                machine.learn([parseInt(biologie), parseInt(maatschappijleer)], id);
            }
            break;
        case "biologie-economie":
            for (let d of data) {
                const {biologie, economie, id} = d;
                machine.learn([parseInt(biologie), parseInt(economie)], id);
            }
            break;

        //filosofie cases
        case "filosofie-nederlands":
            for (let d of data) {
                const {filosofie, nederlands, id} = d;
                machine.learn([parseInt(filosofie), parseInt(nederlands)], id);
            }
            break;
        case "filosofie-engels":
            for (let d of data) {
                const {filosofie, engels, id} = d;
                machine.learn([parseInt(filosofie), parseInt(engels)], id);
            }
            break;
        case "filosofie-scheikunde":
            for (let d of data) {
                const {filosofie, scheikunde, id} = d;
                machine.learn([parseInt(filosofie), parseInt(scheikunde)], id);
            }
            break;
        case "filosofie-natuurkunde":
            for (let d of data) {
                const {filosofie, natuurkunde, id} = d;
                machine.learn([parseInt(filosofie), parseInt(natuurkunde)], id);
            }
            break;
        case "filosofie-biologie":
            for (let d of data) {
                const {filosofie, biologie, id} = d;
                machine.learn([parseInt(filosofie), parseInt(biologie)], id);
            }
            break;
        case "filosofie-wiskunde_a":
            for (let d of data) {
                const {filosofie, wiskunde_a, id} = d;
                machine.learn([parseInt(filosofie), parseInt(wiskunde_a)], id);
            }
            break;
        case "filosofie-wiskunde_b":
            for (let d of data) {
                const {filosofie, wiskunde_b, id} = d;
                machine.learn([parseInt(filosofie), parseInt(wiskunde_b)], id);
            }
            break;
        case "filosofie-geschiedenis":
            for (let d of data) {
                const {filosofie, geschiedenis, id} = d;
                machine.learn([parseInt(filosofie), parseInt(geschiedenis)], id);
            }
            break;
        case "filosofie-duits":
            for (let d of data) {
                const {filosofie, duits, id} = d;
                machine.learn([parseInt(filosofie), parseInt(duits)], id);
            }
            break;
        case "filosofie-frans":
            for (let d of data) {
                const {filosofie, frans, id} = d;
                machine.learn([parseInt(filosofie), parseInt(frans)], id);
            }
            break;
        case "filosofie-spaans":
            for (let d of data) {
                const {filosofie, spaans, id} = d;
                machine.learn([parseInt(filosofie), parseInt(spaans)], id);
            }
            break;
        case "filosofie-aardrijkskunde":
            for (let d of data) {
                const {filosofie, aardrijkskunde, id} = d;
                machine.learn([parseInt(filosofie), parseInt(aardrijkskunde)], id);
            }
            break;
        case "filosofie-maatschappijleer":
            for (let d of data) {
                const {filosofie, maatschappijleer, id} = d;
                machine.learn([parseInt(filosofie), parseInt(maatschappijleer)], id);
            }
            break;
        case "filosofie-economie":
            for (let d of data) {
                const {filosofie, economie, id} = d;
                machine.learn([parseInt(filosofie), parseInt(economie)], id);
            }
            break;


        case "wiskunde_a-nederlands":
            for (let d of data) {
                const {wiskunde_a, nederlands, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(nederlands)], id);
            }
            break;
        case "wiskunde_a-engels":
            for (let d of data) {
                const {wiskunde_a, engels, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(engels)], id);
            }
            break;
        case "wiskunde_a-scheikunde":
            for (let d of data) {
                const {wiskunde_a, scheikunde, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(scheikunde)], id);
            }
            break;
        case "wiskunde_a-natuurkunde":
            for (let d of data) {
                const {wiskunde_a, natuurkunde, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(natuurkunde)], id);
            }
            break;
        case "wiskunde_a-biologie":
            for (let d of data) {
                const {wiskunde_a, biologie, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(biologie)], id);
            }
            break;
        case "wiskunde_a-filosofie":
            for (let d of data) {
                const {wiskunde_a, filosofie, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(filosofie)], id);
            }
            break;
        // case "wiskunde_a-wiskunde_b":
        //     for (let d of data) {
        //         const {wiskunde_a, wiskunde_b, id} = d;
        //         machine.learn([parseInt(wiskunde_a), parseInt(wiskunde_b)], id);
        //     }
        //     break;
        case "wiskunde_a-geschiedenis":
            for (let d of data) {
                const {wiskunde_a, geschiedenis, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(geschiedenis)], id);
            }
            break;
        case "wiskunde_a-duits":
            for (let d of data) {
                const {wiskunde_a, duits, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(duits)], id);
            }
            break;
        case "wiskunde_a-frans":
            for (let d of data) {
                const {wiskunde_a, frans, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(frans)], id);
            }
            break;
        case "wiskunde_a-spaans":
            for (let d of data) {
                const {wiskunde_a, spaans, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(spaans)], id);
            }
            break;
        case "wiskunde_a-aardrijkskunde":
            for (let d of data) {
                const {wiskunde_a, aardrijkskunde, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(aardrijkskunde)], id);
            }
            break;
        case "wiskunde_a-maatschappijleer":
            for (let d of data) {
                const {wiskunde_a, maatschappijleer, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(maatschappijleer)], id);
            }
            break;
        case "wiskunde_a-economie":
            for (let d of data) {
                const {wiskunde_a, economie, id} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(economie)], id);
            }
            break;


//wiskunde_b cases
        case "wiskunde_b-nederlands":
            for (let d of data) {
                const {wiskunde_b, nederlands, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(nederlands)], id);
            }
            break;
        case "wiskunde_b-engels":
            for (let d of data) {
                const {wiskunde_b, engels, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(engels)], id);
            }
            break;
        case "wiskunde_b-scheikunde":
            for (let d of data) {
                const {wiskunde_b, scheikunde, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(scheikunde)], id);
            }
            break;
        case "wiskunde_b-natuurkunde":
            for (let d of data) {
                const {wiskunde_b, natuurkunde, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(natuurkunde)], id);
            }
            break;
        case "wiskunde_b-biologie":
            for (let d of data) {
                const {wiskunde_b, biologie, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(biologie)], id);
            }
            break;
        case "wiskunde_b-duits":
            for (let d of data) {
                const {wiskunde_b, duits, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(duits)], id);
            }
            break;
        case "wiskunde_b-spaans":
            for (let d of data) {
                const {wiskunde_b, spaans, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(spaans)], id);
            }
            break;
        case "wiskunde_b-filosofie":
            for (let d of data) {
                const {wiskunde_b, filosofie, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(filosofie)], id);
            }
            break;
        case "wiskunde_b-frans":
            for (let d of data) {
                const {wiskunde_b, frans, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(frans)], id);
            }
            break;
        case "wiskunde_b-geschiedenis":
            for (let d of data) {
                const {wiskunde_b, geschiedenis, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(geschiedenis)], id);
            }
            break;
        case "wiskunde_b-aardrijkskunde":
            for (let d of data) {
                const {wiskunde_b, aardrijkskunde, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(aardrijkskunde)], id);
            }
            break;
        case "wiskunde_b-maatschappijleer":
            for (let d of data) {
                const {wiskunde_b, maatschappijleer, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(maatschappijleer)], id);
            }
            break;
        case "wiskunde_b-economie":
            for (let d of data) {
                const {wiskunde_b, economie, id} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(economie)], id);
            }
            break;

        //geschiedenis cases
        case "geschiedenis-nederlands":
            for (let d of data) {
                const {geschiedenis, nederlands, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(nederlands)], id);
            }
            break;
        case "geschiedenis-engels":
            for (let d of data) {
                const {geschiedenis, engels, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(engels)], id);
            }
            break;
        case "geschiedenis-scheikunde":
            for (let d of data) {
                const {geschiedenis, scheikunde, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(scheikunde)], id);
            }
            break;
        case "geschiedenis-natuurkunde":
            for (let d of data) {
                const {geschiedenis, natuurkunde, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(natuurkunde)], id);
            }
            break;
        case "geschiedenis-biologie":
            for (let d of data) {
                const {geschiedenis, biologie, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(biologie)], id);
            }
            break;
        case "geschiedenis-wiskunde_a":
            for (let d of data) {
                const {geschiedenis, wiskunde_a, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(wiskunde_a)], id);
            }
            break;
        case "geschiedenis-duits":
            for (let d of data) {
                const {geschiedenis, duits, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(duits)], id);
            }
            break;
        case "geschiedenis-spaans":
            for (let d of data) {
                const {geschiedenis, spaans, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(spaans)], id);
            }
            break;
        case "geschiedenis-filosofie":
            for (let d of data) {
                const {geschiedenis, filosofie, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(filosofie)], id);
            }
            break;
        case "geschiedenis-frans":
            for (let d of data) {
                const {geschiedenis, frans, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(frans)], id);
            }
            break;
        case "geschiedenis-wiskunde_b":
            for (let d of data) {
                const {geschiedenis, wiskunde_b, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(wiskunde_b)], id);
            }
            break;
        case "geschiedenis-aardrijkskunde":
            for (let d of data) {
                const {geschiedenis, aardrijkskunde, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(aardrijkskunde)], id);
            }
            break;
        case "geschiedenis-maatschappijleer":
            for (let d of data) {
                const {geschiedenis, maatschappijleer, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(maatschappijleer)], id);
            }
            break;
        case "geschiedenis-economie":
            for (let d of data) {
                const {geschiedenis, economie, id} = d;
                machine.learn([parseInt(geschiedenis), parseInt(economie)], id);
            }
            break;

        // duits cases
        case "duits-nederlands":
            for (let d of data) {
                const {duits, nederlands, id} = d;
                machine.learn([parseInt(duits), parseInt(nederlands)], id);
            }
            break;
        case "duits-engels":
            for (let d of data) {
                const {duits, engels, id} = d;
                machine.learn([parseInt(duits), parseInt(engels)], id);
            }
            break;
        case "duits-scheikunde":
            for (let d of data) {
                const {duits, scheikunde, id} = d;
                machine.learn([parseInt(duits), parseInt(scheikunde)], id);
            }
            break;
        case "duits-natuurkunde":
            for (let d of data) {
                const {duits, natuurkunde, id} = d;
                machine.learn([parseInt(duits), parseInt(natuurkunde)], id);
            }
            break;
        case "duits-biologie":
            for (let d of data) {
                const {duits, biologie, id} = d;
                machine.learn([parseInt(duits), parseInt(biologie)], id);
            }
            break;
        case "duits-wiskunde_a":
            for (let d of data) {
                const {duits, wiskunde_a, id} = d;
                machine.learn([parseInt(duits), parseInt(wiskunde_a)], id);
            }
            break;
        case "duits-wiskunde_b":
            for (let d of data) {
                const {duits, wiskunde_b, id} = d;
                machine.learn([parseInt(duits), parseInt(wiskunde_b)], id);
            }
            break;
        case "duits-geschiedenis":
            for (let d of data) {
                const {duits, geschiedenis, id} = d;
                machine.learn([parseInt(duits), parseInt(geschiedenis)], id);
            }
            break;
        case "duits-filosofie":
            for (let d of data) {
                const {duits, filosofie, id} = d;
                machine.learn([parseInt(duits), parseInt(filosofie)], id);
            }
            break;
        case "duits-frans":
            for (let d of data) {
                const {duits, frans, id} = d;
                machine.learn([parseInt(duits), parseInt(frans)], id);
            }
            break;
        case "duits-spaans":
            for (let d of data) {
                const {duits, spaans, id} = d;
                machine.learn([parseInt(duits), parseInt(spaans)], id);
            }
            break;
        case "duits-aardrijkskunde":
            for (let d of data) {
                const {duits, aardrijkskunde, id} = d;
                machine.learn([parseInt(duits), parseInt(aardrijkskunde)], id);
            }
            break;
        case "duits-maatschappijleer":
            for (let d of data) {
                const {duits, maatschappijleer, id} = d;
                machine.learn([parseInt(duits), parseInt(maatschappijleer)], id);
            }
            break;
        case "duits-economie":
            for (let d of data) {
                const {duits, economie, id} = d;
                machine.learn([parseInt(duits), parseInt(economie)], id);
            }
            break;


        // frans cases
        case "frans-nederlands":
            for (let d of data) {
                const {frans, nederlands, id} = d;
                machine.learn([parseInt(frans), parseInt(nederlands)], id);
            }
            break;
        case "frans-engels":
            for (let d of data) {
                const {frans, engels, id} = d;
                machine.learn([parseInt(frans), parseInt(engels)], id);
            }
            break;
        case "frans-scheikunde":
            for (let d of data) {
                const {frans, scheikunde, id} = d;
                machine.learn([parseInt(frans), parseInt(scheikunde)], id);
            }
            break;
        case "frans-natuurkunde":
            for (let d of data) {
                const {frans, natuurkunde, id} = d;
                machine.learn([parseInt(frans), parseInt(natuurkunde)], id);
            }
            break;
        case "frans-biologie":
            for (let d of data) {
                const {frans, biologie, id} = d;
                machine.learn([parseInt(frans), parseInt(biologie)], id);
            }
            break;
        case "frans-wiskunde_a":
            for (let d of data) {
                const {frans, wiskunde_a, id} = d;
                machine.learn([parseInt(frans), parseInt(wiskunde_a)], id);
            }
            break;
        case "frans-wiskunde_b":
            for (let d of data) {
                const {frans, wiskunde_b, id} = d;
                machine.learn([parseInt(frans), parseInt(wiskunde_b)], id);
            }
            break;
        case "frans-geschiedenis":
            for (let d of data) {
                const {frans, geschiedenis, id} = d;
                machine.learn([parseInt(frans), parseInt(geschiedenis)], id);
            }
            break;
        case "frans-duits":
            for (let d of data) {
                const {frans, duits, id} = d;
                machine.learn([parseInt(frans), parseInt(duits)], id);
            }
            break;
        case "frans-spaans":
            for (let d of data) {
                const {frans, spaans, id} = d;
                machine.learn([parseInt(frans), parseInt(spaans)], id);
            }
            break;
        case "frans-aardrijkskunde":
            for (let d of data) {
                const {frans, aardrijkskunde, id} = d;
                machine.learn([parseInt(frans), parseInt(aardrijkskunde)], id);
            }
            break;
        case "frans-maatschappijleer":
            for (let d of data) {
                const {frans, maatschappijleer, id} = d;
                machine.learn([parseInt(frans), parseInt(maatschappijleer)], id);
            }
            break;
        case "frans-economie":
            for (let d of data) {
                const {frans, economie, id} = d;
                machine.learn([parseInt(frans), parseInt(economie)], id);
            }
            break;

        //spaans cases
        case "spaans-nederlands":
            for (let d of data) {
                const {spaans, nederlands, id} = d;
                machine.learn([parseInt(spaans), parseInt(nederlands)], id);
            }
            break;
        case "spaans-engels":
            for (let d of data) {
                const {spaans, engels, id} = d;
                machine.learn([parseInt(spaans), parseInt(engels)], id);
            }
            break;
        case "spaans-scheikunde":
            for (let d of data) {
                const {spaans, scheikunde, id} = d;
                machine.learn([parseInt(spaans), parseInt(scheikunde)], id);
            }
            break;
        case "spaans-natuurkunde":
            for (let d of data) {
                const {spaans, natuurkunde, id} = d;
                machine.learn([parseInt(spaans), parseInt(natuurkunde)], id);
            }
            break;
        case "spaans-biologie":
            for (let d of data) {
                const {spaans, biologie, id} = d;
                machine.learn([parseInt(spaans), parseInt(biologie)], id);
            }
            break;
        case "spaans-wiskunde_a":
            for (let d of data) {
                const {spaans, wiskunde_a, id} = d;
                machine.learn([parseInt(spaans), parseInt(wiskunde_a)], id);
            }
            break;
        case "spaans-duits":
            for (let d of data) {
                const {spaans, duits, id} = d;
                machine.learn([parseInt(spaans), parseInt(duits)], id);
            }
            break;
        case "spaans-geschiedenis":
            for (let d of data) {
                const {spaans, geschiedenis, id} = d;
                machine.learn([parseInt(spaans), parseInt(geschiedenis)], id);
            }
            break;
        case "spaans-filosofie":
            for (let d of data) {
                const {spaans, filosofie, id} = d;
                machine.learn([parseInt(spaans), parseInt(filosofie)], id);
            }
            break;
        case "spaans-frans":
            for (let d of data) {
                const {spaans, frans, id} = d;
                machine.learn([parseInt(spaans), parseInt(frans)], id);
            }
            break;
        case "spaans-wiskunde_b":
            for (let d of data) {
                const {spaans, wiskunde_b, id} = d;
                machine.learn([parseInt(spaans), parseInt(wiskunde_b)], id);
            }
            break;
        case "spaans-aardrijkskunde":
            for (let d of data) {
                const {spaans, aardrijkskunde, id} = d;
                machine.learn([parseInt(spaans), parseInt(aardrijkskunde)], id);
            }
            break;
        case "spaans-maatschappijleer":
            for (let d of data) {
                const {spaans, maatschappijleer, id} = d;
                machine.learn([parseInt(spaans), parseInt(maatschappijleer)], id);
            }
            break;
        case "spaans-economie":
            for (let d of data) {
                const {spaans, economie, id} = d;
                machine.learn([parseInt(spaans), parseInt(economie)], id);
            }
            break;


//aardrijkskunde cases
        case "aardrijkskunde-nederlands":
            for (let d of data) {
                const {aardrijkskunde, nederlands, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(nederlands)], id);
            }
            break;
        case "aardrijkskunde-engels":
            for (let d of data) {
                const {aardrijkskunde, engels, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(engels)], id);
            }
            break;
        case "aardrijkskunde-scheikunde":
            for (let d of data) {
                const {aardrijkskunde, scheikunde, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(scheikunde)], id);
            }
            break;
        case "aardrijkskunde-natuurkunde":
            for (let d of data) {
                const {aardrijkskunde, natuurkunde, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(natuurkunde)], id);
            }
            break;
        case "aardrijkskunde-biologie":
            for (let d of data) {
                const {aardrijkskunde, biologie, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(biologie)], id);
            }
            break;
        case "aardrijkskunde-wiskunde_a":
            for (let d of data) {
                const {aardrijkskunde, wiskunde_a, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(wiskunde_a)], id);
            }
            break;
        case "aardrijkskunde-duits":
            for (let d of data) {
                const {aardrijkskunde, duits, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(duits)], id);
            }
            break;
        case "aardrijkskunde-spaans":
            for (let d of data) {
                const {aardrijkskunde, spaans, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(spaans)], id);
            }
            break;
        case "aardrijkskunde-filosofie":
            for (let d of data) {
                const {aardrijkskunde, filosofie, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(filosofie)], id);
            }
            break;
        case "aardrijkskunde-frans":
            for (let d of data) {
                const {aardrijkskunde, frans, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(frans)], id);
            }
            break;
        case "aardrijkskunde-geschiedenis":
            for (let d of data) {
                const {aardrijkskunde, geschiedenis, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(geschiedenis)], id);
            }
            break;
        case "aardrijkskunde-wiskunde_b":
            for (let d of data) {
                const {aardrijkskunde, wiskunde_b, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(wiskunde_b)], id);
            }
            break;
        case "aardrijkskunde-maatschappijleer":
            for (let d of data) {
                const {aardrijkskunde, maatschappijleer, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(maatschappijleer)], id);
            }
            break;
        case "aardrijkskunde-economie":
            for (let d of data) {
                const {aardrijkskunde, economie, id} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(economie)], id);
            }
            break;


// maatschappijleer cases //check
        case "maatschappijleer-nederlands":
            for (let d of data) {
                const {maatschappijleer, nederlands, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(nederlands)], id);
            }
            break;
        case "maatschappijleer-engels":
            for (let d of data) {
                const {maatschappijleer, engels, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(engels)], id);
            }
            break;
        case "maatschappijleer-scheikunde":
            for (let d of data) {
                const {maatschappijleer, scheikunde, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(scheikunde)], id);
            }
            break;
        case "maatschappijleer-natuurkunde":
            for (let d of data) {
                const {maatschappijleer, natuurkunde, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(natuurkunde)], id);
            }
            break;
        case "maatschappijleer-biologie":
            for (let d of data) {
                const {maatschappijleer, biologie, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(biologie)], id);
            }
            break;
        case "maatschappijleer-wiskunde_a":
            for (let d of data) {
                const {maatschappijleer, wiskunde_a, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(wiskunde_a)], id);
            }
            break;
        case "maatschappijleer-wiskunde_b":
            for (let d of data) {
                const {maatschappijleer, wiskunde_b, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(wiskunde_b)], id);
            }
            break;
        case "maatschappijleer-geschiedenis":
            for (let d of data) {
                const {maatschappijleer, geschiedenis, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(geschiedenis)], id);
            }
            break;
        case "maatschappijleer-duits":
            for (let d of data) {
                const {maatschappijleer, duits, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(duits)], id);
            }
            break;
        case "maatschappijleer-frans":
            for (let d of data) {
                const {maatschappijleer, frans, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(frans)], id);
            }
            break;
        case "maatschappijleer-spaans":
            for (let d of data) {
                const {maatschappijleer, spaans, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(spaans)], id);
            }
            break;
        case "maatschappijleer-aardrijkskunde":
            for (let d of data) {
                const {maatschappijleer, aardrijkskunde, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(aardrijkskunde)], id);
            }
            break;
        case "maatschappijleer-filosofie":
            for (let d of data) {
                const {maatschappijleer, filosofie, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(filosofie)], id);
            }
            break;
        case "maatschappijleer-economie":
            for (let d of data) {
                const {maatschappijleer, economie, id} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(economie)], id);
            }
            break;

        //cases economie //check
        case "economie-nederlands":
            for (let d of data) {
                const {economie, nederlands, id} = d;
                machine.learn([parseInt(economie), parseInt(nederlands)], id);
            }
            break;
        case "economie-engels":
            for (let d of data) {
                const {economie, engels, id} = d;
                machine.learn([parseInt(economie), parseInt(engels)], id);
            }
            break;
        case "economie-scheikunde":
            for (let d of data) {
                const {economie, scheikunde, id} = d;
                machine.learn([parseInt(economie), parseInt(scheikunde)], id);
            }
            break;
        case "economie-natuurkunde":
            for (let d of data) {
                const {economie, natuurkunde, id} = d;
                machine.learn([parseInt(economie), parseInt(natuurkunde)], id);
            }
            break;
        case "economie-biologie":
            for (let d of data) {
                const {economie, biologie, id} = d;
                machine.learn([parseInt(economie), parseInt(biologie)], id);
            }
            break;
        case "economie-wiskunde_a":
            for (let d of data) {
                const {economie, wiskunde_a, id} = d;
                machine.learn([parseInt(economie), parseInt(wiskunde_a)], id);
            }
            break;
        case "economie-wiskunde_b":
            for (let d of data) {
                const {economie, wiskunde_b, id} = d;
                machine.learn([parseInt(economie), parseInt(wiskunde_b)], id);
            }
            break;
        case "economie-geschiedenis":
            for (let d of data) {
                const {economie, geschiedenis, id} = d;
                machine.learn([parseInt(economie), parseInt(geschiedenis)], id);
            }
            break;
        case "economie-duits":
            for (let d of data) {
                const {economie, duits, id} = d;
                machine.learn([parseInt(economie), parseInt(duits)], id);
            }
            break;
        case "economie-frans":
            for (let d of data) {
                const {economie, frans, id} = d;
                machine.learn([parseInt(economie), parseInt(frans)], id);
            }
            break;
        case "economie-spaans":
            for (let d of data) {
                const {economie, spaans, id} = d;
                machine.learn([parseInt(economie), parseInt(spaans)], id);
            }
            break;
        case "economie-aardrijkskunde":
            for (let d of data) {
                const {economie, aardrijkskunde, id} = d;
                machine.learn([parseInt(economie), parseInt(aardrijkskunde)], id);
            }
            break;
        case "economie-maatschappijleer":
            for (let d of data) {
                const {economie, maatschappijleer, id} = d;
                machine.learn([parseInt(economie), parseInt(maatschappijleer)], id);
            }
            break;
        case "economie-filosofie":
            for (let d of data) {
                const {economie, filosofie, id} = d;
                machine.learn([parseInt(economie), parseInt(filosofie)], id);
            }
            break;
    }
    const prediction = machine.classify([giveGrade, takeGrade])
    console.log(prediction.name, prediction.email)
    feedback.innerHTML = `Je hebt een buddy gevonden!`
    feedback2.innerHTML = `Jouw studybuddy is:`
    feedback3.innerHTML = `${prediction}`
    buddy.style.visibility = "visible";
}

// waarden invullen voor een voorspelling
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    giveGrade = parseInt(e.target[0].value)
    takeGrade = parseInt(e.target[1].value)
    giveSubject = (e.target[2].value)
    takeSubject = (e.target[3].value)
    console.log(`Give ${giveSubject}: ${giveGrade}, Take ${takeSubject}: ${takeGrade}`)
    loadData()
})
