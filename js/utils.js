function getLink(addr, chainId) {
  var explorer;
  if (chainId == 1) {
    explorer = "https://etherscan.io";
  } else if (chainId == 4) {
    explorer = "https://rinkeby.etherscan.io";
  } else {
    explorer = "";
    console.log("unsupported chainid " + chainId);
  }
  var shortAddr =
    addr.substring(0, 6) + "...." + addr.substring(addr.length - 4);

  if (addr.length == 42) {
    return (
      '<a target="_blank"  href="' +
      explorer +
      "/address/" +
      addr +
      '">' +
      shortAddr +
      "</a>"
    );
  } else {
    return (
      '<a target="_blank" s href="' +
      explorer +
      "/tx/" +
      addr +
      '">' +
      shortAddr +
      "</a>"
    );
  }
}

function getOpenSeaLink(chainId) {
  var explorer;
  if (chainId == 1) {
    explorer = "https://opensea.io/collection/hyewons-album-of-genre-paintings";
  } else if (chainId == 4) {
    explorer = "https://testnets.opensea.io/collection/hyewons-album-of-genre-paintings-ldh5zu47ob";
  } else {
    explorer = "";
    console.log("unsupported chainid " + chainId);
  }

  return (
    '<a target="_blank" style="text-decoration: underline;color:coral;" href="' +
    explorer +
    '">Hyewons Album of Genre Paintings</a>'
  );
}



