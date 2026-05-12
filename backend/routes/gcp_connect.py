from fastapi import APIRouter, UploadFile, File

import json
import os
from datetime import datetime

from scanner.master_scanner import full_gcp_scan
from scanner.cloudsql_scanner import scan_cloudsql
from scanner.functions_scanner import scan_functions
from scanner.billing_scanner import scan_billing
from scanner.monitoring_scanner import scan_monitoring

router = APIRouter()


@router.post("/connect-gcp")
async def connect_gcp(file: UploadFile = File(...)):

    content = await file.read()

    os.makedirs("temp", exist_ok=True)

    file_path = f"temp/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(content)

    credentials_json = json.loads(content)

    project_id = credentials_json.get("project_id")

    service_account = credentials_json.get("client_email")

    project_number = credentials_json.get("client_id")

    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = file_path


    # MASTER SCAN

    scan_results = full_gcp_scan(project_id)


    # CLOUD SQL

    cloudsql = scan_cloudsql(file_path)


    # CLOUD FUNCTIONS

    functions = scan_functions(file_path)


    # CLOUD BILLING

    billing = scan_billing(file_path)


    # CLOUD MONITORING

    monitoring = scan_monitoring()


    # ADD SERVICES

    scan_results["cloudsql"] = cloudsql
    scan_results["functions"] = functions
    scan_results["billing"] = billing
    scan_results["monitoring"] = monitoring


    # CONNECTION DETAILS

    scan_results["project_id"] = project_id

    scan_results["project_number"] = project_number

    scan_results["service_account"] = service_account

    scan_results["connected"] = True

    scan_results["connected_time"] = datetime.now().strftime("%d/%m/%Y %I:%M %p")

    scan_results["environment"] = "Production"

    scan_results["region"] = "asia-south1"

    scan_results["access_level"] = "Read Only"


    return scan_results