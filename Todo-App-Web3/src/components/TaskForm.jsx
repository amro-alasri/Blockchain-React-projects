import { useState } from "react";
import { Web3 } from "web3";
import abi from "../contract/abi.json";

const TaskForm = ({ account, onTaskAdded }) => {
    const [input, setInput] = useState("");

    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
    const createTask = async () => {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        await contract.methods.createTask(input).send({ from: account });
        setInput("");
        onTaskAdded(); // إعادة تحميل القائمة
    };

    return (
        <div className="flex space-x-2">
            <input
                type="text"
                placeholder="أضف مهمة جديدة..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <button
                onClick={createTask}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold transition-all"
            >
                ➕
            </button>
        </div>
    );
};

export default TaskForm;
