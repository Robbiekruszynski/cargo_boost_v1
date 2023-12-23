import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

export const connectWallet = async (method, onClose) => {
  let provider;

  if (method === 'walletconnect') {
    // Initialize WalletConnect
    provider = new WalletConnectProvider({
      infuraId: "YOUR_INFURA_ID", // Replace with your Infura ID
    });
  } else if (method === 'metamask') {
    // Use MetaMask's provider
    provider = window.ethereum;
    if (!provider) {
      alert('MetaMask not found. Please install it.');
      return null;
    }
  } else {
    console.error('Unsupported method');
    return null;
  }

  try {
    await provider.enable();
    const web3 = new Web3(provider);
    return web3;
  } catch (error) {
    console.error("Connection Failed", error);
    if (typeof onClose === 'function') {
      onClose(); // Call onClose callback if it's a function
    }
    return null;
  }
};

