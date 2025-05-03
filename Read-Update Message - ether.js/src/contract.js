import { ethers } from "ethers";

// عنوان العقد المنشور على Sepolia
const contractAddress = "0x525011FCF90d16862C541866a83F643d80553616"; // ← ضع هنا العنوان الحقيقي

// ABI العقد (انسخه من ملف artifacts/Message.json في مشروع Hardhat)
const contractABI = [
    "function message() public view returns (string)",
    "function updateMessage(string memory _newMessage) public"
];

export async function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log("sin:", signer)
    return new ethers.Contract(contractAddress, contractABI, signer);
}
