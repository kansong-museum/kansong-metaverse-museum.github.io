let eth_provider_run = false;
let nftContract;

let chainId = 4;
const networkList = {
  1: "Ethereum Mainnet",
  4: "Rinkeby Testnet",
};
let myAddr;
let totalsupplyInterval;

let openMyCardsView = false;
let mintingState = 0; // 0:minting is not allowed , 1: pre minting , 2: public minting , 3: public minting is not allowed
let multiCount = 0;
let currentRoundInfo = "";
let maxMintingId = "";
let startId = "";
let lastMintedId = "";
let mintingFee = "";
let maxAllowedMintingQuantity = "";
let startTime = 0;
let endTime = 0;
let total_mintingfee="";
let mintingCount = 0;

let starttimer=-1;
let endtimer=-1;

const openseaurl = {
  1: "https://opensea.io/assets/0x82f58182bE996DF3F8B9922dFa0e8F8aCf71f76C/",
  4: "https://testnets.opensea.io/assets/0xc89E09e68DEa544aBff8A4d744085De8fFc55e08/",
};

const nftAddress = {
  1: "0x82f58182bE996DF3F8B9922dFa0e8F8aCf71f76C",
  4: "0xc89E09e68DEa544aBff8A4d744085De8fFc55e08",
};

const nftAbi = {
  1: ntfAbi_eth_mainnet,
  4: nftAbi_rinkeby,
};

window.addEventListener("load", function () {
  loadWeb3();
  if (typeof window.web3 !== "undefined") {
    watchChainAccount();
    startApp();
  } else {
    alert("You need to install dapp browser first to use this site!");
  }
});

function loadWeb3() {
  if (typeof window.ethereum !== "undefined") {
    window.web3 = new Web3(window.ethereum);
  } else {
    window.web3 = new Web3(
      "https://mainnet.infura.io/v3/302b2ccfd49a40d480567a132cb7eb1d"
    );
  }
}

function watchChainAccount() {
  try{
    web3.currentProvider.on("accountsChanged", (accounts) => {
      startApp();
    });
    web3.currentProvider.on("chainChanged", (chainId) => {
      window.location.reload();
      // startApp();
    });
    eth_provider_run=true;
  }catch(err){
    console.log(err);
    eth_provider_run=false;
  }
}

async function startApp() {
  console.log("startApp");
  // clearInterval(totalsupplyInterval);
  try {
    var currentChainId = await web3.eth.getChainId();
    chainId = currentChainId;
    console.log("chainId =>", chainId);

    if (chainId == 1 || chainId == 4) {
      // if (chainId == 4) {
      $("#network-info").hide();
      $(".current-network").html(networkList[chainId]);
      await getAccount();
    } else {
      $("#network-info").show();
    }

    // initializeClock();
  } catch (err) {
    console.log("startApp => ", err);
    $("#network-info").show();
    document.getElementById("net_info_msg").innerText="Metamask?????? ????????? ????????????????????? ???????????????.";
  }
}

async function getAccount() {
  try {

    await getContracts();
    await getTotalSupply();
    var accounts = await web3.eth.getAccounts();

    if (accounts.length > 0) {
      // myAddr = web3.utils.toChecksumAddress(accounts[0]);
      myAddr = accounts[0];
      $("#div-network").show();

      $("#div-myaddress").show();
      $(".my-address").html(getLink(myAddr, chainId));
      
      $("#connect-btn").hide();
      $("#btn-minting").show();

    } else {
      console.log("No ethereum account is available!");
      $("#div-network").hide();
      $("#div-myaddress").hide();
      $("#btn-minting").hide();

      console.log("eth_provider_run =>", eth_provider_run);
      if(eth_provider_run){
        $("#connect-btn").show();

      }else{
        $("#network-info").show();
        document.getElementById("net_info_msg").innerText="Metamask?????? ????????? ????????????????????? ???????????????.";
    
      }
    }
  } catch (err) {
    console.log("getAccount => ", err);
    $("#div-myaddress").hide();

    $("#connect-btn").show();
    $(".my-address").html("");
  }
}

