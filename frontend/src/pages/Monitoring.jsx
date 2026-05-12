import MetricCard from "../components/MetricCard";

function Monitoring({ data }) {

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
          Cloud Monitoring
        </h1>

        <p className="text-slate-400 text-lg">
          Infrastructure health monitoring and alerts.
        </p>

      </div>


      <div className="grid grid-cols-4 gap-6 mb-10">

        <MetricCard
          title="Alerts"
          value={data.monitoring.alerts}
        />

        <MetricCard
          title="Healthy Resources"
          value={data.monitoring.healthy_resources}
        />

        <MetricCard
          title="CPU Spikes"
          value={data.monitoring.cpu_spikes}
        />

        <MetricCard
          title="Downtime"
          value={data.monitoring.downtime}
        />

      </div>


      <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Monitoring Summary
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between">
            <span className="text-slate-400">
              Alerts
            </span>

            <span>
              {data.monitoring.alerts}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Healthy Resources
            </span>

            <span>
              {data.monitoring.healthy_resources}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              CPU Spikes
            </span>

            <span>
              {data.monitoring.cpu_spikes}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">
              Downtime
            </span>

            <span>
              {data.monitoring.downtime}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Monitoring;