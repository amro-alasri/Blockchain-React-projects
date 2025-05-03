import { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import StorageReader from "./components/StorageReader";
import StorageWriter from "./components/StorageWriter";

function App() {
  const [account, setAccount] = useState(null);

  return (
    <div className="App">
      <h1>📦 SimpleStorage DApp</h1>
      <WalletConnect setAccount={setAccount} />
      {account && (
        <>
          <StorageReader />
          <StorageWriter account={account} />
        </>
      )}
    </div>
  );
}

export default App;
