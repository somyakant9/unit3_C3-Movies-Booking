// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let Total = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").append(Total);

let movie = JSON.parse(localStorage.getItem("movie"))||[];

let div = document.createElement("div");
let img = document.createElement("img");
img.src = movie.Poster;
let title = document.createElement("h2");
title.innerText = movie.Title;

div.append(title,img);

document.querySelector("#movie").append(div);


document.getElementById("confirm").addEventListener("click",MovieBooking);



function MovieBooking(){

let seats = document.getElementById("number_of_seats").value;

 if(Number(seats)*100 > Number(Total)){

    alert("Insufficient Balance!");
 }

 else if(Number(seats)*100 <= Number(Total)){

    alert("Booking successful!");

    let remaining = Number(Total) - (Number(seats)*100);
    localStorage.setItem("amount",JSON.stringify(remaining));

    let remain = JSON.parse(localStorage.getItem("amount"));
    document.getElementById("wallet").innerHTML=null;
    document.getElementById("wallet").append(remain);
 }
}