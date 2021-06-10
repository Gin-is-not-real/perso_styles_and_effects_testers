let titleMonth = document.querySelector('#date-picker h3');
let calendar = document.querySelector('#calendar');
let calendarArrivee = document.querySelector('#calendar-arrivee');
let calendarDepart = document.querySelector('#calendar-depart');

let dayElement = document.querySelectorAll('.calendar-case');
dayElement.forEach(elt => {
    elt.addEventListener('click', function() {
        console.log(this.value, calendarArrivee.value);
        let value = calendarArrivee.value
        // document.querySelector('#calendar-arrivee').value = '2021-' + monthFormatNum + "-01";
    })
})
//on va recuperer les resa de la bdd sous forme d'objet: {arr, dep}
let reservations = [
    {arr: new Date('2021-01-02'), dep: new Date('2021-01-10')},
    {arr: new Date('2021-01-15'), dep: new Date('2021-01-18')},
];

//on recuperer le mois en cours par la saisie user
let monthNum = 0;
setMonthNum(0);

//////////////////////////////////////////////////////
//BUTTONS FUNCTIONS
function setMonthNum(num) {
    if(num <= 11 && num >= 0) {
        monthNum = num;
        restartElements();
        reservations.forEach(resa => {
            let interval = findIntervalInDays(resa.arr, resa.dep, monthNum);
        });
    }
}
//////////////////////////////////////////////////////
//FUNCTIONS

function restartElements() {
    //on ajuste le num du mois car celui qu'on va recuperé partira de 0, et on veux aussi un format '01' et pas '1'
    let monthFormatNum = monthNum + 1;
    monthFormatNum = monthFormatNum < 10 ? '0' + monthFormatNum : monthFormatNum;

    //on change les valeurs affichée en html
    titleMonth.textContent = monthFormatNum;
    document.querySelector('#calendar-arrivee').value = '2021-' + monthFormatNum + "-01";

    //on remet le style des elements a zéro et on les réactive
    let days = document.querySelectorAll('[id*=day-]');
    days.forEach(day => {
        day.style.backgroundColor = "lightgrey";
        day.style.opacity = "1";
        day.disabled = false;
    })
}

function findIntervalInDays(arr, dep, monthNum) {
    let firstDay, lastDay;

    if(arr.getMonth() === monthNum) {
        firstDay = arr.getDate();
        lastDay = (dep.getMonth()) === monthNum ? dep.getDate() : 31;

        affectElements({firstDay, lastDay});
    }
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
