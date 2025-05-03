import { useEffect, useState } from "react";
import { Web3 } from "web3";
import abi from "../Info/abi.json";

const contractAddress = "0xd7a40CF059fe52A762968074337f5B4B3A4e6047"; // ضع عنوان العقد هنا

const StorageReader = () => {
    const [value, setValue] = useState(0);

    const load = async () => {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi.abi, contractAddress);
        const result = await contract.methods.get().call();
        setValue(result);
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <div>
            <h3>القيمة المخزنة: {value}</h3>
            <button onClick={load}>تحديث</button>
        </div>
    );
};

export default StorageReader;
