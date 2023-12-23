import React from 'react';
import { connectWallet } from './WalletConnect';

const MyComponent = () => {
  const handleConnect = async (method) => {
    const web3 = await connectWallet(method, () => {
      // handle modal close or connection failure
      console.log("Connection closed or failed");
    });

    if (web3) {
      // Proceed with wallet logic
      console.log("Connected with:", method);
    }
  };

  return (
    <div>
      <button onClick={() => handleConnect('metamask')}>Connect with MetaMask</button>
      <button onClick={() => handleConnect('walletconnect')}>Connect with WalletConnect</button>
    </div>
  );
};

export default MyComponent;
