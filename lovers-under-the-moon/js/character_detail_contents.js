

$(document).ready(function () {
  start();
});

function getURLParams(url) {
  var result = {};
  url.replace(/[?&]{1}([^=&]+)=([^&]*)/g, function (s, k, v) {
    result[k] = decodeURIComponent(v);
  });
  // console.log("getURLParams  result =>", result);
  return result;
}

function start() {
  let targetUrl = window.location.href;
  let parsedurl = getURLParams(targetUrl);
  // console.log("targetUrl    ", targetUrl);
  // console.log("parsedurl =>", parsedurl);
  // console.log(typeof parsedurl);
  // console.log(parsedurl.id);
  // console.log(typeof parsedurl.id);
  // console.log(parseInt(parsedurl.id));
  let characterList = character_list;
  var item = characterList.find((item) => item.id === parsedurl.id);
  // console.log("item=>", item);

  document.title = '달아래 정인 X ' + item.kName;
  let htmlcontent = "";
  let card = document.createElement("div");
  htmlcontent = htmlcontent + '<div class="img_area">';
  htmlcontent = htmlcontent + '<img src="' + item.personUrl + '" alt="">';
  htmlcontent = htmlcontent + '</div>';

  htmlcontent = htmlcontent + '<div class="text_area">';
  htmlcontent = htmlcontent + '<h5 id="relic_title_ko">'+item.kName+'</h5>';
  htmlcontent = htmlcontent + '<p id="relic_title_cn">'+item.cName+'</p>';

  htmlcontent = htmlcontent + '<div id="use_color">';
  htmlcontent = htmlcontent + '      <ul>';
  htmlcontent = htmlcontent + '          <li><img src="'+item.useColor1+'" alt=""></li>';
  htmlcontent = htmlcontent + '          <li><img src="'+item.useColor2+'" alt=""></li>';
  htmlcontent = htmlcontent + '          <li><img src="'+item.useColor3+'" alt=""></li>';
  htmlcontent = htmlcontent + '      </ul>';
  htmlcontent = htmlcontent + '  </div>';

  htmlcontent = htmlcontent + '    <div class="relic_img_box">';
  htmlcontent = htmlcontent + '        <img src="'+item.relicImgUrl+'" alt="" id="relic_img">';
  htmlcontent = htmlcontent + '    </div>';

  htmlcontent = htmlcontent + '    <a href="'+item.relicUrl+'" target="_black" id="relic_link" class="small_link text_caption">유물 자세히 보기 ></a>';
  htmlcontent = htmlcontent + '    <div id="copyright_img_box">';
  htmlcontent = htmlcontent + '       <img src="'+item.copyrightUrl+'" alt="">';
  htmlcontent = htmlcontent + '       <span class="text_caption">'+item.copyrightText+'</span>';
  htmlcontent = htmlcontent + '    </div>'
  htmlcontent = htmlcontent + '</div>';

  card.innerHTML = htmlcontent;
  document.getElementById("character_detail_contents").appendChild(card);

}