from googleapiclient.discovery import build
from google.oauth2 import service_account


def scan_functions(credentials_path):

    try:

        credentials = service_account.Credentials.from_service_account_file(
            credentials_path
        )

        project_id = credentials.project_id

        service = build(
            "cloudfunctions",
            "v1",
            credentials=credentials
        )

        parent = f"projects/{project_id}/locations/-"

        response = service.projects().locations().functions().list(
            parent=parent
        ).execute()

        functions = response.get("functions", [])

        function_data = []

        for fn in functions:

            function_data.append({
                "name": fn.get("name", "-").split("/")[-1],
                "runtime": fn.get("runtime", "-"),
                "status": fn.get("status", "ACTIVE"),
                "memory": fn.get("availableMemoryMb", "-"),
            })

        return function_data

    except Exception as e:

        print("Cloud Functions Error:", e)

        return []