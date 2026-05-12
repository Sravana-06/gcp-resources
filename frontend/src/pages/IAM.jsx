import MetricCard from "../components/MetricCard";
import CostChart from "../components/CostChart";

function IAM({ data }) {

  if (!data) {

    return (
      <p className="text-slate-400">
        Scan infrastructure first.
      </p>
    );
  }


  const iamData = [
    { month: "Admins", cost: 2 },
    { month: "Editors", cost: 5 },
    { month: "Viewers", cost: 8 },
  ];


  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          IAM Management
        </h1>

        <p className="text-slate-400 text-lg">
          Identity access monitoring, permissions, and role analysis.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="IAM Members"
          value={data.summary.total_iam_members}
        />

        <MetricCard
          title="Admin Accounts"
          value="2"
        />

        <MetricCard
          title="Risky Roles"
          value="1"
        />

        <MetricCard
          title="Service Accounts"
          value="3"
        />

      </div>


      <div className="mb-10">

        <CostChart
          title="IAM Role Distribution"
          data={iamData}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          IAM Members
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-slate-400 border-b border-[#1e293b]">

              <th className="text-left py-4">
                Member
              </th>

              <th className="text-left py-4">
                Role
              </th>

              <th className="text-left py-4">
                Risk Level
              </th>

            </tr>

          </thead>


          <tbody>

            <tr className="border-b border-[#0f172a]">

              <td className="py-5">
                admin@example.com
              </td>

              <td className="py-5">
                Owner
              </td>

              <td className="py-5">

                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                  High
                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default IAM;