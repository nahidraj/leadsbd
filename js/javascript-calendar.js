'use strict';

let dt = new Date();

function renderDate() {
    // Check if the calendar elements exist
    const calendarMonth = document.getElementById("icalendarMonth");
    const calendarDateStr = document.getElementById("icalendarDateStr");
    const calendarDays = document.getElementsByClassName("icalendar__days")[0];

    if (!calendarMonth || !calendarDateStr || !calendarDays) {
        // Exit the function if any required element is missing
        console.warn("Calendar elements are missing on this page. Skipping renderDate.");
        return;
    }

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
    calendarMonth.innerHTML = months[dt.getMonth()] + " , " + dt.getFullYear();
    calendarDateStr.innerHTML = today.toDateString();

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
    calendarDays.innerHTML = cells;
}

// Function to navigate between months
function moveDate(param) {
    if (param === 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (param === 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}

// Call renderDate initially
document.addEventListener("DOMContentLoaded", () => {
    renderDate();
});
