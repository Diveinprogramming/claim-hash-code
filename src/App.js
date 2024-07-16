import "./App.css";
import Login from "./Admin/Login";
import Choose from "./Admin/Choose";
import UploadCodes from "./Admin/UploadCodes";
import DownloadCodes from "./Admin/DownloadCodes";
import EditAddProduct from "./Admin/EditAddProduct";
import RewardConfiguration from "./Admin/RewardConfiguration";
import ManualEntry from "./Clientside/ManualEntry";
import ClaimCode from "./Clientside/ClaimCode";
import ConnectWallet from "./Clientside/ConnectWallet";
import CongratulationsConnect from "./Clientside/CongratulationsConnect";
import ClaimCodeError from "./Clientside/ClaimCodeError";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Admin" element={<Login />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/upload-code" element={<UploadCodes />} />
        <Route path="/download-code" element={<DownloadCodes />} />

        <Route path="/editAdd-product" element={<EditAddProduct />} />
        <Route path="/reward-configuration" element={<RewardConfiguration />} />
        <Route path="/" element={<ManualEntry />} />
        <Route path="/claim-code" element={<ClaimCode />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/congratulations" element={<CongratulationsConnect />} />
        <Route path="/error" element={<ClaimCodeError />} />
      </Routes>
    </div>
  );
}

export default App;
