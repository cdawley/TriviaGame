let gameObj = {
    arrNationsAll: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
        , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
        , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica"
        , "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
        , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
        , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
        , "Indonesia", "Iran", "Iraq", "Isle of Man", "Israel", "Democratic Republic of Congo", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
        , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
        , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
        , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
        , "Puerto Rico", "Qatar", "Republic of Ireland", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
        , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
        , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia"
        , "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "US Virgin Islands", "United States Minor Outlying Islands"
        , "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],

    arrNationsUnused: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
        , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
        , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica"
        , "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
        , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
        , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
        , "Indonesia", "Iran", "Iraq", "Isle of Man", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
        , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
        , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
        , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
        , "Puerto Rico", "Qatar", "Republic of Ireland", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
        , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
        , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia"
        , "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "US Virgin Islands", "United States Minor Outlying Islands"
        , "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],

    arrAnswers: [],

    currNation: "",
    flagImgURL: "",

    newNation: function () {
// remove the name of country from a random index in 'arrNations' array

        let pos = Math.floor(Math.random() * Math.floor(this.arrNationsUnused.length));
        let theNational = this.arrNationsUnused[pos];
        this.arrNationsUnused.splice(pos, 1);
        this.currNation = theNational;
    },

    ajaxFlagImg: function () {
        console.log("ajax called");

        let nation = this.currNation; //change this to take from array of country names
        let queryURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + nation;

        /*    notes from stack overflow on setting user-agent (asked for in API docs)
            ------------------------------------------------------------------------
                $.ajax({
                    url: "http://localhost:4000",
                    type: "POST",
                    data: {we: "2"},
                    dataType:'text',
                    headers: {"User-Agent": "user agent 1"}
                    beforeSend: function (req) {
                        req.setRequestHeader('User-Agent', 'user agent changed to 2');
                    } */

        // from class exercise code

        // Creates AJAX call for the specific movie button being clicked
        // note: Wikipedia's API docs ask that contact information be given in User-Agent request header
        // $(document).ready( function () {

        $.ajax({
            url: queryURL,
            method: "GET",
            // headers: {"User-Agent": "contact christian@art-box.us"},
        }).then(function (response) {
            this.flagImgURL = response.thumbnail.source;
            $("img#flag-img").attr("src", this.flagImgURL); // change flag image to current nation
            console.log(gameObj.currNation + "\n" + gameObj.arrNationsUnused.length + " countries remaining");
        });
    },

    setAnswers: function () {


        /*
     multiply random position (between 0 and 1/3 of all the countries)
     by current iteration (from 1 to 3), and push that country to an array, provided its not the same
     as the actual answers (if it is the same, take it from the number less 10)...
     this should provide a diverse group of random "wrong answers"
        */
        this.arrAnswers.length = 0;

        let startPos = Math.floor(Math.random() * Math.floor(this.arrNationsAll.length / 3));

        for (i = 1; i < 4; i++) {

            if (this.arrNationsAll[startPos * i] != this.currNation) {
                this.arrAnswers.push(this.arrNationsAll[startPos * i]);
                // set answer list item for each here??
                console.log(this.arrAnswers[i - 1]);
            } else {
                this.arrAnswers.push(this.arrNationsAll[(startPos * i) - 10]);
                // or here if random answer is the same as current flag
                console.log(this.arrAnswers[i - 1]);
            }
        }

        this.arrAnswers.push(this.currNation);


        /* select random start position (between 1 & 3) and fill answer array from that index

        *** this was a chunk of abstraction that took many hours to chip away at ***
        */

        let Pos2 = Math.floor(Math.random() * Math.floor(4)); //random number between 0 and 3
        console.log("start position is: " + Pos2);
        for (let i = Pos2; i < Pos2 + this.arrAnswers.length; i++) {

            if (i < 4) { //4 could be arrAnswers.length
                console.log(this.arrAnswers[i]);
            } else {
                console.log(this.arrAnswers[(4 - i) * -1]); //4 here could be arrAnswers.length
            }

        };

    },
};
