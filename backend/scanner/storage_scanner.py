from google.cloud import storage


def scan_storage_buckets(project_id):

    client = storage.Client(project=project_id)

    buckets = client.list_buckets()

    bucket_list = []

    for bucket in buckets:

        bucket_list.append({
            "name": bucket.name,
            "location": bucket.location,
            "storage_class": bucket.storage_class
        })

    return bucket_list