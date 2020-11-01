document.addEventListener("DOMContentLoaded", function(){
    
    //---language test---//
    let lang = ["SV", "EN"];
    let i = 0;
    let selectedLang = "";
    //------------------//

    let interface = new Interface();
    interface.createHeader();

    document.getElementById("lang_select").addEventListener("click", function(){      
        
        i = 1 - i;
        selectedLang = lang[i];
        console.log(i);
        console.log(lang[i]);
        console.log(selectedLang);
        
        document.getElementById("lang_select").innerHTML = lang[i];
    })
    
    
    
})