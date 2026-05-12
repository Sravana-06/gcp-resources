import MetricCard from "../components/MetricCard";
import CostChart from "../components/CostChart";

function Networks({ data }) {

  if (!data) {

    return (
      <p className="text-slate-400">
        Scan infrastructure first.
      </p>
    );
  }


  const networkData = [
    { month: "VPC", cost: 1 },
    { month: "Firewall", cost: 5 },
    { month: "Subnets", cost: 3 },
  ];


  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Networks
        </h1>

        <p className="text-slate-400 text-lg">
          Network topology, firewall rules, and VPC infrastructure.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Total Networks"
          value={data.summary.total_networks}
        />

        <MetricCard
          title="Firewall Rules"
          value="5"
        />

        <MetricCard
          title="External IPs"
          value="2"
        />

        <MetricCard
          title="Subnets"
          value="3"
        />

      </div>


      <div className="mb-10">

        <CostChart
          title="Network Distribution"
          data={networkData}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Network Resources
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-[#1e293b]">

              <th className="text-left py-4">
                Network Name
              </th>

              <th className="text-left py-4">
                Type
              </th>

              <th className="text-left py-4">
                Region
              </th>

            </tr>

          </thead>


          <tbody>

            <tr className="border-b border-[#0f172a]">

              <td className="py-5">
                default
              </td>

              <td className="py-5">
                VPC
              </td>

              <td className="py-5">
                global
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Networks;