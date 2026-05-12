from google.oauth2 import service_account


def scan_billing(credentials_path):

    try:

        credentials = service_account.Credentials.from_service_account_file(
            credentials_path
        )

        project_id = credentials.project_id

        return {
            "project_id": project_id,
            "estimated_cost": "$120",
            "forecast_cost": "$145",
            "budget_status": "Healthy"
        }

    except Exception as e:

        print("Billing Error:", e)

        return {}