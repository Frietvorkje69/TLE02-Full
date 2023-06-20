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
                const {nederlands, engels, email} = d;
                machine.learn([parseInt(nederlands), parseInt(engels)], email);
            }
            break;
        case "nederlands-scheikunde":
            for (let d of data) {
                const {nederlands, scheikunde, email} = d;
                machine.learn([parseInt(nederlands), parseInt(scheikunde)], email);
            }
            break;
        case "nederlands-natuurkunde":
            for (let d of data) {
                const {nederlands, natuurkunde, email} = d;
                machine.learn([parseInt(nederlands), parseInt(natuurkunde)], email);
            }
            break;
        case "nederlands-biologie":
            for (let d of data) {
                const {nederlands, biologie, email} = d;
                machine.learn([parseInt(nederlands), parseInt(biologie)], email);
            }
            break;
        case "nederlands-filosofie":
            for (let d of data) {
                const {nederlands, filosofie, email} = d;
                machine.learn([parseInt(nederlands), parseInt(filosofie)], email);
            }
            break;
        case "nederlands-wiskunde_a":
            for (let d of data) {
                const {nederlands, wiskunde_a, email} = d;
                machine.learn([parseInt(nederlands), parseInt(wiskunde_a)], email);
            }
            break;
        case "nederlands-wiskunde_b":
            for (let d of data) {
                const {nederlands, wiskunde_b, email} = d;
                machine.learn([parseInt(nederlands), parseInt(wiskunde_b)], email);
            }
            break;
        case "nederlands-geschiedenis":
            for (let d of data) {
                const {nederlands, geschiedenis, email} = d;
                machine.learn([parseInt(nederlands), parseInt(geschiedenis)], email);
            }
            break;
        case "nederlands-duits":
            for (let d of data) {
                const {nederlands, duits, email} = d;
                machine.learn([parseInt(nederlands), parseInt(duits)], email);
            }
            break;
        case "nederlands-frans":
            for (let d of data) {
                const {nederlands, frans, email} = d;
                machine.learn([parseInt(nederlands), parseInt(frans)], email);
            }
            break;
        case "nederlands-spaans":
            for (let d of data) {
                const {nederlands, spaans, email} = d;
                machine.learn([parseInt(nederlands), parseInt(spaans)], email);
            }
            break;
        case "nederlands-aardrijkskunde":
            for (let d of data) {
                const {nederlands, aardrijkskunde, email} = d;
                machine.learn([parseInt(nederlands), parseInt(aardrijkskunde)], email);
            }
            break;
        case "nederlands-maatschappijleer":
            for (let d of data) {
                const {nederlands, maatschappijleer, email} = d;
                machine.learn([parseInt(nederlands), parseInt(maatschappijleer)], email);
            }
            break;
        case "nederlands-economie":
            for (let d of data) {
                const {nederlands, economie, email} = d;
                machine.learn([parseInt(nederlands), parseInt(economie)], email);
            }
            break;

        // engels cases
        case "engels-nederlands":
            for (let d of data) {
                const {engels, nederlands, email} = d;
                machine.learn([parseInt(engels), parseInt(nederlands)], email);
            }
            break;
        case "engels-scheikunde":
            for (let d of data) {
                const {engels, scheikunde, email} = d;
                machine.learn([parseInt(engels), parseInt(scheikunde)], email);
            }
            break;
        case "engels-natuurkunde":
            for (let d of data) {
                const {engels, natuurkunde, email} = d;
                machine.learn([parseInt(engels), parseInt(natuurkunde)], email);
            }
            break;
        case "engels-biologie":
            for (let d of data) {
                const {engels, biologie, email} = d;
                machine.learn([parseInt(engels), parseInt(biologie)], email);
            }
            break;
        case "engels-filosofie":
            for (let d of data) {
                const {engels, filosofie, email} = d;
                machine.learn([parseInt(engels), parseInt(filosofie)], email);
            }
            break;
        case "engels-wiskunde_a":
            for (let d of data) {
                const {engels, wiskunde_a, email} = d;
                machine.learn([parseInt(engels), parseInt(wiskunde_a)], email);
            }
            break;
        case "engels-wiskunde_b":
            for (let d of data) {
                const {engels, wiskunde_b, email} = d;
                machine.learn([parseInt(engels), parseInt(wiskunde_b)], email);
            }
            break;
        case "engels-geschiedenis":
            for (let d of data) {
                const {engels, geschiedenis, email} = d;
                machine.learn([parseInt(engels), parseInt(geschiedenis)], email);
            }
            break;
        case "engels-duits":
            for (let d of data) {
                const {engels, duits, email} = d;
                machine.learn([parseInt(engels), parseInt(duits)], email);
            }
            break;
        case "engels-frans":
            for (let d of data) {
                const {engels, frans, email} = d;
                machine.learn([parseInt(engels), parseInt(frans)], email);
            }
            break;
        case "engels-spaans":
            for (let d of data) {
                const {engels, spaans, email} = d;
                machine.learn([parseInt(engels), parseInt(spaans)], email);
            }
            break;
        case "engels-aardrijkskunde":
            for (let d of data) {
                const {engels, aardrijkskunde, email} = d;
                machine.learn([parseInt(engels), parseInt(aardrijkskunde)], email);
            }
            break;
        case "engels-maatschappijleer":
            for (let d of data) {
                const {engels, maatschappijleer, email} = d;
                machine.learn([parseInt(engels), parseInt(maatschappijleer)], email);
            }
            break;
        case "engels-economie":
            for (let d of data) {
                const {engels, economie, email} = d;
                machine.learn([parseInt(engels), parseInt(economie)], email);
            }
            break;

        //scheikunde cases
        case "scheikunde-nederlands":
            for (let d of data) {
                const {scheikunde, nederlands, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(nederlands)], email);
            }
            break;
        case "scheikunde-engels":
            for (let d of data) {
                const {scheikunde, engels, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(engels)], email);
            }
            break;
        case "scheikunde-natuurkunde":
            for (let d of data) {
                const {scheikunde, natuurkunde, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(natuurkunde)], email);
            }
            break;
        case "scheikunde-biologie":
            for (let d of data) {
                const {scheikunde, biologie, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(biologie)], email);
            }
            break;
        case "scheikunde-filosofie":
            for (let d of data) {
                const {scheikunde, filosofie, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(filosofie)], email);
            }
            break;
        case "scheikunde-wiskunde_a":
            for (let d of data) {
                const {scheikunde, filosofie, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(filosofie)], email);
            }
            break;
        case "scheikunde-wiskunde_b":
            for (let d of data) {
                const {scheikunde, wiskunde_b, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(wiskunde_b)], email);
            }
            break;
        case "scheikunde-geschiedenis":
            for (let d of data) {
                const {scheikunde, geschiedenis, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(geschiedenis)], email);
            }
            break;
        case "scheikunde-duits":
            for (let d of data) {
                const {scheikunde, duits, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(duits)], email);
            }
            break;
        case "scheikunde-frans":
            for (let d of data) {
                const {scheikunde, frans, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(frans)], email);
            }
            break;
        case "scheikunde-spaans":
            for (let d of data) {
                const {scheikunde, spaans, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(spaans)], email);
            }
            break;
        case "scheikunde-aardrijkskunde":
            for (let d of data) {
                const {scheikunde, aardrijkskunde, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(aardrijkskunde)], email);
            }
            break;
        case "scheikunde-maatschappijleer":
            for (let d of data) {
                const {scheikunde, maatschappijleer, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(maatschappijleer)], email);
            }
            break;
        case "scheikunde-economie":
            for (let d of data) {
                const {scheikunde, economie, email} = d;
                machine.learn([parseInt(scheikunde), parseInt(economie)], email);
            }
            break;

        // natuurkunde cases
        case "natuurkunde-nederlands":
            for (let d of data) {
                const {natuurkunde, nederlands, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(nederlands)], email);
            }
            break;
        case "natuurkunde-engels":
            for (let d of data) {
                const {natuurkunde, engels, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(engels)], email);
            }
            break;
        case "natuurkunde-scheikunde":
            for (let d of data) {
                const {natuurkunde, scheikunde, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(scheikunde)], email);
            }
            break;
        case "natuurkunde-biologie":
            for (let d of data) {
                const {natuurkunde, biologie, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(biologie)], email);
            }
            break;
        case "natuurkunde-filosofie":
            for (let d of data) {
                const {natuurkunde, filosofie, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(filosofie)], email);
            }
            break;
        case "natuurkunde-wiskunde_a":
            for (let d of data) {
                const {natuurkunde, filosofie, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(filosofie)], email);
            }
            break;
        case "natuurkunde-wiskunde_b":
            for (let d of data) {
                const {natuurkunde, wiskunde_b, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(wiskunde_b)], email);
            }
            break;
        case "natuurkunde-geschiedenis":
            for (let d of data) {
                const {natuurkunde, geschiedenis, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(geschiedenis)], email);
            }
            break;
        case "natuurkunde-duits":
            for (let d of data) {
                const {natuurkunde, duits, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(duits)], email);
            }
            break;
        case "natuurkunde-frans":
            for (let d of data) {
                const {natuurkunde, frans, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(frans)], email);
            }
            break;
        case "natuurkunde-spaans":
            for (let d of data) {
                const {natuurkunde, spaans, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(spaans)], email);
            }
            break;
        case "natuurkunde-aardrijkskunde":
            for (let d of data) {
                const {natuurkunde, aardrijkskunde, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(aardrijkskunde)], email);
            }
            break;
        case "natuurkunde-maatschappijleer":
            for (let d of data) {
                const {natuurkunde, maatschappijleer, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(maatschappijleer)], email);
            }
            break;
        case "natuurkunde-economie":
            for (let d of data) {
                const {natuurkunde, economie, email} = d;
                machine.learn([parseInt(natuurkunde), parseInt(economie)], email);
            }
            break;


        //biologie cases
        case "biologie-nederlands":
            for (let d of data) {
                const {biologie, nederlands, email} = d;
                machine.learn([parseInt(biologie), parseInt(nederlands)], email);
            }
            break;
        case "biologie-engels":
            for (let d of data) {
                const {biologie, engels, email} = d;
                machine.learn([parseInt(biologie), parseInt(engels)], email);
            }
            break;
        case "biologie-scheikunde":
            for (let d of data) {
                const {biologie, scheikunde, email} = d;
                machine.learn([parseInt(biologie), parseInt(scheikunde)], email);
            }
            break;
        case "biologie-biologie":
            for (let d of data) {
                const {biologie, natuurkunde, email} = d;
                machine.learn([parseInt(biologie), parseInt(natuurkunde)], email);
            }
            break;
        case "biologie-filosofie":
            for (let d of data) {
                const {biologie, filosofie, email} = d;
                machine.learn([parseInt(biologie), parseInt(filosofie)], email);
            }
            break;
        case "biologie-wiskunde_a":
            for (let d of data) {
                const {biologie, filosofie, email} = d;
                machine.learn([parseInt(biologie), parseInt(filosofie)], email);
            }
            break;
        case "biologie-wiskunde_b":
            for (let d of data) {
                const {biologie, wiskunde_b, email} = d;
                machine.learn([parseInt(biologie), parseInt(wiskunde_b)], email);
            }
            break;
        case "biologie-geschiedenis":
            for (let d of data) {
                const {biologie, geschiedenis, email} = d;
                machine.learn([parseInt(biologie), parseInt(geschiedenis)], email);
            }
            break;
        case "biologie-duits":
            for (let d of data) {
                const {biologie, duits, email} = d;
                machine.learn([parseInt(biologie), parseInt(duits)], email);
            }
            break;
        case "biologie-frans":
            for (let d of data) {
                const {biologie, frans, email} = d;
                machine.learn([parseInt(biologie), parseInt(frans)], email);
            }
            break;
        case "biologie-spaans":
            for (let d of data) {
                const {biologie, spaans, email} = d;
                machine.learn([parseInt(biologie), parseInt(spaans)], email);
            }
            break;
        case "biologie-aardrijkskunde":
            for (let d of data) {
                const {biologie, aardrijkskunde, email} = d;
                machine.learn([parseInt(biologie), parseInt(aardrijkskunde)], email);
            }
            break;
        case "biologie-maatschappijleer":
            for (let d of data) {
                const {biologie, maatschappijleer, email} = d;
                machine.learn([parseInt(biologie), parseInt(maatschappijleer)], email);
            }
            break;
        case "biologie-economie":
            for (let d of data) {
                const {biologie, economie, email} = d;
                machine.learn([parseInt(biologie), parseInt(economie)], email);
            }
            break;

        //filosofie cases
        case "filosofie-nederlands":
            for (let d of data) {
                const {filosofie, nederlands, email} = d;
                machine.learn([parseInt(filosofie), parseInt(nederlands)], email);
            }
            break;
        case "filosofie-engels":
            for (let d of data) {
                const {filosofie, engels, email} = d;
                machine.learn([parseInt(filosofie), parseInt(engels)], email);
            }
            break;
        case "filosofie-scheikunde":
            for (let d of data) {
                const {filosofie, scheikunde, email} = d;
                machine.learn([parseInt(filosofie), parseInt(scheikunde)], email);
            }
            break;
        case "filosofie-natuurkunde":
            for (let d of data) {
                const {filosofie, natuurkunde, email} = d;
                machine.learn([parseInt(filosofie), parseInt(natuurkunde)], email);
            }
            break;
        case "filosofie-biologie":
            for (let d of data) {
                const {filosofie, biologie, email} = d;
                machine.learn([parseInt(filosofie), parseInt(biologie)], email);
            }
            break;
        case "filosofie-wiskunde_a":
            for (let d of data) {
                const {filosofie, wiskunde_a, email} = d;
                machine.learn([parseInt(filosofie), parseInt(wiskunde_a)], email);
            }
            break;
        case "filosofie-wiskunde_b":
            for (let d of data) {
                const {filosofie, wiskunde_b, email} = d;
                machine.learn([parseInt(filosofie), parseInt(wiskunde_b)], email);
            }
            break;
        case "filosofie-geschiedenis":
            for (let d of data) {
                const {filosofie, geschiedenis, email} = d;
                machine.learn([parseInt(filosofie), parseInt(geschiedenis)], email);
            }
            break;
        case "filosofie-duits":
            for (let d of data) {
                const {filosofie, duits, email} = d;
                machine.learn([parseInt(filosofie), parseInt(duits)], email);
            }
            break;
        case "filosofie-frans":
            for (let d of data) {
                const {filosofie, frans, email} = d;
                machine.learn([parseInt(filosofie), parseInt(frans)], email);
            }
            break;
        case "filosofie-spaans":
            for (let d of data) {
                const {filosofie, spaans, email} = d;
                machine.learn([parseInt(filosofie), parseInt(spaans)], email);
            }
            break;
        case "filosofie-aardrijkskunde":
            for (let d of data) {
                const {filosofie, aardrijkskunde, email} = d;
                machine.learn([parseInt(filosofie), parseInt(aardrijkskunde)], email);
            }
            break;
        case "filosofie-maatschappijleer":
            for (let d of data) {
                const {filosofie, maatschappijleer, email} = d;
                machine.learn([parseInt(filosofie), parseInt(maatschappijleer)], email);
            }
            break;
        case "filosofie-economie":
            for (let d of data) {
                const {filosofie, economie, email} = d;
                machine.learn([parseInt(filosofie), parseInt(economie)], email);
            }
            break;


        case "wiskunde_a-nederlands":
            for (let d of data) {
                const {wiskunde_a, nederlands, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(nederlands)], email);
            }
            break;
        case "wiskunde_a-engels":
            for (let d of data) {
                const {wiskunde_a, engels, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(engels)], email);
            }
            break;
        case "wiskunde_a-scheikunde":
            for (let d of data) {
                const {wiskunde_a, scheikunde, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(scheikunde)], email);
            }
            break;
        case "wiskunde_a-natuurkunde":
            for (let d of data) {
                const {wiskunde_a, natuurkunde, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(natuurkunde)], email);
            }
            break;
        case "wiskunde_a-biologie":
            for (let d of data) {
                const {wiskunde_a, biologie, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(biologie)], email);
            }
            break;
        case "wiskunde_a-filosofie":
            for (let d of data) {
                const {wiskunde_a, filosofie, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(filosofie)], email);
            }
            break;
        // case "wiskunde_a-wiskunde_b":
        //     for (let d of data) {
        //         const {wiskunde_a, wiskunde_b, email} = d;
        //         machine.learn([parseInt(wiskunde_a), parseInt(wiskunde_b)], email);
        //     }
        //     break;
        case "wiskunde_a-geschiedenis":
            for (let d of data) {
                const {wiskunde_a, geschiedenis, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(geschiedenis)], email);
            }
            break;
        case "wiskunde_a-duits":
            for (let d of data) {
                const {wiskunde_a, duits, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(duits)], email);
            }
            break;
        case "wiskunde_a-frans":
            for (let d of data) {
                const {wiskunde_a, frans, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(frans)], email);
            }
            break;
        case "wiskunde_a-spaans":
            for (let d of data) {
                const {wiskunde_a, spaans, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(spaans)], email);
            }
            break;
        case "wiskunde_a-aardrijkskunde":
            for (let d of data) {
                const {wiskunde_a, aardrijkskunde, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(aardrijkskunde)], email);
            }
            break;
        case "wiskunde_a-maatschappijleer":
            for (let d of data) {
                const {wiskunde_a, maatschappijleer, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(maatschappijleer)], email);
            }
            break;
        case "wiskunde_a-economie":
            for (let d of data) {
                const {wiskunde_a, economie, email} = d;
                machine.learn([parseInt(wiskunde_a), parseInt(economie)], email);
            }
            break;


