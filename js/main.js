let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
let nav = document.getElementById("nav");
let navLis = document.querySelectorAll("a");
let search = document.getElementById("search");
let h1 = document.querySelectorAll("#white");
let Products = document.getElementById("Products");
let TESTIMONIALS = document.getElementById("TESTIMONIALS");
let cards = document.getElementById("cards");



lamp.onclick = function(){
    document.body.style.background = "rgb(54, 31, 10)";
    this.style.display = "none";
    sun.style.display = "block";
    sun.style.color = "#fff";
    nav.style.background = "rgba(66, 37, 9, 0.959)";
    search.style.color = "#fff";
    Products.style.background = "rgba(116, 66, 19, 0.637)";
    TESTIMONIALS.style.background = "rgba(116, 66, 19, 0.637)";
    cards.style.background = "rgba(116, 66, 19, 0.637)";
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#fff";
    }
    for(let i = 0 ; i < 20 ; i++){
        h1[i].style.color = "#fff";
    }
}

sun.onclick = function(){
    document.body.style.background = "#fff";
    this.style.display = "none";
    lamp.style.display = "block";
    nav.style.background = "#fff"
    search.style.color = "#000";
    Products.style.background = "rgb(238, 238, 238)";
    TESTIMONIALS.style.background = "rgb(238, 238, 238)";
    cards.style.background = "rgb(238, 238, 238)";
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#000";
    }
    for(let i = 0 ; i < 20 ; i++){
        h1[i].style.color = "rgb(7, 58, 92)";
    }
}



