document.addEventListener("DOMContentLoaded", function(){

    //preload();
        
    let interface = new Interface();
    interface.createHeader();
    interface.createSettingsMenu();    
    interface.createMenu();  
    interface.createMenuMobile(); 
    interface.aniamtionLoop();
})

// function preload() {
//     for (let i = 0; i < images.length; i++) {
//         images[i] = new Image();
//         console.log(images[i]);
//     }
// }

// let images = [
//     "img/audioplayer_screen.JPG",
//     "img/old_portfolio_screen.JPG",
//     "img/quiz_screen.JPG"
// ]