//wiskunde_b cases
        case "wiskunde_b-nederlands":
            for (let d of data) {
                const {wiskunde_b, nederlands, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(nederlands)], email);
            }
            break;
        case "wiskunde_b-engels":
            for (let d of data) {
                const {wiskunde_b, engels, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(engels)], email);
            }
            break;
        case "wiskunde_b-scheikunde":
            for (let d of data) {
                const {wiskunde_b, scheikunde, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(scheikunde)], email);
            }
            break;
        case "wiskunde_b-natuurkunde":
            for (let d of data) {
                const {wiskunde_b, natuurkunde, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(natuurkunde)], email);
            }
            break;
        case "wiskunde_b-biologie":
            for (let d of data) {
                const {wiskunde_b, biologie, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(biologie)], email);
            }
            break;
        case "wiskunde_b-duits":
            for (let d of data) {
                const {wiskunde_b, duits, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(duits)], email);
            }
            break;
        case "wiskunde_b-spaans":
            for (let d of data) {
                const {wiskunde_b, spaans, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(spaans)], email);
            }
            break;
        case "wiskunde_b-filosofie":
            for (let d of data) {
                const {wiskunde_b, filosofie, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(filosofie)], email);
            }
            break;
        case "wiskunde_b-frans":
            for (let d of data) {
                const {wiskunde_b, frans, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(frans)], email);
            }
            break;
        case "wiskunde_b-geschiedenis":
            for (let d of data) {
                const {wiskunde_b, geschiedenis, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(geschiedenis)], email);
            }
            break;
        case "wiskunde_b-aardrijkskunde":
            for (let d of data) {
                const {wiskunde_b, aardrijkskunde, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(aardrijkskunde)], email);
            }
            break;
        case "wiskunde_b-maatschappijleer":
            for (let d of data) {
                const {wiskunde_b, maatschappijleer, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(maatschappijleer)], email);
            }
            break;
        case "wiskunde_b-economie":
            for (let d of data) {
                const {wiskunde_b, economie, email} = d;
                machine.learn([parseInt(wiskunde_b), parseInt(economie)], email);
            }
            break;

        //geschiedenis cases
        case "geschiedenis-nederlands":
            for (let d of data) {
                const {geschiedenis, nederlands, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(nederlands)], email);
            }
            break;
        case "geschiedenis-engels":
            for (let d of data) {
                const {geschiedenis, engels, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(engels)], email);
            }
            break;
        case "geschiedenis-scheikunde":
            for (let d of data) {
                const {geschiedenis, scheikunde, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(scheikunde)], email);
            }
            break;
        case "geschiedenis-natuurkunde":
            for (let d of data) {
                const {geschiedenis, natuurkunde, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(natuurkunde)], email);
            }
            break;
        case "geschiedenis-biologie":
            for (let d of data) {
                const {geschiedenis, biologie, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(biologie)], email);
            }
            break;
        case "geschiedenis-wiskunde_a":
            for (let d of data) {
                const {geschiedenis, wiskunde_a, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(wiskunde_a)], email);
            }
            break;
        case "geschiedenis-duits":
            for (let d of data) {
                const {geschiedenis, duits, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(duits)], email);
            }
            break;
        case "geschiedenis-spaans":
            for (let d of data) {
                const {geschiedenis, spaans, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(spaans)], email);
            }
            break;
        case "geschiedenis-filosofie":
            for (let d of data) {
                const {geschiedenis, filosofie, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(filosofie)], email);
            }
            break;
        case "geschiedenis-frans":
            for (let d of data) {
                const {geschiedenis, frans, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(frans)], email);
            }
            break;
        case "geschiedenis-wiskunde_b":
            for (let d of data) {
                const {geschiedenis, wiskunde_b, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(wiskunde_b)], email);
            }
            break;
        case "geschiedenis-aardrijkskunde":
            for (let d of data) {
                const {geschiedenis, aardrijkskunde, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(aardrijkskunde)], email);
            }
            break;
        case "geschiedenis-maatschappijleer":
            for (let d of data) {
                const {geschiedenis, maatschappijleer, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(maatschappijleer)], email);
            }
            break;
        case "geschiedenis-economie":
            for (let d of data) {
                const {geschiedenis, economie, email} = d;
                machine.learn([parseInt(geschiedenis), parseInt(economie)], email);
            }
            break;

        // duits cases
        case "duits-nederlands":
            for (let d of data) {
                const {duits, nederlands, email} = d;
                machine.learn([parseInt(duits), parseInt(nederlands)], email);
            }
            break;
        case "duits-engels":
            for (let d of data) {
                const {duits, engels, email} = d;
                machine.learn([parseInt(duits), parseInt(engels)], email);
            }
            break;
        case "duits-scheikunde":
            for (let d of data) {
                const {duits, scheikunde, email} = d;
                machine.learn([parseInt(duits), parseInt(scheikunde)], email);
            }
            break;
        case "duits-natuurkunde":
            for (let d of data) {
                const {duits, natuurkunde, email} = d;
                machine.learn([parseInt(duits), parseInt(natuurkunde)], email);
            }
            break;
        case "duits-biologie":
            for (let d of data) {
                const {duits, biologie, email} = d;
                machine.learn([parseInt(duits), parseInt(biologie)], email);
            }
            break;
        case "duits-wiskunde_a":
            for (let d of data) {
                const {duits, wiskunde_a, email} = d;
                machine.learn([parseInt(duits), parseInt(wiskunde_a)], email);
            }
            break;
        case "duits-wiskunde_b":
            for (let d of data) {
                const {duits, wiskunde_b, email} = d;
                machine.learn([parseInt(duits), parseInt(wiskunde_b)], email);
            }
            break;
        case "duits-geschiedenis":
            for (let d of data) {
                const {duits, geschiedenis, email} = d;
                machine.learn([parseInt(duits), parseInt(geschiedenis)], email);
            }
            break;
        case "duits-filosofie":
            for (let d of data) {
                const {duits, filosofie, email} = d;
                machine.learn([parseInt(duits), parseInt(filosofie)], email);
            }
            break;
        case "duits-frans":
            for (let d of data) {
                const {duits, frans, email} = d;
                machine.learn([parseInt(duits), parseInt(frans)], email);
            }
            break;
        case "duits-spaans":
            for (let d of data) {
                const {duits, spaans, email} = d;
                machine.learn([parseInt(duits), parseInt(spaans)], email);
            }
            break;
        case "duits-aardrijkskunde":
            for (let d of data) {
                const {duits, aardrijkskunde, email} = d;
                machine.learn([parseInt(duits), parseInt(aardrijkskunde)], email);
            }
            break;
        case "duits-maatschappijleer":
            for (let d of data) {
                const {duits, maatschappijleer, email} = d;
                machine.learn([parseInt(duits), parseInt(maatschappijleer)], email);
            }
            break;
        case "duits-economie":
            for (let d of data) {
                const {duits, economie, email} = d;
                machine.learn([parseInt(duits), parseInt(economie)], email);
            }
            break;


        // frans cases
        case "frans-nederlands":
            for (let d of data) {
                const {frans, nederlands, email} = d;
                machine.learn([parseInt(frans), parseInt(nederlands)], email);
            }
            break;
        case "frans-engels":
            for (let d of data) {
                const {frans, engels, email} = d;
                machine.learn([parseInt(frans), parseInt(engels)], email);
            }
            break;
        case "frans-scheikunde":
            for (let d of data) {
                const {frans, scheikunde, email} = d;
                machine.learn([parseInt(frans), parseInt(scheikunde)], email);
            }
            break;
        case "frans-natuurkunde":
            for (let d of data) {
                const {frans, natuurkunde, email} = d;
                machine.learn([parseInt(frans), parseInt(natuurkunde)], email);
            }
            break;
        case "frans-biologie":
            for (let d of data) {
                const {frans, biologie, email} = d;
                machine.learn([parseInt(frans), parseInt(biologie)], email);
            }
            break;
        case "frans-wiskunde_a":
            for (let d of data) {
                const {frans, wiskunde_a, email} = d;
                machine.learn([parseInt(frans), parseInt(wiskunde_a)], email);
            }
            break;
        case "frans-wiskunde_b":
            for (let d of data) {
                const {frans, wiskunde_b, email} = d;
                machine.learn([parseInt(frans), parseInt(wiskunde_b)], email);
            }
            break;
        case "frans-geschiedenis":
            for (let d of data) {
                const {frans, geschiedenis, email} = d;
                machine.learn([parseInt(frans), parseInt(geschiedenis)], email);
            }
            break;
        case "frans-duits":
            for (let d of data) {
                const {frans, duits, email} = d;
                machine.learn([parseInt(frans), parseInt(duits)], email);
            }
            break;
        case "frans-spaans":
            for (let d of data) {
                const {frans, spaans, email} = d;
                machine.learn([parseInt(frans), parseInt(spaans)], email);
            }
            break;
        case "frans-aardrijkskunde":
            for (let d of data) {
                const {frans, aardrijkskunde, email} = d;
                machine.learn([parseInt(frans), parseInt(aardrijkskunde)], email);
            }
            break;
        case "frans-maatschappijleer":
            for (let d of data) {
                const {frans, maatschappijleer, email} = d;
                machine.learn([parseInt(frans), parseInt(maatschappijleer)], email);
            }
            break;
        case "frans-economie":
            for (let d of data) {
                const {frans, economie, email} = d;
                machine.learn([parseInt(frans), parseInt(economie)], email);
            }
            break;

        //spaans cases
        case "spaans-nederlands":
            for (let d of data) {
                const {spaans, nederlands, email} = d;
                machine.learn([parseInt(spaans), parseInt(nederlands)], email);
            }
            break;
        case "spaans-engels":
            for (let d of data) {
                const {spaans, engels, email} = d;
                machine.learn([parseInt(spaans), parseInt(engels)], email);
            }
            break;
        case "spaans-scheikunde":
            for (let d of data) {
                const {spaans, scheikunde, email} = d;
                machine.learn([parseInt(spaans), parseInt(scheikunde)], email);
            }
            break;
        case "spaans-natuurkunde":
            for (let d of data) {
                const {spaans, natuurkunde, email} = d;
                machine.learn([parseInt(spaans), parseInt(natuurkunde)], email);
            }
            break;
        case "spaans-biologie":
            for (let d of data) {
                const {spaans, biologie, email} = d;
                machine.learn([parseInt(spaans), parseInt(biologie)], email);
            }
            break;
        case "spaans-wiskunde_a":
            for (let d of data) {
                const {spaans, wiskunde_a, email} = d;
                machine.learn([parseInt(spaans), parseInt(wiskunde_a)], email);
            }
            break;
        case "spaans-duits":
            for (let d of data) {
                const {spaans, duits, email} = d;
                machine.learn([parseInt(spaans), parseInt(duits)], email);
            }
            break;
        case "spaans-geschiedenis":
            for (let d of data) {
                const {spaans, geschiedenis, email} = d;
                machine.learn([parseInt(spaans), parseInt(geschiedenis)], email);
            }
            break;
        case "spaans-filosofie":
            for (let d of data) {
                const {spaans, filosofie, email} = d;
                machine.learn([parseInt(spaans), parseInt(filosofie)], email);
            }
            break;
        case "spaans-frans":
            for (let d of data) {
                const {spaans, frans, email} = d;
                machine.learn([parseInt(spaans), parseInt(frans)], email);
            }
            break;
        case "spaans-wiskunde_b":
            for (let d of data) {
                const {spaans, wiskunde_b, email} = d;
                machine.learn([parseInt(spaans), parseInt(wiskunde_b)], email);
            }
            break;
        case "spaans-aardrijkskunde":
            for (let d of data) {
                const {spaans, aardrijkskunde, email} = d;
                machine.learn([parseInt(spaans), parseInt(aardrijkskunde)], email);
            }
            break;
        case "spaans-maatschappijleer":
            for (let d of data) {
                const {spaans, maatschappijleer, email} = d;
                machine.learn([parseInt(spaans), parseInt(maatschappijleer)], email);
            }
            break;
        case "spaans-economie":
            for (let d of data) {
                const {spaans, economie, email} = d;
                machine.learn([parseInt(spaans), parseInt(economie)], email);
            }
            break;


