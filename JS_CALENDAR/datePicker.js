//on va recuperer les resa de la bdd: arr-dep 
let reservations = [
    {arr: new Date('2021-01-02'), dep: new Date('2021-01-10')},
    {arr: new Date('2021-01-15'), dep: new Date('2021-01-18')},
];
let calendar = document.querySelector('#calendar');
//on recuperer le mois en cours par la saisie user
let monthNum = 0;
restartElements();

reservations.forEach(resa => {
    let interval = findIntervalInDays(resa.arr, resa.dep, monthNum);
    if(interval !== undefined) {
        affectElements(interval);
    }
});


function upMonth() {
    monthNum++;
    restartElements();

    reservations.forEach(resa => {
        let interval = findIntervalInDays(resa.arr, resa.dep, monthNum);
        if(interval !== undefined) {
            affectElements(interval);
        }
    });
}
function downMonth() {
    monthNum--;
    restartElements();

    reservations.forEach(resa => {
        let interval = findIntervalInDays(resa.arr, resa.dep, monthNum);
        if(interval !== undefined) {
            affectElements(interval);
        }
    });
}
/*
//generer le calendrier? 
function generateCalendar(month) {
    for(let i = 0; i <= 31; i ++) {
        let btn = document.createElement('input');
        btn.type = "button";
        btn.className = "calendar-case";
        btn.id = "day-" + i;
        btn.value = i;
        calendar.appendChild(btn);
    }
} 
*/

// //on fait un tableau avec les intervals occupés du mois (un tableau au cas ou on aurait plusieures plages prises le même mois)
// let nonAvailables = [];

// reservations.forEach(resa => {
//     let interval = findIntervalInDays(resa.arr, resa.dep);
//     affectElements(interval);
//     // console.log(interval);
//     //on formate les cases correspondantes
// });


function findIntervalInDays(arr, dep, monthNum) {
    let firstDay, lastDay;
    // console.log(arr.getMonth(), dep.getMonth());

    if(arr.getMonth() === monthNum) {
        firstDay = arr.getDate();
        lastDay = dep.getMonth() === monthNum ? dep.getDate() : 31;
        // console.log("firstDay", firstDay, "lastDay", lastDay);

        return {firstDay, lastDay};
    }
}

function restartElements() {
    let days = document.querySelectorAll('[id*=day-]');
    days.forEach(day => {
        day.style.backgroundColor = "lightgrey";
        day.style.opacity = "1";
        day.disabled = true;
    })
}

function affectElements(interval) {
    console.log('will affect ' , interval);

    //boucle for: on part du premier jour, on s'arrete au dernier, et z chaque tour on agit sur le DOM
    for(let i = interval.firstDay; i <= interval.lastDay; i++) {
        let day = document.querySelector('[id*="' + i + '"]');
        // console.log(day.id);
        day.style.backgroundColor = "orange";
        day.style.opacity = "0.4";
        day.disabled = true;
    }
}

//maintenant on veux que les champs arrivée et depart du formulaire de depart soit remplis par un clic sur une case.
//on recupere le jour via l'id de la case, et le mois par le num de la section au moment du clic
//on va mettre des inputs et les formater en dates ?
