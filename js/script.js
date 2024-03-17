// set the timer title using js but now we call these statement in clock function
// const endDate = "15 March 2024 16:00:00 PM";
// document.getElementById("end-Date").innerText = endDate;
let input = document.querySelectorAll("input");
let title = document.getElementsByClassName("title");
// title[0].style.color ="black";
title[0].style.fontWeight = "800";

// clock function for calculation of current date, hours, minutes and seconds
 
function clock(){
    console.clear();
    const end = new Date("2024-03-20 16:00:00");
    const current = new Date();
    // console.log(end);
    // console.log(current);
    document.getElementById("end-Date").innerText = end;
    
    // difference between current and end date
    // const difference = end - current;
    const difference = (end - current)/1000; // convertt into seconds
    // console.log("difference: ", difference);
    if(difference < 0){
        console.log("Time's Up");
        return;
    }

    // calculate days
    const days = Math.floor(difference / 3600 /24);
    // console.log("Days: ", days);

    // caclulate hours
    const hours = Math.floor(difference / 3600 )%24;
    // console.log("Hours: ",hours);

    // calculate minutes
    const minutes = Math.floor(difference / 60) % 60;
    // console.log("Minutes: ",minutes);

    // calculate seconds
    const seconds = Math.floor(difference) % 60;
    // console.log("Seconds: ",seconds);

    // now we add the all the values in input fields
    input[0].value = days;
    input[1].value = hours;
    input[2].value = minutes;
    input[3].value = seconds;


}

// initial calling the function
clock();

// last we call the setInterval function for automatically update the values
setInterval(function() {
    clock();
},1000);