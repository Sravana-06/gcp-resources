import MetricCard from "../components/MetricCard";

function Functions({ data }) {

  if (!data) {

    return (
      <p className="text-slate-400">
        Scan infrastructure first.
      </p>
    );
  }


  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Cloud Functions
        </h1>

        <p className="text-slate-400 text-lg">
          Serverless function monitoring and analytics.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Total Functions"
          value={data.functions.length}
        />

        <MetricCard
          title="Active Functions"
          value={data.functions.length}
        />

        <MetricCard
          title="Estimated Cost"
          value={`$${data.functions.length * 5}`}
        />

        <MetricCard
          title="Regions"
          value={data.functions.length}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Functions
        </h2>


        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-[#1e293b]">

              <th className="text-left py-4">
                Function Name
              </th>

              <th className="text-left py-4">
                Runtime
              </th>

              <th className="text-left py-4">
                Memory
              </th>

              <th className="text-left py-4">
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {data.functions.map((fn, index) => (

              <tr
                key={index}
                className="border-b border-[#0f172a]"
              >

                <td className="py-5">
                  {fn.name}
                </td>

                <td className="py-5">
                  {fn.runtime}
                </td>

                <td className="py-5">
                  {fn.memory}
                </td>

                <td className="py-5">

                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {fn.status}
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

export default Functions;