function connectWallet() {
  if (typeof ethereum === "undefined") {
    return showMsg(noAddrMsg);
  }

  ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      myAddr = accounts[0];
      $(".my-address").html(getLink(myAddr, chainId));
      startApp();
      //   $("#div-mintable").show();
      //   isMintingAvailable(true);
    })
    .catch((err) => {
      //   isMintingAvailable(false);
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to Your wallet!");
      } else {
        console.error(err);
      }
    });
}

async function getContracts() {
  nftContract = new web3.eth.Contract(nftAbi[chainId], nftAddress[chainId]);
  $(".opensea-address").html(getOpenSeaLink(chainId));

  await getCurrentRoundInfo();
  await getMintingState();

}

async function getMintingState() {
  mintingState = await nftContract.methods.getState().call();


  console.log("mintingState =>", mintingState);
  /**
   *  State of this contract
   *  0: DEPLOYED(contract deployed), 1: PREPARE_MINTING(before minting starts),
   *  2: ON_MINTING(minting event is on process), 3: END_MINTING (end of a minting round),
   *  4: ALL_MINTING_DONE (no more minting round)
   */


  $("#footer-btn").show();
  
  // mintingState=5;  // Emergency
  if(mintingState == 1){
    // ?????? ??????????????????. 
    document.getElementById("btn-minting").textContent = "?????? ?????? ??????????????????.";
    document.getElementById("btn-minting").disabled = true;
  }else if(mintingState == 2){
    // NFT Mint
    document.getElementById("btn-minting").textContent = "NFT Mint";
    document.getElementById("btn-minting").disabled = false;
    clearInterval(starttimer);
    }else if(mintingState == 3){
    // ????????? ?????????????????????.
    document.getElementById("btn-minting").textContent = "????????? ?????????????????????.";
    document.getElementById("btn-minting").disabled = true;
    clearInterval(starttimer);
    }else if(mintingState == 5){
      document.getElementById("btn-minting").textContent = "????????? ?????? ??????????????????. ????????? ??????????????????~";
      document.getElementById("btn-minting").disabled = true;
      clearInterval(starttimer);
  
    }else{
    $("#footer-btn").hide();
  }


  
  // await getMultiClaimCount();
}

async function getCurrentRoundInfo(){
  /*
      roundNumber: newRoundNumber,
      maxMintingId: maxMintingId,
      startId: _nextTokenId(),
      lastMintedId: 0,
      tokenURIPrefix: "",
      mintingFee: mintingFee,
      maxAllowedMintingQuantity: maxAllowedMintingQuantity,
      whitelisted: whitelisted,
      revealed: revealed,
      revealBlockNumber: 0,
      randomSelection: 0,
      startTime: startTime,
      endTime: endTime,
      onlyAdminRound: onlyAdminRound,
      admin: admin    
  */
  currentRoundInfo = await nftContract.methods.getCurrentRound().call();

   maxMintingId = currentRoundInfo[1];
   startId = currentRoundInfo[2];
   lastMintedId = currentRoundInfo[3];
   mintingFee = currentRoundInfo[5];
   maxAllowedMintingQuantity = currentRoundInfo[6];
   startTime = currentRoundInfo[11];  // unix timestamp seconds
   endTime = currentRoundInfo[12];    // unix timestamp seconds

   // ?????? timer??? ???????????? ????????? ?????? ???????????? ?????????. 
   if(starttimer == -1){
    countDownTimer("btn-minting", parseInt(startTime) *1000);
   }

  // console.log("currentRoundInfo =>", currentRoundInfo);
  // console.log("currentRoundInfo 0 =>", currentRoundInfo[0]);
  await getTotalSupply();
}

