function Navbar() {

  return (

    <div className="h-[72px] border-b border-[#111827] bg-[#060B1A] px-8 flex items-center justify-between">

      {/* SEARCH */}

      <div className="flex items-center gap-4">

        <div className="relative">

          <input
            type="text"
            placeholder="Search resources, costs, alerts..."
            className="w-[360px] bg-[#0B1225] border border-[#1E293B] rounded-xl pl-5 pr-5 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#4338CA]"
          />

        </div>

      </div>


      {/* RIGHT SECTION */}

      <div className="flex items-center gap-5">

        <div className="flex items-center gap-3 text-sm">

          <span className="text-green-400 font-semibold">
            GCP
          </span>

          <span className="text-slate-600">
            |
          </span>

          <span className="text-slate-300">
            Console Sensei
          </span>

        </div>


        {/* ENVIRONMENT */}

        <div className="bg-[#0B1225] border border-[#1E293B] px-4 py-2 rounded-xl text-xs text-slate-300">
          Production
        </div>


        {/* STATUS */}

        <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-xs font-medium">
          Connected
        </div>


        {/* REGION */}

        <div className="text-sm text-slate-400">
          asia-south1
        </div>


        {/* PROFILE */}

        <div className="w-10 h-10 rounded-full bg-[#0B1225] border border-[#1E293B] flex items-center justify-center text-sm font-semibold text-white">
          G
        </div>

      </div>

    </div>
  );
}

export default Navbar;