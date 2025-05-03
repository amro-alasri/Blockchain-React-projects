import { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [account, setAccount] = useState(null);
  const [reload, setReload] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">📋 ToDo DApp</h1>
        <WalletConnect setAccount={setAccount} />
        {account && (
          <div className="mt-6 space-y-4">
            <TaskForm account={account} onTaskAdded={() => setReload(!reload)} />
            <TaskList account={account} key={reload} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