async function getMultiClaimCount() {
  let mintcount = document.getElementById("mint_quantity");
  let optionItem = "";
  // getMinting Fee
  const fee_wei = mintingFee;
  const fee_gwei = ethers.utils.formatUnits(fee_wei, 18);
  
  document.getElementById("mint_price").innerText=fee_gwei;
  multiCount = maxAllowedMintingQuantity;
  document.getElementById("total_price").innerText=fee_gwei;
  total_mintingfee = fee_gwei;
  mintingCount = 1;
  // console.log("multiCount -> ", multiCount);

  for (let i = 1; i < parseInt(multiCount) + 1; i++) {
    if (i === 1) {
      optionItem =
        optionItem +
        '<option value="' +
        i +
        '" selected="selected">' +
        i +
        "</option>";
    } else {
      optionItem = optionItem + '<option value="' + i + '" >' + i + "</option>";
    }
  }

  mintcount.innerHTML = optionItem;
}


async function changeQuantity(){
  let itemidSelected = document.getElementById("mint_quantity");

  mintingCount = itemidSelected.options[itemidSelected.selectedIndex].value;
  // console.log("selected id : ", mintingCount);

  const fee_wei = mintingFee;

  const wei_value = ethers.BigNumber.from(fee_wei).mul(mintingCount);
  total_mintingfee = ethers.utils.formatEther(wei_value);
  
  document.getElementById("total_price").innerText=total_mintingfee;

  // ?????? ????????? ????????? ???????????? ?????????
  let remainCnt = await getTotalSupply();
  console.log("remainCnt -> ", remainCnt);
  if(remainCnt==0){
    return;
  }
  let mint_btn = document.getElementById("modal_minting_btn");
  if(mintingCount > remainCnt){
    mint_btn.disabled = true;
    mint_btn.innerText=remainCnt + "??? ????????? ???????????????.";
  }else{
    mint_btn.disabled = false;
    mint_btn.innerText="NFT Mint";
  }

}

async function getTotalSupply() {
  // clearInterval(totalsupplyInterval);

  let maxCnt = 0;
  let mintedCnt = parseInt(startId);
  let totalsupply = 0;

  // ?????? ????????? ????????? totalsupply ?????? ?????????.
  totalsupply = await nftContract.methods.totalSupply().call();
  mintedCnt = totalsupply - mintedCnt+91;
  maxCnt = parseInt(maxMintingId)-startId+91;
  // console.log("totalsupply : ", totalsupply);
  // console.log("maxCnt : ", maxCnt);
  // console.log("mintedCnt =>", mintedCnt);
  let mint_progress = document.getElementById("progress_container");
  let progress_item="";

  let percent = mintedCnt / maxCnt * 100;
  if(percent == 100 ){
    progress_item += "<p>NFT ?????? ??????</p>"
  }else{
    progress_item += "<p>NFT ?????? ??????</p>"
  }
  progress_item += "<div class='div_progress'>"
  progress_item += "<div class='progress'>"
  progress_item += "  <div class='progress-bar progress-bar-animated' style='width:" +percent+"%' role='progressbar'>"
  progress_item += "</div>"
  progress_item += "</div>"
  progress_item += "<span>"+mintedCnt+"/"+maxCnt+"</span>";
  progress_item += "</div>"
  
  mint_progress.innerHTML=progress_item;

  // Minting popup

  $(".total_supply").html(mintedCnt + "/" + maxCnt);

  if(mintedCnt == maxCnt){
    let mint_btn = document.getElementById("modal_minting_btn");
    mint_btn.disabled = true;
    mint_btn.innerText="????????????";
  }

  return maxCnt - mintedCnt;
}

async function nftMint() {
  $("#minting-loading").show();
  document.getElementById("modal_minting_btn").disabled = true;
  
  try {

    console.log("nftMint");

        nftContract.methods
          .mint(mintingCount)
          .send({
            from: myAddr,
            value: ethers.utils.parseEther(total_mintingfee.toString()),
          })
          .on("transactionHash", (txid) => {
            // console.log(`txid: ${txid}`)
          })
          .once("allEvents", (allEvents) => {
            // console.log('allEvents')
            // console.log(transferEvent)
          })
          .once("Transfer", (transferEvent) => {
            // console.log('trasferEvent', transferEvent)
          })
          .once("receipt", (receipt) => {
            $("#minting-loading").hide();
            // console.log("receipt => ", receipt);
            document.getElementById("modal_minting_btn").disabled = false;
            setMintResult(receipt);
          })
          .on("error", (error) => {
            $("#minting-loading").hide();
            document.getElementById("modal_minting_btn").disabled = false;
            console.log(error);
          });
  } catch (error) {
    console.log("error =>", error);
    $("#minting-loading").hide();
  }

  async function setMintResult(receipt) {
    if (receipt.status) {
      $("#before_minting").hide();
      $("#after_minting").show();
      
      document.getElementById("mint_result").innerText= mintingCount +"?????? NFT??? ?????????????????????. ";
      $(".opensea-address").html(getOpenSeaLink(chainId));

      getTotalSupply();

    }
  }

}

