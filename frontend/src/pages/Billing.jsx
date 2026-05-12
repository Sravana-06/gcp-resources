import MetricCard from "../components/MetricCard";

function Billing({ data }) {

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
          Cloud Billing
        </h1>

        <p className="text-slate-400 text-lg">
          Cost analytics and billing overview.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Current Cost"
          value={data.billing.estimated_cost}
        />

        <MetricCard
          title="Forecast Cost"
          value={data.billing.forecast_cost}
        />

        <MetricCard
          title="Budget Status"
          value={data.billing.budget_status}
        />

        <MetricCard
          title="Project"
          value={data.billing.project_id}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Billing Summary
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between">
            <span className="text-slate-400">
              Current Monthly Cost
            </span>

            <span>
              {data.billing.estimated_cost}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Forecast
            </span>

            <span>
              {data.billing.forecast_cost}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Budget Status
            </span>

            <span>
              {data.billing.budget_status}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Billing;