//aardrijkskunde cases
        case "aardrijkskunde-nederlands":
            for (let d of data) {
                const {aardrijkskunde, nederlands, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(nederlands)], email);
            }
            break;
        case "aardrijkskunde-engels":
            for (let d of data) {
                const {aardrijkskunde, engels, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(engels)], email);
            }
            break;
        case "aardrijkskunde-scheikunde":
            for (let d of data) {
                const {aardrijkskunde, scheikunde, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(scheikunde)], email);
            }
            break;
        case "aardrijkskunde-natuurkunde":
            for (let d of data) {
                const {aardrijkskunde, natuurkunde, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(natuurkunde)], email);
            }
            break;
        case "aardrijkskunde-biologie":
            for (let d of data) {
                const {aardrijkskunde, biologie, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(biologie)], email);
            }
            break;
        case "aardrijkskunde-wiskunde_a":
            for (let d of data) {
                const {aardrijkskunde, wiskunde_a, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(wiskunde_a)], email);
            }
            break;
        case "aardrijkskunde-duits":
            for (let d of data) {
                const {aardrijkskunde, duits, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(duits)], email);
            }
            break;
        case "aardrijkskunde-spaans":
            for (let d of data) {
                const {aardrijkskunde, spaans, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(spaans)], email);
            }
            break;
        case "aardrijkskunde-filosofie":
            for (let d of data) {
                const {aardrijkskunde, filosofie, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(filosofie)], email);
            }
            break;
        case "aardrijkskunde-frans":
            for (let d of data) {
                const {aardrijkskunde, frans, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(frans)], email);
            }
            break;
        case "aardrijkskunde-geschiedenis":
            for (let d of data) {
                const {aardrijkskunde, geschiedenis, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(geschiedenis)], email);
            }
            break;
        case "aardrijkskunde-wiskunde_b":
            for (let d of data) {
                const {aardrijkskunde, wiskunde_b, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(wiskunde_b)], email);
            }
            break;
        case "aardrijkskunde-maatschappijleer":
            for (let d of data) {
                const {aardrijkskunde, maatschappijleer, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(maatschappijleer)], email);
            }
            break;
        case "aardrijkskunde-economie":
            for (let d of data) {
                const {aardrijkskunde, economie, email} = d;
                machine.learn([parseInt(aardrijkskunde), parseInt(economie)], email);
            }
            break;


