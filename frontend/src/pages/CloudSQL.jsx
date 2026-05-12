import MetricCard from "../components/MetricCard";
import CostChart from "../components/CostChart";

function CloudSQL({ data }) {

  if (!data) {

    return (
      <p className="text-slate-400">
        Scan infrastructure first.
      </p>
    );
  }


  const chartData = data.cloudsql.map((db, index) => ({
    month: `DB-${index + 1}`,
    cost: index * 10 + 20,
  }));


  return (

    <div>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Cloud SQL
        </h1>

        <p className="text-slate-400 text-lg">
          Database infrastructure monitoring and analytics.
        </p>

      </div>


      {/* METRIC CARDS */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Total Databases"
          value={data.cloudsql.length}
        />

        <MetricCard
          title="Running Instances"
          value={
            data.cloudsql.filter(
              (db) => db.status === "RUNNABLE"
            ).length
          }
        />

        <MetricCard
          title="Regions"
          value={data.cloudsql.length}
        />

        <MetricCard
          title="Estimated Cost"
          value={`$${data.cloudsql.length * 25}`}
        />

      </div>


      {/* COST GRAPH */}

      <div className="mb-10">

        <CostChart
          title="Cloud SQL Cost Trend"
          data={chartData}
        />

      </div>


      {/* DATABASE TABLE */}

      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Database Instances
        </h2>


        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-[#1e293b]">

              <th className="text-left py-4">
                Database Name
              </th>

              <th className="text-left py-4">
                Engine
              </th>

              <th className="text-left py-4">
                Region
              </th>

              <th className="text-left py-4">
                Tier
              </th>

              <th className="text-left py-4">
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {data.cloudsql.map((db, index) => (

              <tr
                key={index}
                className="border-b border-[#0f172a]"
              >

                <td className="py-5">
                  {db.name}
                </td>

                <td className="py-5">
                  {db.engine}
                </td>

                <td className="py-5">
                  {db.region}
                </td>

                <td className="py-5">
                  {db.tier}
                </td>

                <td className="py-5">

                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {db.status}
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

export default CloudSQL;