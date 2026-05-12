from google.cloud import compute_v1


def scan_compute_instances(project_id):

    instances = []

    client = compute_v1.InstancesClient()

    request = compute_v1.AggregatedListInstancesRequest(
        project=project_id
    )

    aggregated_list = client.aggregated_list(
        request=request
    )

    for zone, response in aggregated_list:

        if response.instances:

            for instance in response.instances:

                instances.append({
                    "name": instance.name,
                    "machine_type": instance.machine_type.split("/")[-1],
                    "status": instance.status,
                    "zone": zone
                })

    return instances