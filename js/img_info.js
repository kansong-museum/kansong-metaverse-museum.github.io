const img_list = [
  {
    id: 1,
    imgUrl: "../img/intriduction/001.jpg",
    kName: "춘색만원",
    eName: "Spring fills the garden",
    cName: "春色滿園",
    youtubeLink: "https://www.youtube.com/embed/S2lp0wO-Ps0",
  },
  {
    id: 2,
    imgUrl: "../img/intriduction/002.jpg",
    kName: "소년전홍",
    eName: "Young boy plucking an azalea",
    cName: "少年剪紅",
    youtubeLink: "https://www.youtube.com/embed/W2LOW2ko5eo",
  },
  {
    id: 3,
    imgUrl: "../img/intriduction/003.jpg",
    kName: "이부탐춘",
    eName: "A widow's spring indulgence",
    cName: "嫠婦耽春",
    youtubeLink: "https://www.youtube.com/embed/F8l34MY0Mf4",
  },
  {
    id: 4,
    imgUrl: "../img/intriduction/004.jpg",
    kName: "정변야화",
    eName: "Gossping at the well at night",
    cName: "井邊夜話",
    youtubeLink: "https://www.youtube.com/embed/e0suriAr5oI",
  },
  {
    id: 5,
    imgUrl: "../img/intriduction/005.jpg",
    kName: "홍루대주",
    eName: "Waiting on drinks in the vermilion tower",
    cName: "紅樓待酒",
    youtubeLink: "https://www.youtube.com/embed/nHIpTz3p6Oo",
  },
  {
    id: 6,
    imgUrl: "../img/intriduction/006.jpg",
    kName: "주사거배",
    eName: "Raising a glass at the tavern",
    cName: "酒肆擧盃",
    youtubeLink: "https://www.youtube.com/embed/V74X5BPbCII",
  },
  {
    id: 7,
    imgUrl: "../img/intriduction/007.jpg",
    kName: "상춘야흥",
    eName: "Enjoying the spring in the field of excitement",
    cName: "賞春野興",
    youtubeLink: "https://www.youtube.com/embed/JP9tSpIsmaQ",
  },
  {
    id: 8,
    imgUrl: "../img/intriduction/008.jpg",
    kName: "연소답청",
    eName: "Young people go out to the spring festival",
    cName: "年少踏靑",
    youtubeLink: "https://www.youtube.com/embed/H1hNED8Gy7c",
  },
  {
    id: 9,
    imgUrl: "../img/intriduction/009.jpg",
    kName: "무녀신무",
    eName: "Sprit dance of the Shamaness",
    cName: "巫女神舞",
    youtubeLink: "https://www.youtube.com/embed/4Hbqh1s-9Fk",
  },
  {
    id: 10,
    imgUrl: "../img/intriduction/010.jpg",
    kName: "쌍검대무",
    eName: "Double-sword dance by two performers",
    cName: "雙劍對舞",
    youtubeLink: "https://www.youtube.com/embed/IZsWtG4ric4",
  },
  {
    id: 11,
    imgUrl: "../img/intriduction/011.jpg",
    kName: "노상탁발",
    eName: "Monk with alms bowl on the street",
    cName: "路上托鉢",
    youtubeLink: "https://www.youtube.com/embed/MTyZNNlEaD8",
  },
  {
    id: 12,
    imgUrl: "../img/intriduction/012.jpg",
    kName: "납량만흥",
    eName: "Enjoying the cool breeze in a passing mood",
    cName: "納凉漫興",
    youtubeLink: "https://www.youtube.com/embed/gW-mUIO5nsg",
  },
  {
    id: 13,
    imgUrl: "../img/intriduction/013.jpg",
    kName: "니승영기",
    eName: "A nun greets a Gisaeng",
    cName: "尼僧迎妓",
    youtubeLink: "https://www.youtube.com/embed/fH-D1EXhcm4",
  },
  {
    id: 14,
    imgUrl: "../img/intriduction/014.jpg",
    kName: "청금상련",
    eName: "Listening to the Zither and admiring the lotus",
    cName: "聽琴賞蓮",
    youtubeLink: "https://www.youtube.com/embed/Q1AsU3AHASY",
  },
  {
    id: 15,
    imgUrl: "../img/intriduction/015.jpg",
    kName: "주유청강",
    eName: "Boating on the clear river",
    cName: "舟遊淸江",
    youtubeLink: "https://www.youtube.com/embed/MnY8oGmC3PQ",
  },
  {
    id: 16,
    imgUrl: "../img/intriduction/016.jpg",
    kName: "문종심사",
    eName: "Hearing the bell and looking for the temple",
    cName: "聞鍾尋寺",
    youtubeLink: "https://www.youtube.com/embed/TBUqKhS8aAc",
  },
  {
    id: 17,
    imgUrl: "../img/intriduction/017.jpg",
    kName: "단오풍정",
    eName: "A dano day scene",
    cName: "端午風情",
    youtubeLink: "https://www.youtube.com/embed/wvy2xIg8pss",
  },
  {
    id: 18,
    imgUrl: "../img/intriduction/018.jpg",
    kName: "계변가화",
    eName: "Beauties chatting beside a stream",
    cName: "溪邊佳話",
    youtubeLink: "https://www.youtube.com/embed/Bc62ojzSYc8",
  },
  {
    id: 19,
    imgUrl: "../img/intriduction/019.jpg",
    kName: "월야밀회",
    eName: "Clandestine meeting on a moonlit night",
    cName: "月夜密會",
    youtubeLink: "https://www.youtube.com/embed/pfFGDWm3xi8",
  },
  {
    id: 20,
    imgUrl: "../img/intriduction/020.jpg",
    kName: "휴기답풍",
    eName: " A fall outing with a Gisaeng",
    cName: "携妓踏楓",
    youtubeLink: "https://www.youtube.com/embed/Mqly6ePCdE4",
  },
  {
    id: 21,
    imgUrl: "../img/intriduction/021.jpg",
    kName: "쌍륙삼매",
    eName: "Entranced on double six",
    cName: "雙六三昧",
    youtubeLink: "https://www.youtube.com/embed/DyfXz-lKqcA",
  },
  {
    id: 22,
    imgUrl: "../img/intriduction/022.jpg",
    kName: "삼추가연",
    eName: "Auspicious in late autumn",
    cName: "三秋佳緣",
    youtubeLink: "https://www.youtube.com/embed/9NbSNud2T6U",
  },
  {
    id: 23,
    imgUrl: "../img/intriduction/023.jpg",
    kName: "노중상봉",
    eName: "Chance meeting on the road",
    cName: "路中相逢",
    youtubeLink: "https://www.youtube.com/embed/0KbJSTUceyU",
  },
  {
    id: 24,
    imgUrl: "../img/intriduction/024.jpg",
    kName: "기방무사",
    eName: "Nothing doing in the Gisaeng's chamber",
    cName: "妓房無事",
    youtubeLink: "https://www.youtube.com/embed/wT-x61LhZXI",
  },
  {
    id: 25,
    imgUrl: "../img/intriduction/025.jpg",
    kName: "표모봉욕",
    eName: "Washer woman suffers insult",
    cName: "漂母逢辱",
    youtubeLink: "https://www.youtube.com/embed/64iLFPxsNJ8",
  },
  {
    id: 26,
    imgUrl: "../img/intriduction/026.jpg",
    kName: "청루소일",
    eName: "Whiling away the day at the brothel",
    cName: "靑樓消日",
    youtubeLink: "https://www.youtube.com/embed/HW6u53uXCyY",
  },
  {
    id: 27,
    imgUrl: "../img/intriduction/027.jpg",
    kName: "월하정인",
    eName: "Lovers under the moon",
    cName: "月下情人",
    youtubeLink: "https://www.youtube.com/embed/6CbVAjQtaQg",
  },
  {
    id: 28,
    imgUrl: "../img/intriduction/028.jpg",
    kName: "야금모행",
    eName: "Venturing our after curfew",
    cName: "夜禁冒行",
    youtubeLink: "https://www.youtube.com/embed/UJMjdUafeIo",
  },
  {
    id: 29,
    imgUrl: "../img/intriduction/029.jpg",
    kName: "임하투호",
    eName: "Playing pitch-pot under the grove",
    cName: "林下投壺",
    youtubeLink: "https://www.youtube.com/embed/q2LB8r7ZwaA",
  },
  {
    id: 30,
    imgUrl: "../img/intriduction/030.jpg",
    kName: "유곽쟁웅",
    eName: "Contesting heros at the brothel",
    cName: "遊廓爭雄",
    youtubeLink: "https://www.youtube.com/embed/tb_76vK4lJ8",
  },
];
