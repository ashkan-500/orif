let karim=document.querySelector(".sekhat")
let transx=document.querySelector(".trans-x")
let poster=document.querySelector(".poster-lg")
let showposter=document.querySelector(".ecata")
let ezaf=document.querySelector(".salam")
let acarskin=document.querySelector(".acardion-skin-lg")
let acarmakeup=document.querySelector(".acardion-makeup-lg")
let acarsec3=document.querySelector(".acar-sec3")
let hiddenline=document.querySelector(".line-center")
let rotferst=document.querySelector(".rot-ferst")
let rottres=document.querySelector(".rot-tres")
karim.addEventListener("click",function(){
    ezaf.classList.toggle("-left-full")
    poster.classList.toggle("left-[21%]")
    acardionnutlg.classList.remove("lg:flex")
    acardioninslg.classList.remove("lg:flex")
    acarmakeup.classList.remove("lg:flex")
    acarskin.classList.remove("lg:flex")
    transx.classList.toggle("line-center")
    rotferst.classList.toggle("ferst-line")
    rottres.classList.toggle("terth-line")

})

showposter.addEventListener("click",function(){
    acardioninslg.classList.remove("lg:flex")
    acardionnutlg.classList.remove("lg:flex")
    poster.classList.remove("hidden")
    poster.classList.add("lg:flex")
    acarskin.classList.remove("lg:flex")
    acarmakeup.classList.remove("lg:flex")

})

let hasan=document.querySelector(".close")
let posterrem=document.querySelector(".poster-lg")
let reza=document.querySelector(".salam")
hasan.addEventListener("click",function(){
    reza.classList.add("-left-full")
    posterrem.classList.toggle("left-[21%]")
    acardionnutlg.classList.remove("lg:flex")
    acardioninslg.classList.remove("lg:flex")
    acarskin.classList.remove("lg:flex")
    acarmakeup.classList.remove("lg:flex")


})

let Accor1=document.querySelector(".Accordion-1")
let acardioninslg=document.querySelector(".acardion-ins-lg")
let rot0=document.querySelector(".rot-0")
let child1=document.querySelector(".child-Accordion-1")
Accor1.addEventListener("click",function(){
    child1.classList.toggle("hidden");
    child1.classList.toggle("lg:hidden");
    rot0.classList.toggle("lg:rotate-none")
    rot0.classList.toggle("rotate-180")
    acardioninslg.classList.add("lg:flex")
    acardioninslg.classList.add("left-[21%]")
    poster.classList.remove("lg:flex")
    acardionnutlg.classList.remove("lg:flex")
    acarskin.classList.remove("lg:flex")
    acarmakeup.classList.remove("lg:flex")



})

let Accor2=document.querySelector(".Accordion-2")
let acardionnutlg=document.querySelector(".acardion-nut-lg")
let rot1=document.querySelector(".rot-1")
let child2=document.querySelector(".child-Accordion-2")
Accor2.addEventListener("click",function(){
    child2.classList.toggle("hidden");
    child2.classList.toggle("lg:hidden");
    rot1.classList.toggle("lg:rotate-none")
    rot1.classList.toggle("rotate-180")
    acardionnutlg.classList.add("lg:flex")
    acardionnutlg.classList.add("left-[21%]")
    poster.classList.remove("lg:flex")
    acardioninslg.classList.remove("lg:flex")
    acarskin.classList.remove("lg:flex")
    acarmakeup.classList.remove("lg:flex")
    poster.classList.add("hidden")

})

let Accor3=document.querySelector(".Accordion-3")
let rot3=document.querySelector(".rot-3")
let child3=document.querySelector(".child-Accordion-3")
Accor3.addEventListener("click",function(){
    child3.classList.toggle("hidden");
    child3.classList.toggle("lg:hidden");
    rot3.classList.toggle("lg:rotate-none")
    rot3.classList.toggle("rotate-180")
    acarskin.classList.add("lg:flex")
    acardionnutlg.classList.remove("lg:flex")
    acardioninslg.classList.remove("lg:flex")
    poster.classList.remove("lg:flex")
    acarmakeup.classList.remove("lg:flex")
    poster.classList.add("hidden")


})


let Accor4=document.querySelector(".Accordion-4")
let rot4=document.querySelector(".rot-4")
let child4=document.querySelector(".child-Accordion-4")
Accor4.addEventListener("click",function(){
    child4.classList.toggle("hidden");
    child4.classList.toggle("lg:hidden");
    rot4.classList.toggle("lg:rotate-none")
    rot4.classList.toggle("rotate-180")
    acarmakeup.classList.add("lg:flex")
    acardionnutlg.classList.remove("lg:flex")
    acardioninslg.classList.remove("lg:flex")
    poster.classList.remove("lg:flex")
    acarskin.classList.remove("lg:flex")
    poster.classList.add("hidden")
})

let Accor5=document.querySelector(".Accordion-5")
let rot5=document.querySelector(".rot-5")
let child5=document.querySelector(".child-Accordion-5")
Accor5.addEventListener("click",function(){
    child5.classList.toggle("hidden");
    child5.classList.toggle("lg:hidden");
    rot5.classList.toggle("lg:rotate-none")
    rot5.classList.toggle("rotate-180")
    
})


/*start js last menu */

let con_ac = document.getElementById("con-ac")
let svg_con = document.getElementById("ac1-svg")
con_ac.addEventListener("click",function(){
    con_ac.classList.toggle("h-[240px]")
    svg_con.classList.toggle("rotate-180")
});
let con_ac2 = document.getElementById("con-ac2")
let svg_con2 = document.getElementById("ac2-svg")
con_ac2.addEventListener("click",function(){
    con_ac2.classList.toggle("h-[240px]")
    svg_con2.classList.toggle("rotate-180")
})
let con_ac3 = document.getElementById("con-ac3")
let svg_con3 = document.getElementById("ac3-svg")
con_ac3.addEventListener("click",function(){
    con_ac3.classList.toggle("h-[240px]")
    svg_con3.classList.toggle("rotate-180")
})

  /*end js last menu */


  /*start js join us */

  let push = document.getElementById("join")
  let re = document.getElementById("us")
  push.addEventListener("click",function(){
    re.classList.toggle("flex")
    re.classList.toggle("hidden")

})
  /*end js join us */
