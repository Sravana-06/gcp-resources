import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function CostChart({ title, data }) {

  return (

    <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid stroke="#1e293b" />

            <XAxis dataKey="month" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="cost"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default CostChart;