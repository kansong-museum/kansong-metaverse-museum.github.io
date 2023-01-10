window.addEventListener("load", function () {
    start();
  });
  
  function start() {
    let characterList = character_list;
    console.log(characterList.length);
    let imgInfo_block = document.getElementById("character_list").innerHTML;
  
    for (let i = 0; i < characterList.length; i++) {
      // console.log("---------------------------------------");
      // console.log("img " + i + " :  " + characterList[i].id);
      // console.log("img " + i + " :  " + characterList[i].kName);
      // console.log("img " + i + " :  " + characterList[i].cName);
      let htmlcontent = "";
      let card = document.createElement("li");
      htmlcontent = htmlcontent + '<a href="./character_detail.html?id=' + characterList[i].id + '">';
      if (i < 9) {
        htmlcontent = htmlcontent + '<img src="./img/character/list/character-list-thum-' + characterList[i].id + '.jpg" />';
      } else {
        htmlcontent = htmlcontent + '<img src="./img/character/list/character-list-thum-' + characterList[i].id + '.jpg" />';
      }
    //   htmlcontent = htmlcontent + '<p class="imgCount">No. ' + characterList[i].id + "</p>";
    //   htmlcontent = htmlcontent + '<p class="eName">' + characterList[i].eName + "</p>";
    //   htmlcontent = htmlcontent + '<p class="kName">' + characterList[i].kName + "</p>";
    //   htmlcontent = htmlcontent + '<p class="cName">' + characterList[i].cName + "</p>";
      htmlcontent = htmlcontent + "</a>";
      card.innerHTML = htmlcontent;
      document.getElementById("character_list").appendChild(card);
    }
  }