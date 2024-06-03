        // Get the current page URL
        var url = window.location.href;
    
        // Select all navigation links
        var links = document.querySelectorAll('.navbar-nav li a');
    
        // Loop through each link and check if its href matches the current URL
        links.forEach(function(link) {
            if (link.href === url) {
                // Add the 'active' class to the link if it matches the current URL
                link.classList.add('active');
            }else{
                link.classList.remove('active');
            }
        });
$(document).ready(function() {
    // Get the initial height of the navbar
    var navbarHeight = $('.navbar').outerHeight();

    // Set the initial padding-top for the content section
    $('.content').css('padding-top', navbarHeight);

    // Adjust the padding-top when the window is resized
    $(window).resize(function() {
        navbarHeight = $('.navbar').outerHeight();
        $('.content').css('padding-top', navbarHeight);
    });
});
let theme="light";
let mode=document.querySelector(".mode")
mode.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme")
})
mode.addEventListener("click",()=>{
    if(theme==="light"){
        mode.src="./images/mode-light-icon-512x512-yuubs6qt.png";
        theme="dark"
        console.log("dark mode");
    }
    else{
        mode.src="./images/4066359-200.png";
        theme="light";
        console.log("light mode");
    }
});