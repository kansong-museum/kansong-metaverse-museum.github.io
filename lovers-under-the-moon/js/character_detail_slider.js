$(document).ready(function () {
    window.addEventListener("load", function () {
      start();
    });
    
    function start() {
      let characterList = character_list;
      // console.log(characterList.length);
      let imgInfo_block = document.getElementById("slides").innerHTML;
    
      for (let i = 0; i < characterList.length; i++) {
        // console.log("---------------------------------------");
        // console.log("img " + i + " :  " + characterList[i].id);
        // console.log("img " + i + " :  " + characterList[i].kName);
        // console.log("img " + i + " :  " + characterList[i].cName);
        let htmlcontent = "";
        let card = document.createElement("div");
        card.classList.add('slide_item');
        htmlcontent = htmlcontent + '   <a href="./character_detail.html?id=' + characterList[i].id + '">';
        if (i < 9) {
          htmlcontent = htmlcontent + '   <img src="./img/character/list/character-list-thum-' + characterList[i].id + '.jpg" />';
        } else {
          htmlcontent = htmlcontent + '   <img src="./img/character/list/character-list-thum-' + characterList[i].id + '.jpg" />';
        }
        htmlcontent = htmlcontent + "   </a>";
  
        card.innerHTML = htmlcontent;
        document.getElementById("slides").appendChild(card);
      }
    }
  });
  



 