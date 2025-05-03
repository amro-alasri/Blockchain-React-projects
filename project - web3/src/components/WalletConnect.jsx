import { useState } from "react";

const WalletConnect = ({ setAccount }) => {
    const [connected, setConnected] = useState(false);
    const [account, setAccountState] = useState(null);
    const connect = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            setAccountState(accounts[0]);
            setConnected(true);
        } else {
            alert("يرجى تثبيت MetaMask");
        }
    };

    return (
        <div>
            <button onClick={connect}>
                {connected ? `متصل بـ ${account}` : "اتصل بمحفظة MetaMask"}
            </button>
        </div>
    );
};

export default WalletConnect;
