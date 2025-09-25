
// Set current year dynamically in footer

document.addEventListener("DOMContentLoaded", function(){
    const currentYearSpan = document.getElementById('year-field');
    if (currentYearSpan){
        const currentYear = new Date().getFullYear();
        currentYearSpan.innerHTML = `&copy; ${currentYear} Made by Cybercodemomo, All Rights Reserved.`
    };
});

