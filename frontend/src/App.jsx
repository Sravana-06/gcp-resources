import { useState } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Compute from "./pages/Compute";
import Storage from "./pages/Storage";
import IAM from "./pages/IAM";
import Networks from "./pages/Networks";
import CloudSQL from "./pages/CloudSQL";
import Functions from "./pages/Functions";
import Billing from "./pages/Billing";
import Monitoring from "./pages/Monitoring";

function App() {

  const [activePage, setActivePage] = useState("dashboard");

  const [cloudData, setCloudData] = useState(null);

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleUpload = async () => {

    if (!file) {

      alert("Upload GCP JSON");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/connect-gcp",
        formData
      );

      console.log(response.data);

      setCloudData(response.data);

    } catch (error) {

      console.error(error);

      alert("Upload Failed");

    } finally {

      setLoading(false);
    }
  };


  const renderPage = () => {

    switch (activePage) {

      case "compute":
        return <Compute data={cloudData} />;

      case "storage":
        return <Storage data={cloudData} />;

      case "iam":
        return <IAM data={cloudData} />;

      case "networks":
        return <Networks data={cloudData} />;

      case "cloudsql":
        return <CloudSQL data={cloudData} />;

      case "functions":
        return <Functions data={cloudData} />;

      case "billing":
        return <Billing data={cloudData} />;

      case "monitoring":
        return <Monitoring data={cloudData} />;

      default:
        return (

          <Dashboard
            cloudData={cloudData}
            file={file}
            setFile={setFile}
            handleUpload={handleUpload}
            loading={loading}
          />

        );
    }
  };


  return (

    <div className="flex min-h-screen bg-[#020817] text-white">

      {/* SIDEBAR */}

      <Sidebar
        setActivePage={setActivePage}
        activePage={activePage}
        cloudData={cloudData}
      />


      {/* MAIN CONTENT */}

      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="p-8 overflow-y-auto">

          {renderPage()}

        </div>

      </div>

    </div>

  );
}

export default App;