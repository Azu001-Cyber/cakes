
// Set current year dynamically in footer

document.addEventListener("DOMContentLoaded", function(){
    const currentYearSpan = document.getElementById('year-field');
    if (currentYearSpan){
        const currentYear = new Date().getFullYear();
        currentYearSpan.innerHTML = `&copy; ${currentYear} Made by Cybercodemomo, All Rights Reserved.`
    };
});

// gallary card script

// const hearthIcon  = document.getElementById('hearth-icon')
// const  bagIcon = document.getElementById('bag-icon')
// function react(){
//     hearthIcon.style.color = "#f00"
// }
// function bagreact(){
//     bagIcon.style.color = "#0f0"
// }
// bagIcon.addEventListener('click', bagreact)
// hearthIcon.addEventListener('click', react);

// Redirect from Home to Other Pages

const orderNow = document.getElementById('order-now');
const learnMore = document.getElementById('learn-more');
const getInTouch = document.getElementById('get-in-touch');

function redirectPage(event){
    switch (event.target.id) {
        case 'order-now':
            window.location.href = "https://baki-cakes.vercel.app/menu.html";
            break;
        case 'learn-more':
            window.location.href = "https://baki-cakes.vercel.app/about.html";
            break;
        case 'get-in-touch':
            window.location.href = "https://baki-cakes.vercel.app/contact.html";
            break;
    }
}

getInTouch.addEventListener('click', redirectPage);
orderNow.addEventListener('click', redirectPage);
learnMore.addEventListener('click', redirectPage);

