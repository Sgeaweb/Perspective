cDate = new Date();

// Year
birthYear = parseInt(prompt("Year of Birth", "1999"));
currentYear = cDate.getFullYear();
totalCurrentYear = currentYear * 365;
yearDifference = currentYear - birthYear;
totalYear = yearDifference * 365;

// Month
birthMonth = parseInt(prompt("Month of Birth", "1"));
currentMonth = cDate.getMonth() + 1;
monthDifference = currentMonth - birthMonth;
totalMonth = monthDifference * 31;

// Day
birthDay = parseInt(prompt("Day of Birth", "1"));
currentDay = cDate.getDate();
dayDifference = currentDay - birthDay;
totalDay = dayDifference + totalMonth + totalYear;

// Future
futureYear = (birthYear + 77) * 365;
totalFutureDay = totalDay - totalYear + futureYear;
futureCurrentDifference = totalFutureDay - totalCurrentYear;
futureCurrentRemainder = totalFutureDay - futureCurrentDifference;

// Show a number of blocks based on days.
var i;
for (i = 0; i <= futureCurrentDifference; i++) {
	block = document.createElement("DIV");
	block.className = "block";
	document.body.appendChild(block);
}