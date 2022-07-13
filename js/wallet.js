const { ethers } = require("ethers");
let { nftAbi_rinkeby } = require("../contractabi/ntfAbi_rinkeby");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const address = accounts.toString();

      let chainId = await ethereum.request({ method: "eth_chainId" });
      if (chainId == 4) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const nftInstance = new ethers.Contract(
          "0xc89E09e68DEa544aBff8A4d744085De8fFc55e08",
          nftAbi_rinkeby,
          signer
        );

        const nftBal = await nftInstance.balanceOf(address);
        const nftBalance = ethers.utils.formatEther(nftBal) * 10 ** 18;

        if (nftBalance >= 1) {
          let viewBal = document.getElementById("nftBalance");
          viewBal.innerHTML = nftBalance;
          let walletAddress = document.getElementById("userAddress");
          walletAddress.innerHTML = address;

          console.log(nftBalance, address);
          let delivery = document.querySelector(".delivery");
          delivery.style.display = "block";
          let korea = document.getElementById("korea");
          korea.style.display = "block";
        } else {
          alert("There must be at least one NFT.");
        }
      } else {
        alert("Please switch to Ethereum mainnet");
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