function valueReset() {
  multiCount = 0;
  currentRoundInfo = "";
  maxMintingId = "";
  startId = "";
  lastMintedId = "";
  mintingFee = "";
  maxAllowedMintingQuantity = "";
  total_mintingfee="";
  mintingCount = 0;
}


//================== Minting Popup Start
async function showMintingPopup(){
  // ????????? ?????????
  if(mintingState==2){
    await getCurrentRoundInfo();
    await getMultiClaimCount();
    $("#before_minting").show();
    $("#after_minting").hide();
    modal('popup-minting');
  }
}

function modal(id){
  var zIndex = 9999;
  var modal = document.getElementById(id);

  // ?????? div ?????? ??????????????? ?????????
  var bg = document.createElement('div');
  bg.setStyle({
      position: 'fixed',
      zIndex: zIndex,
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      // ????????? ????????? ????????? ????????? ???
      backgroundColor: 'rgba(0,0,0,0.6)'
  });
  document.body.append(bg);

  // ?????? ?????? ??????, ????????? ???????????? ?????? div ?????????
  modal.querySelector('.modal_close_btn').addEventListener('click', function() {
    valueReset();
    $("#minting-loading").hide();
    bg.remove();
    modal.style.display = 'none';
  });
  modal.querySelector('.modal_close_btn_after').addEventListener('click', function() {
    valueReset();
    $("#minting-loading").hide();
    bg.remove();
    modal.style.display = 'none';
  });


  modal.setStyle({
      position: 'fixed',
      display: 'block',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

      // ????????? ????????? ?????? ?????? ?????? ?????????
      zIndex: zIndex + 1,

      // div center ??????
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%',
      overflow: 'auto',
  });
}

  // Element ??? style ????????? ??????????????? ???????????? ?????? ??????
  Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

//================== Minting Popup End

//================== Countdown Timer Start
const countDownTimer = function (id, date) {
  var _vDate = new Date(date);
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();

    var distDt = _vDate - now;
    
    var minting_btn_content = "???????????? ?????? ?????? : ";
    var days = Math.floor(distDt / _day);
    var hours = Math.floor((distDt % _day) / _hour);
    var minutes = Math.floor((distDt % _hour) / _minute);
    var seconds = Math.floor((distDt % _minute) / _second);

    if (days > 0) {
      minting_btn_content += days + "Day ";
      minting_btn_content += hours + " : ";
    } else {
      minting_btn_content += hours + " : ";
    }
    minting_btn_content += minutes + " : ";
    minting_btn_content += seconds + "";

    if (distDt < 0) {
      clearInterval(starttimer);
      document.getElementById("div-countdown").style.display = "none";
      document.getElementById("countdown").textContent = "" ;
      getMintingState();
      return;
    }else{
      document.getElementById("div-countdown").style.display = "block";
      document.getElementById("countdown").textContent = minting_btn_content ;
    }

  }
  starttimer = setInterval(showRemaining, 1000);
};

const EndtimecountDownTimer = function (id, date) {
  var _vDate = new Date(date);
  var timer;

  function showMintingEnd() {
    var now = new Date();

    var distDt = _vDate - now;
    
    var minting_btn_content = "????????? ?????????????????????!!";

    if (distDt < 0) {
      clearInterval(endtimer);
      document.getElementById("div-countdown").style.display = "block";
      document.getElementById("countdown").textContent = minting_btn_content ;
      getMintingState();
      return;
    }
  }
  endtimer = setInterval(showMintingEnd, 1000);
};

//================== Countdown Timer End