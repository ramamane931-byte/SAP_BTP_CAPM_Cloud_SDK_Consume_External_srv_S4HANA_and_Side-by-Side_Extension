# SAP_BTP_CAPM_Cloud_SDK_Consume_External_srv_S4HANA_and_Side-by-Side_Extension
## SAP BTP – Consume External service from S/4HANA System and Side-by-Side Extension in CAPM


#### Design and Develop an SAP BTP CAPM application to consume Sales Order Data from my company’s S/4HANA op-premise system. This is a Side-By-Side Extension in CAPM on SAP BTP. 

<img width="1122" height="308" alt="image" src="https://github.com/user-attachments/assets/6eeb385a-4ae6-4151-9200-180f85e6365f" />

##
### Use Case:

Design and develop a clean-core side-by-side extension on SAP BTP to consume Sales Order data from our company SAP S/4HANA system. The solution will use the standard Sales Order A2X API available through SAP Business Accelerator Hub to securely read and create sales orders in the S/4HANA system.

Using SAP CAPM, we will build an extension application on SAP BTP that consumes the S/4HANA API without modifying the S/4HANA core system. The CAP application will be built, deployed, and exposed on SAP BTP as an independent cloud application.

### Pre-requisites:
SAP S/4HANA System – An SAP S/4HANA on-premise/private-cloud system containing the Sales Order business data.
SAP Business Accelerator Hub – Access to the standard Sales Order A2X API and its API documentation.
SAP BTP Account – A BTP subaccount with the required services and entitlements.
SAP CAPM Development Environment – BAS/VS Code with the SAP Cloud Application Programming Model.
S/4HANA API Registration – The Sales Order API must be activated/registered and accessible from the BTP application.
Connectivity – Configure the required BTP Destination/Connectivity setup to communicate securely with S/4HANA.
Authentication & Authorization – Configure the appropriate authentication mechanism, such as OAuth, for secure API consumption.
CAP Application – Develop a CAP service that consumes the external S/4HANA Sales Order API.
Deployment – Build and deploy the CAP application to SAP BTP Cloud Foundry.
Clean Core / Side-by-Side Extension – Keep the custom functionality outside the S/4HANA core while using standard S/4HANA APIs.
Business Scenario

For example, a company wants to build a custom Sales Order Management application on SAP BTP. Users access the BTP application, while the actual Sales Order data remains in the company's S/4HANA system.

BTP CAP Application → Destination → S/4HANA Sales Order A2X API → S/4HANA

This is a side-by-side extension because the custom application and business logic run independently on SAP BTP, while S/4HANA remains the system of record and is extended through released APIs rather than by modifying the S/4HANA core.

#### Simple architecture:

User → CAP Application on BTP → Destination → Sales Order A2X API → S/4HANA

So yes, GET + POST is enough for the use case you are describing. You don't need to mention update, delete, workflow, eventing, or other functionality if you didn't actually implement them.

And yes, this qualifies as a side-by-side extension because your custom CAP application runs separately on SAP BTP and interacts with S/4HANA through the released API.







