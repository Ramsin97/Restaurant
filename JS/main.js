//navbar fixed scroll
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);

});


//cards api for food
async function food() {

    var response = await fetch('https://forkify-api.herokuapp.com/api/search?&q=pizza');
    var data = await response.json();


    //cards images
    let imgs = [".card-img-1", ".card-img-2", ".card-img-3", ".card-img-4", ".card-img-5", ".card-img-6", ".card-img-7", ".card-img-8", ".card-img-9", ".card-img-10", ".card-img-11", ".card-img-12", ".card-img-13", ".card-img-14", ".card-img-15", ".card-img-16", ".card-img-17", ".card-img-18", ".card-img-19", ".card-img-20", ".card-img-21", ".card-img-22", ".card-img-23", ".card-img-24", ".card-img-25", ".card-img-26", ".card-img-27", ".card-img-28"];

    for (let i = 0; i < imgs.length; i++) {
        document.querySelector(imgs[i]).src = data.recipes[i].image_url;
    }

    //cards-texts
    let titles = [".card-title-1", ".card-title-2", ".card-title-3", ".card-title-4", ".card-title-5", ".card-title-6", ".card-title-7", ".card-title-8", ".card-title-9", ".card-title-10", ".card-title-11", ".card-title-12", ".card-title-13", ".card-title-14", ".card-title-15", ".card-title-16", ".card-title-17", ".card-title-18", ".card-title-19", ".card-title-20", ".card-title-21", ".card-title-22", ".card-title-23", ".card-title-24", ".card-title-25", ".card-title-26", ".card-title-27", ".card-title-28"];

    for (let i = 0; i < titles.length; i++) {
        document.querySelector(titles[i]).innerHTML = data.recipes[i].title;
    }

    //cards publishers
    let publishers = [".card-text-1", ".card-text-2", ".card-text-3", ".card-text-4", ".card-text-5", ".card-text-6", ".card-text-7", ".card-text-8", ".card-text-9", ".card-text-10", ".card-text-11", ".card-text-12", ".card-text-13", ".card-text-14", ".card-text-15", ".card-text-16", ".card-text-17", ".card-text-18", ".card-text-19", ".card-text-20", ".card-text-21", ".card-text-22", ".card-text-23", ".card-text-24", ".card-text-25", ".card-text-26", ".card-text-27", ".card-text-28"];

    for (let i = 0; i < publishers.length; i++) {
        document.querySelector(publishers[i]).innerHTML = data.recipes[i].publisher;
    }



    //cards links
    let lnks = ["#card-link-1", "#card-link-2", "#card-link-3", "#card-link-4", "#card-link-5", "#card-link-6", "#card-link-7", "#card-link-8", "#card-link-9", "#card-link-10", "#card-link-11", "#card-link-12", "#card-link-13", "#card-link-14", "#card-link-15", "#card-link-16", "#card-link-17", "#card-link-18", "#card-link-19", "#card-link-20", "#card-link-21", "#card-link-22", "#card-link-23", "#card-link-24", "#card-link-25", "#card-link-26", "#card-link-27", "#card-link-28"];

    for (let i = 0; i < lnks.length; i++) {
        document.querySelector(lnks[i]).href = data.recipes[i].source_url;
    }

} food();



//overlay full menu page
function openDiv() {
    var myDiv = document.querySelector(".menu");
    myDiv.style.display = "block";
    myDiv.style.transform = "scale(1)";

}

function closeDiv() {
    var myDiv = document.querySelector(".menu");
    myDiv.style.transform = "scale(0)";
    myDiv.style.display = "none";
}





//read more and less for 4 cards in blog

//1
function readMore1() {
    var myDiv = document.getElementById("readMore1");
    myDiv.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque quijh jnancas";
    document.querySelector(".less1").style.display="block";
}
function readLess1() {
    var myDiv = document.getElementById("readMore1");
    myDiv.innerHTML = " ";
    document.querySelector(".less1").style.display="none";
}
//2 
function readMore2() {
    var myDiv = document.getElementById("readMore2");
    myDiv.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque quijh jnancas Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque quijh jnancas";
    document.querySelector(".less2").style.display="block";
}
function readLess2() {
    var myDiv = document.getElementById("readMore2");
    myDiv.innerHTML = " ";
    document.querySelector(".less2").style.display="none";
}
//3
function readMore3() {
    var myDiv = document.getElementById("readMore3");
    myDiv.innerHTML = "Lorem ipsum dolor sit amet cont. Autem, doloremque quijh jnancasLorem ipsum dolor sit amet consectetur adipisiciue quijh jnancas";
    document.querySelector(".less3").style.display="block";
}
function readLess3() {
    var myDiv = document.getElementById("readMore3");
    myDiv.innerHTML = " ";
    document.querySelector(".less3").style.display="none";
}
//4
function readMore4() {
    var myDiv = document.getElementById("readMore4");
    myDiv.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremqueLorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque quijh jnancas quijh jnancas";
    document.querySelector(".less4").style.display="block";
}
function readLess4() {
    var myDiv = document.getElementById("readMore4");
    myDiv.innerHTML = " ";
    document.querySelector(".less4").style.display="none";
}