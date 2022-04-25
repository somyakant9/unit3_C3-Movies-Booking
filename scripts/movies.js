// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let WalletBalance = JSON.parse(localStorage.getItem("amount"))||[];

document.getElementById("wallet").append(WalletBalance);

let id;

async function searchMovies(){

   // http://www.omdbapi.com/?i=tt3896198&apikey=426efa35
  try{

    let input = document.querySelector("#search").value;

   let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=426efa35&s=${input}`);

   let data = await res.json();
   let movies = data.Search;

   return movies;
  } 
  catch{
      console.log(err);
  }
}

function appendMovies(data){

    document.querySelector("#movies").innerHTML = null;
    data.map(function(el){

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.Poster;

        let Title = document.createElement("h3");
        Title.innerText = el.Title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function(){

            funcMovie(el);
        })

        div.append(img,Title,btn);

        document.querySelector("#movies").append(div);
    })

}

async function main(){

    let data = await searchMovies();

    if(data != undefined){

        appendMovies(data);
    }
}


function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){

        func();
    },delay);
}

function funcMovie(el){

    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href="checkout.html";
}
