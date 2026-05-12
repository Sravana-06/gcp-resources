from scanner.compute_scanner import scan_compute_instances
from scanner.storage_scanner import scan_storage_buckets
from scanner.network_scanner import scan_networks
from scanner.iam_scanner import scan_iam_roles


def full_gcp_scan(project_id):

    compute_data = scan_compute_instances(project_id)

    storage_data = scan_storage_buckets(project_id)

    network_data = scan_networks(project_id)

    iam_data = scan_iam_roles(project_id)

    summary = {
        "total_vms": len(compute_data),
        "total_buckets": len(storage_data),
        "total_networks": len(network_data),
        "total_iam_members": len(iam_data)
    }

    return {
        "project_id": project_id,
        "compute": compute_data,
        "storage": storage_data,
        "network": network_data,
        "iam": iam_data,
        "summary": summary
    }