const { ethers } = require("ethers");
let { nftAbi_rinkeby } = require("../contractabi/ntfAbi_rinkeby");
let { ntfAbi_eth_mainnet } = require("../contractabi/ntfAbi_eth_mainnet");
let rinkebyContractAddress = "0xc89E09e68DEa544aBff8A4d744085De8fFc55e08";
let contractAddess = "0x82f58182bE996DF3F8B9922dFa0e8F8aCf71f76C";

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const address = accounts.toString();

      let chainId = await ethereum.request({ method: "eth_chainId" });

      if (chainId !== 1) {
        await switchChain();
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const nftInstance = new ethers.Contract(
        contractAddess,
        ntfAbi_eth_mainnet,
        signer
      );

      const nftBal = await nftInstance.balanceOf(address);
      const nftBalance = ethers.utils.formatEther(nftBal) * 10 ** 18;

      if (nftBalance >= 1) {
        let viewBal = document.getElementById("nftBalance");
        viewBal.innerHTML = nftBalance;
        let walletAddress = document.getElementById("userAddress");
        walletAddress.innerHTML = address;

        let myInfo = document.querySelector(".myInfo");
        myInfo.style.display = "block";
        let delivery = document.querySelector(".delivery");
        delivery.style.display = "block";
        let korea = document.getElementById("korea");
        korea.style.display = "block";
      } else {
        alert("Sorry. You have no NFT.");
      }
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

async function switchChain() {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x" + "1".toString(16) }],
    });
  } catch (e) {
    console.log(e);
  }
}

function k_del() {
  let korea = document.getElementById("korea");
  korea.style.display = "block";
  overseas.style.display = "none";
}
function o_del() {
  let overseas = document.getElementById("overseas");
  korea.style.display = "none";
  overseas.style.display = "block";
}

module.exports = {
  connect,
  k_del,
  o_del,
};
