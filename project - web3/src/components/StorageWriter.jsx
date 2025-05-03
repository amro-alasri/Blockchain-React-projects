import { useState } from "react";
import { Web3 } from "web3";
import abi from "../Info/abi.json";

const contractAddress = "0xd7a40CF059fe52A762968074337f5B4B3A4e6047"; // ضع عنوان العقد هنا

const StorageWriter = ({ account }) => {
    const [input, setInput] = useState("");

    const handleSet = async () => {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi.abi, contractAddress);
        await contract.methods.set(input).send({ from: account });
        alert("تم تحديث القيمة في البلوكشين");
    };

    return (
        <div>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSet}>حفظ القيمة</button>
        </div>
    );
};

export default StorageWriter;
