class GnrDatePicker {
    date;
    displayers;
    dayKeys = [];
    // unablesDays = [];

    constructor(containerSelector) {
        this.date = new Date();
        console.log('constructor log:' , this);

        if(containerSelector != undefined) {
            this.initDomInterface(containerSelector);
        }
    }

    initDomInterface(containerSelector) {
        let him = this;
        console.log('init interface on container: ' + containerSelector);
        let parentId = containerSelector;
        
        //l'affichage de la date
        this.displayer = document.querySelector(parentId + ' #gdp-displayer')

        //les fleches pour changer de mois
        this.btnDown = document.querySelector(parentId + ' #gdp-arrow-down');
        this.btnDown.addEventListener('click', function() {
            him.setMonth(him.getMonth() - 1);
            him.updateDisplayers();
        });
        this.btnUp = document.querySelector(parentId + ' #gdp-arrow-up');
        this.btnUp.addEventListener('click', function() {
            him.setMonth(him.getMonth() + 1);
            him.updateDisplayers();
        });

        //les cases jours
        this.dayKeys = document.querySelectorAll(parentId + ' .gdp-day');
        this.dayKeys.forEach(elt => {
            elt.addEventListener('click', function() {
                console.log(elt.value);
                him.setDate(this.value);
                him.updateCurrentDay(elt);
            })
        })

        this.updateDisplayers();
    }

    updateDisplayers() {
        this.displayer.textContent = formatMonth(this.getMonth()) + ' ' + this.getFullYear();

        this.updateVisibleDays();
    }
    updateCurrentDay(elt) {
        let last = this.dayKeys.lastActive;
        if(last != undefined) {
            last.classList.remove('gdp-activ-day');
        }
        this.dayKeys.lastActive = elt;
        elt.classList.add('gdp-activ-day');
    }
    updateVisibleDays() {
        console.log(this.dayKeys[this.getDate() -1])
        this.dayKeys[this.getDate() -1].classList.add('active');

        let nbrDays = getNbrDaysInMonth(this.date);

        this.dayKeys.forEach(day => {
            if(day.value <= nbrDays) {
                day.style.display = 'block';
            }
            else {
                day.style.display = 'none';
            }
        })
    }

    //GETTERS
    getFullYear() {
        return this.date.getFullYear();
    }
    getMonth() {
        return this.date.getMonth();
    }
    getDate() {
        return this.date.getDate();
    }

    //SETTERS
    setDate(dayNum) {
        this.date.setDate(dayNum);
    }
    setMonth(monthNum) {
        // if(monthNum)
        this.date.setMonth(monthNum);

    }
    setFullYear(yearNum) {
        this.date.setFullYear(yearNum);
    }
    
}
//////////////////////////////////////////////////////
//FUNCTIONS

function formatMonth(number) {
    let formatNum = number + 1;
    formatNum = formatNum < 10 ? '0' + formatNum : formatNum;
    return formatNum;
}
function formatDay(number) {
    let formatNum = number;
    formatNum = formatNum < 10 ? '0' + formatNum : formatNum;
    return formatNum;
}
function formatDateToStr(date) {
    let dateStr = date.getFullYear().toString(10) + '-' + formatMonth(date.getMonth()).toString(10) + '-' + formatDay(date.getDate()).toString(10);
    return dateStr;
}

function getNbrDaysInMonth(date){
        return new Date(date.getFullYear(), date.getMonth()+1, -1).getDate()+1;
    }