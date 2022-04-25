// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click",bookMovies);


function bookMovies(){
    let prevAmnt = JSON.parse(localStorage.getItem("amount"))||[];
    let amnt = document.getElementById("amount").value;

    let total = Number(prevAmnt) + Number(amnt) ;
    localStorage.setItem("amount",JSON.stringify(total));
    document.getElementById("wallet").innerHTML=null;
    document.getElementById("wallet").append(total);
}


document.getElementById("book_movies").addEventListener("click",funcBook);

function funcBook(){

    window.location.href = "movies.html";

}