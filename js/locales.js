function changeLang(_lang){
    selectLang(_lang);
    
    let url = window.location.href;
    let home = url.indexOf("index");
    if (home > 0) {
      if(cur_lang==="ko" && _lang==="en"){
        location.href="../index.html";
      }else{
        location.href="../index_ko.html";
      }
    } else{
      let kopage = url.indexOf("ko");
      let enpage = url.indexOf("en");
      if(kopage<0 && enpage<0){
        if(cur_lang==="ko" && _lang==="en"){
          location.href="../index.html";
        }else{
          location.href="../index_ko.html";
        }
      }
    }

    // if(_lang === "ko"){
    //   location.href="../index_ko.html";
    // }else{
    //   location.href="../index.html";
    // }
  }

function changeLanguage(change_to_this){
    let url = window.location.href;
    let home = url.indexOf("index");

    if( home > 0 ) {location.href="../index.html";}

    if( change_to_this==="en"){
        location.href="../index.html";

    }
    else if(change_to_this === "ko"){
        location.href="../index_ko.html";

    }

}
