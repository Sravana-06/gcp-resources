from googleapiclient.discovery import build
from google.oauth2 import service_account


def scan_cloudsql(credentials_path):

    try:

        credentials = service_account.Credentials.from_service_account_file(
            credentials_path
        )

        project_id = credentials.project_id

        service = build(
            "sqladmin",
            "v1beta4",
            credentials=credentials
        )

        response = service.instances().list(
            project=project_id
        ).execute()

        instances = response.get("items", [])

        cloudsql_data = []

        for db in instances:

            cloudsql_data.append({
                "name": db.get("name"),
                "engine": db.get("databaseVersion"),
                "region": db.get("region"),
                "status": db.get("state"),
                "tier": db.get("settings", {}).get("tier"),
            })

        return cloudsql_data

    except Exception as e:

        print("Cloud SQL Error:", e)

        return []