// maatschappijleer cases //check
        case "maatschappijleer-nederlands":
            for (let d of data) {
                const {maatschappijleer, nederlands, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(nederlands)], email);
            }
            break;
        case "maatschappijleer-engels":
            for (let d of data) {
                const {maatschappijleer, engels, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(engels)], email);
            }
            break;
        case "maatschappijleer-scheikunde":
            for (let d of data) {
                const {maatschappijleer, scheikunde, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(scheikunde)], email);
            }
            break;
        case "maatschappijleer-natuurkunde":
            for (let d of data) {
                const {maatschappijleer, natuurkunde, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(natuurkunde)], email);
            }
            break;
        case "maatschappijleer-biologie":
            for (let d of data) {
                const {maatschappijleer, biologie, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(biologie)], email);
            }
            break;
        case "maatschappijleer-wiskunde_a":
            for (let d of data) {
                const {maatschappijleer, wiskunde_a, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(wiskunde_a)], email);
            }
            break;
        case "maatschappijleer-wiskunde_b":
            for (let d of data) {
                const {maatschappijleer, wiskunde_b, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(wiskunde_b)], email);
            }
            break;
        case "maatschappijleer-geschiedenis":
            for (let d of data) {
                const {maatschappijleer, geschiedenis, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(geschiedenis)], email);
            }
            break;
        case "maatschappijleer-duits":
            for (let d of data) {
                const {maatschappijleer, duits, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(duits)], email);
            }
            break;
        case "maatschappijleer-frans":
            for (let d of data) {
                const {maatschappijleer, frans, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(frans)], email);
            }
            break;
        case "maatschappijleer-spaans":
            for (let d of data) {
                const {maatschappijleer, spaans, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(spaans)], email);
            }
            break;
        case "maatschappijleer-aardrijkskunde":
            for (let d of data) {
                const {maatschappijleer, aardrijkskunde, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(aardrijkskunde)], email);
            }
            break;
        case "maatschappijleer-filosofie":
            for (let d of data) {
                const {maatschappijleer, filosofie, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(filosofie)], email);
            }
            break;
        case "maatschappijleer-economie":
            for (let d of data) {
                const {maatschappijleer, economie, email} = d;
                machine.learn([parseInt(maatschappijleer), parseInt(economie)], email);
            }
            break;

        //cases economie //check
        case "economie-nederlands":
            for (let d of data) {
                const {economie, nederlands, email} = d;
                machine.learn([parseInt(economie), parseInt(nederlands)], email);
            }
            break;
        case "economie-engels":
            for (let d of data) {
                const {economie, engels, email} = d;
                machine.learn([parseInt(economie), parseInt(engels)], email);
            }
            break;
        case "economie-scheikunde":
            for (let d of data) {
                const {economie, scheikunde, email} = d;
                machine.learn([parseInt(economie), parseInt(scheikunde)], email);
            }
            break;
        case "economie-natuurkunde":
            for (let d of data) {
                const {economie, natuurkunde, email} = d;
                machine.learn([parseInt(economie), parseInt(natuurkunde)], email);
            }
            break;
        case "economie-biologie":
            for (let d of data) {
                const {economie, biologie, email} = d;
                machine.learn([parseInt(economie), parseInt(biologie)], email);
            }
            break;
        case "economie-wiskunde_a":
            for (let d of data) {
                const {economie, wiskunde_a, email} = d;
                machine.learn([parseInt(economie), parseInt(wiskunde_a)], email);
            }
            break;
        case "economie-wiskunde_b":
            for (let d of data) {
                const {economie, wiskunde_b, email} = d;
                machine.learn([parseInt(economie), parseInt(wiskunde_b)], email);
            }
            break;
        case "economie-geschiedenis":
            for (let d of data) {
                const {economie, geschiedenis, email} = d;
                machine.learn([parseInt(economie), parseInt(geschiedenis)], email);
            }
            break;
        case "economie-duits":
            for (let d of data) {
                const {economie, duits, email} = d;
                machine.learn([parseInt(economie), parseInt(duits)], email);
            }
            break;
        case "economie-frans":
            for (let d of data) {
                const {economie, frans, email} = d;
                machine.learn([parseInt(economie), parseInt(frans)], email);
            }
            break;
        case "economie-spaans":
            for (let d of data) {
                const {economie, spaans, email} = d;
                machine.learn([parseInt(economie), parseInt(spaans)], email);
            }
            break;
        case "economie-aardrijkskunde":
            for (let d of data) {
                const {economie, aardrijkskunde, email} = d;
                machine.learn([parseInt(economie), parseInt(aardrijkskunde)], email);
            }
            break;
        case "economie-maatschappijleer":
            for (let d of data) {
                const {economie, maatschappijleer, email} = d;
                machine.learn([parseInt(economie), parseInt(maatschappijleer)], email);
            }
            break;
        case "economie-filosofie":
            for (let d of data) {
                const {economie, filosofie, email} = d;
                machine.learn([parseInt(economie), parseInt(filosofie)], email);
            }
            break;
    }
    const prediction = machine.classify([giveGrade, takeGrade])
    console.log(prediction)
    const {name, email} = prediction;
    feedback.innerHTML = `Je hebt een buddy gevonden!`
    feedback2.innerHTML = `Neem contact op met jouw buddy: ${prediction}!`
    buddy.style.visibility = "visible";


}

// waarden invullen voor een voorspelling
form.addEventListener("submit", (e) => {
    e.preventDefault()
    giveGrade = parseInt(e.target[0].value)
    takeGrade = parseInt(e.target[1].value)
    giveSubject = (e.target[2].value)
    takeSubject = (e.target[3].value)
    console.log(`Give ${giveSubject}: ${giveGrade}, Take ${takeSubject}: ${takeGrade}`)
    loadData()
})
