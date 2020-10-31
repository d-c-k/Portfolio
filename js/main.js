document.addEventListener("DOMContentLoaded", function(){
    
    let lang = ["SV", "EN"];
    let i = 0;
    let selectedLang = "";
    let interface = new Interface();
    document.getElementById("lang_select").addEventListener("click", function(){      
        
        i = 1 - i;
        selectedLang = lang[i];
        console.log(i);
        console.log(lang[i]);
        console.log(selectedLang);
        interface.createHeader(selectedLang);
        document.getElementById("lang_select").innerHTML = lang[i];
    })
    
    
    
})