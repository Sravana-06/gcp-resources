function MetricCard({ title, value, icon }) {

  return (

    <div className="bg-[#0B1225] border border-[#1E293B] rounded-2xl p-5 hover:border-[#312E81] transition-all duration-300">

      {/* ICON */}

      <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1E293B] flex items-center justify-center mb-5 text-blue-400">

        {icon || "◉"}

      </div>


      {/* TITLE */}

      <p className="text-sm text-slate-400 mb-2">
        {title}
      </p>


      {/* VALUE */}

      <h1 className="text-4xl font-bold text-white">
        {value}
      </h1>

    </div>

  );
}

export default MetricCard;