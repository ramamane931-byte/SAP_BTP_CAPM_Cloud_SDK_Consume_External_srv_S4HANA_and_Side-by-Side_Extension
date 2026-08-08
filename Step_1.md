## Standard API - Sales Order (A2X) service maintain in the S/4HANA on-premise system then build and deploy on Cloud 
## and complete S/4 HANA end to end, side-by-side extension CAPM application:


[SAP Business Accelerator Hub - Sales Order (A2X)](https://hub.sap.com/api/OP_API_SALES_ORDER_SRV_0001/overview)

<img width="920" height="692" alt="image" src="https://github.com/user-attachments/assets/2b8b4736-3005-4d8c-8763-63b714cf98f0" />

<img width="1052" height="534" alt="image" src="https://github.com/user-attachments/assets/021ac85f-9855-496f-a86b-e793a4836ee2" />

<img width="1025" height="536" alt="image" src="https://github.com/user-attachments/assets/07ad18d0-d46e-4c88-8467-d616ed59cdf5" />

<img width="882" height="509" alt="image" src="https://github.com/user-attachments/assets/92514d35-6aaf-443c-be22-f1024755a70c" />

###
###
#### TCode: /IWFND/MAINT_SERVICE
###

<img width="1122" height="548" alt="image" src="https://github.com/user-attachments/assets/48bec04e-644d-4960-a55b-51ba6f6ca7f7" />

<img width="1122" height="204" alt="image" src="https://github.com/user-attachments/assets/51cc4a0d-efa2-4b5d-898e-cf8cc86dc6b4" />

<img width="1122" height="536" alt="image" src="https://github.com/user-attachments/assets/7c2efab8-3e0b-45c9-8041-90b2da91d15a" />

<img width="1122" height="502" alt="image" src="https://github.com/user-attachments/assets/a83f4aea-8a56-4e82-9bee-d568ce5bd12c" />

###
###
#### Enter login credentials: S/4HANA SAP GUI backend credentials
###

<img width="1122" height="403" alt="image" src="https://github.com/user-attachments/assets/4a646016-3bea-441e-bf02-bddba710ed05" />

<img width="1122" height="608" alt="image" src="https://github.com/user-attachments/assets/e11ff6db-643a-4300-8bc7-73d28397ceba" />

<img width="1122" height="527" alt="image" src="https://github.com/user-attachments/assets/8b26aa00-3ec5-4306-8793-ff39ae1ff6df" />

###
###
#### TCode: VA02
###

<img width="1122" height="713" alt="image" src="https://github.com/user-attachments/assets/af095d72-4bf9-4b72-9e9c-0aabde075003" />

<img width="1122" height="524" alt="image" src="https://github.com/user-attachments/assets/f35ffffe-8590-4063-bfc9-121f637c1c03" />

###
###
#### Validate the Sales order data in the gateway client:
#### GET Sales Order Data:

<img width="1122" height="494" alt="image" src="https://github.com/user-attachments/assets/edbc475e-a00e-4630-8ba3-80d38df26332" />

###
###
#### POST Sales Order Data:
#### HTTP Request:
###
{
    "SalesOrderType": "OR1",
    "SalesOrganization": "2040",
    "DistributionChannel": "L1",
    "OrganizationDivision": "L1",
    "SalesDistrict": "000001",
    "SoldToParty": "CUST01",
    "SalesOrderDate": "\/Date(1780963200000)\/",
    "to_Item": {
        "results": [
            {
                "SalesOrderItem": "10",
                "Material": "100000059",
                "RequestedQuantity": "5",
                "RequestedQuantityUnit": "EA"
            }
        ]
    }
}
###
<img width="1122" height="555" alt="image" src="https://github.com/user-attachments/assets/7d5381ee-6eb0-4d41-9c47-bb67a298d0d1" />

###
###
#### New Sales Order created:
###
<img width="1122" height="521" alt="image" src="https://github.com/user-attachments/assets/b414dd94-a210-4b21-bc12-5efa8a2ecf25" />

###
###
Now, working on POSTMAN, trying to achieve the same result of GET and POST HTTP method through POSTMAN App:
Postman Cloud Agent — the request is sent from Postman's own servers on the internet, not from your local machine
Postman Desktop Agent — the request is sent from your own computer
By default, the browser version of Postman uses the Cloud Agent. This error means: Postman's cloud servers tried to resolve the hostname nr-s4hana2023.narasimhaclouds.com, and couldn't find it on the public internet at all — this happens before authentication is even checked, which is exactly why your credentials being correct doesn't matter here.
Hence, switch to Desktop Agent from default Cloud Agent:


<img width="1122" height="518" alt="image" src="https://github.com/user-attachments/assets/23d3fdb2-a609-4021-a4d5-34524661f5a4" />

###
###
Download a POSTMAN App and install:
###
<img width="1122" height="293" alt="image" src="https://github.com/user-attachments/assets/3b1c374d-01ce-4983-bd76-96f8d3fc9909" />

###
###
Its working:
GET Sales Order Data:
Manually enter the below keys and respective value in the Headers tab:
Key = X-CRSF-Token, Value = Fetch
Key = X-Requested-With, Value = XMLHttpRequest

<img width="1122" height="223" alt="image" src="https://github.com/user-attachments/assets/566f95ac-f867-4c05-af8a-dd91f51a2747" />

<img width="1122" height="533" alt="image" src="https://github.com/user-attachments/assets/eca3f894-54d1-4a6b-a6ff-d16512d4ee18" />

###
###
POST Sales Order Data:
Similarly, need to enter Authorization and Header Tab and then execute the POST method:

<img width="1122" height="218" alt="image" src="https://github.com/user-attachments/assets/c6eea147-4c54-4e34-9881-e41c4dff7d5b" />

<img width="1122" height="346" alt="image" src="https://github.com/user-attachments/assets/1a47c64f-ca76-4785-985f-0da8b672788a" />

<img width="1122" height="477" alt="image" src="https://github.com/user-attachments/assets/17abca89-03f0-475e-b6a6-116075480f9b" />

###
###
TCode: SMICM // SMICM = ICM (Internet Communication Manager) Monitor

<img width="1122" height="591" alt="image" src="https://github.com/user-attachments/assets/042125b5-481e-49e6-b0fa-d80e4bf1dc4b" />

<img width="1122" height="266" alt="image" src="https://github.com/user-attachments/assets/59336acd-a263-49d7-98df-81e2aeeca725" />

###
###
Then did an SAP CLOUD CONNECTOR SETUP. And added a subaccount in the SCC and connected to the SAP BTP Account. So that S4HANA backend on-premise server and SAP BTP on Cloud get connected through SCC.

<img width="1122" height="279" alt="image" src="https://github.com/user-attachments/assets/562c6d3c-530d-4f7e-8e1b-36dfc6d95c26" />

###
###
SAP BAS:

<img width="1122" height="506" alt="image" src="https://github.com/user-attachments/assets/040166fb-cf8c-40a5-9ef7-9fd1d3e22261" />

<img width="1122" height="362" alt="image" src="https://github.com/user-attachments/assets/27ac2044-36ea-488f-9295-e4d5bde8343c" />

<img width="1122" height="538" alt="image" src="https://github.com/user-attachments/assets/bf3de534-567a-4c51-a900-3065c3cba547" />

<img width="1122" height="484" alt="image" src="https://github.com/user-attachments/assets/221d6113-73be-4292-9b5b-66210750e935" />

<img width="1122" height="839" alt="image" src="https://github.com/user-attachments/assets/f96efccb-55f5-4dd3-96d8-8ce9d4729494" />

<img width="750" height="603" alt="image" src="https://github.com/user-attachments/assets/2ac09d70-dd73-4fb1-96b0-dd51f44142ad" />

<img width="1122" height="573" alt="image" src="https://github.com/user-attachments/assets/c8d0cc35-a131-4164-a4e7-c3b7b9fd0272" />

<img width="728" height="576" alt="image" src="https://github.com/user-attachments/assets/4a4be83e-a0a8-428b-852d-d3f1bd6313f6" />

<img width="457" height="301" alt="image" src="https://github.com/user-attachments/assets/87304c59-ed8f-45b0-a541-4bb0687a1c8f" />

<img width="1122" height="292" alt="image" src="https://github.com/user-attachments/assets/26f4809a-b9f0-48a6-ba00-2578e57db5a5" />

###
###
Execute the command: cds import srv/external/OP_API_SALES_ORDER_SRV_0001.edmx.
This will update the file package.json. Also created CDS Schema Annotation (.csn) file automatically named 
‘OP_API_SALES_ORDER_SRV_0001.csn’. This is CDS format of the structure.

<img width="1122" height="398" alt="image" src="https://github.com/user-attachments/assets/cd38e507-e7d8-4b43-b7e1-a731be85af21" />

<img width="1122" height="589" alt="image" src="https://github.com/user-attachments/assets/fd79b973-22a2-4540-8c7e-608b56c96e72" />


###
###
Download $metadata file:

<img width="1014" height="472" alt="image" src="https://github.com/user-attachments/assets/f752e9d4-0aec-4476-9c6a-698b0b6bfea9" />

###
###
[SAP Cloud SDK:](https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client)

<img width="1122" height="523" alt="image" src="https://github.com/user-attachments/assets/e3ca7879-ccaa-4457-9cbf-b04010d913ed" />

###
###
Use the command ‘npm install -D @sap-cloud-sdk/generator’.
This installs the SAP Cloud SDK's OData/API client generator as a development dependency in your Node.js project. Help to create boilerplate code.
Above command used to installs the SAP Cloud SDK's OData Client Generator as a dev dependency — a tool that automatically generates fully-typed JavaScript/TypeScript client code from an SAP OData service's metadata (.edmx file), so you can call that service from your Node.js/CAP app without hand-writing HTTP requests or manually parsing responses.

<img width="1122" height="630" alt="image" src="https://github.com/user-attachments/assets/2620ff00-e10e-41c9-b4ce-fd12942254f7" />

<img width="1122" height="681" alt="image" src="https://github.com/user-attachments/assets/0fb4fb23-cb60-48d2-aa48-4c92fefd9610" />

###
###
Use command: npm install @sap-cloud-sdk/odata-v2 installs the runtime library that powers OData V2 communication in the SAP Cloud SDK. 
And similarly, power OData V4: npm install @sap-cloud-sdk/odata-v4

<img width="1122" height="577" alt="image" src="https://github.com/user-attachments/assets/ebfb72a3-cc27-43f9-a536-71b68e946467" />

<img width="1035" height="791" alt="image" src="https://github.com/user-attachments/assets/c80e69ad-8985-49c2-947c-4459258acd7c" />

<img width="1122" height="533" alt="image" src="https://github.com/user-attachments/assets/3756e152-f4bc-4caa-a1ad-0618cfd1f282" />


###
###
CLI: 
npx generate-odata-client --input path/to/your/service-specifications --outputDir path/to/store/generated/modules
replace: path/to/your/service-specifications with srv/external
replace: path/to/store/generated/modules with srv/src/generated
And hence, we are using a JAVAScript; therefore, additional keyword --transpile
Command ready to use: 
npx generate-odata-client --transpile --input srv/external --outputDir srv/src/generated
Generation of services finished successfully. Like the below screenshot:

<img width="1122" height="426" alt="image" src="https://github.com/user-attachments/assets/9b6b679c-e36f-42fc-b2e4-f7fdd6a11f7a" />

<img width="1122" height="534" alt="image" src="https://github.com/user-attachments/assets/f311f68c-260b-4d40-9ece-bfc1e0a85470" />

<img width="1122" height="341" alt="image" src="https://github.com/user-attachments/assets/482afb5d-2e57-4ae1-af28-34f0234e7aa0" />

<img width="1122" height="494" alt="image" src="https://github.com/user-attachments/assets/164755ac-a3db-432a-8473-3833378d2f1c" />

###
###
Created a new file CatalogService.cds in the srv folder and use command: cds watch

<img width="1122" height="527" alt="image" src="https://github.com/user-attachments/assets/bb69a178-f32e-491a-895e-a87243c37e2c" />

<img width="1122" height="490" alt="image" src="https://github.com/user-attachments/assets/5c9506b5-cac5-4e00-86d6-b7d92f1a8b30" />

<img width="1122" height="289" alt="image" src="https://github.com/user-attachments/assets/5412c400-7a1d-491b-be6f-4e336ddeff7e" />

###
###
Use command: cds add handler to create CatalogService.js file.

<img width="1122" height="519" alt="image" src="https://github.com/user-attachments/assets/b2afac4f-0bc3-4dd9-89a8-a48767b828dd" />

<img width="1122" height="615" alt="image" src="https://github.com/user-attachments/assets/c5d88574-51d6-4ed6-9e1a-0568635824ad" />

<img width="1122" height="422" alt="image" src="https://github.com/user-attachments/assets/19630a0a-d242-42a2-8bf8-9656665c87f2" />

<img width="879" height="125" alt="image" src="https://github.com/user-attachments/assets/2c30ceb0-8dbf-4d71-9a0f-4c929c627807" />

<img width="1122" height="706" alt="image" src="https://github.com/user-attachments/assets/26802088-2d1d-41cf-b074-80f8fa834ba1" />

<img width="873" height="235" alt="image" src="https://github.com/user-attachments/assets/195ccc7c-ab7e-4716-b9ff-184b64f2eae2" />

<img width="990" height="608" alt="image" src="https://github.com/user-attachments/assets/b5c4c5b5-4711-4ad9-a7c2-bfda8179d134" />

<img width="702" height="750" alt="image" src="https://github.com/user-attachments/assets/039576cf-8e54-4c34-bf52-703528bef5a7" />

<img width="975" height="895" alt="image" src="https://github.com/user-attachments/assets/70c751ab-f985-4ae3-af80-0f3938115b3a" />

###
###
Instead of making a credentials public, make it confidential by creating a ‘.env’ file under the main project folder:

<img width="1041" height="573" alt="image" src="https://github.com/user-attachments/assets/be05ed2c-c879-49b6-8509-f8ba61930beb" />

<img width="1122" height="329" alt="image" src="https://github.com/user-attachments/assets/18bf729e-6aa8-4a20-b1b0-a3bf3d2fa31b" />

###
###
And use like this in the CatalogService.js file:

<img width="1122" height="404" alt="image" src="https://github.com/user-attachments/assets/4538d8c7-886c-46db-a88e-d70309f59f3b" />

###
###
Use command: npm install dotenv
This command installs a small utility library that lets your Node.js application load environment variables from a .env file into process ‘.env’ file — instead of hardcoding sensitive values (URLs, usernames, passwords, API keys) directly in your source code.

<img width="1122" height="642" alt="image" src="https://github.com/user-attachments/assets/c3b209cc-22a3-4b34-aa32-2c022cf5e358" />

###
###
Added small line of code in the CatalogService.js file, Actually the statement inside the init() method:

<img width="989" height="849" alt="image" src="https://github.com/user-attachments/assets/b788c131-dac1-4f4b-a5f5-af3c6c450ba6" />

###
###
Also undated the file: .gitignore

<img width="1122" height="408" alt="image" src="https://github.com/user-attachments/assets/6df11f55-b807-4b7e-bb52-31b5028b6a6b" />

### 
###
Command: cds watch
Throwing the error: host name unable to reach.

<img width="1122" height="509" alt="image" src="https://github.com/user-attachments/assets/60c0f995-bd22-49c3-b53a-4691af1ad2b4" />

###
###
Command: node -e "require('dns').lookup('nr-s4hana2023.narasimhaclouds.com', console.log)"
is used to check whether Node.js can resolve a hostname (domain name) to an IP address.
Breakdown
•	node → Runs Node.js. 
•	-e → Executes the JavaScript code provided in quotes (without creating a .js file). 
•	require('dns') → Loads Node.js's built-in DNS module. 
•	lookup() → Performs a DNS lookup for the given hostname. 
•	console.log → Prints the result (IP address or error).

<img width="1122" height="496" alt="image" src="https://github.com/user-attachments/assets/3031824e-ee13-4669-bacb-13084587db45" />

###
###
After the hostname issue resolution. We get the data like this using command: cds watch

<img width="997" height="804" alt="image" src="https://github.com/user-attachments/assets/66258dc3-db28-4f2a-bd0d-b96199991fd7" />

###
###

#### This is how you real company Sales Order data is loaded in CAPM now.
#### This is the way you can load Material Data, Accounting Data, anything into you CAPM application.
###
###
#### Done.
###
###
###
###
#### Next chapter: Step_2
#### We will deploy this app to the cloud and out complete S/4 HANA end to end, side-by-side extension CAPM application.





























































