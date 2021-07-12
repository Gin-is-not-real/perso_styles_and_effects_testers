class GnrDateRangePicker {
    date;
    rangeMode;
    dateRange = {};
    displayers;
    dayKeys = [];
    // unablesDays = [];

    constructor(containerSelector) {
        this.date = new Date();
        this.rangeMode = true;

        if(containerSelector != undefined) {
            this.initDomInterface(containerSelector);
        }

        console.log('constructor log:' , this);
    }

    /*
        targets interface elements and assigns them their events
    */
    initDomInterface(containerSelector) {
        let hitself = this;
        console.log('init interface on container: ' + containerSelector);
        let parentId = containerSelector;
        
        //l'affichage de la date
        this.displayer = document.querySelector(parentId + ' #gdp-displayer')

        //les fleches pour changer de mois
        this.btnDown = document.querySelector(parentId + ' #gdp-arrow-down');
        this.btnDown.addEventListener('click', function() {
            hitself.downMonth();
        });
        this.btnUp = document.querySelector(parentId + ' #gdp-arrow-up');
        this.btnUp.addEventListener('click', function() {
            hitself.upMonth()
        });

        //les cases days
        this.dayKeys = document.querySelectorAll(parentId + ' .gdp-day');
        this.dayKeys.forEach(elt => {
            elt.addEventListener('click', function() {
                // console.log(elt.value);
                // hitself.selectDay(this);
                
                if(hitself.rangeMode) {
                    console.log('select a range: ');
                    hitself.selectRange(elt);
                }
            })
        })

        //ranges

        this.updateDisplayers();
    }
    selectRange(elt) {
        this.setDate(elt.value);

        if(this.dateRange.start == undefined) {
            console.log('define start');
            this.dateRange.start = new Date(formatDateToStr(this.date));
            this.dateRange.lastStart = elt;
            elt.classList.add('gdp-activ-day');
            // this.updateCurrentRange(elt);
            console.log('this.dateRange.start: ', this.dateRange.start);

        }
        else if(this.dateRange.start != undefined) {

            if(this.date.getFullYear() == this.dateRange.start.getFullYear()) {
                if(this.date.getMonth() == this.dateRange.start.getMonth()) {
                    if(this.date.getDate() == this.dateRange.start.getDate()) {
                        this.dateRange.start = undefined;
                        this.dateRange.lastStart.classList.remove('gdp-activ-day');
                        this.dateRange.lastStart = undefined;
                        console.log('unselect start', this.dateRange.start, this.dateRange.lastStart);
                    }
                    else if(this.date < this.dateRange.start) {
                        console.log('end in inferior');
                    }
                }
            }
            // else if(this.dateRange.end == undefined) {
            //     console.log('define end');
            //     this.dateRange.end = new Date(formatDateToStr(this.date));
            //     // this.updateCurrentRange(elt);
            // }
            // else if(this.dateRange.end) {
            //     console.log('redefine end');
            //     this.dateRange.end = new Date(formatDateToStr(this.date));
            //     // this.updateCurrentRange(elt);
    
            // }
        }

    }

    selectDay(elt) {
        this.setDate(elt.value);
        this.updateCurrentDay(elt);
    }
    downMonth() {
        this.setMonth(this.getMonth() - 1);
        this.updateDisplayers();
    }
    upMonth() {
        this.setMonth(this.getMonth() + 1);
        this.updateDisplayers();
    }
    /*
        called when we change of month 
    */
    updateDisplayers() {
        this.displayer.textContent = formatMonth(this.getMonth()) + ' ' + this.getFullYear();
        this.updateVisibleDays();
    }

    updateCurrentRange(elt) {
        let last = point.lastActive;
        console.log(point, 'last', point.lastActive);
        if(point.lastActive != undefined) {
            console.log('remove')
            point.lastActive.classList.remove('gdp-activ-day');
        }
        point.lastActive = elt;
        elt.classList.add('gdp-activ-day');

        console.log(point.lastActive);
    }
    /*
        add or remove class activ on day
    */
    updateCurrentDay(elt) {
        let last = this.dayKeys.lastActive;
        if(last != undefined) {
            // last.classList.remove('gdp-activ-day');
        }
        this.dayKeys.lastActive = elt;
        // elt.classList.add('gdp-activ-day');
    }
    updateCurrentDay(elt) {
        let last = this.dayKeys.lastActive;
        if(last != undefined) {
            // last.classList.remove('gdp-activ-day');
        }
        this.dayKeys.lastActive = elt;
        // elt.classList.add('gdp-activ-day');
    }
    /*
        display only the number of days of the current month
    */
    updateVisibleDays() {
        // console.log(this.dayKeys[this.getDate() -1])
        // this.dayKeys[this.getDate() -1].classList.add('active');

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