import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/contants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
    provider,
    signer,
    transactionContract
  });
}

export const TransactionProvider = ({children}) => {

  const checkIfWalletisConnected = async () => {
    if(!ethereum) return alert ("Please install metamask");
    const accounts = await ethereum.request({method: 'eth_accounts'});

    console.log(accounts);
  }

  const connectWallet = async () => {
    // https://youtu.be/Wn_Kb3MR_cU?t=6277
  }

  useEffect(() => {
    checkIfWalletisConnected();
  }, [])

  return (
    <TransactionContext.Provider value={{value: 'test'}}>
      {children}
    </TransactionContext.Provider>
  );
}