import React from 'react'
import { useEffect, useState } from "react";
import { Web3 } from "web3";
import abi from "../contract/abi.json";
const TaskList = ({ account }) => {
    const [tasks, setTasks] = useState([]);
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;


    const loadTasks = async () => {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        const count = await contract.methods.taskCount().call();

        const loaded = [];
        for (let i = 1; i <= count; i++) {
            const task = await contract.methods.getTask(i).call();
            loaded.push(task);
        }

        setTasks(loaded);
    }

    const toggleComplete = async (id) => {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);
        await contract.methods.toggleCompleted(id).send({ from: account });
        loadTasks();
    }

    useEffect(() => {
        loadTasks();
    }, []);


    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <div
                    key={task[0]}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg ${task[2] ? "bg-green-500/20" : "bg-white/10"
                        }`}
                >
                    <span
                        className={`text-white ${task[2] ? "line-through opacity-70" : ""
                            }`}
                    >
                        {task[1]}
                    </span>
                    <button
                        onClick={() => toggleComplete(task[0])}
                        className={`px-3 py-1 rounded-md font-medium text-sm transition-all ${task[2]
                            ? "bg-red-600 hover:bg-red-700 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                    >
                        {task[2] ? "↩️ إلغاء" : "✅ أنجزت"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;