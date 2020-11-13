document.addEventListener("DOMContentLoaded", function(){

    //building the site by calling methods from the "Interface"-class
        
    let interface = new Interface();
    interface.createHeader();
    interface.createSettingsMenu();    
    interface.createMenu();  
    interface.createMenuMobile(); 
    interface.aniamtionLoop();
})