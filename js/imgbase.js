window.addEventListener("load", function () {
  start();
});

function start() {
  let imgList = img_list;
  console.log(imgList.length);
  let imgInfo_block = document.getElementById("img_list").innerHTML;

  for (let i = 0; i < imgList.length; i++) {
    // console.log("---------------------------------------");
    // console.log("img " + i + " :  " + imgList[i].id);
    // console.log("img " + i + " :  " + imgList[i].kName);
    // console.log("img " + i + " :  " + imgList[i].eName);
    // console.log("img " + i + " :  " + imgList[i].cName);
    let htmlcontent = "";
    let card = document.createElement("li");
    htmlcontent = htmlcontent + '<a href="./img_detail.html?id=' + imgList[i].id + '" target="_blank">';
    if (i < 9) {
      htmlcontent = htmlcontent + '<div class="imgArea"><img src="../img/introduction/00' + imgList[i].id + '.jpg" /></div>';
    } else {
      htmlcontent = htmlcontent + '<div class="imgArea"><img src="../img/introduction/0' + imgList[i].id + '.jpg" /></div>';
    }
    htmlcontent = htmlcontent + '<p class="imgCount">No. ' + imgList[i].id + "</p>";
    htmlcontent = htmlcontent + '<p class="eName">' + imgList[i].eName + "</p>";
    htmlcontent = htmlcontent + '<p class="kName">' + imgList[i].kName + "</p>";
    htmlcontent = htmlcontent + '<p class="cName">' + imgList[i].cName + "</p>";
    htmlcontent = htmlcontent + "</a>";
    card.innerHTML = htmlcontent;
    document.getElementById("img_list").appendChild(card);
  }
}
