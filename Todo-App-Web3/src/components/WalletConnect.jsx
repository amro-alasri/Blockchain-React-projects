import React from 'react'
import { useState } from "react";

const WalletConnect = ({ setAccount }) => {
    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            setConnected(true);
        } else {
            alert("Please install MetaMask!");
        }
    }

    return (
        <div className="flex justify-center">
            <button
                onClick={connectWallet}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all"
            >
                {!connected ? "🔌 اتصل بمحفظتك" : "🔌 تم الاتصال"}
            </button>
        </div>
    );
};
export default WalletConnect