import React, { useContext } from 'react';
import { transactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import {shortenAddress} from '../utils/shortenAddress';

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    // https://youtu.be/Wn_Kb3MR_cU?t=8521
    <div className="flex width-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>
        ) : <h3 className="text-white text-3xl text-center my-2">Connect your account to see the latest transactions</h3>}

      </div>
    </div>
  );
}

export default Transactions;