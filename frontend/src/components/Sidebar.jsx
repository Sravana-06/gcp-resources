function Sidebar({ setActivePage, activePage, cloudData }) {

  return (

    <div className="w-[270px] bg-[#060B1A] border-r border-[#111827] min-h-screen flex flex-col">

      {/* LOGO */}

      <div className="p-5 border-b border-[#111827]">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#4F46E5] flex items-center justify-center font-bold text-lg">
            CS
          </div>

          <div>

            <h1 className="font-bold text-lg text-white">
              Console Sensei
            </h1>

            <p className="text-xs text-slate-400">
              GCP Cloud Ops
            </p>

          </div>

        </div>

      </div>


      {/* CONNECTION CARD */}

      <div className="p-4">

        <div className="bg-[#0B1225] border border-[#1E293B] rounded-3xl p-4">

          {/* HEADER */}

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-[11px] tracking-[4px] text-slate-500 uppercase">
                GCP Connection
              </p>

            </div>

            <button className="bg-[#111827] border border-[#1E293B] text-xs px-3 py-1 rounded-lg text-slate-300">
              Active
            </button>

          </div>


          {/* PROJECT */}

          <div className="mb-4">

            <h2 className="text-white font-bold text-xl leading-8 break-all">
              {cloudData?.project_id || "No Project"}
            </h2>

            <p className="text-sm text-slate-400 mt-2">
              {cloudData?.region || "asia-south1"} • consolesensei-scanner
            </p>

          </div>


          {/* STATUS */}

          <div className="flex gap-2 mb-5">

            <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">

              {cloudData?.environment || "Production"}

            </span>

            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full">

              {cloudData?.connected ? "Connected" : "Disconnected"}

            </span>

          </div>


          {/* INFO BOXES */}

          <div className="grid grid-cols-2 gap-3 mb-5">

            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-3">

              <p className="text-xs text-slate-500 mb-1">
                Project
              </p>

              <h3 className="font-semibold text-white text-sm break-all">

                {cloudData?.project_number || "N/A"}

              </h3>

            </div>


            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-3">

              <p className="text-xs text-slate-500 mb-1">
                Region
              </p>

              <h3 className="font-semibold text-white text-sm">

                {cloudData?.region || "asia-south1"}

              </h3>

            </div>

          </div>


          {/* CONNECTED TIME */}

          <div className="mb-4">

            <p className="text-xs text-slate-500 mb-1">
              Connected:
            </p>

            <p className="text-xs text-slate-300">

              {cloudData?.connected_time || "Waiting for scan..."}

            </p>

          </div>


          {/* SERVICE ACCOUNT */}

          <div className="mb-4">

            <p className="text-xs text-slate-500 mb-1">
              Service Account:
            </p>

            <p className="text-xs text-slate-300 break-all leading-5">

              {cloudData?.service_account || "No Service Account"}

            </p>

          </div>


          {/* ACCESS */}

          <div>

            <p className="text-xs text-slate-500 mb-1">
              Access:
            </p>

            <p className="text-xs text-emerald-400">

              {cloudData?.access_level || "Read Only"}

            </p>

          </div>

        </div>

      </div>


      {/* MENU */}

      <div className="px-4 space-y-2 overflow-y-auto pb-6">

        <SidebarItem
          title="Dashboard"
          active={activePage === "dashboard"}
          onClick={() => setActivePage("dashboard")}
        />

        <SidebarItem
          title="Compute Engine"
          active={activePage === "compute"}
          onClick={() => setActivePage("compute")}
        />

        <SidebarItem
          title="Cloud Storage"
          active={activePage === "storage"}
          onClick={() => setActivePage("storage")}
        />

        <SidebarItem
          title="Cloud SQL"
          active={activePage === "cloudsql"}
          onClick={() => setActivePage("cloudsql")}
        />

        <SidebarItem
          title="Cloud Functions"
          active={activePage === "functions"}
          onClick={() => setActivePage("functions")}
        />

        <SidebarItem
          title="IAM"
          active={activePage === "iam"}
          onClick={() => setActivePage("iam")}
        />

        <SidebarItem
          title="Networks"
          active={activePage === "networks"}
          onClick={() => setActivePage("networks")}
        />

        <SidebarItem
          title="Cloud Billing"
          active={activePage === "billing"}
          onClick={() => setActivePage("billing")}
        />

        <SidebarItem
          title="Cloud Monitoring"
          active={activePage === "monitoring"}
          onClick={() => setActivePage("monitoring")}
        />

      </div>

    </div>
  );
}


function SidebarItem({ title, onClick, active }) {

  return (

    <div
      onClick={onClick}
      className={`px-4 py-3 rounded-xl cursor-pointer transition-all text-sm font-medium ${
        active
          ? "bg-[#312E81] text-white border border-[#4338CA]"
          : "text-slate-400 hover:bg-[#0B1225] hover:text-white"
      }`}
    >
      {title}
    </div>

  );
}

export default Sidebar;