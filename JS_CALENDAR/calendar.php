    <!-- 
        for include this div, don't forget:
            
            - to link the js script: 
                <script src='datePicker.js' type="text/javascript"></script>

            - and the stylesheet:
                <link rel="stylesheet" href="datePicker.css">
    -->

    <div id="gdp-container">
        <div id="gdp-calendar">
            <header>
                <input type="button" id='gdp-arrow-down'value="<">
                    <h3 id="gdp-displayer">DAY</h3>
                <input type="button" id='gdp-arrow-up'value=">">
            </header>

            <div id="gdp-days">
            
            <div>
                <input type="button" class="gdp-day" id="day-1" value="1">
                <input type="button" class="gdp-day" id="day-2" value="2">
                <input type="button" class="gdp-day" id="day-3" value="3">
                <input type="button" class="gdp-day" id="day-4" value="4">
                <input type="button" class="gdp-day" id="day-5" value="5">
                <input type="button" class="gdp-day" id="day-6" value="6">
                <input type="button" class="gdp-day" id="day-7" value="7">
                <input type="button" class="gdp-day" id="day-8" value="8">
                <input type="button" class="gdp-day" id="day-9" value="9">
                <input type="button" class="gdp-day" id="day-10" value="10">
                <input type="button" class="gdp-day" id="day-11" value="11">
                <input type="button" class="gdp-day" id="day-12" value="12">
                <input type="button" class="gdp-day" id="day-13" value="13">
                <input type="button" class="gdp-day" id="day-14" value="14">
                <input type="button" class="gdp-day" id="day-15" value="15">
                <input type="button" class="gdp-day" id="day-16" value="16">
                <input type="button" class="gdp-day" id="day-17" value="17">
                <input type="button" class="gdp-day" id="day-18" value="18">
                <input type="button" class="gdp-day" id="day-19" value="19">
                <input type="button" class="gdp-day" id="day-20" value="20">
                <input type="button" class="gdp-day" id="day-21" value="21">
                <input type="button" class="gdp-day" id="day-22" value="22">
                <input type="button" class="gdp-day" id="day-23" value="23">
                <input type="button" class="gdp-day" id="day-24" value="24">
                <input type="button" class="gdp-day" id="day-25" value="25">
                <input type="button" class="gdp-day" id="day-26" value="26">
                <input type="button" class="gdp-day" id="day-27" value="27">
                <input type="button" class="gdp-day" id="day-28" value="28">
                <input type="button" class="gdp-day" id="day-29" value="29">
                <input type="button" class="gdp-day" id="day-30" value="30">
                <input type="button" class="gdp-day" id="day-31" value="31">
                </div>
            </div>
        </div>

        <div id="div-inputs">
            <div>
                <button id="btn-arrivee" class="active">selectionner date arrivée</button>
                <input id="calendar-arrivee" type="date" disabled=true>
            </div>
            <div>
                <button id="btn-depart">selectionner date depart</button>
                <input id="calendar-depart" type="date" disabled=true>
            </div>
        </div>

        <div>
            <button id="btn-send">envoyer</button>
        </div>
    </div>