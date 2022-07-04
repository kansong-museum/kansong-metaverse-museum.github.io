function changeLang(_lang){
    selectLang(_lang);
    
    let url = window.location.href;
    let home = url.indexOf("index");
    if (home > 0) {
      if(cur_lang==="ko" && _lang==="en"){
        location.href="../Kansong_Metaverse_Museum.html";
      }else{
        location.href="../Kansong_Metaverse_Museum_ko.html";
      }
    } else{
      let kopage = url.indexOf("ko");
      let enpage = url.indexOf("en");
      if(kopage<0 && enpage<0){
        if(cur_lang==="ko" && _lang==="en"){
          location.href="../Kansong_Metaverse_Museum.html";
        }else{
          location.href="../Kansong_Metaverse_Museum_ko.html";
        }
      }
    }

    // if(_lang === "ko"){
    //   location.href="../Kansong_Metaverse_Museum_ko.html";
    // }else{
    //   location.href="../Kansong_Metaverse_Museum.html";
    // }
  }

function changeLanguage(change_to_this){
    let url = window.location.href;
    let home = url.indexOf("index");

    if( home > 0 ) {location.href="../Kansong_Metaverse_Museum.html";}

    if( change_to_this==="en"){
        location.href="../Kansong_Metaverse_Museum.html";

    }
    else if(change_to_this === "ko"){
        location.href="../Kansong_Metaverse_Museum_ko.html";

    }

}
