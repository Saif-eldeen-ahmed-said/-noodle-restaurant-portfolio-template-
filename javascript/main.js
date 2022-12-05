let aboutSectionImg =document.querySelector(".my-img");
let landingTitle=document.querySelector(".title-text")
let landingInfo = document.querySelector('.title-info')



let featurecards =document.querySelectorAll('.feat')
let  featuresection=document.querySelector('.features')


window.onscroll=()=>{window.scrollY >= featuresection.offsetTop - 250? 
    featurecards.forEach((e)=>e.style.transform='scale(1)')
    :'';
    window.scrollY >= aboutSectionImg.offsetTop - 250? 
    aboutSectionImg.style.left="0"
        :'';}

        window.onload=()=>{
            landingTitle.style.left="50%"
            landingInfo.style.right="50%"
        }



