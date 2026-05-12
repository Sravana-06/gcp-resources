import MetricCard from "../components/MetricCard";

function Dashboard({
  cloudData,
  file,
  setFile,
  handleUpload,
  loading,
}) {

  return (

    <div className="text-white">

      {/* TOP HEADER */}

      <div className="mb-8">

        <div className="flex items-center gap-3 mb-3">

          <span className="bg-[#111827] border border-[#1E293B] px-4 py-1 rounded-full text-xs text-slate-300">
            GCP Operations
          </span>

          <span className="bg-[#111827] border border-[#1E293B] px-4 py-1 rounded-full text-xs text-slate-300">
            Real-Time Infrastructure Intelligence
          </span>

        </div>


        <h1 className="text-5xl font-bold mb-3">
          Operations Dashboard
        </h1>

        <p className="text-slate-400 text-lg">
          Unified visibility into your Google Cloud infrastructure and operational analytics.
        </p>

      </div>


      {/* BEFORE SCAN */}

      {!cloudData && (

        <div className="space-y-8">

          {/* CONNECTION PANEL */}

          <div className="bg-[#0B1225] border border-[#1E293B] rounded-3xl p-8">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500 uppercase tracking-[4px] mb-3">
                  GCP CONNECTION
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  Connect Infrastructure
                </h2>

                <p className="text-slate-400 max-w-3xl leading-7">
                  Upload your Google Cloud service account JSON credentials to begin infrastructure discovery, cost analytics, IAM analysis, monitoring visibility, and operational intelligence scanning.
                </p>

              </div>

            </div>


            {/* UPLOAD */}

            <div className="flex items-center gap-5 mt-8">

              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="bg-[#111827] border border-[#1E293B] rounded-xl p-3 text-sm text-slate-300"
              />

              <button
                onClick={handleUpload}
                className="bg-[#4338CA] hover:bg-[#4F46E5] px-7 py-3 rounded-xl font-semibold transition-all"
              >
                {loading ? "Scanning..." : "Start Infrastructure Scan"}
              </button>

            </div>

          </div>


          {/* STEPS */}

          <div className="grid grid-cols-3 gap-6">

            <FlowCard
              step="1"
              title="Create Service Account"
              description="Navigate to IAM & Admin in Google Cloud Console and create a new service account."
            />

            <FlowCard
              step="2"
              title="Generate JSON Key"
              description="Create and download JSON credentials securely from service account keys section."
            />

            <FlowCard
              step="3"
              title="Upload & Analyze"
              description="Upload credentials to scan compute, storage, IAM, networking, monitoring, and billing."
            />

          </div>


          {/* SERVICES */}

          <div className="grid grid-cols-4 gap-6">

            <FeatureCard
              title="Compute Engine"
              description="Virtual machines, runtime analytics, regions, and machine intelligence."
            />

            <FeatureCard
              title="Cloud Storage"
              description="Bucket visibility, classes, regions, and storage analytics."
            />

            <FeatureCard
              title="Cloud Functions"
              description="Serverless execution visibility and runtime analytics."
            />

            <FeatureCard
              title="Cloud Monitoring"
              description="Infrastructure health, alerts, observability, and operational visibility."
            />

          </div>

        </div>

      )}


      {/* AFTER SCAN */}

      {cloudData && (

        <div>

          {/* METRICS */}

          <div className="grid grid-cols-4 gap-6 mb-8">

            <MetricCard
              title="Monthly Cost"
              value="$120"
              icon="◉"
            />

            <MetricCard
              title="Compute Instances"
              value={cloudData.summary.total_vms}
              icon="◉"
            />

            <MetricCard
              title="Storage Buckets"
              value={cloudData.summary.total_buckets}
              icon="◉"
            />

            <MetricCard
              title="IAM Members"
              value={cloudData.summary.total_iam_members}
              icon="◉"
            />

            <MetricCard
              title="Networks"
              value={cloudData.summary.total_networks}
              icon="◉"
            />

            <MetricCard
              title="Cloud SQL"
              value={cloudData.cloudsql?.length || 0}
              icon="◉"
            />

            <MetricCard
              title="Functions"
              value={cloudData.functions?.length || 0}
              icon="◉"
            />

            <MetricCard
              title="Monitoring Alerts"
              value={cloudData.monitoring?.alerts || 0}
              icon="◉"
            />

          </div>


          {/* INFRA STATUS */}

          <div className="grid grid-cols-3 gap-6">

            {/* MAIN PANEL */}

            <div className="col-span-2 bg-[#0B1225] border border-[#1E293B] rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-3xl font-bold mb-2">
                    Infrastructure Scan Completed
                  </h2>

                  <p className="text-slate-400">
                    Google Cloud infrastructure successfully analyzed.
                  </p>

                </div>

                <div className="bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-xl text-sm">
                  Connected
                </div>

              </div>


              <div className="grid grid-cols-3 gap-5">

                <InfoBox
                  title="Project Status"
                  value="Healthy"
                />

                <InfoBox
                  title="Environment"
                  value="Production"
                />

                <InfoBox
                  title="Active Regions"
                  value="3"
                />

              </div>

            </div>


            {/* SECURITY */}

            <div className="bg-[#0B1225] border border-[#1E293B] rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-3">
                Security Findings
              </h2>

              <p className="text-slate-400 mb-8">
                Infrastructure security overview and IAM visibility.
              </p>


              <div className="flex items-center justify-center h-[180px]">

                <div className="w-40 h-40 rounded-full border-[14px] border-[#312E81] flex items-center justify-center">

                  <div className="text-center">

                    <h1 className="text-4xl font-bold">
                      0
                    </h1>

                    <p className="text-slate-400 text-sm mt-2">
                      Critical Risks
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}


function FlowCard({ step, title, description }) {

  return (

    <div className="bg-[#0B1225] border border-[#1E293B] rounded-2xl p-6">

      <div className="w-11 h-11 rounded-xl bg-[#4338CA] flex items-center justify-center font-bold mb-5">
        {step}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 leading-7 text-sm">
        {description}
      </p>

    </div>

  );
}


function FeatureCard({ title, description }) {

  return (

    <div className="bg-[#0B1225] border border-[#1E293B] rounded-2xl p-6">

      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="text-sm text-slate-400 leading-6">
        {description}
      </p>

    </div>

  );
}


function InfoBox({ title, value }) {

  return (

    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5">

      <p className="text-sm text-slate-500 mb-2">
        {title}
      </p>

      <h2 className="text-2xl font-bold">
        {value}
      </h2>

    </div>

  );
}

export default Dashboard;