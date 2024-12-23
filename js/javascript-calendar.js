'use strict';

let dt = new Date();

function renderDate() {
    dt.setDate(1); // Set to the first day of the current month
    let day = dt.getDay(); // Get the weekday of the first day
    let endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate(); // Get the last date of the current month

    let today = new Date();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Set the month and date string
    document.getElementById("icalendarMonth").innerHTML = months[dt.getMonth()] + " , " + dt.getFullYear();
    document.getElementById("icalendarDateStr").innerHTML = today.toDateString();

    let cells = "";

    // Add empty cells for days before the first day of the current month
    for (let x = 0; x < day; x++) {
        cells += "<div class='icalendar__empty'></div>";
    }

    // Add cells for the days of the current month
    for (let i = 1; i <= endDate; i++) {
        if (i === today.getDate() && dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear()) {
            cells += "<div class='icalendar__today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }

    // Set the inner HTML of the calendar days container
    document.getElementsByClassName("icalendar__days")[0].innerHTML = cells;
}

// Call renderDate initially
renderDate();

// Function to navigate between months
function moveDate(param) {
    if (param === 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (param === 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}
