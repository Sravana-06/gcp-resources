function ResourceTable({ compute }) {

  return (

    <div className="bg-[#081028] border border-[#1e293b] rounded-3xl p-8 mt-10">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Compute Engine Instances
        </h2>

        <p className="text-slate-400">
          {compute.length} Resources
        </p>

      </div>

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
              Status
            </th>

            <th className="text-left py-4">
              Zone
            </th>

          </tr>

        </thead>

        <tbody>

          {compute.map((vm, index) => (

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

                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {vm.status}
                </span>

              </td>

              <td className="py-5">
                {vm.zone}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ResourceTable;