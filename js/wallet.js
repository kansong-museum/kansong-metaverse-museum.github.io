const { ethers } = require("ethers");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const address = accounts.toString();
      console.log(address);

      let balance = await ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });
      const ethBalance = ethers.utils.formatEther(balance);
      if (ethBalance >= 1) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log(chainId);
        if (chainId == 4) {
          console.log(ethBalance);
          let modal = document.getElementById("walletModal");
          modal.style.display = "block";
          let viewBal = document.getElementById("ethBalance");
          viewBal.innerHTML = ethBalance;
          let userAddress = document.getElementById("userAddress");
          userAddress.innerHTML = address;
        } else {
          alert("please change to mainnet");
          window.location.reload();
        }
      } else {
        alert("not enough eth..");
        window.location.reload();
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

module.exports = {
  connect,
};
