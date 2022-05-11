// js for switch in our works
let btn = document.querySelector(".btn");
let ourWorks = document.querySelector(".our-works");

btn.addEventListener("click" ,function(){
    ourWorks.classList.toggle("container")
});


//************************************* */
let li= document.querySelectorAll("li");
let infoD = document.querySelectorAll(".info-content div");

li.forEach(function(el){
    el.addEventListener("click",function(e){
        let id = e.target.dataset.id;
        li.forEach(function(ee){
            ee.classList.remove("active");
            e.target.classList.add("active")
        })
        // remove active from article
        infoD.forEach(function(D){
            D.classList.remove("disArticle")
        });
        // display article and add class active
        let element = document.getElementById(id);
        element.classList.add("disArticle")
    })
});
//****************************************************** */


// js for navbar
let display = document.querySelector(".display");
let nav = document.querySelector("nav");
display.addEventListener("click" , function(){
    nav.classList.toggle("navDis")
})