let gameObj = {

    // possible answers are taken from here, this array does not change
    arrNationsAll: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
        , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
        , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica"
        , "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
        , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
        , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
        , "Indonesia", "Iran", "Iraq", "Isle of Man", "Israel", "Democratic Republic of Congo", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
        , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
        , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
        , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
        , "Puerto Rico", "Qatar", "Republic of Ireland", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
        , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
        , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia"
        , "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "US Virgin Islands", "United States Minor Outlying Islands"
        , "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],

    // flags are taken from here, each time call is made to Wikipedia API for flag's image, country is spliced out of array
    arrNationsUnused: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
        , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
        , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica"
        , "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
        , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
        , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
        , "Indonesia", "Iran", "Iraq", "Isle of Man", "Israel", "Democratic Republic of Congo", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
        , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
        , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
        , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
        , "Puerto Rico", "Qatar", "Republic of Ireland", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
        , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
        , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia"
        , "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "US Virgin Islands", "United States Minor Outlying Islands"
        , "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],

    arrAnswers: [],

    currNation: "",
    currAnswer: "",

    correctAnswers: 0,
    incorrectAnswers: 0,

    flagImgURL: "",


    //object containing timer variables/functions
    timer: {

        intervalId: 0,

    clockRunning: false,

    time: 10,

    reset: function() {
        this.time = 10;

        $("#time-remaining").text(this.time + "s");
    },

    start: function() {
        if (!this.clockRunning) {
            this.intervalId = setInterval(this.count, 1000);
            this.clockRunning = true;
        }
    },
    stop: function() {
        clearInterval(this.intervalId);
        this.clockRunning = false;
    },
    count: function() {
            // "remember we cant use "this" here." (function is called by set interval, parent is window?)

            gameObj.timer.time--;
            $("#time-remaining").text(gameObj.timer.time + "s");

            if (gameObj.timer.time === 0) {
                gameObj.timer.timesUp();
            }
        },

        timesUp: function() {

            gameObj.timer.stop();
            $("ol#answer-list").addClass("disable-list");
            $("button#btn-answer").text("Next Question");
            $("button#btn-answer").prop("disabled", false);

        },
    },

    // functions related to the game

    checkAnswer: function() {
    // this is not used because checkAnswer() is called outside of this object

        if (gameObj.currAnswer === gameObj.currNation) {
            gameObj.correctAnswers++;
            $("span#correct").text(gameObj.correctAnswers);
        } else if (gameObj.currAnswer.length > 0) {
            gameObj.incorrectAnswers++;
            $("span#incorrect").text(gameObj.incorrectAnswers);
        }


    },

    newNation: function () {
// remove the name of country from a random index in 'arrNations' array

        let pos = Math.floor(Math.random() * Math.floor(this.arrNationsUnused.length));
        let theNational = this.arrNationsUnused[pos];
        this.arrNationsUnused.splice(pos, 1);
        this.currNation = theNational;
    },

    ajaxFlagImg: function () {
        let nation = this.currNation;
        let queryURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + nation;
        $.ajax({
            url: queryURL,
            method: "GET",

            // API docs ask that developers put contact info in headers,
            // Google Chrome will not allow this...

            // headers: {"User-Agent": "contact christian@art-box.us"},

        }).then(function (response) {
            this.flagImgURL = response.thumbnail.source;
            $("img#flag-img").attr("src", this.flagImgURL); // change flag image to current nation
            console.log("correct answers is: " + gameObj.currNation + "\n" + gameObj.arrNationsUnused.length);
        });
    },

    randomAnswers: function () {
        /*
     multiply random position (random number between 0 and 1/3 the size of array containing all countries)
     by current iteration (from 1 to 3). check that element is not the same as current country, and push element
     at current position/index to new array. (if element is the same subtract 1 from index & push that element).
     finally, push current answer to new array.
     */
        this.arrAnswers.length = 0; // empty the array before filling with new answers

        let startPos = Math.floor(Math.random() * Math.floor(this.arrNationsAll.length / 3));
        if (startPos === 0) { startPos += 1; } // 0 will choose index 0 three times, avoid this by adding 1

        for (i = 1; i < 4; i++) {

            if (this.arrNationsAll[startPos * i] != this.currNation) {
                this.arrAnswers.push(this.arrNationsAll[startPos * i]);
            } else {
                this.arrAnswers.push(this.arrNationsAll[(startPos * i) - 1]);
                // or here if random answer is the same as current flag
            }
        }

        this.arrAnswers.push(this.currNation);
    },

    chooseRandom: function() {

        /*
            select random start position (between 1 & 3) and fill answer array from that index
            note: this was a chunk of abstraction that took quite some time to chip away at
            */

        let Pos2 = Math.floor(Math.random() * Math.floor(4)); //random number between 0 and 3
        let answerID = 1;
        for (let i = Pos2; i < Pos2 + this.arrAnswers.length; i++) {

            let theIndex;
            if (i < this.arrAnswers.length) {
                theIndex = i;
                $("li#answer-" + answerID).text(this.arrAnswers[theIndex]);
                answerID++;
            } else {
                theIndex = (this.arrAnswers.length - i) * -1;
                $("li#answer-" + answerID).text(this.arrAnswers[theIndex]);
                answerID++
            }

        };

    },
};
