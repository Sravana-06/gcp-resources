import MetricCard from "../components/MetricCard";
import CostChart from "../components/CostChart";

function Storage({ data }) {

  if (!data) {

    return (
      <p className="text-slate-400">
        Scan infrastructure first.
      </p>
    );
  }


  const chartData = data.storage.map((bucket, index) => ({
    month: `Bucket-${index + 1}`,
    cost: bucket.cost || 5,
  }));


  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Cloud Storage
        </h1>

        <p className="text-slate-400 text-lg">
          Bucket analytics, storage utilization, and cost monitoring.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Total Buckets"
          value={data.summary.total_buckets}
        />

        <MetricCard
          title="Estimated Cost"
          value={`$${data.storage.length * 5}`}
        />

        <MetricCard
          title="Public Buckets"
          value="0"
        />

        <MetricCard
          title="Storage Regions"
          value={data.storage.length}
        />

      </div>


      <div className="mb-10">

        <CostChart
          title="Storage Cost Trend"
          data={chartData}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Cloud Storage Buckets
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-[#1e293b]">

              <th className="text-left py-4">
                Bucket Name
              </th>

              <th className="text-left py-4">
                Location
              </th>

              <th className="text-left py-4">
                Storage Class
              </th>

            </tr>

          </thead>


          <tbody>

            {data.storage.map((bucket, index) => (

              <tr
                key={index}
                className="border-b border-[#0f172a]"
              >

                <td className="py-5">
                  {bucket.name}
                </td>

                <td className="py-5">
                  {bucket.location}
                </td>

                <td className="py-5">
                  {bucket.storage_class}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Storage;