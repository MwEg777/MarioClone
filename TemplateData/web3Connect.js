//if (window.ethereum) {
  //web3 = new Web3(window.ethereum);
  // connect popup
  //ethereum.enable();

 // window.ethereum.on("accountsChanged", function () {
  //  location.reload();
  //});

//}

function ConnectAndGetWallet() {

	var returnStr;

	try {

		if (window.ethereum) {

			if (!web3)
			{

				web3 = new Web3(window.ethereum);


			}

			ethereum.enable();

			returnStr = window.ethereum.selectedAddress;

		}

	}
	catch (ee) {

		window.alert("Couldn't connect Metamask. Please try again.");
		returnStr = "";

	}

	var bufferSize = lengthBytesUTF8(returnStr) + 1;
	var buffer = _malloc(bufferSize);
	stringToUTF8(returnStr, buffer, bufferSize);
	return buffer;

}