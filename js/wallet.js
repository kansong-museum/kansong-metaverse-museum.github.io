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
      console.log(ethers.utils.formatEther(balance));
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
