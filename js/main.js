document.addEventListener("DOMContentLoaded", function(){
        
    let interface = new Interface();
    interface.createHeader();
    interface.creatSettingsMenu();
    interface.createMenu();  
    interface.createMenuMobile(); 
    interface.aniamtionLoop();
})