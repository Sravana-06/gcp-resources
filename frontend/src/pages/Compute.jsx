import MetricCard from "../components/MetricCard";
import CostChart from "../components/CostChart";

function Compute({ data }) {

  if (!data) {

    return (
      <p className="text-slate-400">
        Scan infrastructure first.
      </p>
    );
  }


  const chartData = data.compute.map((vm, index) => ({
    month: `VM-${index + 1}`,
    cost: vm.cost || 10,
  }));


  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Compute Engine
        </h1>

        <p className="text-slate-400 text-lg">
          VM infrastructure, costs, utilization, and operations.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Total VMs"
          value={data.summary.total_vms}
        />

        <MetricCard
          title="Running Instances"
          value={
            data.compute.filter(
              (vm) => vm.status === "RUNNING"
            ).length
          }
        />

        <MetricCard
          title="Estimated Cost"
          value={`$${data.compute.length * 12}`}
        />

        <MetricCard
          title="Predicted Cost"
          value={`$${data.compute.length * 15}`}
        />

      </div>


      <div className="mb-10">

        <CostChart
          title="Compute Cost Trend"
          data={chartData}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          VM Instances
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-[#1e293b]">

              <th className="text-left py-4">
                VM Name
              </th>

              <th className="text-left py-4">
                Machine Type
              </th>

              <th className="text-left py-4">
                Zone
              </th>

              <th className="text-left py-4">
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {data.compute.map((vm, index) => (

              <tr
                key={index}
                className="border-b border-[#0f172a]"
              >

                <td className="py-5">
                  {vm.name}
                </td>

                <td className="py-5">
                  {vm.machine_type}
                </td>

                <td className="py-5">
                  {vm.zone}
                </td>

                <td className="py-5">

                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {vm.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Compute;