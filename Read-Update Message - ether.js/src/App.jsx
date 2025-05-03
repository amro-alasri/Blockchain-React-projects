import React, { useEffect, useState } from "react";
import { getContract } from "./contract";

function App() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    async function fetchMessage() {
      const contract = await getContract();
      const msg = await contract.message();
      setCurrentMessage(msg);
    }
    fetchMessage();
  }, []);

  const updateMessage = async () => {
    const contract = await getContract();
    const tx = await contract.updateMessage(newMessage);
    await tx.wait();
    setNewMessage("");
    const updated = await contract.message();
    setCurrentMessage(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">💬 الرسالة الحالية</h1>
        <p className="mb-6 text-gray-700">{currentMessage || "جاري التحميل..."}</p>

        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="أدخل رسالة جديدة"
          className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
        />
        <button
          onClick={updateMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          تحديث الرسالة
        </button>
      </div>
    </div>
  );
}

export default App;
